import { clsx } from 'clsx';

export interface Home01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Home01Icon({ size = 20, className, ...props }: Home01IconProps) {
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
      <path d="M2.5 8.80425C2.5 8.32558 2.5 8.08627 2.56169 7.86588C2.61633 7.67065 2.70614 7.48703 2.82669 7.32405C2.96278 7.14005 3.15168 6.99313 3.52949 6.69927L9.18142 2.30333C9.47417 2.07563 9.62058 1.96177 9.78225 1.918C9.92483 1.87938 10.0752 1.87938 10.2177 1.918C10.3794 1.96177 10.5258 2.07563 10.8186 2.30333L16.4705 6.69928C16.8483 6.99313 17.0372 7.14005 17.1733 7.32405C17.2938 7.48703 17.3837 7.67065 17.4383 7.86588C17.5 8.08627 17.5 8.32558 17.5 8.80425V14.8333C17.5 15.7667 17.5 16.2334 17.3183 16.59C17.1586 16.9036 16.9036 17.1586 16.59 17.3183C16.2335 17.5 15.7667 17.5 14.8333 17.5H5.16667C4.23324 17.5 3.76653 17.5 3.41002 17.3183C3.09641 17.1586 2.84144 16.9036 2.68166 16.59C2.5 16.2334 2.5 15.7667 2.5 14.8333V8.80425Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
