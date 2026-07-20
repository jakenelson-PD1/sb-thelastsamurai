import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { clsx } from 'clsx';
import { Button } from '../primitives/Button';

export interface ToastProps {
  message: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'undo';
  /** Undo variant — fires when the user clicks Undo. */
  onUndo?: () => void;
  /** Undo variant — total time in ms before the toast expires. Default 30000. */
  duration?: number;
  /** Undo variant — fires when the countdown reaches zero. */
  onExpire?: () => void;
  /** Undo variant — show the "· Ns" live counter in the button. Default true. */
  showCountdown?: boolean;
  /** Undo variant — dismiss without undoing (fires on Esc). */
  onDismiss?: () => void;
  className?: string;
}

const variantMap = {
  default: 'bg-primary text-canvas',
  success: 'bg-status-success text-on-accent',
  error:   'bg-status-error text-on-accent',
  undo:    '',
} as const;

export function Toast({
  message,
  description,
  variant = 'default',
  onUndo,
  duration = 30000,
  onExpire,
  showCountdown = true,
  onDismiss,
  className,
}: ToastProps) {
  if (variant === 'undo') {
    return (
      <UndoToast
        message={message}
        description={description}
        onUndo={onUndo}
        duration={duration}
        onExpire={onExpire}
        showCountdown={showCountdown}
        onDismiss={onDismiss}
        className={className}
      />
    );
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={clsx(
        'flex flex-col gap-1 rounded-card px-4 py-3 shadow-modal text-body-md max-w-sm',
        variantMap[variant],
        className,
      )}
    >
      <p className="font-medium">{message}</p>
      {description && <p className="opacity-80">{description}</p>}
    </div>
  );
}

interface UndoToastProps {
  message: string;
  description?: string;
  onUndo?: () => void;
  duration: number;
  onExpire?: () => void;
  showCountdown: boolean;
  onDismiss?: () => void;
  className?: string;
}

function UndoToast({
  message,
  description,
  onUndo,
  duration,
  onExpire,
  showCountdown,
  onDismiss,
  className,
}: UndoToastProps) {
  const [remaining, setRemaining] = useState(() => Math.ceil(duration / 1000));
  const expiredRef = useRef(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          window.clearInterval(id);
          if (!expiredRef.current) {
            expiredRef.current = true;
            onExpire?.();
          }
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [onExpire]);

  const handleUndo = () => {
    expiredRef.current = true;
    onUndo?.();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onDismiss?.();
    }
  };

  return (
    <div
      role="status"
      aria-live="polite"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      className={clsx(
        'dark',
        'flex items-center gap-4 rounded-card border border-line bg-elevated px-4 py-3 shadow-modal',
        className,
      )}
    >
      <div className="flex min-w-0 flex-col">
        <p className="text-body-md text-primary font-medium truncate">{message}</p>
        {showCountdown ? (
          <p className="text-body-sm text-secondary truncate" aria-live="off">
            {remaining}s to undo
          </p>
        ) : description ? (
          <p className="text-body-sm text-secondary truncate">{description}</p>
        ) : null}
      </div>
      <Button
        variant="secondary"
        size="sm"
        onClick={handleUndo}
        aria-label="Undo delete"
        className="!border-line-on-inverse"
      >
        Undo
      </Button>
    </div>
  );
}

export interface DeleteToastArgs {
  itemName: string;
  onUndo: () => void;
  duration?: number;
  onExpire?: () => void;
  onDismiss?: () => void;
}

export function deleteToast({ itemName, onUndo, duration, onExpire, onDismiss }: DeleteToastArgs) {
  return (
    <Toast
      variant="undo"
      message={`Deleted "${itemName}."`}
      onUndo={onUndo}
      duration={duration}
      onExpire={onExpire}
      onDismiss={onDismiss}
    />
  );
}

export interface BulkDeleteToastArgs {
  count: number;
  onUndo: () => void;
  duration?: number;
  onExpire?: () => void;
  onDismiss?: () => void;
}

export function bulkDeleteToast({ count, onUndo, duration, onExpire, onDismiss }: BulkDeleteToastArgs) {
  return (
    <Toast
      variant="undo"
      message={`Deleted ${count} ${count === 1 ? 'item' : 'items'}.`}
      onUndo={onUndo}
      duration={duration}
      onExpire={onExpire}
      onDismiss={onDismiss}
    />
  );
}
