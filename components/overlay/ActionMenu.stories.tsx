import { Fragment, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionMenu, ActionMenuItemRow } from './ActionMenu';
import { Avatar } from '../primitives/Avatar';
import { Checkbox } from '../forms/Checkbox';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';
import { Copy01Icon } from '../primitives/icons/Copy01Icon';
import { Edit01Icon } from '../primitives/icons/Edit01Icon';
import { Trash01Icon } from '../primitives/icons/Trash01Icon';
import { Share01Icon } from '../primitives/icons/Share01Icon';
import { FolderIcon } from '../primitives/icons/FolderIcon';
import { ArchiveIcon } from '../primitives/icons/ArchiveIcon';
import { StatusOutstandingIcon } from '../primitives/icons/StatusOutstandingIcon';
import { StatusAcceptedIcon } from '../primitives/icons/StatusAcceptedIcon';
import { StatusReturnedIcon } from '../primitives/icons/StatusReturnedIcon';
import { StatusFulfilledIcon } from '../primitives/icons/StatusFulfilledIcon';

const meta: Meta<typeof ActionMenu> = {
  title: 'Overlay/ActionMenu', component: ActionMenu, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof ActionMenu>;

// ─── Default — contextual actions ────────────────────────────────────────────
export const Default: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <Edit01Icon  size="sm" />, label: 'Edit',      shortcut: '⌘E' },
          { icon: <Copy01Icon  size="sm" />, label: 'Duplicate' },
          { icon: <Share01Icon size="sm" />, label: 'Share',     shortcut: '⌘S' },
        ],
      },
      {
        items: [
          { icon: <Trash01Icon size="sm" />, label: 'Delete', shortcut: '⌫', danger: true },
        ],
      },
    ],
  },
};

// ─── Selected state ───────────────────────────────────────────────────────────
// Use `selected: true` on items where the current value is persistent and always
// visible — status pickers, filters, view selectors, etc.
// Visual: left accent bar | transparent gap | filled background (full row height).

export const WithSelectedItem: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <StatusOutstandingIcon size="md" className="text-brand-300" />,  label: 'Mark as outstanding', selected: true },
          { icon: <StatusAcceptedIcon   size="md" className="text-green-300" />,   label: 'Mark as accepted' },
          { icon: <StatusReturnedIcon   size="md" className="text-red-300" />,     label: 'Mark as returned' },
          { icon: <StatusFulfilledIcon  size="md" className="text-yellow-300" />,  label: 'Mark as fulfilled' },
        ],
      },
    ],
  },
};

// ─── Interactive selectable list ─────────────────────────────────────────────
// Selected state follows the active choice. Use for request status pickers,
// document view selectors, and any persistent single-select list.
export const SelectableList: Story = {
  render: () => {
    const [active, setActive] = useState<string>('outstanding');
    const statuses = [
      { value: 'outstanding', label: 'Mark as outstanding', icon: <StatusOutstandingIcon size="md" className="text-brand-300" /> },
      { value: 'accepted',    label: 'Mark as accepted',    icon: <StatusAcceptedIcon   size="md" className="text-green-300" /> },
      { value: 'returned',    label: 'Mark as returned',    icon: <StatusReturnedIcon   size="md" className="text-red-300" /> },
      { value: 'fulfilled',   label: 'Mark as fulfilled',   icon: <StatusFulfilledIcon  size="md" className="text-yellow-300" /> },
    ];
    return (
      <ActionMenu
        groups={[{
          items: statuses.map((s) => ({
            icon: s.icon,
            label: s.label,
            selected: s.value === active,
            onClick: () => setActive(s.value),
          })),
        }]}
      />
    );
  },
};

// ─── With danger item ─────────────────────────────────────────────────────────
export const WithDangerItem: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <Edit01Icon  size="sm" />, label: 'Edit',      shortcut: '⌘E' },
          { icon: <Copy01Icon  size="sm" />, label: 'Duplicate' },
          { icon: <Share01Icon size="sm" />, label: 'Share',     shortcut: '⌘S' },
        ],
      },
      {
        items: [
          { icon: <Trash01Icon size="sm" />, label: 'Delete', shortcut: '⌫', danger: true },
        ],
      },
    ],
  },
};

