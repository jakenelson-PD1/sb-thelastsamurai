import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { TableCell } from './TableCell';
import { TableHeaderCell } from './TableHeaderCell';
import { Icon } from '../primitives/Icon';
import { ArrowDownIcon } from '../primitives/icons/ArrowDownIcon';
import { ArrowUpIcon } from '../primitives/icons/ArrowUpIcon';
import { FilterFunnel01Icon } from '../primitives/icons/FilterFunnel01Icon';
import { DotsHorizontalIcon } from '../primitives/icons/DotsHorizontalIcon';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta = { title: 'Primitives/Table', tags: ['autodocs'], parameters: { layout: 'padded' } };
export default meta;

const USER_DATA = [
  { name: 'Alice Chen',    email: 'alice@example.com',  role: 'Admin',  status: 'Active' },
  { name: 'Bob Martinez',  email: 'bob@example.com',    role: 'Editor', status: 'Active' },
  { name: 'Carol Kim',     email: 'carol@example.com',  role: 'Viewer', status: 'Inactive' },
];

const LEDGER_DATA = [
  { account: '1010', name: 'Cash on hand',         debit: '12,400.00', credit: '0.00'    },
  { account: '1100', name: 'Accounts receivable',  debit: '38,250.50', credit: '0.00'    },
  { account: '1500', name: 'Inventory',            debit: '0.00',      credit: '4,180.75' },
  { account: '2010', name: 'Accounts payable',     debit: '0.00',      credit: '6,720.30' },
  { account: '4000', name: 'Revenue',              debit: '0.00',      credit: '120,000.00' },
];

const ACTION_COLUMNS = [
  { key: 'name'   as const, header: 'Name',   headerActions: [
    { icon: <Icon icon={ArrowUpIcon}   size={14} />, label: 'Sort ascending',  active: true },
    { icon: <Icon icon={ArrowDownIcon} size={14} />, label: 'Sort descending' },
    { icon: <Icon icon={DotsHorizontalIcon} size={14} />, label: 'More options' },
  ]},
  { key: 'email'  as const, header: 'Email',  headerActions: [{ icon: <Icon icon={FilterFunnel01Icon} size={14} />, label: 'Filter email' }] },
  { key: 'role'   as const, header: 'Role',   headerActions: [{ icon: <Icon icon={FilterFunnel01Icon} size={14} />, label: 'Filter role', active: true }] },
  { key: 'status' as const, header: 'Status', align: 'right' as const, headerActions: [{ icon: <Icon icon={DotsHorizontalIcon} size={14} />, label: 'Column menu' }] },
];

// ─── Modern variant ──────────────────────────────────────────────────────────
export const Modern: StoryObj = {
  render: () => (
    <Table
      variant="modern"
      columns={[
        { key: 'name',   header: 'Name' },
        { key: 'email',  header: 'Email' },
        { key: 'role',   header: 'Role' },
        { key: 'status', header: 'Status' },
      ]}
      data={USER_DATA}
    />
  ),
};

export const ModernWithHeaderActions: StoryObj = {
  render: () => <Table variant="modern" columns={ACTION_COLUMNS} data={USER_DATA} />,
};

// ─── Excel variant ───────────────────────────────────────────────────────────
export const Excel: StoryObj = {
  render: () => (
    <Table
      variant="excel"
      columns={[
        { key: 'account', header: 'Account #' },
        { key: 'name',    header: 'Account name' },
        { key: 'debit',   header: 'Debit',  align: 'right' },
        { key: 'credit',  header: 'Credit', align: 'right' },
      ]}
      data={LEDGER_DATA}
    />
  ),
};

export const ExcelWithHeaderActions: StoryObj = {
  render: () => (
    <Table
      variant="excel"
      columns={[
        { key: 'account', header: 'Account #', headerActions: [{ icon: <Icon icon={ArrowUpIcon} size={14} />, label: 'Sort', active: true }] },
        { key: 'name',    header: 'Account name', headerActions: [{ icon: <Icon icon={FilterFunnel01Icon} size={14} />, label: 'Filter' }, { icon: <Icon icon={DotsHorizontalIcon} size={14} />, label: 'More' }] },
        { key: 'debit',   header: 'Debit',  align: 'right', headerActions: [{ icon: <Icon icon={ArrowDownIcon} size={14} />, label: 'Sort by debit' }] },
        { key: 'credit',  header: 'Credit', align: 'right', headerActions: [{ icon: <Icon icon={ArrowDownIcon} size={14} />, label: 'Sort by credit' }] },
      ]}
      data={LEDGER_DATA}
    />
  ),
};

