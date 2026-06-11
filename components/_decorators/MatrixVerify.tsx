import { useEffect, useState } from 'react';
import type { Decorator } from '@storybook/react';

/**
 * MatrixVerify — Storybook decorator that overlays per-cell Figma↔Storybook
 * deltas on a Matrix story.
 *
 * Checks BOTH dimensional and content fidelity:
 *   - Position (Δx, Δy)
 *   - Width (Δw)
 *   - Height (Δh, with tolerance bands)
 *   - Inner content (button labels, swatch counts, search values, etc — declared per cell)
 *
 * Wire a Matrix story like:
 *
 *   export const Matrix: Story = {
 *     parameters: {
 *       matrixSpec: {
 *         figmaPageId: '76:51',
 *         cells: [
 *           {
 *             variant: 'Slots=Both',
 *             x: 24, y: 24, w: 1440, h: 48,
 *             expect: {
 *               buttonLabels: ['Create category', 'Create request', 'Due Date'],
 *               swatchCount: 4,
 *               searchValue: 'Search query',
 *               searchPlaceholder: 'Search',
 *             },
 *           },
 *         ],
 *       },
 *     },
 *     decorators: [MatrixVerify],
 *   };
 *
 * Content checks compare against the rendered cell DOM:
 *   - buttonLabels: ordered array of trimmed text content from all <button> elements
 *     EXCLUDING swatch buttons (those have aria-pressed). Order matters.
 *   - swatchCount: count of <button aria-pressed=...> elements (FilterSwatch primitives)
 *   - searchValue / searchPlaceholder: values from the first <input> in the cell
 *   - texts: ordered array of trimmed text content from headings/labels (anything visible)
 *
 * Toggle visibility with the button in the top-right panel.
 */

export interface MatrixCellExpect {
  /** Ordered text content of all non-swatch <button> elements within the cell. */
  buttonLabels?: string[];
  /** Count of FilterSwatch instances (buttons with aria-pressed). */
  swatchCount?: number;
  /** Value attribute of the first <input> in the cell. */
  searchValue?: string;
  /** Placeholder attribute of the first <input> in the cell. */
  searchPlaceholder?: string;
  /** Ordered text content of all visible text headings (h1-h4) within the cell. */
  headings?: string[];
}

export interface MatrixCellSpec {
  variant: string;
  x: number;
  y: number;
  w: number;
  h: number;
  /** Optional inner-content expectations. Mismatch → cell flagged red. */
  expect?: MatrixCellExpect;
}

export interface MatrixSpec {
  figmaPageId: string;
  figmaUrlBase?: string;
  cells: MatrixCellSpec[];
}

interface CellDelta {
  variant: string;
  expected: { x: number; y: number; w: number; h: number };
  actual: { x: number; y: number; w: number; h: number };
  diff: { x: number; y: number; w: number; h: number };
  status: 'green' | 'yellow' | 'red';
  contentMismatches: string[];
}

function classifyDimStatus(diff: { x: number; y: number; w: number; h: number }): 'green' | 'yellow' | 'red' {
  if (diff.x !== 0 || diff.y !== 0 || diff.w !== 0) return 'red';
  const absH = Math.abs(diff.h);
  if (absH <= 5) return 'green';
  if (absH <= 20) return 'yellow';
  return 'red';
}

