import { clsx } from 'clsx';

type ColCount = 1 | 2 | 3 | 4 | 6 | 12;
type ResponsiveCols = ColCount | { base?: ColCount; sm?: ColCount; md?: ColCount; lg?: ColCount };

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns. Accepts a fixed number or a responsive object.
   * @example cols={3}
   * @example cols={{ base: 1, sm: 2, md: 3 }}
   */
  cols?: ResponsiveCols;
  /** Gap between grid cells */
  gap?: 2 | 4 | 6 | 8;
}

const colClass: Record<ColCount, string> = {
  1:  'grid-cols-1',
  2:  'grid-cols-2',
  3:  'grid-cols-3',
  4:  'grid-cols-4',
  6:  'grid-cols-6',
  12: 'grid-cols-12',
};

const smColClass: Record<ColCount, string> = {
  1:  'sm:grid-cols-1',
  2:  'sm:grid-cols-2',
  3:  'sm:grid-cols-3',
  4:  'sm:grid-cols-4',
  6:  'sm:grid-cols-6',
  12: 'sm:grid-cols-12',
};

const mdColClass: Record<ColCount, string> = {
  1:  'md:grid-cols-1',
  2:  'md:grid-cols-2',
  3:  'md:grid-cols-3',
  4:  'md:grid-cols-4',
  6:  'md:grid-cols-6',
  12: 'md:grid-cols-12',
};

const lgColClass: Record<ColCount, string> = {
  1:  'lg:grid-cols-1',
  2:  'lg:grid-cols-2',
  3:  'lg:grid-cols-3',
  4:  'lg:grid-cols-4',
  6:  'lg:grid-cols-6',
  12: 'lg:grid-cols-12',
};

const gapMap = { 2: 'gap-2', 4: 'gap-4', 6: 'gap-6', 8: 'gap-8' } as const;

function resolveColsClasses(cols: ResponsiveCols): string[] {
  if (typeof cols === 'number') return [colClass[cols]];

  const classes: string[] = [];
  if (cols.base !== undefined) classes.push(colClass[cols.base]);
  if (cols.sm   !== undefined) classes.push(smColClass[cols.sm]);
  if (cols.md   !== undefined) classes.push(mdColClass[cols.md]);
  if (cols.lg   !== undefined) classes.push(lgColClass[cols.lg]);
  return classes;
}

export function Grid({ cols = 1, gap = 4, className, children, ...props }: GridProps) {
  return (
    <div className={clsx('grid', resolveColsClasses(cols), gapMap[gap], className)} {...props}>
      {children}
    </div>
  );
}

// ─── ColSpan ─────────────────────────────────────────────────────────────────

type SpanCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';
type ResponsiveSpan = SpanCount | { base?: SpanCount; sm?: SpanCount; md?: SpanCount; lg?: SpanCount };

export interface ColSpanProps extends React.HTMLAttributes<HTMLDivElement> {
  /** How many columns this item spans */
  span?: ResponsiveSpan;
}

const spanClass: Record<string, string> = {
  1: 'col-span-1', 2: 'col-span-2', 3: 'col-span-3', 4: 'col-span-4',
  5: 'col-span-5', 6: 'col-span-6', 7: 'col-span-7', 8: 'col-span-8',
  9: 'col-span-9', 10: 'col-span-10', 11: 'col-span-11', 12: 'col-span-12',
  full: 'col-span-full',
};

const smSpanClass: Record<string, string> = {
  1: 'sm:col-span-1', 2: 'sm:col-span-2', 3: 'sm:col-span-3', 4: 'sm:col-span-4',
  5: 'sm:col-span-5', 6: 'sm:col-span-6', 7: 'sm:col-span-7', 8: 'sm:col-span-8',
  9: 'sm:col-span-9', 10: 'sm:col-span-10', 11: 'sm:col-span-11', 12: 'sm:col-span-12',
  full: 'sm:col-span-full',
};

const mdSpanClass: Record<string, string> = {
  1: 'md:col-span-1', 2: 'md:col-span-2', 3: 'md:col-span-3', 4: 'md:col-span-4',
  5: 'md:col-span-5', 6: 'md:col-span-6', 7: 'md:col-span-7', 8: 'md:col-span-8',
  9: 'md:col-span-9', 10: 'md:col-span-10', 11: 'md:col-span-11', 12: 'md:col-span-12',
  full: 'md:col-span-full',
};

const lgSpanClass: Record<string, string> = {
  1: 'lg:col-span-1', 2: 'lg:col-span-2', 3: 'lg:col-span-3', 4: 'lg:col-span-4',
  5: 'lg:col-span-5', 6: 'lg:col-span-6', 7: 'lg:col-span-7', 8: 'lg:col-span-8',
  9: 'lg:col-span-9', 10: 'lg:col-span-10', 11: 'lg:col-span-11', 12: 'lg:col-span-12',
  full: 'lg:col-span-full',
};

function resolveSpanClasses(span: ResponsiveSpan): string[] {
  if (typeof span === 'number' || typeof span === 'string') return [spanClass[span]];

  const classes: string[] = [];
  if (span.base !== undefined) classes.push(spanClass[span.base]);
  if (span.sm   !== undefined) classes.push(smSpanClass[span.sm]);
  if (span.md   !== undefined) classes.push(mdSpanClass[span.md]);
  if (span.lg   !== undefined) classes.push(lgSpanClass[span.lg]);
  return classes;
}

export function ColSpan({ span = 1, className, children, ...props }: ColSpanProps) {
  return (
    <div className={clsx(resolveSpanClasses(span), className)} {...props}>
      {children}
    </div>
  );
}
