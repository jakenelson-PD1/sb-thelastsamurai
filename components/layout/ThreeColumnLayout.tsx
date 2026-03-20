import type { ReactNode } from 'react';
import clsx from 'clsx';
import { PanelGroup } from './PanelGroup';
import { Panel } from './Panel';
import { ResizeHandle } from './ResizeHandle';

export interface ThreeColumnLayoutProps {
  /** Narrow left sidebar — always present */
  sidebar: ReactNode;
  /** Center content — always present */
  content: ReactNode;
  /** Right panel content — shown when rightPanelOpen=true */
  rightPanel?: ReactNode;
  /** Title shown in right panel header */
  rightPanelTitle?: string;
  /** Controls whether right panel is visible */
  rightPanelOpen?: boolean;
  /** Called when right panel close button clicked */
  onCloseRightPanel?: () => void;
  /** Default width % of sidebar. Default: 18 */
  sidebarDefaultSize?: number;
  /** Min width % of sidebar. Default: 12 */
  sidebarMinSize?: number;
  /** Default width % of right panel when open. Default: 35 */
  rightPanelDefaultSize?: number;
  /** Min width % of right panel. Default: 20 */
  rightPanelMinSize?: number;
  /** autoSaveId for localStorage persistence */
  autoSaveId?: string;
  className?: string;
}

export function ThreeColumnLayout({
  sidebar,
  content,
  rightPanel,
  rightPanelTitle,
  rightPanelOpen = false,
  onCloseRightPanel,
  sidebarDefaultSize = 18,
  sidebarMinSize = 12,
  rightPanelDefaultSize = 35,
  rightPanelMinSize = 20,
  className,
}: ThreeColumnLayoutProps) {
  return (
    <div className={clsx('flex h-full w-full overflow-hidden', className)}>
      <PanelGroup
        key={rightPanelOpen ? 'open' : 'closed'}
      >
        <Panel
          defaultSize={sidebarDefaultSize}
          minSize={sidebarMinSize}
        >
          {sidebar}
        </Panel>

        <ResizeHandle />

        <Panel defaultSize={rightPanelOpen ? 100 - sidebarDefaultSize - rightPanelDefaultSize : 100 - sidebarDefaultSize}>
          {content}
        </Panel>

        {rightPanelOpen && (
          <>
            <ResizeHandle />
            <Panel
              defaultSize={rightPanelDefaultSize}
              minSize={rightPanelMinSize}
              title={rightPanelTitle}
              closeable
              onClose={onCloseRightPanel}
            >
              {rightPanel}
            </Panel>
          </>
        )}
      </PanelGroup>
    </div>
  );
}
