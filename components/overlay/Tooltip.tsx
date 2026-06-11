import { clsx } from 'clsx';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface TooltipProps {
  content: string;
  /**
   * Trigger element. Required for interactive use (hover-driven). Optional in
   * `inline` mode — if omitted, the bubble renders standalone at flow position,
   * which is the mode pixel-pinned Matrix stories use.
   */
  children?: React.ReactElement;
  /** Which side of the trigger the tooltip appears on. Default: 'top' */
  side?: 'top' | 'bottom';
  /** Controlled visibility. When provided, overrides hover-driven visibility. */
  open?: boolean;
  /** Render the bubble as a sibling instead of portalling to document.body.
   *  Used for static matrix/showcase rendering where multiple tooltips appear at once. */
  inline?: boolean;
  className?: string;
}

// Bubble visual — shared between trigger-anchored mode and standalone (inline,
// no-children) mode so a single tweak propagates to both. Mirrors the Figma
// `Tooltip` ComponentSet (746:6): bg=fg/primary, text=bg/canvas, radius=card,
// padding scale/2 (px) + scale/1 (py), Label MD 12px.
const BUBBLE_BASE =
  'whitespace-nowrap rounded-card bg-primary px-2 py-1 text-label-md text-canvas shadow-popover';

export function Tooltip({ content, children, side = 'top', open: openProp, inline = false, className }: TooltipProps) {
  const [hovered, setHovered] = useState(false);
  const visible = openProp ?? hovered;
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);

  // Standalone mode — inline + no trigger. Render just the canonical bubble at
  // flow position so Matrix cells can pixel-pin it without a wrapper.
  if (inline && !children) {
    return (
      <span role="tooltip" className={clsx('inline-flex', BUBBLE_BASE, className)}>
        {content}
      </span>
    );
  }

  const handleMouseEnter = () => {
    if (!inline && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPos({
        x: rect.left + rect.width / 2,
        y: side === 'bottom' ? rect.bottom : rect.top,
      });
    }
    setHovered(true);
  };

  // After the bubble renders, nudge it back inside the viewport horizontally (portal mode only)
  useEffect(() => {
    if (inline || !visible || !bubbleRef.current) return;
    const rect = bubbleRef.current.getBoundingClientRect();
    const margin = 8;
    if (rect.left < margin) {
      bubbleRef.current.style.marginLeft = `${margin - rect.left}px`;
    } else if (rect.right > window.innerWidth - margin) {
      bubbleRef.current.style.marginLeft = `-${rect.right - (window.innerWidth - margin)}px`;
    }
  }, [visible, pos, inline]);

  const bubbleCommon = (
    <span
      ref={bubbleRef}
      role="tooltip"
      className={clsx(
        'pointer-events-none',
        BUBBLE_BASE,
        inline
          ? 'absolute left-1/2 -translate-x-1/2'
          : 'fixed z-[9999]',
        inline && side === 'top'    && 'bottom-full mb-1',
        inline && side === 'bottom' && 'top-full mt-1',
        className,
      )}
      style={inline ? undefined : {
        left: pos.x,
        top: side === 'bottom' ? pos.y + 4 : pos.y - 4,
        transform: side === 'bottom' ? 'translateX(-50%)' : 'translate(-50%, -100%)',
      }}
    >
      {content}
    </span>
  );

  const bubble = visible ? bubbleCommon : null;

  return (
    <span
      ref={triggerRef}
      className="relative inline-flex items-center leading-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {bubble && (inline ? bubble : createPortal(bubble, document.body))}
    </span>
  );
}