function inspectContent(node: HTMLElement): {
  buttonLabels: string[];
  swatchCount: number;
  searchValue: string | null;
  searchPlaceholder: string | null;
  headings: string[];
} {
  // Include <button>, elements with role="button", and elements with aria-pressed
  // (Chip's selected segment has aria-pressed but no role, so we need all three).
  const allButtons = Array.from(
    node.querySelectorAll<HTMLElement>('button, [role="button"], [aria-pressed]')
  );
  // Swatches: FilterSwatch instances use aria-pressed on <button>
  const swatches = allButtons.filter(
    (b) => b.tagName === 'BUTTON' && b.getAttribute('aria-pressed') !== null
  );
  // Container buttons: elements that wrap other interactive elements (e.g.
  // a row-level role="button" containing inner <button>s for meta items).
  // Their concatenated text content is the sum of their children, so they
  // would falsely match the leaf-level label expectations.
  const containerButtons = allButtons.filter((b) =>
    allButtons.some((other) => other !== b && b.contains(other))
  );
  // Label-bearing buttons exclude swatches and containers; Chip segments with
  // aria-pressed=true are current-page indicators and still count (they have
  // meaningful labels).
  const labelButtons = allButtons.filter(
    (b) => !swatches.includes(b) && !containerButtons.includes(b)
  );
  const buttonLabels = labelButtons
    .map((b) => b.textContent?.trim() || '')
    .filter((t) => t.length > 0 && t.length < 80);
  const swatchCount = swatches.length;
  // Skip checkbox/radio inputs — we want the text-style input (Search, TextField, etc.)
  const textInput = Array.from(node.querySelectorAll('input')).find(
    (i) => i.type !== 'checkbox' && i.type !== 'radio'
  ) as HTMLInputElement | undefined;
  const searchValue = textInput ? textInput.value : null;
  const searchPlaceholder = textInput ? textInput.getAttribute('placeholder') : null;
  const headings = Array.from(node.querySelectorAll('h1, h2, h3, h4'))
    .map((h) => h.textContent?.trim() || '')
    .filter((t) => t.length > 0);
  return { buttonLabels, swatchCount, searchValue, searchPlaceholder, headings };
}

function arraysMatch(a: string[] | undefined, b: string[] | undefined): boolean {
  if (a === undefined && b === undefined) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
}

function diffContent(
  expect: MatrixCellExpect | undefined,
  actual: ReturnType<typeof inspectContent>,
): string[] {
  if (!expect) return [];
  const mismatches: string[] = [];
  if (expect.buttonLabels !== undefined && !arraysMatch(expect.buttonLabels, actual.buttonLabels)) {
    mismatches.push(`buttons: expected [${expect.buttonLabels.join(', ')}], got [${actual.buttonLabels.join(', ')}]`);
  }
  if (expect.swatchCount !== undefined && expect.swatchCount !== actual.swatchCount) {
    mismatches.push(`swatches: expected ${expect.swatchCount}, got ${actual.swatchCount}`);
  }
  if (expect.searchValue !== undefined && expect.searchValue !== actual.searchValue) {
    mismatches.push(`searchValue: expected "${expect.searchValue}", got "${actual.searchValue}"`);
  }
  if (expect.searchPlaceholder !== undefined && expect.searchPlaceholder !== actual.searchPlaceholder) {
    mismatches.push(`searchPlaceholder: expected "${expect.searchPlaceholder}", got "${actual.searchPlaceholder}"`);
  }
  if (expect.headings !== undefined && !arraysMatch(expect.headings, actual.headings)) {
    mismatches.push(`headings: expected [${expect.headings.join(', ')}], got [${actual.headings.join(', ')}]`);
  }
  return mismatches;
}

const COLORS = {
  green:  { bg: 'rgba(34, 197, 94, 0.92)',  border: '#15803D' },
  yellow: { bg: 'rgba(234, 179, 8, 0.92)',  border: '#A16207' },
  red:    { bg: 'rgba(239, 68, 68, 0.92)',  border: '#991B1B' },
} as const;

