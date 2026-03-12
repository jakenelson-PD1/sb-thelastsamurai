import { clsx } from 'clsx';

export interface PauseCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PauseCircleIcon({ size = 20, className, ...props }: PauseCircleIconProps) {
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
      <g clipPath="url(#pausecircle-clip0_118_44103)">
<path d="M7.91666 12.4998V7.49984M12.0833 12.4998V7.49984M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 9.99999 18.3332C5.39761 18.3332 1.66666 14.6022 1.66666 9.99984C1.66666 5.39746 5.39761 1.6665 9.99999 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="pausecircle-clip0_118_44103">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
