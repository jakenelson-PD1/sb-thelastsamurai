import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Lightbulb04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Lightbulb04Icon({ size = 'md', className, ...props }: Lightbulb04IconProps) {
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
      <path d="M7.91667 18.3332H12.0833M8.33334 8.33317H11.6667M10 8.33317V13.3332M12.5 12.7718C14.4708 11.8356 15.8333 9.82684 15.8333 7.49984C15.8333 4.27818 13.2217 1.6665 10 1.6665C6.77835 1.6665 4.16667 4.27818 4.16667 7.49984C4.16667 9.82684 5.52921 11.8356 7.50001 12.7718V13.3332C7.50001 14.1098 7.50001 14.498 7.62687 14.8043C7.79603 15.2127 8.12049 15.5372 8.52884 15.7063C8.83517 15.8332 9.22342 15.8332 10 15.8332C10.7766 15.8332 11.1648 15.8332 11.4712 15.7063C11.8795 15.5372 12.204 15.2127 12.3732 14.8043C12.5 14.498 12.5 14.1098 12.5 13.3332V12.7718Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
