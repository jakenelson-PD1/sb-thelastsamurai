import { clsx } from 'clsx';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: 'left' | 'right';
  title?: string;
  /** Render the drawer panel inline (no fixed overlay, no scrim).
   *  Used for matrix/showcase rendering where multiple drawers appear at once. */
  inline?: boolean;
  children?: React.ReactNode;
}

export function Drawer({ open, onClose, side = 'right', title, inline = false, children }: DrawerProps) {
  if (!open) return null;
  const panel = (
    <div
      role="dialog"
      aria-modal={!inline}
      className={clsx(
        // `h-full` fills the drawer panel to its parent's height —
        //   • in modal mode, the parent is `fixed inset-0` (full viewport)
        //   • in inline mode (Matrix), the parent is a sized cell div
        // Without `h-full` the panel would hug its content (header + body
        // intrinsic height), collapsing to ~100px and breaking the canonical
        // 320×640 silhouette mirrored from Figma 754:18.
        'flex h-full w-80 flex-col bg-elevated shadow-modal',
        !inline && 'relative z-10',
        !inline && (side === 'right' ? 'ml-auto' : 'mr-auto'),
      )}
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        {title && <h2 className="text-heading-sm font-semibold text-primary">{title}</h2>}
        <button
          onClick={onClose}
          className="ml-auto text-muted hover:text-secondary"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">{children}</div>
    </div>
  );
  if (inline) return panel;
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-scrim" onClick={onClose} aria-hidden="true" />
      {panel}
    </div>
  );
}
