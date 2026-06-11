import { clsx } from 'clsx';
import { ScrollArea } from './ScrollArea';

export interface ListPanelProps {
  /** Fixed header (e.g. PanelHeader). Rendered above the toolbar and list. */
  header?: React.ReactNode;
  /** Optional toolbar slot — search, filters, sort (rendered below header, above list) */
  toolbar?: React.ReactNode;
  /** Scrollable list content */
  children: React.ReactNode;
  className?: string;
}

/**
 * Opinionated left-panel composition for master-detail layouts.
 * Stacks a fixed header + optional toolbar above a scrollable list body.
 *
 * @example
 * <ListPanel
 *   header={<PanelHeader title="Requests" actions={<Button size="xs">Add</Button>} />}
 *   toolbar={<SubToolbar left={…} right={…} />}
 * >
 *   {rows}
 * </ListPanel>
 */
export function ListPanel({ header, toolbar, children, className }: ListPanelProps) {
  return (
    <div className={clsx('flex flex-col h-full bg-surface', className)}>
      {header}
      {toolbar && (
        <div className="shrink-0 border-b border-line">
          {toolbar}
        </div>
      )}
      <ScrollArea className="flex-1">
        {children}
      </ScrollArea>
    </div>
  );
}
