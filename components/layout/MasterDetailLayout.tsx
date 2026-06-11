import React from 'react';
import clsx from 'clsx';
import { PanelGroup } from './PanelGroup';
import { Panel } from './Panel';
import { ResizeHandle } from './ResizeHandle';

export interface AdditivePanel {
  id: string;
  title?: string;
  content: React.ReactNode;
  defaultSize?: number;
  minSize?: number;
}

export interface MasterDetailLayoutProps {
  /** Left list/navigation panel — always present */
  list: React.ReactNode;
  /** Main content/detail panel — always present */
  detail: React.ReactNode;
  /** Additional closeable panels added to the right */
  rightPanels?: AdditivePanel[];
  /** Called when a right panel's close button is clicked */
  onClosePanel?: (id: string) => void;
  /** Default width % of list panel. Default: 22 */
  listDefaultSize?: number;
  /** Minimum width % of list panel. Default: 15 */
  listMinSize?: number;
  /** Default width % of detail panel. Default: remainder after list */
  detailDefaultSize?: number;
  /** autoSaveId for persisting panel widths in localStorage */
  autoSaveId?: string;
  className?: string;
}

export function MasterDetailLayout({
  list,
  detail,
  rightPanels = [],
  onClosePanel,
  listDefaultSize = 22,
  listMinSize = 15,
  detailDefaultSize,
  className,
}: MasterDetailLayoutProps) {
  return (
    <div className={clsx('h-full w-full', className)}>
      <PanelGroup>
        <Panel defaultSize={listDefaultSize} minSize={listMinSize}>
          {list}
        </Panel>

        <ResizeHandle />

        <Panel defaultSize={detailDefaultSize ?? (100 - listDefaultSize)}>
          {detail}
        </Panel>

        {rightPanels.map((panel) => (
          <React.Fragment key={panel.id}>
            <ResizeHandle />
            <Panel
              defaultSize={panel.defaultSize ?? 25}
              minSize={panel.minSize ?? 15}
              title={panel.title}
              closeable
              onClose={() => onClosePanel?.(panel.id)}
            >
              {panel.content}
            </Panel>
          </React.Fragment>
        ))}
      </PanelGroup>
    </div>
  );
}
