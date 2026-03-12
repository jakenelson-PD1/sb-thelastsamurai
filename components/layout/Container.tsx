import { clsx } from 'clsx';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const maxWidthMap = {
  sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg',
  xl: 'max-w-xl', '2xl': 'max-w-2xl', full: 'max-w-full',
} as const;

export function Container({ maxWidth = '2xl', className, children, ...props }: ContainerProps) {
  return (
    <div className={clsx('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidthMap[maxWidth], className)} {...props}>
      {children}
    </div>
  );
}
