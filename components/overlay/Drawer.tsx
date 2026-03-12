import { clsx } from 'clsx';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: 'left' | 'right';
  title?: string;
  children?: React.ReactNode;
}

export function Drawer({ open, onClose, side = 'right', title, children }: DrawerProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        className={clsx(
          'relative z-10 flex w-80 flex-col bg-elevated shadow-modal',
          side === 'right' ? 'ml-auto' : 'mr-auto',
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          {title && <h2 className="text-base font-semibold text-fg-primary">{title}</h2>}
          <button
            onClick={onClose}
            className="ml-auto text-fg-muted hover:text-fg-secondary"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}
