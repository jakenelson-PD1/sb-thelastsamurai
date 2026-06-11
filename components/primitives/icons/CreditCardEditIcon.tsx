import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CreditCardEditIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CreditCardEditIcon({ size = 'md', className, ...props }: CreditCardEditIconProps) {
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
      <path d="M1.66669 8.33317H18.3334V6.83317C18.3334 5.89975 18.3334 5.43304 18.1517 5.07652C17.9919 4.76292 17.7369 4.50795 17.4234 4.34816C17.0669 4.1665 16.6001 4.1665 15.6667 4.1665H4.33335C3.39994 4.1665 2.93322 4.1665 2.5767 4.34816C2.2631 4.50795 2.00813 4.76291 1.84835 5.07652C1.66669 5.43304 1.66669 5.89975 1.66669 6.83317V13.1665C1.66669 14.0999 1.66669 14.5667 1.84835 14.9232C2.00813 15.2368 2.2631 15.4918 2.5767 15.6515C2.93322 15.8332 3.39994 15.8332 4.33335 15.8332H9.16669M12.0834 17.4998L13.7709 17.1623C13.9179 17.1329 13.9915 17.1182 14.0601 17.0913C14.121 17.0674 14.1789 17.0364 14.2325 16.999C14.293 16.9568 14.346 16.9038 14.4522 16.7977L17.9167 13.3332C18.3769 12.8729 18.3769 12.1268 17.9167 11.6665C17.4564 11.2063 16.7103 11.2063 16.25 11.6665L12.7855 15.131C12.6794 15.2372 12.6264 15.2902 12.5842 15.3507C12.5468 15.4043 12.5158 15.4622 12.4919 15.5231C12.465 15.5917 12.4503 15.6653 12.4209 15.8123L12.0834 17.4998Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
