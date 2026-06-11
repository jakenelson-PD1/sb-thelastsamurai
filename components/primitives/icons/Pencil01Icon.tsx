import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Pencil01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Pencil01Icon({ size = 'md', className, ...props }: Pencil01IconProps) {
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
      <path d="M2.08334 17.9166L6.70773 16.138C7.00352 16.0242 7.15141 15.9673 7.28978 15.8931C7.41268 15.8271 7.52984 15.7509 7.64004 15.6654C7.76411 15.5692 7.87615 15.4571 8.10024 15.233L17.5 5.83327C18.4205 4.91279 18.4205 3.4204 17.5 2.49992C16.5796 1.57946 15.0872 1.57945 14.1667 2.49992L4.76691 11.8997C4.54283 12.1237 4.43078 12.2358 4.3345 12.3599C4.24898 12.4701 4.17284 12.5872 4.10687 12.7102C4.0326 12.8485 3.97572 12.9964 3.86195 13.2922L2.08334 17.9166ZM2.08334 17.9166L3.79844 13.4574C3.92118 13.1383 3.98254 12.9787 4.08779 12.9057C4.17978 12.8418 4.29359 12.8177 4.40359 12.8387C4.52945 12.8627 4.65033 12.9836 4.89208 13.2253L6.77465 15.1079C7.0164 15.3497 7.13728 15.4705 7.16131 15.5963C7.18232 15.7063 7.15817 15.8202 7.09429 15.9122C7.02122 16.0174 6.86167 16.0787 6.54257 16.2015L2.08334 17.9166Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
