import { clsx } from 'clsx';

export interface PencilLineIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PencilLineIcon({ size = 20, className, ...props }: PencilLineIconProps) {
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
      <path d="M17.5 17.4999H10.8333M2.08331 17.9166L6.7077 16.138C7.00349 16.0242 7.15138 15.9673 7.28975 15.8931C7.41265 15.8271 7.52981 15.7509 7.64001 15.6654C7.76408 15.5692 7.87612 15.4571 8.10021 15.233L17.5 5.83327C18.4205 4.91279 18.4205 3.4204 17.5 2.49992C16.5796 1.57946 15.0871 1.57945 14.1666 2.49992L4.76688 11.8997C4.5428 12.1237 4.43075 12.2358 4.33447 12.3599C4.24895 12.4701 4.17281 12.5872 4.10684 12.7102C4.03257 12.8485 3.97569 12.9964 3.86192 13.2922L2.08331 17.9166ZM2.08331 17.9166L3.79841 13.4574C3.92115 13.1383 3.9825 12.9787 4.08776 12.9057C4.17975 12.8418 4.29356 12.8177 4.40356 12.8387C4.52942 12.8627 4.6503 12.9836 4.89205 13.2253L6.77462 15.1079C7.01637 15.3497 7.13725 15.4705 7.16128 15.5963C7.18229 15.7063 7.15814 15.8202 7.09426 15.9122C7.02119 16.0174 6.86164 16.0787 6.54254 16.2015L2.08331 17.9166Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
