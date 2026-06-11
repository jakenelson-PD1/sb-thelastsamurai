import { clsx } from 'clsx';
import { Flag02Icon } from '../primitives/icons/Flag02Icon';
import { Tooltip } from '../overlay/Tooltip';
import { iconSize } from '../../tokens/iconSizes';

export type TileStatus = 'not-started' | 'outstanding' | 'fulfilled' | 'overdue';

export interface RequestTile {
  id: string;
  title?: string;
  status: TileStatus;
  isFlagged?: boolean;
}

export interface RequestSection {
  id: string;
  label: string;
  requests: RequestTile[];
}

export interface RequestStatusColorNavProps {
  sections: RequestSection[];
  activeId?: string;
  onRequestClick?: (id: string) => void;
  className?: string;
}

// CSS custom properties — values differ between light and dark via semantic.ts
const STATUS_COLOR_VARS: Record<TileStatus, string> = {
  'not-started': 'var(--color-swatch-not-started)',
  'outstanding': 'var(--color-swatch-outstanding)',
  'fulfilled':   'var(--color-swatch-fulfilled)',
  'overdue':     'var(--color-swatch-overdue)',
};

interface TileProps {
  tile: RequestTile;
  isActive: boolean;
  onRequestClick?: (id: string) => void;
}

function Tile({ tile, isActive, onRequestClick }: TileProps) {
  const btn = (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onRequestClick ? () => onRequestClick(tile.id) : undefined}
      className={clsx(
        'relative h-4 w-4 flex items-center justify-center rounded-control transition-all',
        isActive
          ? 'outline outline-2 outline-[var(--color-action-primary)]'
          : 'opacity-80 hover:opacity-100',
      )}
      style={{ backgroundColor: STATUS_COLOR_VARS[tile.status] }}
    >
      {tile.isFlagged && (
        <Flag02Icon
          size={iconSize.xs}
          className="pointer-events-none text-tile-flag"
          aria-hidden
        />
      )}
    </button>
  );

  return (
    <div className={clsx('relative inline-flex items-center', isActive && 'z-10')}>
      {tile.title
        ? <Tooltip content={tile.isFlagged ? `${tile.title} · High priority` : tile.title}>{btn}</Tooltip>
        : btn
      }
    </div>
  );
}

interface SectionProps {
  section: RequestSection;
  activeId?: string;
  onRequestClick?: (id: string) => void;
}

function Section({ section, activeId, onRequestClick }: SectionProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 shrink-0">
      <div className="bg-elevated rounded-control shadow-card p-1 flex items-center gap-1">
        {section.requests.map((tile) => (
          <Tile
            key={tile.id}
            tile={tile}
            isActive={tile.id === activeId}
            onRequestClick={onRequestClick}
          />
        ))}
      </div>
      <span className="text-label-sm text-secondary whitespace-nowrap">{section.label}</span>
    </div>
  );
}

export function RequestStatusColorNav({
  sections,
  activeId,
  onRequestClick,
  className,
}: RequestStatusColorNavProps) {
  return (
    <div className={clsx('overflow-x-auto py-4 bg-elevated', className)}>
      <div className="flex justify-start gap-4 min-w-max">
        {sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            activeId={activeId}
            onRequestClick={onRequestClick}
          />
        ))}
      </div>
    </div>
  );
}
