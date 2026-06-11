import { clsx } from 'clsx';
import { Button } from '../primitives/Button';
import { NotificationBadge } from '../primitives/NotificationBadge';
import { Breadcrumb } from '../navigation/Breadcrumb';
import { DotsHorizontalIcon } from '../primitives/icons/DotsHorizontalIcon';
import { Users01Icon } from '../primitives/icons/Users01Icon';
import { Bell03Icon } from '../primitives/icons/Bell03Icon';
import { PieChart02Icon } from '../primitives/icons/PieChart02Icon';
import { ClockFastForwardIcon } from '../primitives/icons/ClockFastForwardIcon';
import { Tooltip } from '../overlay/Tooltip';

export interface EngagementHeaderProps {
  firmName: string;
  /** When provided, the firm segment in the breadcrumb is clickable. */
  firmHref?: string;
  clientName: string;
  /** When provided, the client segment in the breadcrumb is clickable. */
  clientHref?: string;
  /** Current page — rendered as the selected (last) breadcrumb segment. */
  engagementId: string;
  engagementName: string;
  activityCount?: number;
  onMenuClick?: () => void;
  onTeamClick?: () => void;
  onNotificationsClick?: () => void;
  onAnalyticsClick?: () => void;
  onActivityClick?: () => void;
  className?: string;
}

export function EngagementHeader({
  firmName,
  firmHref,
  clientName,
  clientHref,
  engagementId,
  engagementName,
  activityCount,
  onMenuClick,
  onTeamClick,
  onNotificationsClick,
  onAnalyticsClick,
  onActivityClick,
  className,
}: EngagementHeaderProps) {
  return (
    <div className={clsx('bg-elevated border-b border-line px-6 pt-3 pb-6 flex items-center justify-between', className)}>
      {/* Breadcrumb + title — uses canonical Breadcrumb primitive (Chip-composed segments) */}
      <div className="flex flex-col gap-1">
        <Breadcrumb
          items={[
            { label: firmName, href: firmHref },
            { label: clientName, href: clientHref },
            { label: engagementId },
          ]}
        />
        <h1 className="text-display font-medium text-primary leading-7">{engagementName}</h1>
      </div>

      {/* Action icons — 20px icons, 32px clickable area */}
      <div className="flex items-center">
        <Tooltip content="Menu">
          <Button variant="ghost" size="md" iconOnly aria-label="Menu" onClick={onMenuClick}
            startIcon={<DotsHorizontalIcon size="lg" />} />
        </Tooltip>
        <Tooltip content="Team">
          <Button variant="ghost" size="md" iconOnly aria-label="Team" onClick={onTeamClick}
            startIcon={<Users01Icon size="lg" />} />
        </Tooltip>
        <Tooltip content="Notifications">
          <Button variant="ghost" size="md" iconOnly aria-label="Notifications" onClick={onNotificationsClick}
            startIcon={<Bell03Icon size="lg" />} />
        </Tooltip>
        <Tooltip content="Analytics">
          <Button variant="ghost" size="md" iconOnly aria-label="Analytics" onClick={onAnalyticsClick}
            startIcon={<PieChart02Icon size="lg" />} />
        </Tooltip>
        <Tooltip content="Activity">
          <div className="relative">
            <Button variant="ghost" size="md" iconOnly aria-label="Activity" onClick={onActivityClick}
              startIcon={<ClockFastForwardIcon size="lg" />} />
            {activityCount != null && (
              <NotificationBadge count={activityCount} className="absolute top-0.5 right-0.5" />
            )}
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
