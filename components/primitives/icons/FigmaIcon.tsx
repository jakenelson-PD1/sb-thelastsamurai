import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FigmaIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FigmaIcon({ size = 'md', className, ...props }: FigmaIconProps) {
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
      <path d="M10 1.25H7.08335C5.47252 1.25 4.16669 2.55583 4.16669 4.16667C4.16669 5.7775 5.47252 7.08333 7.08335 7.08333M10 1.25V7.08333M10 1.25H12.9167C14.5275 1.25 15.8334 2.55583 15.8334 4.16667C15.8334 5.7775 14.5275 7.08333 12.9167 7.08333M7.08335 7.08333H10M7.08335 7.08333C5.47252 7.08333 4.16669 8.38917 4.16669 10C4.16669 11.6108 5.47252 12.9167 7.08335 12.9167M10 7.08333V12.9167M10 7.08333H12.9167M12.9167 7.08333C14.5275 7.08333 15.8334 8.38917 15.8334 10C15.8334 11.6108 14.5275 12.9167 12.9167 12.9167C11.3059 12.9167 10 11.6108 10 10C10 8.38917 11.3059 7.08333 12.9167 7.08333ZM10 12.9167H7.08335M10 12.9167V15.8333C10 17.4442 8.69419 18.75 7.08335 18.75C5.47252 18.75 4.16669 17.4442 4.16669 15.8333C4.16669 14.2225 5.47252 12.9167 7.08335 12.9167" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
