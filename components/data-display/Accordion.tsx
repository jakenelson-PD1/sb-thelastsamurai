import { useState } from 'react';
import { clsx } from 'clsx';
import { iconSize } from '../../tokens/iconSizes';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';

export type AccordionSize = 'sm' | 'md' | 'lg';

const headerSizeMap: Record<AccordionSize, string> = {
  sm: 'h-6 px-2 gap-2',
  md: 'h-8 px-3 gap-3',
  lg: 'h-10 px-4 gap-3',
};

const titleSizeMap: Record<AccordionSize, string> = {
  sm: 'text-label-sm',
  md: 'text-body-sm',
  lg: 'text-body-md',
};

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  size?: AccordionSize;
  /** Extra content rendered between the title and the chevron (e.g. avatar stack) */
  extra?: React.ReactNode;
  /** Pin the header with sticky positioning (top-0) while content scrolls */
  sticky?: boolean;
  /** Override the top offset for sticky positioning (default: 'top-0') */
  stickyTop?: string;
  className?: string;
  /**
   * Use bg-surface (light gray) for the header instead of the default bg-canvas (near-white).
   * Use this when the accordion sits inside a surface-colored panel so the header
   * reads as a distinct section divider rather than blending with the page background.
   */
  surface?: boolean;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  size = 'md',
  extra,
  sticky = false,
  stickyTop = 'top-0',
  className,
  surface: _surface = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    // Outer wrapper owns the top + bottom border so standalone items are fully framed
    <div className={clsx('w-full border-t border-b border-line', className)}>
      {/* Header */}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={clsx(
          'relative flex w-full items-center border-l-2 border-transparent',
          headerSizeMap[size],
          'select-none text-left',
          'bg-recessed hover:bg-accordion-hover',
          'transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-action-primary',
          sticky && `sticky ${stickyTop} z-20`,
        )}
      >
        <span className={clsx('font-semibold text-fg-heading', titleSizeMap[size])}>
          {title}
        </span>
        {extra && <span className="flex items-center gap-1 ml-2">{extra}</span>}
        <span className="flex-1" />
        <ChevronDownIcon
          size={iconSize.sm}
          className={clsx(
            'shrink-0 text-fg-muted transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>

      {/* Animated content panel — border-t separates header from content when open */}
      <div
        className="grid transition-[grid-template-rows] duration-200 ease-in-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className={clsx('overflow-hidden', open && 'border-t border-line')}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function Accordion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    // [&>*+*]:border-t-0 collapses the redundant top border on items 2+ so
    // consecutive items share a single 1px line instead of a 2px double border.
    <div className={clsx('[&>*+*]:border-t-0', className)}>
      {children}
    </div>
  );
}
