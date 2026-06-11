import { clsx } from 'clsx';
import { Button } from '../primitives/Button';
import { Checkbox } from '../forms/Checkbox';
import { Timestamp } from '../primitives/Timestamp';
import { StatusDot, type StatusDotVariant } from '../primitives/StatusDot';
import { File02Icon } from '../primitives/icons/File02Icon';
import { EyeIcon } from '../primitives/icons/EyeIcon';

export type FileRowDot = StatusDotVariant;

export interface FileRowProps {
  /** Primary file name (e.g. "Audit_Workpapers_FY24.pdf"). */
  fileName: string;
  /** File size, pre-formatted (e.g. "1.2 MB", "450 KB"). */
  size: string;
  /** Who uploaded the file (e.g. "Alice"). */
  uploadedBy: string;
  /**
   * When the file was uploaded. Rendered with the canonical `<Timestamp>`
   * primitive in `short-date` format (MM/DD/YY). Accepts a Date object, ISO
   * string, or any string — invalid strings render verbatim (matches Figma's
   * "00/00/00" placeholder behavior).
   */
  uploadedAt: Date | string;
  /** Bulk-select state. Independent from `onRowClick` / preview behavior. */
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Whether to render the Preview action button. Mirrors Figma's HasPreview boolean. */
  hasPreview?: boolean;
  onPreview?: () => void;
  /** Status dot overlaid on the file icon (top-right). */
  dot?: FileRowDot;
  /** Force the hover background for static showcase rendering (Matrix stories). */
  forceHover?: boolean;
  className?: string;
}

export function FileRow({
  fileName,
  size,
  uploadedBy,
  uploadedAt,
  checked = false,
  onCheckedChange,
  hasPreview = true,
  onPreview,
  dot,
  forceHover = false,
  className,
}: FileRowProps) {
  return (
    <div
      className={clsx(
        // Figma: h=48, HORIZONTAL, gap=12 (scale/3), padding 0/24/0/24 (scale/6),
        // bottom border via border/default. No fill in Default, bg-surface in Hover.
        'flex h-12 items-center gap-3 border-b border-line px-6 transition-colors',
        onPreview ? 'cursor-pointer' : '',
        forceHover ? 'bg-surface' : 'hover:bg-surface',
        className,
      )}
      onClick={onPreview}
    >
      {/* Checkbox — bulk-select. Stop propagation so toggling doesn't open preview. */}
      <span
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => { if (e.key === ' ') e.stopPropagation(); }}
        className="inline-flex"
      >
        <Checkbox
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          aria-label={`Select file ${fileName}`}
        />
      </span>

      {/* File icon — 24×24 (lg). Icon color signals read state: a file with a
          status dot (unread/attention) gets the dark fg-primary icon; a read
          file (no dot) gets the muted icon. Canonical StatusDot sits flush at
          the top-right corner when present. */}
      <div className="relative flex shrink-0">
        <File02Icon size="lg" className={dot ? 'text-primary' : 'text-muted'} />
        {dot && (
          <StatusDot variant={dot} className="absolute right-0 top-0 ring-2 ring-elevated" />
        )}
      </div>

      {/* Info — VERTICAL: FileName above Metadata. Metadata is itself a
          HORIZONTAL composition of Size · UploadedBy · Timestamp — matches
          Figma's Metadata FRAME structure exactly. */}
      <div className="flex flex-1 min-w-0 flex-col justify-center gap-0">
        <span className="text-body-sm text-primary truncate">{fileName}</span>
        <span className="flex items-center gap-1 text-label-sm text-muted min-w-0">
          <span className="truncate">{size}</span>
          <span aria-hidden="true">·</span>
          <span className="truncate">{uploadedBy}</span>
          <span aria-hidden="true">·</span>
          <Timestamp date={uploadedAt} format="short-date" className="truncate" />
        </span>
      </div>

      {/* Preview button — Figma binds to Button Size=xs (h-7, 28px). */}
      {hasPreview && (
        <Button
          variant="secondary"
          size="xs"
          startIcon={<EyeIcon size="sm" />}
          onClick={(e) => {
            e.stopPropagation();
            onPreview?.();
          }}
        >
          Preview
        </Button>
      )}
    </div>
  );
}
