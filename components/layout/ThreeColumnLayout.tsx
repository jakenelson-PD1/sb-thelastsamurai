import { useEffect, useRef, type ReactNode } from 'react';
import clsx from 'clsx';
import type { PanelImperativeHandle } from 'react-resizable-panels';
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
  /** Allow the sidebar to collapse to a narrow icon-only rail when toggled. */
  sidebarCollapsible?: boolean;
  /** Width % when sidebar is collapsed. Default: 4 (about ~50px on a 1280px viewport) */
  sidebarCollapsedSize?: number;
  /** Initial collapsed state (uncontrolled). */
  sidebarDefaultCollapsed?: boolean;
  /** Controlled collapsed state. Overrides sidebarDefaultCollapsed when provided. */
  sidebarCollapsed?: boolean;
  /** Called when the sidebar's collapsed state changes. */
  onSidebarCollapsedChange?: (collapsed: boolean) => void;
  /** Default width % of right panel when open. Default: 35 */
  rightPanelDefaultSize?: number;
  /** Min width % of right panel. Default: 20 */
  rightPanelMinSize?: number;
  /**
   * Where to render the additive panel relative to the content slot.
   * - `'after-content'` (default): sidebar | content | panel — panel sits to the far right.
   * - `'before-content'`: sidebar | panel | content — panel sits between the sidebar and content (inspector-style).
   */
  rightPanelPosition?: 'before-content' | 'after-content';
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
  sidebarCollapsible = false,
  sidebarCollapsedSize = 4,
  sidebarDefaultCollapsed = false,
  sidebarCollapsed,
  onSidebarCollapsedChange,
  rightPanelDefaultSize = 35,
  rightPanelMinSize = 20,
  rightPanelPosition = 'after-content',
  className,
}: ThreeColumnLayoutProps) {
  const sidebarPanelRef = useRef<PanelImperativeHandle | null>(null);
  // Tracks the last-emitted collapsed state so we don't fire the change
  // callback on every onResize tick during a drag.
  const lastCollapsedRef = useRef<boolean | null>(null);

  // react-resizable-panels v4 treats numeric sizes as PIXELS and percentage
  // strings as percentages. The ThreeColumnLayout API has always used numbers
  // as percentages, so we convert to '%' strings before passing through.
  const pct = (n: number) => `${n}%`;

  // Apply uncontrolled default-collapsed on mount.
  useEffect(() => {
    if (!sidebarCollapsible) return;
    if (sidebarCollapsed !== undefined) return; // controlled — defer to next effect
    if (!sidebarDefaultCollapsed) return;
    const id = requestAnimationFrame(() => sidebarPanelRef.current?.collapse());
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync the controlled `sidebarCollapsed` prop into the underlying Panel's
  // imperative collapse()/expand() API.
  useEffect(() => {
    if (sidebarCollapsed === undefined) return;
    const panel = sidebarPanelRef.current;
    if (!panel) return;
    if (sidebarCollapsed && !panel.isCollapsed()) panel.collapse();
    else if (!sidebarCollapsed && panel.isCollapsed()) panel.expand();
  }, [sidebarCollapsed]);

  const additivePanel = rightPanelOpen ? (
    <>
      <ResizeHandle />
      <Panel
        defaultSize={pct(rightPanelDefaultSize)}
        minSize={pct(rightPanelMinSize)}
        title={rightPanelTitle}
        closeable
        onClose={onCloseRightPanel}
      >
        {rightPanel}
      </Panel>
    </>
  ) : null;

  const contentPanel = (
    <Panel
      defaultSize={pct(
        rightPanelOpen ? 100 - sidebarDefaultSize - rightPanelDefaultSize : 100 - sidebarDefaultSize,
      )}
    >
      {content}
    </Panel>
  );

  return (
    <div className={clsx('flex h-full w-full overflow-hidden', className)}>
      <PanelGroup
        key={`${rightPanelOpen ? 'open' : 'closed'}-${rightPanelPosition}`}
      >
        <Panel
          panelRef={sidebarPanelRef}
          defaultSize={pct(sidebarDefaultSize)}
          minSize={pct(sidebarMinSize)}
          collapsible={sidebarCollapsible}
          collapsedSize={pct(sidebarCollapsedSize)}
          onResize={
            sidebarCollapsible && onSidebarCollapsedChange
              ? (panelSize) => {
                  const sizePct = panelSize.asPercentage;
                  const isCollapsedNow = sizePct <= sidebarCollapsedSize + 0.5;
                  if (lastCollapsedRef.current !== isCollapsedNow) {
                    lastCollapsedRef.current = isCollapsedNow;
                    onSidebarCollapsedChange(isCollapsedNow);
                  }
                }
              : undefined
          }
        >
          {sidebar}
        </Panel>

        <ResizeHandle />

        {rightPanelPosition === 'before-content' ? (
          <>
            {rightPanelOpen && (
              <>
                <Panel
                  defaultSize={pct(rightPanelDefaultSize)}
                  minSize={pct(rightPanelMinSize)}
                  title={rightPanelTitle}
                  closeable
                  onClose={onCloseRightPanel}
                >
                  {rightPanel}
                </Panel>
                <ResizeHandle />
              </>
            )}
            {contentPanel}
          </>
        ) : (
          <>
            {contentPanel}
            {additivePanel}
          </>
        )}
      </PanelGroup>
    </div>
  );
}
