import { clsx } from 'clsx';
import { Breadcrumb, type BreadcrumbItem } from './Breadcrumb';

export interface PageHeaderProps {
  /** Page title */
  title: string;
  /** Optional breadcrumb trail above the title */
  breadcrumb?: BreadcrumbItem[];
  /**
   * Right-side slot — pass arbitrary action content. Use this when you want
   * full control over the Actions row. Mutually exclusive with the per-slot
   * `action1` / `action2` / `action3` props.
   */
  actions?: React.ReactNode;
  /**
   * First action button slot (mirrors Figma `ShowButton1` BOOLEAN). Pass
   * `undefined` to hide. Use when you want togglable per-button visibility
   * matching the Figma PageHeader set's three independent slots.
   */
  action1?: React.ReactNode;
  /** Second action button slot — mirrors Figma `ShowButton2`. */
  action2?: React.ReactNode;
  /** Third action button slot — mirrors Figma `ShowButton3`. */
  action3?: React.ReactNode;
  /** Optional content below title row (e.g. tabs) */
  toolbar?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  breadcrumb,
  actions,
  action1,
  action2,
  action3,
  toolbar,
  className,
}: PageHeaderProps) {
  // Compose the Actions row. If callers pass per-slot `actionN`, render those
  // (each independently togglable by omitting the prop). Otherwise fall back
  // to the bulk `actions` slot for backwards compatibility.
  const slotActions = action1 || action2 || action3 ? (
    <>
      {action1}
      {action2}
      {action3}
    </>
  ) : null;
  const actionContent = slotActions ?? actions;
  return (
    <div
      className={clsx(
        'flex shrink-0 flex-col border-b border-line bg-canvas',
        className,
      )}
    >
      {/* Title row outer padding is `px-6` (24px) — narrower than the previous
          `px-8` so the breadcrumb's first chip sits at the row's left edge.
          The heading then gets its own `pl-2` (8px) inset wrapper so its TEXT
          aligns with the chip TEXT in the row above. Mirrors Figma PageHeader
          reference 2697:245. */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex flex-col gap-1">
          {breadcrumb && breadcrumb.length > 0 && (
            <Breadcrumb items={breadcrumb} />
          )}
          <div className="pl-2">
            <h1 className="text-heading-lg font-semibold text-primary">
              {title}
            </h1>
          </div>
        </div>

        {actionContent && (
          <div className="flex shrink-0 items-center gap-2">{actionContent}</div>
        )}
      </div>

      {toolbar && (
        <div className="px-8 pb-0">{toolbar}</div>
      )}
    </div>
  );
}
