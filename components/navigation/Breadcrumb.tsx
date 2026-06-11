import { clsx } from 'clsx';
import { Chip } from '../data-display/Chip';

export interface BreadcrumbItem { label: string; href?: string; }
export interface BreadcrumbProps { items: BreadcrumbItem[]; className?: string; }

/**
 * Breadcrumb — hierarchical navigation. Every segment composes from the
 * `Chip` primitive (Composition rule, Conventions §Composition):
 *
 * - Ancestor segments (with `href`): `<Chip>` in the default state with
 *   transparent bg/border so it reads as a plain text link. Hover surfaces
 *   the link color + underline. Clicking navigates to `href`.
 * - Current segment (last item / no `href`): `<Chip selected="single">` —
 *   blue pill (`row-selected` bg, `status-info-border` border,
 *   `status-info-fg` text). Marked `aria-current="page"`, non-interactive.
 *
 * Mirrors the Figma Breadcrumb canonical: every segment is a Chip instance.
 */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={clsx('flex items-center gap-1 text-body-md', className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-muted">/</span>}
            <Chip
              label={item.label}
              size="sm"
              selected={isLast ? 'single' : 'none'}
              onClick={!isLast && item.href ? () => { window.location.href = item.href!; } : undefined}
              className={clsx(
                // Breadcrumb chips render without a visible border on either side —
                // ancestors look like plain text links, the current segment shows
                // only the blue pill fill (no outline).
                '!border-transparent',
                isLast
                  ? undefined
                  : '!bg-transparent hover:!bg-transparent hover:!text-link hover:!underline',
              )}
              {...(isLast ? { 'aria-current': 'page' } : {})}
            />
          </span>
        );
      })}
    </nav>
  );
}
