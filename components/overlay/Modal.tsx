import { clsx } from 'clsx';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        className={clsx(
          'relative z-10 w-full max-w-md rounded-modal bg-white p-6 shadow-modal',
          className,
        )}
      >
        {title && <h2 id="modal-title" className="mb-4 text-lg font-semibold text-neutral-900">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