// ─── With submenu — drill-down / waterfall ───────────────────────────────────
// An item with `children` replaces the menu contents with the child level and
// renders a `< Parent label` header with a back chevron. Children can have
// their own children, nesting indefinitely. Items with children auto-render a
// trailing right-chevron affordance.
export const WithSubmenu: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <Edit01Icon  size="sm" />, label: 'Rename', shortcut: '⌘R' },
          {
            icon: <FolderIcon size="sm" />,
            label: 'Move to…',
            children: [
              {
                items: [
                  { icon: <FolderIcon size="sm" />, label: 'Project Alpha' },
                  { icon: <FolderIcon size="sm" />, label: 'Project Beta' },
                  {
                    icon: <ArchiveIcon size="sm" />,
                    label: 'Archive',
                    children: [
                      {
                        items: [
                          { label: '2024' },
                          { label: '2025' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          { icon: <Copy01Icon size="sm" />, label: 'Duplicate' },
        ],
      },
      {
        items: [
          { icon: <Trash01Icon size="sm" />, label: 'Delete', shortcut: '⌫', danger: true },
        ],
      },
    ],
  },
};

// ─── With disabled items ──────────────────────────────────────────────────────
export const WithDisabledItems: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <Edit01Icon  size="sm" />, label: 'Edit' },
          { icon: <Copy01Icon  size="sm" />, label: 'Duplicate', disabled: true },
          { icon: <Share01Icon size="sm" />, label: 'Share',     disabled: true },
        ],
      },
    ],
  },
};

// ─── MentionPicker — Avatar + Name + Description (email) ─────────────────────
// Mirrors the canonical mention picker pattern used in CommentComposer +
// showcased on the Figma ActionMenu page. Demonstrates ActionMenuItem with:
//   • icon slot = canonical Avatar instance (variant=firm | client)
//   • label    = user name
//   • description = email (rendered as muted second line via the source's
//                   `description?: string` API + Figma's Description# +
//                   ShowDescription# properties on ActionMenuItem)
//   • shortcut hidden
// Wider than default (~320px) to fit emails on a single line.
export const MentionPicker: Story = {
  render: () => (
    <div className="w-[320px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <ActionMenu
        size="sm"
        groups={[
          {
            items: [
              {
                icon: <Avatar size="sm" variant="firm"   initials="B" />,
                label: 'Beck Neilson',
                description: 'Beck.Neilson@suralink.com',
              },
              {
                icon: <Avatar size="sm" variant="client" initials="L" />,
                label: 'Barbra Ingles',
                description: 'Barbra.Ingles@suralink.com',
              },
              {
                icon: <Avatar size="sm" variant="client" initials="L" />,
                label: 'Bret Assay',
                description: 'Bret.Assay@suralink.com',
              },
            ],
          },
        ]}
      />
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma ActionMenu ComponentSet (579:419) ──
// 6 variants on Size × Level axes. Each renders the canonical menu structure
// (6 items + 2 dividers) at the variant-specific dimensions.
// Layout: 3 Size rows × 2 Level cols (Root | Submenu).

const MENU_ITEMS_ROOT = [
  { icon: <Edit01Icon size="sm" />, label: 'Rename',    shortcut: '⌘K' },
  { icon: <Copy01Icon size="sm" />, label: 'Duplicate', shortcut: '⌘K' },
  {
    icon: <FolderIcon size="sm" />, label: 'Move to…',
    children: [{ items: [{ label: 'Folder A' }, { label: 'Folder B' }] }],
  },
  {
    icon: <ArchiveIcon size="sm" />, label: 'Show preview',
    shortcut: '⌘K', selected: false,
    // Use a noop; treated as a Type=Checkbox visual via the menu's rendering.
  },
  {
    icon: <ArchiveIcon size="sm" />, label: 'Auto-save',
    shortcut: '⌘K', selected: true,
  },
  { icon: <Trash01Icon size="sm" />, label: 'Delete', shortcut: '⌘K', danger: true },
];

const MENU_ITEMS_SUBMENU = MENU_ITEMS_ROOT;  // Submenu variant uses same content

const AM_CELLS: (MatrixCellSpec & { size: 'xs' | 'sm' | 'md'; level: 'Root' | 'Submenu' })[] = [
  // Level=Root  (left column at x=0)
  { variant: 'Size=xs, Level=Root',    x: 0,   y: 0,   w: 200, h: 194, size: 'xs', level: 'Root',    expect: { headings: [] } },
  { variant: 'Size=sm, Level=Root',    x: 0,   y: 254, w: 200, h: 212, size: 'sm', level: 'Root',    expect: { headings: [] } },
  { variant: 'Size=md, Level=Root',    x: 0,   y: 536, w: 200, h: 242, size: 'md', level: 'Root',    expect: { headings: [] } },
  // Level=Submenu  (right column at x=248)
  { variant: 'Size=xs, Level=Submenu', x: 248, y: 0,   w: 200, h: 222, size: 'xs', level: 'Submenu', expect: { headings: [] } },
  { variant: 'Size=sm, Level=Submenu', x: 248, y: 254, w: 200, h: 250, size: 'sm', level: 'Submenu', expect: { headings: [] } },
  { variant: 'Size=md, Level=Submenu', x: 248, y: 536, w: 200, h: 278, size: 'md', level: 'Submenu', expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:55', cells: AM_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 448, height: 814 }}>
      {AM_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <ActionMenu
            size={c.size}
            groups={[{ items: c.level === 'Submenu' ? MENU_ITEMS_SUBMENU : MENU_ITEMS_ROOT }]}
          />
        </div>
      ))}
    </div>
  ),
};

