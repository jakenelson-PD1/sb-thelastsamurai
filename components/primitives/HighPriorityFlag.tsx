import { clsx } from 'clsx';
import { Button } from './Button';
import { Tooltip } from '../overlay/Tooltip';
import { Flag02Icon } from './icons/Flag02Icon';

export interface HighPriorityFlagProps {
  /** Click handler (e.g. navigate to the request). Forwarded to the Button. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Tooltip text. Defaults to "High priority". */
  tooltip?: string;
  className?: string;
}

// Canonical high-priority flag pill. A filled-purple, 24×24 rounded-pill
// icon-only Button carrying the flag-02 icon — signals a high-priority request.
// This is a Button preset (the underlying canonical is `Button`); Figma mirrors
// it with a Ghost/xxs/Only Button instance + purple-surface bg + flag-02 icon.
export function HighPriorityFlag({ onClick, tooltip = 'High priority', className }: HighPriorityFlagProps) {
  return (
    <Tooltip content={tooltip}>
      <Button
        variant="ghost"
        size="xxs"
        iconOnly
        className={clsx(
          '!bg-status-purple-surface hover:!bg-status-purple-surface-hover text-status-purple-fg',
          className,
        )}
        onClick={onClick}
        startIcon={<Flag02Icon size="sm" />}
      />
    </Tooltip>
  );
}
