import { clsx } from 'clsx';

export interface Compass03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Compass03Icon({ size = 20, className, ...props }: Compass03IconProps) {
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
      <g clipPath="url(#compass03-clip0_118_50803)">
<path d="M10 18.3337C14.6024 18.3337 18.3334 14.6027 18.3334 10.0003C18.3334 5.39795 14.6024 1.66699 10 1.66699C5.39765 1.66699 1.66669 5.39795 1.66669 10.0003C1.66669 14.6027 5.39765 18.3337 10 18.3337Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.2684 6.88857C12.6756 6.75287 12.8791 6.68501 13.0145 6.73329C13.1323 6.7753 13.225 6.868 13.267 6.9858C13.3153 7.12116 13.2474 7.32473 13.1117 7.73185L11.8721 11.4507C11.8334 11.5667 11.8141 11.6246 11.7812 11.6728C11.752 11.7154 11.7152 11.7523 11.6725 11.7814C11.6244 11.8144 11.5664 11.8337 11.4504 11.8724L7.7316 13.1119C7.32449 13.2477 7.12092 13.3155 6.98555 13.2673C6.86775 13.2253 6.77505 13.1325 6.73304 13.0148C6.68477 12.8794 6.75263 12.6759 6.88833 12.2687L8.12795 8.54985C8.1666 8.43385 8.18593 8.37594 8.21886 8.32776C8.24803 8.28512 8.28488 8.24827 8.32752 8.21911C8.37569 8.18617 8.43361 8.16685 8.54961 8.1282L12.2684 6.88857Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="compass03-clip0_118_50803">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
