import { clsx } from 'clsx';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which axis to make scrollable. Default: 'y' */
  axis?: 'y' | 'x' | 'both';
}

const axisMap = {
  y:    'overflow-y-auto overflow-x-hidden',
  x:    'overflow-x-auto overflow-y-hidden',
  both: 'overflow-auto',
} as const;

/**
 * Scrollable content area with themed scrollbar.
 * Replaces raw `overflow-y-auto` usage throughout panels.
 *
 * The scrollbar color is controlled by `--color-surface-canvas-300` so it
 * adapts to light/dark mode automatically.
 *
 * @example
 * <ScrollArea className="flex-1">…long content…</ScrollArea>
 * <ScrollArea axis="x">…wide table…</ScrollArea>
 */
export function ScrollArea({ axis = 'y', className, children, ...props }: ScrollAreaProps) {
  return (
    <div
      className={clsx('scroll-area', axisMap[axis], className)}
      {...props}
    >
      {children}
    </div>
  );
}
