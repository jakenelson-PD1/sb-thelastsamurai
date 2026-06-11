import { Separator, SeparatorProps } from 'react-resizable-panels';
import clsx from 'clsx';

export type ResizeHandleProps = Omit<SeparatorProps, 'className'> & {
  className?: string;
};

export function ResizeHandle({ className, ...props }: ResizeHandleProps) {
  return (
    <Separator
      className={clsx(
        'relative flex w-px items-center justify-center bg-line',
        'hover:bg-action-primary data-[resize-handle-active]:bg-action-primary',
        'group transition-colors',
        className,
      )}
      {...props}
    >
      <div className="absolute flex flex-col items-center gap-1 opacity-0 group-hover:opacity-100 data-[resize-handle-active]:opacity-100 transition-opacity z-10">
        <span className="h-1 w-1 rounded-full bg-on-accent" />
        <span className="h-1 w-1 rounded-full bg-on-accent" />
        <span className="h-1 w-1 rounded-full bg-on-accent" />
      </div>
    </Separator>
  );
}
