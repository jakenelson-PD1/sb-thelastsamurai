import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CloudRaining04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CloudRaining04Icon({ size = 'md', className, ...props }: CloudRaining04IconProps) {
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
      <g clipPath="url(#cloudraining04-clip0_118_51826)">
<path d="M13.3333 15.417V17.5003M6.66667 15.417V17.5003M10 16.2503V18.3337M5.83334 12.5003C3.53216 12.5003 1.66667 10.6348 1.66667 8.33366C1.66667 6.03248 3.53216 4.16699 5.83334 4.16699C5.86096 4.16699 5.88852 4.16726 5.91602 4.1678C6.6745 2.68333 8.21856 1.66699 10 1.66699C12.0993 1.66699 13.8691 3.07845 14.4119 5.00418C14.4688 5.00162 14.5259 5.00033 14.5833 5.00033C16.6544 5.00033 18.3333 6.67926 18.3333 8.75033C18.3333 10.8214 16.6544 12.5003 14.5833 12.5003C11.4528 12.5003 9.36267 12.5003 5.83334 12.5003Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cloudraining04-clip0_118_51826">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
