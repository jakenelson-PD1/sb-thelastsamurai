import { clsx } from 'clsx';
import { useState } from 'react';

export interface PopoverProps {
  trigger: React.ReactElement;
  children: React.ReactNode;
  className?: string;
}

export function Popover({ trigger, children, className }: PopoverProps) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-flex">
      <span onClick={() => setOpen((v) => !v)}>{trigger}</span>
      {open && (
        <div
          className={clsx(
            'absolute top-full left-0 z-10 mt-1 min-w-48 rounded-card border border-neutral-200 bg-white p-3 shadow-card',
            className,
          )}
        >
          {children}
        </div>
      )}
    </span>
  );
}
