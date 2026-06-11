import { clsx } from 'clsx';
import type { IconSizeProp } from './icons/_iconSize';

export interface IconComponentProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export type IconComponent = React.ComponentType<IconComponentProps>;

export interface IconProps {
  icon: IconComponent;
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Icon({ icon: IconComp, size = 'md', className, ...props }: IconProps) {
  return (
    <IconComp
      size={size}
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    />
  );
}
