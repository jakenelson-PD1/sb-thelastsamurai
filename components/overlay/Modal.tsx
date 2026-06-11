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
  /**
   * Whole-modal semantic variant.
   * - `default`: standard modal with a primary action.
   * - `destructive`: confirms a destructive operation. The last footer action
   *    defaults to `danger` styling unless explicitly set.
   */
  variant?: 'default' | 'destructive';
  /** Render the modal panel inline (no fixed overlay, no scrim).
   *  Used for matrix/showcase rendering where multiple modals appear at once. */
  inline?: boolean;
  children?: React.ReactNode;
  footer?: ModalAction[];
  className?: string;
}

export function Modal({ open, onClose, title, variant = 'default', inline = false, children, footer, className }: ModalProps) {
  if (!open) return null;
  // For destructive modals, the trailing action defaults to 'danger' when its variant is unset.
  const effectiveFooter = footer && variant === 'destructive'
    ? footer.map((a, i) => (i === footer.length - 1 && !a.variant ? { ...a, variant: 'danger' as const } : a))
    : footer;
  const panel = (
      <div
        role="dialog"
        aria-modal={!inline}
        aria-labelledby={title ? 'modal-title' : undefined}
        className={clsx(
          'flex w-full max-w-md flex-col rounded-modal bg-elevated shadow-modal overflow-hidden',
          !inline && 'relative z-10',
          className,
        )}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <h2 id="modal-title" className="text-heading-md font-semibold text-primary">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-muted hover:text-secondary transition-colors"
              aria-label="Close"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 text-body-md text-secondary">
          {children}
        </div>

        {/* Footer */}
        {effectiveFooter && effectiveFooter.length > 0 && (
          <div className="flex items-center justify-end gap-3 border-t border-line px-6 py-4">
            {effectiveFooter.map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={action.onClick}
                className={clsx(
                  'inline-flex h-9 items-center justify-center rounded-control px-4 text-body-md font-medium transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus',
                  (!action.variant || action.variant === 'secondary') &&
                    'border border-line bg-elevated text-primary hover:bg-surface',
                  action.variant === 'primary' &&
                    'bg-action-primary text-on-accent hover:bg-action-primary-hover',
                  action.variant === 'danger' &&
                    'bg-action-danger text-on-accent hover:bg-action-danger-hover',
                )}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
  );
  if (inline) return panel;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-scrim" onClick={onClose} aria-hidden="true" />
      {panel}
    </div>
  );
}
