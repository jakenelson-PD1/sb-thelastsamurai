import { clsx } from 'clsx';

export interface CursorClick01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CursorClick01Icon({ size = 20, className, ...props }: CursorClick01IconProps) {
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
      <g clipPath="url(#cursorclick01-clip0_118_41719)">
<path d="M7.50002 2.91675V1.66675M4.21724 4.2173L3.33335 3.33341M4.21724 10.8334L3.33335 11.7173M10.8334 4.2173L11.7173 3.33341M2.91669 7.50008H1.66669M13.2204 13.4914L11.1439 17.3476C10.9068 17.7882 10.7881 18.0084 10.6454 18.0642C10.5216 18.1125 10.3821 18.0988 10.27 18.0274C10.1408 17.9451 10.0672 17.706 9.91985 17.2278L7.03768 7.87112C6.91735 7.48051 6.85719 7.28519 6.9056 7.15327C6.94776 7.03837 7.03831 6.94782 7.15321 6.90566C7.28513 6.85726 7.48044 6.91741 7.87106 7.03774L17.2277 9.91991C17.7059 10.0672 17.9449 10.1409 18.0273 10.2701C18.0988 10.3822 18.1124 10.5217 18.064 10.6455C18.0084 10.7882 17.788 10.9068 17.3475 11.1441L13.4914 13.2205C13.4259 13.2557 13.3931 13.2733 13.3645 13.296C13.339 13.3161 13.316 13.3391 13.2959 13.3646C13.2733 13.3932 13.2557 13.4259 13.2204 13.4914Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cursorclick01-clip0_118_41719">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
