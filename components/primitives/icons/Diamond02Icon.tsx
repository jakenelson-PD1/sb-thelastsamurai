import { clsx } from 'clsx';

export interface Diamond02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Diamond02Icon({ size = 20, className, ...props }: Diamond02IconProps) {
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
      <g clipPath="url(#diamond02-clip0_118_45563)">
<path d="M4.16695 18.3332H15.8336M2.08362 6.6665H17.9169M8.33359 1.6665L6.66695 6.6665L10.0003 15.4165L13.3336 6.6665L11.6669 1.6665M10.4936 15.2906L17.9433 7.09592C18.0816 6.9437 18.1508 6.8676 18.1783 6.78094C18.2027 6.70458 18.2044 6.62283 18.1834 6.54549C18.1597 6.45772 18.0938 6.37871 17.9621 6.22068L14.3668 1.90638C14.2933 1.8182 14.2567 1.77412 14.2116 1.74243C14.1717 1.71435 14.1272 1.69349 14.08 1.68081C14.0268 1.6665 13.9695 1.6665 13.8547 1.6665H6.14587C6.03109 1.6665 5.97371 1.6665 5.92053 1.68081C5.87341 1.69349 5.82889 1.71435 5.78898 1.74243C5.74394 1.77412 5.7072 1.8182 5.63373 1.90638L2.03848 6.22068C1.90678 6.3787 1.84093 6.45772 1.81713 6.54549C1.79613 6.62283 1.7979 6.70458 1.82219 6.78094C1.84977 6.8676 1.91895 6.9437 2.05733 7.09591L9.50701 15.2906C9.67801 15.4787 9.76351 15.5728 9.86401 15.6075C9.95226 15.6381 10.0483 15.6381 10.1366 15.6075C10.2371 15.5728 10.3226 15.4787 10.4936 15.2906Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="diamond02-clip0_118_45563">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
