import { clsx } from 'clsx';
import { useEffect, useRef, useState } from 'react';

export interface DropdownProps {
  trigger: React.ReactElement;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: 'left' | 'right';
  width?: 'trigger' | 'auto';
  label?: string;
  /**
   * Where the label sits relative to the trigger.
   * - `top` (default): stacked above the trigger.
   * - `left`: inline to the left of the trigger.
   * - `right`: inline to the right of the trigger.
   * - `none`: no label is rendered (equivalent to omitting `label`).
   * Omit `label` to render no label.
   */
  labelPosition?: 'top' | 'left' | 'right' | 'none';
  className?: string;
}

export function Dropdown({
  trigger,
  children,
  open: controlledOpen,
  onOpenChange,
  align = 'left',
  width = 'trigger',
  label,
  labelPosition = 'top',
  className,
}: DropdownProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [resolvedAlign, setResolvedAlign] = useState<'left' | 'right'>(align);

  const setOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  // Auto-flip alignment if menu would overflow viewport
  useEffect(() => {
    if (!open || !menuRef.current) return;
    const rect = menuRef.current.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      setResolvedAlign('right');
    } else {
      setResolvedAlign(align);
    }
  }, [open, align]);

  // `labelPosition='none'` forces the label off even when `label` is provided —
  // mirrors the Figma `LabelPosition=none` variant for surface parity.
  const showLabel = labelPosition !== 'none' && !!label;
  const isInline = showLabel && (labelPosition === 'left' || labelPosition === 'right');
  const labelEl = showLabel ? (
    <span className="whitespace-nowrap text-body-md text-primary">{label}</span>
  ) : null;
  const triggerWrapper = (
    <div ref={containerRef} className="relative w-full">
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div
          ref={menuRef}
          className={clsx(
            'absolute top-full z-50 mt-1',
            resolvedAlign === 'right' ? 'right-0' : 'left-0',
            width === 'trigger' ? 'w-full' : 'w-max',
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className={clsx(isInline ? 'inline-flex items-center gap-2' : 'flex flex-col gap-1')}>
      {labelEl && labelPosition !== 'right' && labelEl}
      {triggerWrapper}
      {labelEl && labelPosition === 'right' && labelEl}
    </div>
  );
}