// ─── ItemMatrix — pixel-pinned mirror of Figma ActionMenuItem set (571:651) ──
// 48 variants (3 Size × 4 State × 4 Type). Each cell renders a standalone
// <ActionMenuItemRow> at the exact Figma coords. Type encoding:
//   Default  — regular icon + label + shortcut
//   Checkbox — Checkbox primitive replaces the icon
//   Submenu  — children array → renders trailing chevron-right
//   User     — Avatar in icon slot + description (email) below label

type AMSize  = 'xs' | 'sm' | 'md';
type AMState = 'Default' | 'Selected' | 'Danger' | 'Disabled';
type AMType  = 'Default' | 'Checkbox' | 'Submenu' | 'User';

interface AMItemCell extends MatrixCellSpec {
  size: AMSize;
  state: AMState;
  type: AMType;
}

const TYPE_GROUP_X: Record<AMType, number> = {
  Default:  40,
  Checkbox: 1108,
  Submenu:  2176,
  User:     3284,
};
const STATE_COL_OFFSET: Record<AMState, number> = {
  Default: 0,
  Selected: 260,
  Danger: 520,
  Disabled: 780,
};
const SIZE_ROW: Record<AMSize, { y: number; h: number }> = {
  xs: { y: 40,  h: 44 },
  sm: { y: 88,  h: 48 },
  md: { y: 140, h: 52 },
};

const AM_ITEM_CELLS: AMItemCell[] = ([
  'xs', 'sm', 'md',
] as AMSize[]).flatMap((size) =>
  (['Default', 'Selected', 'Danger', 'Disabled'] as AMState[]).flatMap((state) =>
    (['Default', 'Checkbox', 'Submenu', 'User'] as AMType[]).map((type) => ({
      variant: `Size=${size}, State=${state}, Type=${type}`,
      x: TYPE_GROUP_X[type] + STATE_COL_OFFSET[state],
      y: SIZE_ROW[size].y,
      w: 240,
      h: SIZE_ROW[size].h,
      size, state, type,
      expect: { headings: [] },
    })),
  ),
);

function renderItemCell(c: AMItemCell) {
  const baseProps = {
    size: c.size,
    selected: c.state === 'Selected',
    danger:   c.state === 'Danger',
    disabled: c.state === 'Disabled',
  };
  switch (c.type) {
    case 'Default':
      return (
        <ActionMenuItemRow
          {...baseProps}
          icon={<Edit01Icon size="sm" />}
          label="Menu item"
          shortcut="⌘K"
        />
      );
    case 'Checkbox':
      return (
        <ActionMenuItemRow
          {...baseProps}
          icon={<Checkbox checked={c.state === 'Selected'} onChange={() => {}} />}
          label="Menu item"
          shortcut="⌘K"
        />
      );
    case 'Submenu':
      return (
        <ActionMenuItemRow
          {...baseProps}
          icon={<Edit01Icon size="sm" />}
          label="Menu item"
          children={[{ items: [{ label: 'Sub option' }] }]}
        />
      );
    case 'User':
      return (
        <ActionMenuItemRow
          {...baseProps}
          icon={<Avatar size="sm" variant="client" initials="A" />}
          label="User name"
          description="user@example.com"
        />
      );
  }
}

export const ItemMatrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: { figmaPageId: '76:55', cells: AM_ITEM_CELLS },
  },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 4304, height: 232 }}>
      {AM_ITEM_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {renderItemCell(c)}
        </div>
      ))}
    </div>
  ),
};
