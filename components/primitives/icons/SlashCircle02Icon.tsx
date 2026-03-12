import { clsx } from 'clsx';

export interface SlashCircle02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SlashCircle02Icon({ size = 20, className, ...props }: SlashCircle02IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#slashcircle02-clip0_118_37446)">
<path d="M4.10835 4.10832L15.8917 15.8917M15.8916 4.10831L4.1083 15.8917M18.3334 9.99999C18.3334 14.6023 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6023 1.66669 9.99999C1.66669 5.39761 5.39765 1.66666 10 1.66666C14.6024 1.66666 18.3334 5.39761 18.3334 9.99999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="slashcircle02-clip0_118_37446">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
