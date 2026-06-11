import { clsx } from 'clsx';
import { useState } from 'react';
import { Button } from '../primitives/Button';
import { Checkbox } from '../forms/Checkbox';
import { FileRow } from './FileRow';
import { AccordionItem } from './Accordion';
import { Dropdown } from '../overlay/Dropdown';
import { ActionMenu } from '../overlay/ActionMenu';
import { Download01Icon } from '../primitives/icons/Download01Icon';
import { Trash03Icon } from '../primitives/icons/Trash03Icon';
import { Upload01Icon } from '../primitives/icons/Upload01Icon';
import { Icon } from '../primitives/Icon';
import { SortAlphaIcon } from '../primitives/icons/SortAlphaIcon';
import { SortDateIcon } from '../primitives/icons/SortDateIcon';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';
import { Tooltip } from '../overlay/Tooltip';

export interface ClientFile {
  id: string;
  name: string;
  sizeKb: number;
  uploadedBy: string;
  uploadedAt: string;
  type: 'pdf' | 'excel' | 'word' | 'image' | 'other';
  dot?: 'unread' | 'attention';
}

export interface ClientFilesSectionProps {
  files?: ClientFile[];
  onDownload?: (ids: string[]) => void;
  onDelete?: (ids: string[]) => void;
  onImport?: () => void;
  onPreview?: (id: string) => void;
  className?: string;
}

export function ClientFilesSection({
  files = [],
  onDownload,
  onDelete,
  onImport,
  onPreview,
  className,
}: ClientFilesSectionProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'name' | 'date' | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const allSelected = files.length > 0 && selectedIds.size === files.length;
  const someSelected = selectedIds.size > 0 && selectedIds.size < files.length;

  function handleSelectAll() {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(files.map((f) => f.id)));
    }
  }

  function toggleId(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const selectedIdsArray = Array.from(selectedIds);

  function handleSort(by: 'name' | 'date') {
    if (sortBy === by) {
      if (sortDir === 'asc') {
        setSortDir('desc');
      } else {
        setSortBy(null);
        setSortDir('asc');
      }
    } else {
      setSortBy(by);
      setSortDir('asc');
    }
  }

  const sortedFiles = [...files].sort((a, b) => {
    if (!sortBy) return 0;
    const dir = sortDir === 'asc' ? 1 : -1;
    if (sortBy === 'name') return a.name.localeCompare(b.name) * dir;
    return a.uploadedAt.localeCompare(b.uploadedAt) * dir;
  });

  const totalSizeKb = files.reduce((sum, f) => sum + f.sizeKb, 0);
  const totalSizeLabel = totalSizeKb >= 1024
    ? `${(totalSizeKb / 1024).toFixed(1)} MB`
    : `${totalSizeKb} KB`;

  return (
    // Collapsible "Client attached files" section — canonical AccordionItem
    // header (Body SM Medium title + chevron) over the toolbar, filter bar, and
    // file list.
    <AccordionItem
      title="Client attached files"
      size="md"
      defaultOpen
      sticky
      stickyTop="top-12"
      className={clsx(className)}
    >
      {/* Toolbar */}
      <div className="flex h-10 items-center justify-between border-b border-line px-6 gap-2 min-w-0">
        <div className="flex items-center gap-2 min-w-0 shrink-0">
          <Checkbox
            checked={allSelected}
            indeterminate={someSelected && !allSelected}
            onChange={handleSelectAll}
            aria-label="Select all files"
          />
          <Button
            variant="secondary"
            size="xs"
            startIcon={<Download01Icon size="sm" />}
            onClick={() => onDownload?.(selectedIdsArray)}
            disabled={selectedIdsArray.length === 0}
          >
            Download
          </Button>
          <Button
            variant="secondary"
            size="xs"
            startIcon={<Trash03Icon size="sm" />}
            onClick={() => onDelete?.(selectedIdsArray)}
            disabled={selectedIdsArray.length === 0}
          >
            Delete
          </Button>
        </div>
        <Button
          variant="secondary"
          size="xs"
          startIcon={<Upload01Icon size="sm" />}
          onClick={onImport}
        >
          Import client files
        </Button>
      </div>

      {/* Filter bar */}
      <div className="flex h-10 items-center border-b border-line px-6 gap-1 min-w-0">
        <Tooltip content="Sort alphabetically">
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            className={clsx(sortBy === 'name' && '!text-action-primary')}
            onClick={() => handleSort('name')}
            startIcon={<Icon icon={SortAlphaIcon} size="sm" />}
          />
        </Tooltip>
        <Tooltip content="Sort by date added">
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            className={clsx(sortBy === 'date' && '!text-action-primary')}
            onClick={() => handleSort('date')}
            startIcon={<Icon icon={SortDateIcon} size="sm" />}
          />
        </Tooltip>
        {/* Canonical Dropdown for the file-type filter (was a hand-rolled button) */}
        <Dropdown
          width="auto"
          trigger={
            <Button variant="secondary" size="xs" endIcon={<ChevronDownIcon size="sm" />}>
              All
            </Button>
          }
        >
          <ActionMenu
            groups={[{
              items: [
                { label: 'All files',     selected: true },
                { label: 'PDFs' },
                { label: 'Spreadsheets' },
                { label: 'Documents' },
                { label: 'Images' },
              ],
            }]}
          />
        </Dropdown>
        <div className="ml-2 flex items-center gap-1">
          <span className="text-label-sm text-muted">{files.length} {files.length === 1 ? 'file' : 'files'}</span>
          <span className="text-label-sm text-muted">·</span>
          <span className="text-label-sm text-muted">{totalSizeLabel}</span>
        </div>
      </div>

      {/* File list */}
      {sortedFiles.map((file) => {
        const sizeLabel =
          file.sizeKb >= 1024
            ? `${(file.sizeKb / 1024).toFixed(1)} MB`
            : `${file.sizeKb} KB`;
        return (
          <FileRow
            key={file.id}
            fileName={file.name}
            // Structured metadata props — FileRow composes the line internally
            // with the canonical Timestamp primitive for the date.
            size={sizeLabel}
            uploadedBy={file.uploadedBy}
            uploadedAt={file.uploadedAt}
            checked={selectedIds.has(file.id)}
            onCheckedChange={() => toggleId(file.id)}
            dot={file.dot}
            onPreview={onPreview ? () => onPreview(file.id) : undefined}
          />
        );
      })}
    </AccordionItem>
  );
}
