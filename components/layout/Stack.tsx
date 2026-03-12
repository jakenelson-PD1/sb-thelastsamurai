import { clsx } from 'clsx';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col';
  gap?: 1 | 2 | 3 | 4 | 6 | 8;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
}

export function Stack({ direction = 'col', gap = 4, align = 'stretch', justify = 'start', className, children, ...props }: StackProps) {
  return (
    <div
      className={clsx(
        'flex',
        direction === 'row' ? 'flex-row' : 'flex-col',
        `gap-${gap}`,
        align === 'start' ? 'items-start' : align === 'center' ? 'items-center' : align === 'end' ? 'items-end' : 'items-stretch',
        justify === 'start' ? 'justify-start' : justify === 'center' ? 'justify-center' : justify === 'end' ? 'justify-end' : 'justify-between',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
