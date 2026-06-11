import { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';

export type AccordionSize = 'sm' | 'md' | 'lg';

const headerSizeMap: Record<AccordionSize, string> = {
  sm: 'h-6 px-2 gap-2',
  md: 'h-8 px-3 gap-3',
  lg: 'h-10 px-4 gap-3',
};

// Each entry is a complete, valid Type Scale style (size + weight), matching the
// Figma Accordion ComponentSet's title per size:
//   sm → Label SM (11px Medium)
//   md → Body SM Medium (13px Medium)
//   lg → Body MD Strong (14px Semibold)
// A blanket `font-semibold` here previously produced invalid styles
// ("Body SM Semibold", "Label SM Semibold") that don't exist in the Type Scale.
const titleSizeMap: Record<AccordionSize, string> = {
  sm: 'text-label-sm font-medium',
  md: 'text-body-sm font-medium',
  lg: 'text-body-md font-semibold',
};

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  size?: AccordionSize;
  /**
   * Header actions slot — content rendered between the title and the chevron.
   * Use this for any controls that belong on the right side of the header:
   * buttons, dropdowns, inputs, avatar stacks, badges, or any combination
   * (wrap multiple in a fragment).
   */
  extra?: React.ReactNode;
  /** Hide the trailing chevron icon. Mirrors Figma's `Chevron=Hide` variant. */
  showChevron?: boolean;
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
  showChevron = true,
  sticky = false,
  stickyTop = 'top-0',
  className,
  surface: _surface = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    // Borderless — the accordion has no frame of its own; consumers add
    // separators/borders around it if needed.
    <div className={clsx('w-full', className)}>
      {/* Header */}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={clsx(
          'relative flex w-full items-center border-l-2 border-transparent',
          headerSizeMap[size],
          'select-none text-left',
          'bg-recessed hover:bg-pressed',
          'transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-action-primary',
          sticky && `sticky ${stickyTop} z-20`,
        )}
      >
        <span className={clsx('text-primary', titleSizeMap[size])}>
          {title}
        </span>
        {extra && <span className="flex items-center gap-1 ml-2">{extra}</span>}
        <span className="flex-1" />
        {showChevron && (
          <ChevronDownIcon
            size="sm"
            className={clsx(
              'shrink-0 text-muted transition-transform duration-200',
              open && 'rotate-180',
            )}
          />
        )}
      </button>

      {/* Animated content panel — border-t separates header from content when open */}
      <div
        className="grid transition-[grid-template-rows] duration-200 ease-in-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
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
    // Borderless accordion group — items have no frame of their own.
    <div className={clsx(className)}>
      {children}
    </div>
  );
}
