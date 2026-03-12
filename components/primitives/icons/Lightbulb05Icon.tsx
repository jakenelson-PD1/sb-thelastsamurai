import { clsx } from 'clsx';

export interface Lightbulb05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Lightbulb05Icon({ size = 20, className, ...props }: Lightbulb05IconProps) {
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
      <g clipPath="url(#lightbulb05-clip0_118_43895)">
<path d="M9.99999 1.6665V2.49984M2.49999 9.99984H1.66666M4.58332 4.58317L4.08324 4.08309M15.4167 4.58317L15.9168 4.08309M18.3333 9.99984H17.5M8.33332 11.2498H11.6667M9.99999 11.2498V15.4165M12.9167 14.0615C14.1784 13.1538 15 11.6728 15 9.99984C15 7.23841 12.7614 4.99984 9.99999 4.99984C7.23856 4.99984 4.99999 7.23841 4.99999 9.99984C4.99999 11.6728 5.8216 13.1538 7.08332 14.0615V15.6665C7.08332 16.5999 7.08332 17.0667 7.26498 17.4232C7.42476 17.7368 7.67973 17.9918 7.99334 18.1515C8.34982 18.3332 8.81657 18.3332 9.74999 18.3332H10.25C11.1834 18.3332 11.6502 18.3332 12.0067 18.1515C12.3202 17.9918 12.5752 17.7368 12.735 17.4232C12.9167 17.0667 12.9167 16.5999 12.9167 15.6665V14.0615Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="lightbulb05-clip0_118_43895">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
