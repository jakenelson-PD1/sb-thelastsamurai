import { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { CountBadge } from './CountBadge';
import { SearchSmIcon } from './icons/SearchSmIcon';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { ArrowUpIcon } from './icons/ArrowUpIcon';
import { XCloseIcon } from './icons/XCloseIcon';

type SearchSize = 'xs' | 'sm' | 'md';

const searchContainerSize: Record<SearchSize, string> = {
  xs: 'h-7',
  sm: 'h-8',
  md: 'h-9',
};

const searchNavBtnSize: Record<SearchSize, string> = {
  xs: 'h-5 w-5',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
};

export interface SearchProps {
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  currentMatch?: number;
  totalMatches?: number;
  placeholder?: string;
  disabled?: boolean;
  size?: SearchSize;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function Search({
  value = '',
  onChange,
  onClear,
  onNext,
  onPrevious,
  currentMatch,
  totalMatches,
  placeholder = 'Type here…',
  disabled = false,
  size = 'md',
  className,
  onFocus,
  onBlur,
}: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  // Mirror Figma's split: focus and "filled" (has-value) are distinct states.
  // - Idle:   not focused, empty
  // - Hover:  pointer over (handled via :hover, no JS state)
  // - Focus:  focused, empty
  // - Active: has a value (filled). Shows the result chrome (counter + nav + clear).
  const filled = value.length > 0;
  const showActiveChrome = filled;
  const showCounter = filled && totalMatches !== undefined;
  const navBtnClass = searchNavBtnSize[size];

  return (
    <div
      className={clsx(
        'flex w-full items-center gap-1 rounded-pill border bg-elevated px-3 transition-colors',
        searchContainerSize[size],
        filled
          ? // Active (has value) — info-toned border, no ring
            'border-status-info-border'
          : focused
          ? // Focus (empty + focused) — info-toned border with ring for keyboard a11y
            'border-status-info-border ring-2 ring-status-info-border/40'
          : // Idle — default border, hover hint
            'border-line-strong hover:bg-surface',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Search icon — visible whenever the input is empty (Idle and Focus states) */}
      {!filled && (
        <SearchSmIcon size={14} className="shrink-0 text-muted" />
      )}

      {/* Text input */}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => { setFocused(true); onFocus?.(); }}
        onBlur={() => { setFocused(false); onBlur?.(); }}
        placeholder={placeholder}
        disabled={disabled}
        className="min-w-0 flex-1 bg-transparent text-body-md text-primary placeholder:text-muted outline-none disabled:cursor-not-allowed"
      />

      {/* Active state controls — only when filled */}
      {showActiveChrome && (
        <>
          {/* Match counter */}
          {showCounter && (
            <CountBadge>{currentMatch ?? 0}/{totalMatches}</CountBadge>
          )}

          {/* Navigate down */}
          <button
            type="button"
            onClick={onNext}
            disabled={disabled || !totalMatches}
            aria-label="Next match"
            className={clsx('flex shrink-0 items-center justify-center rounded-pill text-secondary transition-colors hover:bg-surface hover:text-primary disabled:pointer-events-none disabled:opacity-40', navBtnClass)}
          >
            <ArrowDownIcon size={14} />
          </button>

          {/* Navigate up */}
          <button
            type="button"
            onClick={onPrevious}
            disabled={disabled || !totalMatches}
            aria-label="Previous match"
            className={clsx('flex shrink-0 items-center justify-center rounded-pill text-secondary transition-colors hover:bg-surface hover:text-primary disabled:pointer-events-none disabled:opacity-40', navBtnClass)}
          >
            <ArrowUpIcon size={14} />
          </button>

          {/* Clear */}
          {value && (
            <button
              type="button"
              onClick={onClear}
              disabled={disabled}
              aria-label="Clear search"
              className={clsx('flex shrink-0 items-center justify-center rounded-pill text-secondary transition-colors hover:bg-surface hover:text-primary disabled:pointer-events-none', navBtnClass)}
            >
              <XCloseIcon size={14} />
            </button>
          )}
        </>
      )}
    </div>
  );
}
