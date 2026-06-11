import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Tag02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Tag02Icon({ size = 'md', className, ...props }: Tag02IconProps) {
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
      <g clipPath="url(#tag02-clip0_118_45836)">
<path d="M6.66666 6.6665H6.675M3.80228 2.44755L2.44771 3.80212C2.15946 4.09037 2.01533 4.2345 1.91226 4.4027C1.82088 4.55181 1.75354 4.71439 1.71271 4.88445C1.66666 5.07626 1.66666 5.28009 1.66666 5.68774V8.06194C1.66666 8.46959 1.66666 8.67342 1.71271 8.86525C1.75354 9.03525 1.82088 9.19784 1.91226 9.347C2.01533 9.51517 2.15946 9.65934 2.44771 9.94759L8.83825 16.3381C9.82825 17.3281 10.3233 17.8232 10.8941 18.0086C11.3962 18.1718 11.9371 18.1718 12.4392 18.0086C13.01 17.8232 13.5051 17.3281 14.4951 16.3381L16.3382 14.4949C17.3282 13.5049 17.8233 13.0098 18.0087 12.439C18.1719 11.9369 18.1719 11.3961 18.0087 10.8939C17.8233 10.3232 17.3282 9.82809 16.3382 8.83809L9.94775 2.44755C9.6595 2.1593 9.51533 2.01517 9.34716 1.9121C9.198 1.82072 9.03541 1.75338 8.86541 1.71255C8.67358 1.6665 8.46975 1.6665 8.0621 1.6665H5.6879C5.28025 1.6665 5.07642 1.6665 4.88461 1.71255C4.71455 1.75338 4.55197 1.82072 4.40286 1.9121C4.23466 2.01517 4.09054 2.1593 3.80228 2.44755ZM7.08333 6.6665C7.08333 6.89662 6.89678 7.08317 6.66666 7.08317C6.43655 7.08317 6.25 6.89662 6.25 6.6665C6.25 6.43639 6.43655 6.24984 6.66666 6.24984C6.89678 6.24984 7.08333 6.43639 7.08333 6.6665Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="tag02-clip0_118_45836">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
