import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface GitBranch01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function GitBranch01Icon({ size = 'md', className, ...props }: GitBranch01IconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M2.5 2.5V11C2.5 12.4002 2.5 13.1002 2.77248 13.635C3.01217 14.1054 3.39462 14.4878 3.86503 14.7275C4.3998 15 5.09987 15 6.5 15H12.5M12.5 15C12.5 16.3807 13.6192 17.5 15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6192 16.3807 12.5 15 12.5C13.6192 12.5 12.5 13.6192 12.5 15ZM2.5 6.66667H12.5M12.5 6.66667C12.5 8.04738 13.6192 9.16667 15 9.16667C16.3807 9.16667 17.5 8.04737 17.5 6.66667C17.5 5.28596 16.3807 4.16667 15 4.16667C13.6192 4.16667 12.5 5.28596 12.5 6.66667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