// ─── Interactive — cell-level selection + focus (both variants) ─────────────
// Click a cell to select it (shows info-surface highlight + focus ring above
// neighbouring borders). Tab through cells with keyboard. Both Modern and
// Excel use cell-level interactions; the only visual difference is the
// border treatment.
function InteractiveTable({ variant }: { variant: 'modern' | 'excel' }) {
  const [cell, setCell] = useState<{ row: number; col: number } | undefined>(undefined);
  return (
    <Table
      variant={variant}
      columns={[
        { key: 'name',   header: 'Name' },
        { key: 'email',  header: 'Email' },
        { key: 'role',   header: 'Role' },
        { key: 'status', header: 'Status' },
      ]}
      data={USER_DATA}
      onCellClick={(_row, rowIndex, _key, columnIndex) => setCell({ row: rowIndex, col: columnIndex })}
      selectedCell={cell}
    />
  );
}
export const ModernInteractive: StoryObj = { render: () => <InteractiveTable variant="modern" /> };
export const ExcelInteractive:  StoryObj = { render: () => <InteractiveTable variant="excel" /> };

// ─── Atoms inside cells ─────────────────────────────────────────────────────
// Showcases the cell-content APIs: iconLeft / iconRight / iconOnly (convenience)
// and `render` (full custom). Demonstrates icon + text, text + icon, icon-only
// actions cell, plus Chip + Switch composed via `render`.
import { Button } from '../primitives/Button';
import { Switch } from '../forms/Switch';
import { Chip } from './Chip';
import { Edit05Icon } from '../primitives/icons/Edit05Icon';
import { Trash03Icon } from '../primitives/icons/Trash03Icon';
import { Mail01Icon } from '../primitives/icons/Mail01Icon';
import { CheckCircleIcon } from '../primitives/icons/CheckCircleIcon';
import { XCloseIcon } from '../primitives/icons/XCloseIcon';

export const WithCellAtoms: StoryObj = {
  render: () => (
    <Table
      variant="modern"
      columns={[
        // Icon LEFT of text (status indicator + name)
        { key: 'name', header: 'Name',
          iconLeft: (row) => (
            <Icon
              icon={row.status === 'Active' ? CheckCircleIcon : XCloseIcon}
              size={14}
              className={row.status === 'Active' ? 'text-status-success' : 'text-muted'}
            />
          ),
        },
        // Icon RIGHT of text (email + envelope)
        { key: 'email', header: 'Email',
          iconRight: () => <Icon icon={Mail01Icon} size={14} className="text-muted" />,
        },
        // CUSTOM render: Chip in cell
        { key: 'role', header: 'Role',
          render: (row) => <Chip label={String(row.role)} size="sm" selected={row.role === 'Admin' ? 'single' : 'none'} />,
        },
        // CUSTOM render: Switch in cell
        { key: 'status', header: 'Active',
          render: (row) => <Switch checked={row.status === 'Active'} onChange={() => {}} />,
        },
        // ICON-ONLY: actions cell with two icon-button atoms
        { key: 'actions' as never, header: '', align: 'right', iconOnly: true,
          iconLeft: () => (
            <span className="inline-flex items-center gap-1">
              <Button variant="ghost" iconOnly size="xs" startIcon={<Icon icon={Edit05Icon}  size={14} />} aria-label="Edit" />
              <Button variant="ghost" iconOnly size="xs" startIcon={<Icon icon={Trash03Icon} size={14} />} aria-label="Delete" />
            </span>
          ),
        },
      ]}
      data={USER_DATA}
    />
  ),
};

// ─── Max table — 8 rows × 6 columns ─────────────────────────────────────────
// Demonstrates how to "add more rows / columns" — same component, just pass
// longer `data` / `columns` arrays. In Figma, this maps to toggling the
// ShowRow6/7/8 + ShowCol5/6 booleans on the Table ComponentSet.
const BIG_DATA = [
  { name: 'Alice Chen',    email: 'alice@example.com',   role: 'Admin',     status: 'Active',   ext5: 'A',  ext6: 'X' },
  { name: 'Bob Martinez',  email: 'bob@example.com',     role: 'Editor',    status: 'Active',   ext5: 'B',  ext6: 'Y' },
  { name: 'Carol Kim',     email: 'carol@example.com',   role: 'Viewer',    status: 'Inactive', ext5: 'C',  ext6: 'Z' },
  { name: 'Diana Patel',   email: 'diana@example.com',   role: 'Editor',    status: 'Active',   ext5: 'D',  ext6: 'W' },
  { name: 'Eric Johnson',  email: 'eric@example.com',    role: 'Viewer',    status: 'Inactive', ext5: 'E',  ext6: 'V' },
  { name: 'Fiona Garcia',  email: 'fiona@example.com',   role: 'Admin',     status: 'Active',   ext5: 'F',  ext6: 'U' },
  { name: 'George Lin',    email: 'george@example.com',  role: 'Editor',    status: 'Active',   ext5: 'G',  ext6: 'T' },
  { name: 'Hana Yoshida',  email: 'hana@example.com',    role: 'Viewer',    status: 'Active',   ext5: 'H',  ext6: 'S' },
];