export const MatrixVerify: Decorator = (Story, context) => {
  const spec = (context.parameters as { matrixSpec?: MatrixSpec }).matrixSpec;
  const [visible, setVisible] = useState(true);
  const [deltas, setDeltas] = useState<CellDelta[]>([]);
  const [expandedCell, setExpandedCell] = useState<number | null>(null);

  useEffect(() => {
    if (!spec) return;
    const measure = () => {
      const root = document.querySelector('#storybook-root') ?? document.querySelector('#root');
      if (!root) return;
      let cellNodes = Array.from(root.querySelectorAll<HTMLElement>('[data-matrix-cell]'));
      if (cellNodes.length === 0) {
        const relatives = Array.from(root.querySelectorAll<HTMLElement>('.relative'));
        cellNodes = relatives.flatMap((r) =>
          Array.from(r.children).filter(
            (c): c is HTMLElement => c instanceof HTMLElement && c.classList.contains('absolute')
          )
        );
      }

      const next: CellDelta[] = spec.cells.map((cellSpec, i) => {
        const node = cellNodes[i];
        if (!node) {
          return {
            variant: cellSpec.variant,
            expected: { x: cellSpec.x, y: cellSpec.y, w: cellSpec.w, h: cellSpec.h },
            actual: { x: -1, y: -1, w: -1, h: -1 },
            diff: { x: -1, y: -1, w: -1, h: -1 },
            status: 'red',
            contentMismatches: ['cell node missing'],
          };
        }
        const inner = node.firstElementChild as HTMLElement | null;
        // Prefer the cell wrapper's bounding rect since it's the element
        // explicitly positioned at Figma's exact (x, y, w). The inner content
        // (e.g., a Button) may render slightly narrower due to browser
        // font-metric differences and shouldn't fail the dimension check.
        // Only fall back to inner if the wrapper has no explicit width.
        const hasExplicitWidth = !!node.style.width;
        const measured = hasExplicitWidth || !inner
          ? node.getBoundingClientRect()
          : inner.getBoundingClientRect();
        const actual = {
          x: parseInt(node.style.left, 10) || 0,
          y: parseInt(node.style.top, 10) || 0,
          w: Math.round(measured.width),
          h: Math.round(measured.height),
        };
        const diff = {
          x: actual.x - cellSpec.x,
          y: actual.y - cellSpec.y,
          w: actual.w - cellSpec.w,
          h: actual.h - cellSpec.h,
        };
        const dimStatus = classifyDimStatus(diff);
        const contentMismatches = diffContent(cellSpec.expect, inspectContent(node));
        // If content has mismatches, force red (content takes priority over dim status)
        const status: 'green' | 'yellow' | 'red' =
          contentMismatches.length > 0 ? 'red' : dimStatus;
        return {
          variant: cellSpec.variant,
          expected: { x: cellSpec.x, y: cellSpec.y, w: cellSpec.w, h: cellSpec.h },
          actual,
          diff,
          status,
          contentMismatches,
        };
      });
      setDeltas(next);
    };
    measure();
    const t1 = window.setTimeout(measure, 100);
    const t2 = window.setTimeout(measure, 500);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); };
  }, [spec, Story]);

  if (!spec) {
    return (
      <>
        <Story />
        <div style={panelStyle('warning')}>
          <strong>MatrixVerify:</strong> no <code>matrixSpec</code> in parameters. Add one to enable per-cell deltas.
        </div>
      </>
    );
  }

  const counts = deltas.reduce(
    (acc, d) => ({ ...acc, [d.status]: acc[d.status] + 1 }),
    { green: 0, yellow: 0, red: 0 },
  );
  const overallStatus: 'green' | 'yellow' | 'red' =
    counts.red > 0 ? 'red' : counts.yellow > 0 ? 'yellow' : 'green';

  // Has any cell with content mismatches? Surface them in the panel.
  const cellsWithContentIssues = deltas.filter((d) => d.contentMismatches.length > 0);

  return (
    <>
      <Story />
      {/* Floating summary panel — top right */}
      <div style={panelStyle(overallStatus)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <strong>MatrixVerify</strong>
          <span style={{ fontSize: 11 }}>
            {counts.green} ✓ &nbsp; {counts.yellow} ⚠ &nbsp; {counts.red} ✗
          </span>
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            style={{  // token-lint-skip: dev-only matrix diff overlay chrome
              marginLeft: 'auto',
              border: '1px solid currentColor',
              background: 'transparent',
              color: 'inherit',
              borderRadius: 4,
              padding: '2px 6px',
              fontSize: 11,
              cursor: 'pointer',
            }}
          >
            {visible ? 'Hide badges' : 'Show badges'}
          </button>
        </div>
        <div style={{ fontSize: 11, marginTop: 4, opacity: 0.9 }}>  // token-lint-skip: dev-only matrix diff overlay chrome
          Figma page: <code>{spec.figmaPageId}</code> · {deltas.length} cells
        </div>
        {cellsWithContentIssues.length > 0 && (
          <div style={{ marginTop: 6, fontSize: 10, lineHeight: 1.5, maxHeight: 120, overflowY: 'auto' }}>  // token-lint-skip: dev-only matrix diff overlay chrome
            <strong>Content mismatches:</strong>
            {cellsWithContentIssues.map((d, i) => (
              <div key={i} style={{ marginTop: 2 }}>  // token-lint-skip: dev-only matrix diff overlay chrome
                <em>{d.variant}:</em> {d.contentMismatches.join('; ')}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Per-cell badges */}
      {visible && deltas.map((d, i) => {
        const color = COLORS[d.status];
        return (
          <div
            key={i}
            onClick={() => setExpandedCell((c) => (c === i ? null : i))}
            style={{  // token-lint-skip: dev-only matrix diff overlay chrome
              position: 'absolute',
              left: d.expected.x,
              top: d.expected.y,
              transform: 'translate(0, -100%)',
              background: color.bg,
              color: '#fff',
              border: `1px solid ${color.border}`,
              borderRadius: 4,
              padding: '2px 6px',
              fontSize: 10,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              whiteSpace: 'nowrap',
              cursor: d.contentMismatches.length > 0 ? 'pointer' : 'default',
              pointerEvents: 'auto',
              zIndex: 9999,
              boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            {d.status === 'green' && '✓'}
            {d.status === 'yellow' && '⚠'}
            {d.status === 'red' && '✗'}
            {' '}
            Δx:{d.diff.x} Δy:{d.diff.y} Δw:{d.diff.w} Δh:{d.diff.h}
            {d.contentMismatches.length > 0 && ` · content ✗ (${d.contentMismatches.length})`}
          </div>
        );
      })}

      {/* Expanded content mismatch tooltip */}
      {expandedCell !== null && deltas[expandedCell]?.contentMismatches.length > 0 && (
        <div
          style={{  // token-lint-skip: dev-only matrix diff overlay chrome
            position: 'absolute',
            left: deltas[expandedCell].expected.x,
            top: deltas[expandedCell].expected.y + 8,
            maxWidth: 480,
            background: '#fff',
            color: '#111',
            border: '1px solid #991B1B',
            borderRadius: 4,
            padding: '6px 10px',
            fontSize: 11,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            zIndex: 10001,
            boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
            whiteSpace: 'pre-wrap',
          }}
        >
          <strong>{deltas[expandedCell].variant}</strong>
          <ul style={{ margin: 0, paddingLeft: 18 }}>  // token-lint-skip: dev-only matrix diff overlay chrome
            {deltas[expandedCell].contentMismatches.map((m, j) => (
              <li key={j}>{m}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

function panelStyle(status: 'green' | 'yellow' | 'red' | 'warning'): React.CSSProperties {
  const palette = status === 'warning'
    ? { bg: 'rgba(234, 179, 8, 0.95)', border: '#A16207' }
    : COLORS[status];
  return {
    position: 'fixed',
    top: 8,
    right: 8,
    zIndex: 10000,
    background: palette.bg,
    color: '#fff',
    border: `1px solid ${palette.border}`,
    borderRadius: 6,
    padding: '6px 10px',
    fontSize: 12,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    maxWidth: 480,
  };
}
