import { clsx } from 'clsx';
import { useState } from 'react';
import { Button } from '../primitives/Button';
import { Divider } from '../layout/Divider';
import { Upload01Icon } from '../primitives/icons/Upload01Icon';
import { PencilLineIcon } from '../primitives/icons/PencilLineIcon';

export interface FileDropZoneProps {
  /** Controlled override for the dragging state. When set, internal drag tracking is bypassed. */
  dragging?: boolean;
  onFilesDropped?: (files: File[]) => void;
  onBrowse?: () => void;
  onESignatureClick?: () => void;
  className?: string;
}

export function FileDropZone({
  dragging: draggingProp,
  onFilesDropped,
  onBrowse,
  onESignatureClick,
  className,
}: FileDropZoneProps) {
  const [internalDragging, setInternalDragging] = useState(false);
  const dragging = draggingProp ?? internalDragging;
  const setDragging = (next: boolean) => {
    if (draggingProp === undefined) setInternalDragging(next);
  };

  return (
    <div className={clsx('flex items-stretch gap-0 h-[120px] bg-elevated border border-line', className)}>
      {/* Drop area — entire box is clickable */}
      <button
        type="button"
        onClick={onBrowse}
        className={clsx(
          'flex-1 flex flex-col items-center justify-center gap-2 px-6 py-4 border border-dashed rounded-control m-4 transition-colors cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus',
          dragging
            ? 'bg-row-selected border-action-primary'
            : 'bg-surface border-line hover:border-line-focus hover:bg-recessed',
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          onFilesDropped?.(Array.from(e.dataTransfer.files));
        }}
      >
        <Upload01Icon size="md" className="text-link" />
        <span className="text-body-md text-link">
          Drop files here or browse for files
        </span>
      </button>

      {/* Vertical divider */}
      <Divider orientation="vertical" className="shrink-0" />

      {/* E-signature area */}
      <div className="flex items-center justify-center p-6">
        <Button
          variant="secondary"
          size="xs"
          startIcon={<PencilLineIcon size="sm" />}
          onClick={onESignatureClick}
        >
          E-Signature
        </Button>
      </div>
    </div>
  );
}
