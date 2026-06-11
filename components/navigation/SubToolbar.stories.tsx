import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SubToolbar } from './SubToolbar';
import { MatrixVerify } from '../_decorators/MatrixVerify';
import { FilterSwatchGroup, type FilterSwatchGroupSwatch } from '../primitives/FilterSwatchGroup';
import { Button } from '../primitives/Button';
import { Avatar } from '../primitives/Avatar';
import { Search } from '../primitives/Search';
import { Checkbox } from '../forms/Checkbox';
import { Dropdown } from '../overlay/Dropdown';
import { ActionMenu } from '../overlay/ActionMenu';
import { Tooltip } from '../overlay/Tooltip';
import { Divider } from '../layout/Divider';
import { PlusIcon } from '../primitives/icons/PlusIcon';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';
import { ChevronLeftIcon } from '../primitives/icons/ChevronLeftIcon';
import { Flag02Icon } from '../primitives/icons/Flag02Icon';
import { colors } from '../../tokens/colors';

const meta: Meta<typeof SubToolbar> = {
  title: 'RLM Layout/SubToolbar',
  component: SubToolbar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof SubToolbar>;

// ─── Filter colors (palette) ──────────────────────────────────────────────────
// palette-display: intentional — these are raw palette values used to render color-picker swatches

const FILTER_COLORS = [
  { key: 'brand',   color: colors.brand[200]  },
  { key: 'yellow',  color: colors.yellow[300] },
  { key: 'green',   color: colors.green[300]  },
  { key: 'red',     color: colors.red[300]    },
];

// Build the swatches array consumed by canonical FilterSwatchGroup.
function buildSwatches(activeKeys: Set<string>, onToggle: (key: string) => void): FilterSwatchGroupSwatch[] {
  return FILTER_COLORS.map(({ key, color }) => ({
    color,
    selected: activeKeys.has(key),
    onClick: () => onToggle(key),
  }));
}

const SORT_OPTIONS = ['Due Date', 'Priority', 'Created', 'Alphabetical'];

function RightControls({ activeFilters = new Set(), onToggleFilter = () => {} }: { activeFilters?: Set<string>; onToggleFilter?: (key: string) => void }) {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState('Due Date');

  return (
    <div className="flex items-center gap-4">
      {/* Filters — canonical FilterSwatchGroup with its built-in label */}
      <FilterSwatchGroup
        label="Filters:"
        labelPosition="left"
        size="sm"
        swatches={buildSwatches(activeFilters, onToggleFilter)}
      />

      <Divider orientation="vertical" className="!h-[26px] !bg-line-strong" />  // token-lint-skip: showcase fixed dims for screenshot stability

      {/* Assignee + flag — canonical Button (ghost iconOnly) */}
      <div className="flex items-center gap-1">
        <Tooltip content="Filter by assignee">
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            aria-label="Filter by assignee"
            startIcon={
              <Avatar size="xs" initials="A" style={{ backgroundColor: 'var(--color-status-orange-surface)', color: 'var(--color-status-orange-fg)' }} />
            }
          />
        </Tooltip>
        <Tooltip content="Filter by priority">
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            aria-label="Filter by priority"
            className="text-status-purple-fg"
            startIcon={
              <span className="flex h-6 w-6 items-center justify-center rounded-pill bg-status-purple-surface">
                <Flag02Icon size={14} />
              </span>
            }
          />
        </Tooltip>
      </div>

      {/* Sort — canonical Dropdown with its built-in labelPosition='left' */}
      <Dropdown
        open={sortOpen}
        onOpenChange={setSortOpen}
        label="Sort:"
        labelPosition="left"
        width="auto"
        align="right"
        trigger={
          <Button
            variant="secondary"
            size="sm"
            endIcon={<ChevronDownIcon size={14} className={`text-muted transition-transform ${sortOpen ? 'rotate-180' : ''}`} />}
          >
            {sortValue}
          </Button>
        }
      >
        <ActionMenu
          size="sm"
          groups={[{
            items: SORT_OPTIONS.map((item) => ({
              label: item,
              selected: item === sortValue,
              onClick: () => { setSortValue(item); setSortOpen(false); },
            })),
          }]}
        />
      </Dropdown>
    </div>
  );
}

// ─── Condensed right controls (search expanded — Sort hidden) ─────────────────

function RightControlsCondensed({ activeFilters, onToggleFilter, onCollapse }: {
  activeFilters: Set<string>;
  onToggleFilter: (key: string) => void;
  onCollapse: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      {/* Filters — canonical FilterSwatchGroup, no label in condensed mode */}
      <FilterSwatchGroup size="sm" swatches={buildSwatches(activeFilters, onToggleFilter)} />

      <Divider orientation="vertical" className="!h-[26px] !bg-line-strong" />  // token-lint-skip: showcase fixed dims for screenshot stability

      {/* Assignee + flag — canonical Button */}
      <div className="flex items-center gap-1">
        <Tooltip content="Filter by assignee">
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            aria-label="Filter by assignee"
            startIcon={
              <Avatar size="xs" initials="A" style={{ backgroundColor: 'var(--color-status-orange-surface)', color: 'var(--color-status-orange-fg)' }} />
            }
          />
        </Tooltip>
        <Tooltip content="Filter by priority">
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            aria-label="Filter by priority"
            className="text-status-purple-fg"
            startIcon={
              <span className="flex h-6 w-6 items-center justify-center rounded-pill bg-status-purple-surface">
                <Flag02Icon size={14} />
              </span>
            }
          />
        </Tooltip>
      </div>

      <Divider orientation="vertical" className="!h-[26px] !bg-line-strong" />  // token-lint-skip: showcase fixed dims for screenshot stability

      {/* Collapse caret — canonical Button (xs iconOnly ghost) */}
      <Button
        variant="ghost"
        size="xs"
        iconOnly
        aria-label="Collapse search"
        onClick={onCollapse}
        className="!rounded-control"
        startIcon={<ChevronLeftIcon size={16} />}
      />
    </div>
  );
}

// ─── Full demo (shared state across slots) ────────────────────────────────────

const SubToolbarDemo = () => {
  const [search, setSearch] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set(['brand', 'yellow', 'green']));
  const isExpanded = searchActive || !!search;

  const handleCollapse = () => {
    setSearch('');
    setSearchActive(false);
  };

  const toggleFilter = (key: string) =>
    setActiveFilters((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const left = (
    <div className="flex items-center gap-2">
      {/* Select-all checkbox + chevron */}
      <div className="flex items-center gap-1">
        <Checkbox />
        <ChevronDownIcon size={15} className="text-primary" />
      </div>

      {/* Search — expands on focus */}
      <div
        className="transition-all duration-200 ease-in-out"
        style={{ width: isExpanded ? 220 : 130 }}
      >
        <Search
          value={search}
          onChange={setSearch}
          onClear={() => setSearch('')}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
          currentMatch={0}
          totalMatches={0}
          placeholder="Search"
        />
      </div>

      {/* Action buttons */}
      <Button variant="secondary" size="xs" startIcon={<PlusIcon size={14} />}>
        <span className="hidden md:inline">Create category</span>
      </Button>
      <Button variant="secondary" size="xs" startIcon={<PlusIcon size={14} />}>
        <span className="hidden md:inline">Create request</span>
      </Button>
    </div>
  );

  const right = isExpanded
    ? <RightControlsCondensed activeFilters={activeFilters} onToggleFilter={toggleFilter} onCollapse={handleCollapse} />
    : <RightControls activeFilters={activeFilters} onToggleFilter={toggleFilter} />;

  return <SubToolbar left={left} right={right} />;
};

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => <SubToolbarDemo />,
};

export const LeftOnly: Story = {
  render: () => <SubToolbar left={
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <Checkbox />
        <ChevronDownIcon size={15} className="text-primary" />
      </div>
      <Button variant="ghost" size="xs" startIcon={<PlusIcon size={14} />}>Create category</Button>
      <Button variant="ghost" size="xs" startIcon={<PlusIcon size={14} />}>Create request</Button>
    </div>
  } />,
};

export const RightOnly: Story = {
  render: () => <SubToolbar right={<RightControls />} />,
};

// ─── Matrix — 1:1 mirror of Figma SubToolbar page (76:51) ────────────────────
// Content matches Figma byte-for-byte (showcase content, not the realistic
// content used in Default/LeftOnly/RightOnly stories above):
//
//   Slots=Both     — Left: SelectAll + Search("Search query"/"Search") +
//                    Button("+ Create category") + Button("+ Create request");
//                    Right: 4 FilterSwatches (fulfilled SELECTED, outstanding,
//                    fulfilled, overdue) + Button("Due Date")
//   Slots=LeftOnly — Left: SelectAll + Search("Search query"/"Type here…") +
//                    Button("Button") + Button("Button")  [generic showcase labels]
//   Slots=RightOnly — Right: 4 FilterSwatches (all not-started) + Button("Button")
const TILE: Record<string, string> = {
  fulfilled:    'var(--color-swatch-fulfilled)',
  outstanding:  'var(--color-swatch-outstanding)',
  overdue:      'var(--color-swatch-overdue)',
  'not-started':'var(--color-swatch-not-started)',
};

function SelectAll() {
  return (
    <div className="flex items-center gap-1">
      <Checkbox />
      <ChevronDownIcon size={16} className="text-primary" />
    </div>
  );
}

function BothLeft() {
  return (
    <div className="flex items-center gap-2">
      <SelectAll />
      <div style={{ width: 220 }}>
        <Search size="xs" value="Search query" onChange={() => {}} onClear={() => {}} currentMatch={0} totalMatches={0} placeholder="Search" />
      </div>
      <Button variant="secondary" size="xs">+ Create category</Button>
      <Button variant="secondary" size="xs">+ Create request</Button>
    </div>
  );
}

/**
 * Assignee + priority filter buttons — canonical Button (ghost sm iconOnly)
 * with Tooltips wrapping them. Avatar/Flag icons live inside the Button's
 * startIcon slot so the 4px ring around the 24px Avatar reveals the hover-overlay.
 */
function AvatarFlagFilters() {
  return (
    <div className="flex items-center gap-1">
      <Tooltip content="Filter by assignee">
        <Button
          variant="ghost"
          size="sm"
          iconOnly
          aria-label="Filter by assignee"
          startIcon={<Avatar size="xs" initials="A" variant="firm" />}
        />
      </Tooltip>
      <Tooltip content="Filter by priority">
        <Button
          variant="ghost"
          size="sm"
          iconOnly
          aria-label="Filter by priority"
          className="text-status-purple-fg"
          startIcon={
            <span className="flex h-6 w-6 items-center justify-center rounded-pill bg-status-purple-surface">
              <Flag02Icon size={14} />
            </span>
          }
        />
      </Tooltip>
    </div>
  );
}

/** Vertical divider matching Figma (1×26, border/strong color) — uses canonical Divider primitive. */
function ToolbarDivider() {
  return <Divider orientation="vertical" className="!h-[26px] !bg-line-strong" />;  // token-lint-skip: showcase fixed dims for screenshot stability
}

function BothRight() {
  return (
    <div className="flex items-center gap-4">
      <FilterSwatchGroup
        label="Filters:"
        labelPosition="left"
        size="sm"
        swatches={[
          { color: TILE.fulfilled,   selected: true },
          { color: TILE.outstanding },
          { color: TILE.fulfilled },
          { color: TILE.overdue },
        ]}
      />
      <ToolbarDivider />
      <AvatarFlagFilters />
      <Dropdown
        label="Sort:"
        labelPosition="left"
        width="auto"
        trigger={
          <Button variant="secondary" size="xs" endIcon={<ChevronDownIcon size="sm" />}>
            Due Date
          </Button>
        }
      >
        <ActionMenu groups={[{ items: [
          { label: 'Due Date', selected: true },
          { label: 'Priority' },
          { label: 'Created' },
          { label: 'Alphabetical' },
        ]}]} />
      </Dropdown>
    </div>
  );
}

function LeftOnlyLeft() {
  return (
    <div className="flex items-center gap-2">
      <SelectAll />
      <div style={{ width: 220 }}>
        <Search size="xs" value="Search query" onChange={() => {}} onClear={() => {}} currentMatch={0} totalMatches={0} placeholder="Type here…" />
      </div>
      <Button variant="secondary" size="xs">Button</Button>
      <Button variant="secondary" size="xs">Button</Button>
    </div>
  );
}

function RightOnlyRight() {
  return (
    <div className="flex items-center gap-4">
      <FilterSwatchGroup
        label="Filters:"
        labelPosition="left"
        size="sm"
        swatches={[
          { color: TILE['not-started'] },
          { color: TILE['not-started'] },
          { color: TILE['not-started'] },
          { color: TILE['not-started'] },
        ]}
      />
      <ToolbarDivider />
      <AvatarFlagFilters />
      <Dropdown
        label="Sort:"
        labelPosition="left"
        width="auto"
        trigger={
          <Button variant="secondary" size="xs" endIcon={<ChevronDownIcon size="sm" />}>
            Button
          </Button>
        }
      >
        <ActionMenu groups={[{ items: [
          { label: 'Option A' },
          { label: 'Option B' },
        ]}]} />
      </Dropdown>
    </div>
  );
}

export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:51',
      cells: [
        {
          variant: 'Slots=Both', x: 24, y: 24, w: 1440, h: 48,
          expect: {
            // Buttons in order: 2 left action buttons, Avatar filter (renders "A"),
            // Sort dropdown trigger. Flag filter button has no text content.
            buttonLabels: ['+ Create category', '+ Create request', 'A', 'Due Date'],
            swatchCount: 4,
            searchValue: 'Search query',
            searchPlaceholder: 'Search',
          },
        },
        {
          variant: 'Slots=LeftOnly', x: 24, y: 88, w: 1200, h: 48,
          expect: {
            buttonLabels: ['Button', 'Button'],
            swatchCount: 0,
            searchValue: 'Search query',
            searchPlaceholder: 'Type here…',
          },
        },
        {
          variant: 'Slots=RightOnly', x: 24, y: 152, w: 1200, h: 48,
          expect: {
            // RightOnly: Avatar filter ("A"), Sort dropdown trigger ("Button")
            buttonLabels: ['A', 'Button'],
            swatchCount: 4,
          },
        },
      ],
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 1488, height: 224 }}>
      <div className="absolute" data-matrix-cell style={{ left: 24, top: 24, width: 1440 }}>
        <SubToolbar left={<BothLeft />} right={<BothRight />} />
      </div>
      <div className="absolute" data-matrix-cell style={{ left: 24, top: 88, width: 1200 }}>
        <SubToolbar left={<LeftOnlyLeft />} />
      </div>
      <div className="absolute" data-matrix-cell style={{ left: 24, top: 152, width: 1200 }}>
        <SubToolbar right={<RightOnlyRight />} />
      </div>
    </div>
  ),
};
