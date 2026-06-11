import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowCircleUpIconProps {
  size?: IconSizeProp;
  /** Render the filled (solid) variant instead of the outline variant. */
  filled?: boolean;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleUpIcon({ size = 'md', filled = false, className, ...props }: ArrowCircleUpIconProps) {
  const px = resolveIconSize(size);
  if (filled) {
    // Path data + viewBox mirror the canonical Figma `arrow-circle-up-fill`
    // ComponentSet (2817:17, Size=Large 24×24 source). Vector geometry is
    // centred in a 24-viewBox with 1px insets, so the filled circle reads
    // at the same optical weight as the outline `arrow-circle-up`. EVENODD
    // winding cuts the arrow out of the disc so it picks up whatever sits
    // behind the button (matches the Figma vector's `windingRule:"EVENODD"`).
    return (
      <svg
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx('inline-block', className)}
        aria-hidden={!props['aria-label']}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 17C11.4477 17 11 16.5523 11 16V10.4142L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071L13 10.4142V16C13 16.5523 12.5523 17 12 17Z"
        />
      </svg>
    );
  }
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
      <g clipPath="url(#arrowcircleup-clip0_118_39568)">
<path d="M13.3333 9.99996L10 6.66663M10 6.66663L6.66667 9.99996M10 6.66663V13.3333M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6023 1.66667 9.99996C1.66667 5.39758 5.39763 1.66663 10 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcircleup-clip0_118_39568">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
