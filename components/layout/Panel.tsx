import { Panel as RPPanel, PanelProps as RPPanelProps } from 'react-resizable-panels';
import { X } from 'lucide-react';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type PanelProps = Omit<RPPanelProps, 'children'> & {
  children?: ReactNode;
  className?: string;
  closeable?: boolean;
  onClose?: () => void;
  title?: string;
};

export function Panel({ children, className, closeable, onClose, title, ...props }: PanelProps) {
  const hasHeader = title !== undefined || closeable;

  return (
    <RPPanel className={clsx('flex flex-col', className)} {...props}>
      {hasHeader && (
        <div className="flex items-center justify-between border-b border-line px-3 py-2">
          {title && (
            <span className="text-label-sm font-semibold text-fg-secondary">{title}</span>
          )}
          {!title && <span />}
          {closeable && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center rounded text-fg-muted hover:text-fg-primary transition-colors"
              aria-label="Close panel"
            >
              <X size={14} />
            </button>
          )}
        </div>
      )}
      <div className="flex-1 overflow-auto">{children}</div>
    </RPPanel>
  );
}
