import { clsx } from 'clsx';

export interface FileShield02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function FileShield02Icon({ size = 20, className, ...props }: FileShield02IconProps) {
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
      <path d="M11.6666 9.16699H6.66665M8.33331 12.5003H6.66665M13.3333 5.83366H6.66665M16.6666 8.33366V5.66699C16.6666 4.26686 16.6666 3.56679 16.3941 3.03202C16.1545 2.56161 15.7721 2.17916 15.3016 1.93948C14.7668 1.66699 14.0668 1.66699 12.6666 1.66699H7.33331C5.93318 1.66699 5.23311 1.66699 4.69834 1.93948C4.22793 2.17916 3.84548 2.56161 3.6058 3.03202C3.33331 3.56679 3.33331 4.26686 3.33331 5.66699V14.3337C3.33331 15.7338 3.33331 16.4338 3.6058 16.9687C3.84548 17.4391 4.22793 17.8215 4.69834 18.0612C5.23311 18.3337 5.93318 18.3337 7.33331 18.3337H10.4166M15 17.5003C15 17.5003 17.5 16.3087 17.5 14.5213V12.4361L15.677 11.7847C15.239 11.6277 14.76 11.6277 14.322 11.7847L12.5 12.4361V14.5213C12.5 16.3087 15 17.5003 15 17.5003Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
