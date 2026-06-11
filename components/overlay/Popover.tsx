import { clsx } from 'clsx';
import { useState } from 'react';

export interface PopoverProps {
  /** Optional trigger — required for interactive use, omitted in inline mode. */
  trigger?: React.ReactElement;
  children: React.ReactNode;
  /** Controlled visibility. When provided, overrides click-driven visibility. */
  open?: boolean;
  /**
   * Render the popover panel inline (no trigger, no absolute positioning).
   * Used by Matrix / showcase stories where multiple popovers sit side-by-side
   * pinned at exact Figma coords. Mirrors the same affordance on Drawer + Modal.
   */
  inline?: boolean;
  className?: string;
}

const PANEL_CLASSES = 'min-w-48 rounded-card border border-line bg-elevated p-3 shadow-card';

export function Popover({ trigger, children, open: openProp, inline = false, className }: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = openProp ?? internalOpen;

  // Inline mode — render just the canonical panel at its container's
  // natural flow position. No trigger, no absolute positioning, so Matrix
  // cells can pin the popover at Figma's exact (x, y, w, h).
  if (inline) {
    return <div className={clsx(PANEL_CLASSES, className)}>{children}</div>;
  }

  return (
    <span className="relative inline-flex">
      {trigger && <span onClick={() => setInternalOpen((v) => !v)}>{trigger}</span>}
      {isOpen && (
        <div className={clsx('absolute top-full left-0 z-10 mt-1', PANEL_CLASSES, className)}>
          {children}
        </div>
      )}
    </span>
  );
}
