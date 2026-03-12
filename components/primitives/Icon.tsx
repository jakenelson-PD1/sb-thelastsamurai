import { clsx } from 'clsx';

export interface IconComponentProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export type IconComponent = React.ComponentType<IconComponentProps>;

export interface IconProps {
  icon: IconComponent;
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Icon({ icon: IconComp, size = 20, className, ...props }: IconProps) {
  return (
    <IconComp
      size={size}
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    />
  );
}
