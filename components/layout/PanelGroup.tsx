import { PanelGroup as RPPanelGroup, PanelGroupProps as RPPanelGroupProps } from 'react-resizable-panels';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type PanelGroupProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  autoSaveId?: string;
};

export function PanelGroup({ children, className, id, autoSaveId }: PanelGroupProps) {
  return (
    <RPPanelGroup
      direction="horizontal"
      id={id}
      autoSaveId={autoSaveId}
      className={clsx('flex h-full w-full', className)}
    >
      {children}
    </RPPanelGroup>
  );
}
