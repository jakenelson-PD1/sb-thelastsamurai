import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CpuChip02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CpuChip02Icon({ size = 'md', className, ...props }: CpuChip02IconProps) {
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
      <g clipPath="url(#cpuchip02-clip0_118_48590)">
<path d="M7.49999 1.6665V4.1665M12.5 1.6665V4.1665M7.49999 15.8332V18.3332M12.5 15.8332V18.3332M15.8333 7.49984H18.3333M15.8333 11.6665H18.3333M1.66666 7.49984H4.16666M1.66666 11.6665H4.16666M8.16666 15.8332H11.8333C13.2335 15.8332 13.9335 15.8332 14.4683 15.5607C14.9387 15.321 15.3212 14.9386 15.5608 14.4682C15.8333 13.9333 15.8333 13.2333 15.8333 11.8332V8.1665C15.8333 6.76637 15.8333 6.0663 15.5608 5.53153C15.3212 5.06112 14.9387 4.67867 14.4683 4.43899C13.9335 4.1665 13.2335 4.1665 11.8333 4.1665H8.16666C6.76652 4.1665 6.06646 4.1665 5.53168 4.43899C5.06127 4.67867 4.67882 5.06112 4.43914 5.53153C4.16666 6.0663 4.16666 6.76637 4.16666 8.1665V11.8332C4.16666 13.2333 4.16666 13.9333 4.43914 14.4682C4.67882 14.9386 5.06127 15.321 5.53168 15.5607C6.06646 15.8332 6.76652 15.8332 8.16666 15.8332Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cpuchip02-clip0_118_48590">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
