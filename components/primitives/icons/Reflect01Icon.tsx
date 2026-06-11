import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Reflect01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Reflect01Icon({ size = 'md', className, ...props }: Reflect01IconProps) {
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
      <path d="M9.99999 2.5V5M9.99999 8.75V11.25M9.99999 15V17.5M2.7398 6.65882L6.39638 9.47158C6.63013 9.65142 6.747 9.74125 6.789 9.85083C6.82581 9.94692 6.82581 10.0531 6.789 10.1492C6.747 10.2587 6.63013 10.3486 6.39638 10.5284L2.7398 13.3412C2.39511 13.6063 2.22278 13.7389 2.07821 13.7371C1.95245 13.7356 1.83411 13.6773 1.7562 13.5786C1.66666 13.4651 1.66666 13.2476 1.66666 12.8128V7.18724C1.66666 6.75238 1.66666 6.53496 1.7562 6.42145C1.83411 6.3227 1.95245 6.26443 2.07821 6.26289C2.22278 6.26112 2.39511 6.39369 2.7398 6.65882ZM17.2602 6.65882L13.6036 9.47158C13.3698 9.65142 13.253 9.74125 13.211 9.85083C13.1742 9.94692 13.1742 10.0531 13.211 10.1492C13.253 10.2587 13.3698 10.3486 13.6036 10.5284L17.2602 13.3412C17.6048 13.6063 17.7772 13.7389 17.9217 13.7371C18.0476 13.7356 18.1659 13.6773 18.2437 13.5786C18.3333 13.4651 18.3333 13.2476 18.3333 12.8128V7.18724C18.3333 6.75238 18.3333 6.53496 18.2437 6.42145C18.1659 6.3227 18.0476 6.26443 17.9217 6.26289C17.7772 6.26112 17.6048 6.39369 17.2602 6.65882Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
