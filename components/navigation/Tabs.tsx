import { clsx } from 'clsx';

export interface Tab { label: string; value: string; }
export interface TabsProps {
  tabs: Tab[];
  active: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Tabs({ tabs, active, onChange, className }: TabsProps) {
  return (
    <div role="tablist" className={clsx('flex border-b border-neutral-200', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={active === tab.value}
          onClick={() => onChange(tab.value)}
          className={clsx(
            'px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors',
            active === tab.value
              ? 'border-brand-500 text-brand-600'
              : 'border-transparent text-neutral-500 hover:text-neutral-700',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
