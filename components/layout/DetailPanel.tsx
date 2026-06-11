import { clsx } from 'clsx';
import { ScrollArea } from './ScrollArea';

export interface DetailPanelProps {
  /** Sticky header — stays at the top while the body scrolls */
  header?: React.ReactNode;
  /** Main scrollable content area */
  children: React.ReactNode;
  /** Optional sticky footer — actions, submit buttons */
  footer?: React.ReactNode;
  className?: string;
}

/**
 * Opinionated right-panel / detail view composition.
 * Provides a sticky header, scrollable body, and optional sticky footer.
 *
 * @example
 * <DetailPanel
 *   header={<PanelHeader title="Tax Return — Acme Corp" actions={<Button>Submit</Button>} />}
 *   footer={<div className="flex justify-end gap-2 p-panel"><Button>Save</Button></div>}
 * >
 *   {formFields}
 * </DetailPanel>
 */
export function DetailPanel({ header, children, footer, className }: DetailPanelProps) {
  return (
    <div className={clsx('flex flex-col h-full bg-canvas', className)}>
      {header && (
        <div className="shrink-0">
          {header}
        </div>
      )}
      <ScrollArea className="flex-1">
        {children}
      </ScrollArea>
      {footer && (
        <div className="shrink-0 border-t border-line bg-elevated">
          {footer}
        </div>
      )}
    </div>
  );
}