export const MaxTable: StoryObj = {
  render: () => (
    <Table
      variant="modern"
      columns={[
        { key: 'name',   header: 'Name' },
        { key: 'email',  header: 'Email' },
        { key: 'role',   header: 'Role' },
        { key: 'status', header: 'Status' },
        { key: 'ext5',   header: 'Column 5' },
        { key: 'ext6',   header: 'Column 6' },
      ]}
      data={BIG_DATA}
    />
  ),
};

export const ExcelMaxTable: StoryObj = {
  render: () => (
    <Table
      variant="excel"
      columns={[
        { key: 'name',   header: 'Name' },
        { key: 'email',  header: 'Email' },
        { key: 'role',   header: 'Role' },
        { key: 'status', header: 'Status' },
        { key: 'ext5',   header: 'Column 5' },
        { key: 'ext6',   header: 'Column 6' },
      ]}
      data={BIG_DATA}
    />
  ),
};

// ─── Empty state ─────────────────────────────────────────────────────────────
export const Empty: StoryObj = {
  render: () => (
    <Table
      columns={[
        { key: 'name',   header: 'Name' },
        { key: 'email',  header: 'Email' },
      ]}
      data={[]}
    />
  ),
};

// ─── Matrix — TableHeaderCell ComponentSet (2020:178) ───────────────────────
const HEADER_CELLS: (MatrixCellSpec & { variantStyle: 'modern' | 'excel' })[] = [
  { variant: 'Style=Modern', variantStyle: 'modern', x: 0,   y: 0, w: 200, h: 40, expect: { headings: [] } },
  { variant: 'Style=Excel',  variantStyle: 'excel',  x: 240, y: 0, w: 200, h: 32, expect: { headings: [] } },
];

export const HeaderCellMatrix: StoryObj = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '2020:178', cells: HEADER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 460, height: 56 }}>
      {HEADER_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <table className="w-full border-collapse"><thead><tr><TableHeaderCell variant={c.variantStyle} actions={[
            { icon: <Icon icon={ArrowUpIcon} size={14} />, label: 'Sort' },
          ]}>Header</TableHeaderCell></tr></thead></table>
        </div>
      ))}
    </div>
  ),
};

// ─── Matrix — TableCell ComponentSet (2030:1102) — 40 variants ──────────────
type TC_Style = 'Modern' | 'Excel';
type TC_State = 'Default' | 'Hover' | 'Selected' | 'Focus';
type TC_Content = 'Text' | 'IconLeft' | 'IconRight' | 'IconOnly' | 'Custom';

interface TableCellCell extends MatrixCellSpec {
  cellStyle: TC_Style;
  cellState: TC_State;
  content: TC_Content;
}

const STYLE_Y: Record<TC_Style, Record<TC_State, number>> = {
  Modern: { Default: 0,   Hover: 76,  Selected: 152, Focus: 228 },
  Excel:  { Default: 304, Hover: 380, Selected: 456, Focus: 532 },
};
const CONTENT_X: Record<TC_Content, number> = { Text: 0, IconLeft: 236, IconRight: 472, IconOnly: 708, Custom: 944 };

const TABLECELL_CELLS: TableCellCell[] = (['Modern','Excel'] as TC_Style[]).flatMap((style) =>
  (['Default','Hover','Selected','Focus'] as TC_State[]).flatMap((state) =>
    (['Text','IconLeft','IconRight','IconOnly','Custom'] as TC_Content[]).map((content) => ({
      variant: `Style=${style}, State=${state}, Content=${content}`,
      cellStyle: style, cellState: state, content,
      x: CONTENT_X[content],
      y: STYLE_Y[style][state],
      w: 200,
      h: style === 'Modern' ? 44 : 32,
      expect: { headings: [] },
    })),
  ),
);

