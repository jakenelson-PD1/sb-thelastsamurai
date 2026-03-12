import { clsx } from 'clsx';

export interface ModalAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: ModalAction[];
  className?: string;
}

export function Modal({ open, onClose, title, children, footer, className }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        className={clsx(
          'relative z-10 flex w-full max-w-md flex-col rounded-lg bg-elevated shadow-modal overflow-hidden',
          className,
        )}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <h2 id="modal-title" className="text-lg font-semibold text-fg-primary">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-fg-muted hover:text-fg-secondary transition-colors"
              aria-label="Close"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 text-sm text-fg-secondary">
          {children}
        </div>

        {/* Footer */}
        {footer && footer.length > 0 && (
          <div className="flex items-center justify-end gap-3 border-t border-line px-6 py-4">
            {footer.map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={action.onClick}
                className={clsx(
                  'inline-flex h-9 items-center justify-center rounded px-4 text-sm font-medium transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus',
                  (!action.variant || action.variant === 'secondary') &&
                    'border border-line bg-elevated text-fg-primary hover:bg-surface',
                  action.variant === 'primary' &&
                    'bg-action-primary text-fg-on-accent hover:bg-action-primary-hover',
                  action.variant === 'danger' &&
                    'bg-status-error text-fg-on-accent hover:bg-status-error-hover',
                )}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
