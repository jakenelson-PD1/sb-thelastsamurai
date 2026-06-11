import { clsx } from 'clsx';

export type TimestampFormat = 'date' | 'datetime' | 'time' | 'short-date';

export interface TimestampProps {
  date: Date | string;
  /**
   * What to render.
   * - `datetime` (default): `MM/DD/YYYY HH:MM AM/PM`
   * - `date`: `MM/DD/YYYY` (no time)
   * - `short-date`: `MM/DD/YY` (no time, 2-digit year) — matches the legacy
   *   "00/00/00" placeholder used in FileRow / dense list contexts.
   * - `time`: `HH:MM AM/PM` (no date)
   */
  format?: TimestampFormat;
  className?: string;
}

export function Timestamp({ date, format = 'datetime', className }: TimestampProps) {
  const d = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(d.getTime())) {
    return <time className={clsx(className)}>{String(date)}</time>;
  }
  const datePart = d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  const shortDatePart = d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
  const timePart = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  let content: string;
  switch (format) {
    case 'date':       content = datePart; break;
    case 'short-date': content = shortDatePart; break;
    case 'time':       content = timePart; break;
    case 'datetime':
    default:           content = `${datePart} ${timePart}`;
  }

  return (
    <time dateTime={d.toISOString()} className={clsx(className)}>
      {content}
    </time>
  );
}
