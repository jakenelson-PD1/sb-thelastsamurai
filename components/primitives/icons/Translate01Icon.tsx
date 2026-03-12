import { clsx } from 'clsx';

export interface Translate01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Translate01Icon({ size = 20, className, ...props }: Translate01IconProps) {
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
      <path d="M10.7608 14.1667H16.7392M10.7608 14.1667L9.16666 17.5M10.7608 14.1667L13.1486 9.17417C13.341 8.77192 13.4372 8.57075 13.5688 8.50717C13.6832 8.45192 13.8167 8.45192 13.9312 8.50717C14.0628 8.57075 14.159 8.77192 14.3514 9.17417L16.7392 14.1667M16.7392 14.1667L18.3333 17.5M1.66666 4.16667H6.66666M6.66666 4.16667H9.58332M6.66666 4.16667V2.5M9.58332 4.16667H11.6667M9.58332 4.16667C9.16991 6.63107 8.21048 8.8635 6.80461 10.737M6.80461 10.737C7.3022 11.1184 7.82288 11.4373 8.33332 11.6667M6.80461 10.737C5.67751 9.87317 4.66896 8.68883 4.16666 7.5M6.80461 10.737C5.46737 12.5191 3.72618 13.9765 1.66666 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
