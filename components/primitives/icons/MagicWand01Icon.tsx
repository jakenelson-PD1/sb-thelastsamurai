import { clsx } from 'clsx';

export interface MagicWand01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MagicWand01Icon({ size = 20, className, ...props }: MagicWand01IconProps) {
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
      <path d="M10.8334 11.6667L8.3334 9.16675M12.5086 2.91675V1.66675M15.7915 4.2173L16.6753 3.33341M15.7915 10.8334L16.6753 11.7173M9.17531 4.2173L8.29147 3.33341M17.092 7.50008H18.342M5.10953 17.3906L12.8072 9.69292C13.1372 9.36292 13.3022 9.19783 13.3641 9.00758C13.4185 8.84025 13.4185 8.65992 13.3641 8.49258C13.3022 8.30229 13.1372 8.13729 12.8072 7.80727L12.1929 7.19289C11.8628 6.86287 11.6978 6.69787 11.5076 6.63605C11.3402 6.58166 11.1599 6.58166 10.9926 6.63605C10.8022 6.69787 10.6372 6.86287 10.3072 7.19289L2.60953 14.8906C2.27952 15.2206 2.11451 15.3857 2.05269 15.5759C1.99831 15.7432 1.99831 15.9236 2.05269 16.0909C2.11451 16.2812 2.27952 16.4462 2.60953 16.7762L3.22391 17.3906C3.55393 17.7206 3.71894 17.8857 3.90921 17.9474C4.07658 18.0018 4.25687 18.0018 4.42424 17.9474C4.61451 17.8857 4.77952 17.7206 5.10953 17.3906Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
