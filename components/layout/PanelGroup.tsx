import { Group } from 'react-resizable-panels';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type PanelGroupProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  /** Orientation of the panel group. Defaults to `horizontal` (panels side-by-side). */
  direction?: 'horizontal' | 'vertical';
};

export function PanelGroup({ children, className, id, direction = 'horizontal' }: PanelGroupProps) {
  return (
    <Group
      orientation={direction}
      id={id}
      className={clsx('flex h-full w-full', className)}
    >
      {children}
    </Group>
  );
}
