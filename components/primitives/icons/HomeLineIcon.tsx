import { clsx } from 'clsx';

export interface HomeLineIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function HomeLineIcon({ size = 20, className, ...props }: HomeLineIconProps) {
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
      <path d="M6.66667 14.1667H13.3333M9.18142 2.30333L3.52949 6.69927C3.15168 6.99313 2.96278 7.14005 2.82669 7.32405C2.70614 7.48703 2.61633 7.67065 2.56169 7.86588C2.5 8.08627 2.5 8.32558 2.5 8.80425V14.8333C2.5 15.7667 2.5 16.2334 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76653 17.5 4.23324 17.5 5.16667 17.5H14.8333C15.7667 17.5 16.2335 17.5 16.59 17.3183C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.5 16.2334 17.5 15.7667 17.5 14.8333V8.80425C17.5 8.32558 17.5 8.08627 17.4383 7.86588C17.3837 7.67065 17.2938 7.48703 17.1733 7.32405C17.0372 7.14005 16.8483 6.99313 16.4705 6.69928L10.8186 2.30333C10.5258 2.07563 10.3794 1.96177 10.2177 1.918C10.0752 1.87938 9.92483 1.87938 9.78225 1.918C9.62058 1.96177 9.47417 2.07563 9.18142 2.30333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
