import { clsx } from 'clsx';

export interface VideoRecorderOffIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function VideoRecorderOffIcon({ size = 20, className, ...props }: VideoRecorderOffIconProps) {
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
      <g clipPath="url(#videorecorderoff-clip0_118_44737)">
<path d="M4.16666 4.1665C2.78596 4.1665 1.66666 5.2858 1.66666 6.6665V13.3332C1.66666 14.7139 2.78596 15.8332 4.16666 15.8332H11.6667C12.7939 15.8332 13.7468 15.0872 14.0587 14.0619M14.1667 9.99984L17.1952 6.97125C17.5522 6.61426 17.7307 6.43577 17.884 6.42371C18.0169 6.41325 18.1469 6.46707 18.2335 6.56849C18.3333 6.68538 18.3333 6.9378 18.3333 7.44265V12.557C18.3333 13.0618 18.3333 13.3143 18.2335 13.4312C18.1469 13.5326 18.0169 13.5864 17.884 13.576C17.7307 13.5639 17.5522 13.3854 17.1952 13.0284L14.1667 9.99984ZM14.1667 9.99984V8.1665C14.1667 6.76637 14.1667 6.0663 13.8942 5.53153C13.6545 5.06112 13.2721 4.67867 12.8017 4.43899C12.2668 4.1665 11.5668 4.1665 10.1667 4.1665H7.91666M1.66666 1.6665L18.3333 18.3332" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="videorecorderoff-clip0_118_44737">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
