import { clsx } from 'clsx';

export interface AppShellProps {
  /** Fixed top bar content (nav, logo, actions) */
  header: React.ReactNode;
  /** Main panel area — use PanelGroup inside here */
  children: React.ReactNode;
  /** Header height in px. Default: 56 */
  headerHeight?: number;
  className?: string;
}

/**
 * Root layout wrapper. Fills 100vh with a fixed header + flex body beneath.
 * Place a PanelGroup (or any content) inside children.
 */
export function AppShell({ header, children, headerHeight = 56, className }: AppShellProps) {
  return (
    <div className={clsx('flex h-screen flex-col overflow-hidden bg-canvas', className)}>
      <header
        style={{ height: headerHeight }}
        className="z-10 flex shrink-0 items-center border-b border-line bg-elevated px-4 shadow-card"
      >
        {header}
      </header>
      <div className="flex flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