function TableCellMatrixCell({ cell }: { cell: TableCellCell }) {
  const variant = cell.cellStyle.toLowerCase() as 'modern' | 'excel';
  // Force visual states at rest via class overrides.
  const stateCls =
    cell.cellState === 'Hover' ? '[&>td]:!bg-surface' :
    cell.cellState === 'Focus' ? '[&>td]:!ring-2 [&>td]:!ring-inset [&>td]:!ring-line-focus' :
    '';
  // Content shape.
  const iconLeft = (cell.content === 'IconLeft' || cell.content === 'IconOnly')
    ? <Icon icon={CheckCircleIcon} size={14} className="text-status-success" /> : undefined;
  const iconRight = cell.content === 'IconRight'
    ? <Icon icon={Mail01Icon} size={14} className="text-muted" /> : undefined;
  const iconOnly = cell.content === 'IconOnly';
  const customChild = cell.content === 'Custom'
    ? <Chip label="Tag" size="sm" /> : undefined;
  const text = cell.content === 'IconOnly' ? undefined : (cell.content === 'Custom' ? undefined : 'Cell text');
  return (
    <table className="w-full border-collapse h-full"><tbody><tr className={stateCls}>
      <TableCell
        variant={variant}
        selected={cell.cellState === 'Selected'}
        iconLeft={iconLeft}
        iconRight={iconRight}
        iconOnly={iconOnly}
        hasBottomBorder={false}
      >
        {customChild ?? text}
      </TableCell>
    </tr></tbody></table>
  );
}

export const TableCellMatrix: StoryObj = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '2030:1102', cells: TABLECELL_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1160, height: 580 }}>
      {TABLECELL_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <TableCellMatrixCell cell={c} />
        </div>
      ))}
    </div>
  ),
};

// ─── Matrix — Table ComponentSet (2032:1834) — 16 variants ─────────────────
type T_Style = 'Modern' | 'Excel';
type T_Header = 'With' | 'Without';
type T_RowState = 'Default' | 'Hover' | 'Selected' | 'Focus';

interface TableTopCell extends MatrixCellSpec {
  tStyle: T_Style;
  hasHeaderActions: boolean;
  rowState: T_RowState;
}

const STYLE_BASE_Y: Record<T_Style, Record<T_Header, number>> = {
  Modern: { With: 0,   Without: 424 },
  Excel:  { With: 848, Without: 1272 },
};
const ROWSTATE_X: Record<T_RowState, number> = { Default: 0, Hover: 684, Selected: 1368, Focus: 2052 };

const TABLE_CELLS: TableTopCell[] = (['Modern','Excel'] as T_Style[]).flatMap((tStyle) =>
  (['With','Without'] as T_Header[]).flatMap((hdr) =>
    (['Default','Hover','Selected','Focus'] as T_RowState[]).map((rs) => ({
      variant: `Style=${tStyle}, HeaderActions=${hdr}, RowState=${rs}`,
      tStyle, hasHeaderActions: hdr === 'With', rowState: rs,
      x: ROWSTATE_X[rs],
      y: STYLE_BASE_Y[tStyle][hdr],
      w: 620,
      h: tStyle === 'Modern' ? 260 : 192,
      expect: { headings: [] },
    })),
  ),
);

function TableTopMatrixCell({ cell }: { cell: TableTopCell }) {
  const variant = cell.tStyle.toLowerCase() as 'modern' | 'excel';
  const headerActions = cell.hasHeaderActions ? [
    { icon: <Icon icon={ArrowUpIcon} size={14} />, label: 'Sort' },
  ] : undefined;
  const COLS = [
    { key: 'name'   as const, header: 'Name',   headerActions },
    { key: 'email'  as const, header: 'Email',  headerActions },
    { key: 'role'   as const, header: 'Role',   headerActions },
    { key: 'status' as const, header: 'Status', headerActions, align: 'right' as const },
  ];
  // Force row state on the FIRST row only via state-specific overrides.
  const stateOverride =
    cell.rowState === 'Hover'    ? '[&_tbody>tr:first-child>td]:!bg-surface' :
    cell.rowState === 'Selected' ? '[&_tbody>tr:first-child>td]:!bg-row-selected' :
    cell.rowState === 'Focus'    ? '[&_tbody>tr:first-child>td]:!ring-2 [&_tbody>tr:first-child>td]:!ring-inset [&_tbody>tr:first-child>td]:!ring-line-focus' :
    '';
  return (
    <div className={stateOverride}>
      <Table variant={variant} columns={COLS} data={USER_DATA} />
    </div>
  );
}

export const TableMatrix: StoryObj = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '2032:1834', cells: TABLE_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 2700, height: 1480 }}>
      {TABLE_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <TableTopMatrixCell cell={c} />
        </div>
      ))}
    </div>
  ),
};
