import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Umbrella03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Umbrella03Icon({ size = 'md', className, ...props }: Umbrella03IconProps) {
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
      <g clipPath="url(#umbrella03-clip0_118_52344)">
<path d="M5.20835 18.2992L10 9.99976M14.1667 2.78288C10.5724 0.707705 6.07472 1.61445 3.53835 4.73554C3.2908 5.04018 3.16701 5.19249 3.131 5.41073C3.10235 5.58436 3.1448 5.81447 3.2335 5.96646C3.345 6.15749 3.54261 6.27158 3.93785 6.49976L16.0622 13.4998C16.4574 13.7279 16.655 13.842 16.8762 13.8431C17.0522 13.8439 17.2727 13.7656 17.4088 13.654C17.5798 13.5137 17.6498 13.3303 17.7898 12.9636C19.2246 9.20651 17.761 4.85807 14.1667 2.78288ZM14.1667 2.78288C12.5724 1.86241 9.41444 4.34733 7.11327 8.33309M14.1667 2.78288C15.761 3.70336 15.1879 7.68066 12.8868 11.6664M18.3334 18.3331H1.66669" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="umbrella03-clip0_118_52344">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
