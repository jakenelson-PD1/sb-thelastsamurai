import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Edit05IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Edit05Icon({ size = 'md', className, ...props }: Edit05IconProps) {
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
      <g clipPath="url(#edit05-clip0_118_38777)">
<path d="M9.16666 3.33332H5.66666C4.26653 3.33332 3.56646 3.33332 3.03169 3.6058C2.56128 3.84548 2.17883 4.22794 1.93915 4.69834C1.66666 5.23313 1.66666 5.93319 1.66666 7.33332V14.3333C1.66666 15.7334 1.66666 16.4335 1.93915 16.9683C2.17883 17.4387 2.56128 17.8212 3.03169 18.0608C3.56646 18.3333 4.26653 18.3333 5.66666 18.3333H12.6667C14.0668 18.3333 14.7668 18.3333 15.3017 18.0608C15.7721 17.8212 16.1545 17.4387 16.3942 16.9683C16.6667 16.4335 16.6667 15.7334 16.6667 14.3333V10.8333M6.66664 13.3333H8.0621C8.46975 13.3333 8.67358 13.3333 8.86541 13.2873C9.03541 13.2464 9.198 13.1791 9.34716 13.0878C9.51533 12.9847 9.6595 12.8405 9.94775 12.5523L17.9167 4.58332C18.607 3.89297 18.607 2.77368 17.9167 2.08332C17.2263 1.39297 16.107 1.39296 15.4167 2.08332L7.44769 10.0523C7.15944 10.3405 7.01531 10.4847 6.91224 10.6528C6.82086 10.802 6.75352 10.9645 6.71269 11.1346C6.66664 11.3264 6.66664 11.5303 6.66664 11.9379V13.3333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="edit05-clip0_118_38777">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
