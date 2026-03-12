import { clsx } from 'clsx';

export interface BarLineChartIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BarLineChartIcon({ size = 20, className, ...props }: BarLineChartIconProps) {
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
      <path d="M16.6666 16.6667V10.8333M9.99998 16.6667V8.33334M3.33331 16.6667V13.3333M11.1722 4.18959L15.4792 5.80473M8.99898 4.50077L4.33351 7.99986M17.5506 5.36612C18.0386 5.85428 18.0386 6.64573 17.5506 7.13389C17.0624 7.62204 16.2709 7.62204 15.7827 7.13389C15.2946 6.64573 15.2946 5.85428 15.7827 5.36612C16.2709 4.87796 17.0624 4.87796 17.5506 5.36612ZM4.2172 7.86612C4.70536 8.35425 4.70536 9.14575 4.2172 9.63392C3.72904 10.122 2.93759 10.122 2.44943 9.63392C1.96127 9.14575 1.96127 8.35425 2.44943 7.86612C2.93759 7.37796 3.72904 7.37796 4.2172 7.86612ZM10.8839 2.86612C11.372 3.35428 11.372 4.14573 10.8839 4.63389C10.3957 5.12204 9.60423 5.12204 9.11606 4.63389C8.62798 4.14573 8.62798 3.35428 9.11606 2.86612C9.60423 2.37796 10.3957 2.37796 10.8839 2.86612Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
