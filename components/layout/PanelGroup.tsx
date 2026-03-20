import { Group } from 'react-resizable-panels';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type PanelGroupProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
};

export function PanelGroup({ children, className, id }: PanelGroupProps) {
  return (
    <Group
      orientation="horizontal"
      id={id}
      className={clsx('flex h-full w-full', className)}
    >
      {children}
    </Group>
  );
}
