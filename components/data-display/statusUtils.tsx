import { StatusFulfilledIcon } from '../primitives/icons/StatusFulfilledIcon';
import { StatusReturnedIcon } from '../primitives/icons/StatusReturnedIcon';
import { StatusAcceptedIcon } from '../primitives/icons/StatusAcceptedIcon';
import { StatusOutstandingIcon } from '../primitives/icons/StatusOutstandingIcon';
import type { StatusIndicator } from './RequestRow';

// Discrete size tier matching the Figma `Size = Small | Medium | Large` axis on the
// status-* icon ComponentSets. 'sm' = 16px, 'md' = 20px, 'lg' = 24px.
export type StatusIconSize = 'sm' | 'md' | 'lg';

const PLACEHOLDER_CLASS: Record<StatusIconSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

// Icons omit aria-label so their internal logic sets aria-hidden="true" automatically.
// withPlaceholder: true renders an empty same-size span for 'none' to preserve layout alignment.
// size: defaults to 'lg' (24px) for prominent display; pass 'md' (20px) for compact contexts like menus.
// Note: const arrow avoids react-docgen duplicate-binding false positive on function declarations
export const renderStatus = (
  status?: StatusIndicator,
  withPlaceholder = false,
  size: StatusIconSize = 'lg',
): JSX.Element | null => {
  if (status === 'fulfilled')   return <StatusFulfilledIcon   size={size} className="text-status-warning" />;
  if (status === 'returned')    return <StatusReturnedIcon    size={size} className="text-status-error" />;
  if (status === 'accepted')    return <StatusAcceptedIcon    size={size} className="text-status-success" />;
  if (status === 'outstanding') return <StatusOutstandingIcon size={size} className="text-action-primary" />;
  if (withPlaceholder)          return <span aria-hidden="true" className={`${PLACEHOLDER_CLASS[size]} inline-block shrink-0`} />;
  return null;
};
