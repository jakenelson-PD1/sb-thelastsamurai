import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Umbrella01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Umbrella01Icon({ size = 'md', className, ...props }: Umbrella01IconProps) {
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
      <g clipPath="url(#umbrella01-clip0_118_52318)">
<path d="M14.1666 16.167C14.1666 17.3636 13.2339 18.3337 12.0833 18.3337C10.9327 18.3337 9.99998 17.3636 9.99998 16.167V10.0003M1.77187 8.67224C2.40788 4.70108 5.84959 1.66699 9.99998 1.66699C14.1503 1.66699 17.592 4.70108 18.2281 8.67224C18.2901 9.05982 18.3211 9.25358 18.2432 9.46058C18.1812 9.62533 18.0294 9.80333 17.8766 9.89066C17.6845 10.0003 17.4563 10.0003 17 10.0003H2.99996C2.54358 10.0003 2.3154 10.0003 2.12332 9.89066C1.97051 9.80333 1.8187 9.62533 1.75669 9.46058C1.67876 9.25358 1.7098 9.05982 1.77187 8.67224Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="umbrella01-clip0_118_52318">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
