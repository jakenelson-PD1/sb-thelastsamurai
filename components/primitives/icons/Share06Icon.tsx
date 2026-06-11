import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Share06IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Share06Icon({ size = 'md', className, ...props }: Share06IconProps) {
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
      <path d="M17.3262 10.5062C17.5296 10.3318 17.6312 10.2446 17.6686 10.1408C17.7012 10.0498 17.7012 9.95018 17.6686 9.85918C17.6312 9.75543 17.5296 9.66818 17.3262 9.49384L10.2672 3.44331C9.917 3.14314 9.74192 2.99306 9.59367 2.98939C9.46483 2.98619 9.34175 3.04279 9.26033 3.14269C9.16667 3.25764 9.16667 3.48825 9.16667 3.94948V7.52886C7.38777 7.84007 5.75966 8.74143 4.54976 10.0949C3.23068 11.5704 2.50103 13.4799 2.5 15.4592V15.9691C3.37445 14.9158 4.46626 14.0638 5.70063 13.4716C6.78892 12.9495 7.96535 12.6403 9.16667 12.5588V16.0505C9.16667 16.5118 9.16667 16.7423 9.26033 16.8573C9.34175 16.9572 9.46483 17.0138 9.59367 17.0106C9.74192 17.0069 9.917 16.8568 10.2672 16.5567L17.3262 10.5062Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
