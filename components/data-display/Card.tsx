import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg';
}

const paddingMap = { sm: 'p-3', md: 'p-4', lg: 'p-6' } as const;

export function Card({ padding = 'md', className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx('rounded-card border border-neutral-200 bg-white shadow-card', paddingMap[padding], className)}
      {...props}
    >
      {children}
    </div>
  );
}
