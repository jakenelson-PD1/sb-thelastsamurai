import { PanelResizeHandle, PanelResizeHandleProps } from 'react-resizable-panels';
import clsx from 'clsx';

export type ResizeHandleProps = Omit<PanelResizeHandleProps, 'className'> & {
  className?: string;
};

export function ResizeHandle({ className, ...props }: ResizeHandleProps) {
  return (
    <PanelResizeHandle
      className={clsx(
        'relative flex w-1 items-center justify-center bg-line',
        'hover:bg-action-primary data-[resize-handle-active]:bg-action-primary',
        'group transition-colors',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-0.5 opacity-0 group-hover:opacity-100 data-[resize-handle-active]:opacity-100 transition-opacity">
        <span className="h-1 w-1 rounded-full bg-fg-muted" />
        <span className="h-1 w-1 rounded-full bg-fg-muted" />
        <span className="h-1 w-1 rounded-full bg-fg-muted" />
      </div>
    </PanelResizeHandle>
  );
}
