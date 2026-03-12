# Phase 3: Component Polish Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the Last Samurai design system with status surface tokens, full semantic token migration across 24 components, MUI-style visual polish (icon buttons, chip badges, icon alerts), and comprehensive Storybook stories with dark mode support.

**Architecture:** Token-first approach — update `tokens/semantic.ts` first so all new CSS vars are available, then migrate components in dependency order (primitives → feedback → navigation → overlay → data-display → forms), then stories.

**Tech Stack:** React 18 · TypeScript · Tailwind CSS v3 · Storybook 8 · clsx · class-variance-authority · lucide-react

**Spec:** `last-samurai/docs/superpowers/specs/2026-03-11-phase-3-component-polish.md`

**Verification pattern (no unit tests for UI):** TypeScript compilation + Storybook visual check.
- TypeScript: `npx tsc --noEmit --project last-samurai/tsconfig.json`
- Storybook: `npm --prefix last-samurai run storybook` → navigate to story at `http://localhost:6006`

---

## Chunk 1: Token Layer

### Task 1: Add status surface tokens + fix dark mode hover bug

**Files:**
- Modify: `last-samurai/tokens/semantic.ts`

This is a complete rewrite of `tokens/semantic.ts`. The changes are:
1. Add 12 new CSS vars for status surfaces (info/success/warning/error × surface/border/fg) to both `:root` and `.dark`
2. Fix `--color-action-primary-hover` in dark mode: `brand[400]` → `brand[300]` (was same as `action-primary`, hover invisible)
3. Add 12 new Tailwind color aliases to the plugin's `theme.extend.colors`

Note: `colors.green`, `colors.yellow`, `colors.red` all exist in `tokens/colors.ts` with full 50–950 palette.

- [ ] **Step 1: Replace `tokens/semantic.ts` with the full updated version**

Write `last-samurai/tokens/semantic.ts`:

```typescript
import plugin from 'tailwindcss/plugin';
import { colors } from './colors';

export const semanticPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        // Backgrounds
        '--color-bg-canvas':   colors.neutral[50],
        '--color-bg-surface':  colors.neutral[100],
        '--color-bg-elevated': '#ffffff',

        // Foreground / text
        '--color-fg-primary':   colors.neutral[900],
        '--color-fg-secondary': colors.neutral[700],
        '--color-fg-muted':     colors.neutral[500],
        '--color-fg-link':      colors.brand[600],
        '--color-fg-on-accent': '#ffffff',

        // Borders
        '--color-line':        colors.neutral[200],
        '--color-line-strong': colors.neutral[300],
        '--color-line-focus':  colors.brand[500],

        // Actions
        '--color-action-primary':       colors.brand[500],
        '--color-action-primary-hover': colors.brand[600],

        // Status accents
        '--color-status-success':       colors.green[500],
        '--color-status-warning':       colors.yellow[500],
        '--color-status-error':         colors.red[500],
        '--color-status-error-hover':   colors.red[600],

        // Status surfaces — info
        '--color-status-info-surface': colors.brand[50],
        '--color-status-info-border':  colors.brand[200],
        '--color-status-info-fg':      colors.brand[700],

        // Status surfaces — success
        '--color-status-success-surface': colors.green[50],
        '--color-status-success-border':  colors.green[200],
        '--color-status-success-fg':      colors.green[700],

        // Status surfaces — warning
        '--color-status-warning-surface': colors.yellow[50],
        '--color-status-warning-border':  colors.yellow[200],
        '--color-status-warning-fg':      colors.yellow[700],

        // Status surfaces — error
        '--color-status-error-surface': colors.red[50],
        '--color-status-error-border':  colors.red[200],
        '--color-status-error-fg':      colors.red[700],
      },
      '.dark': {
        // Backgrounds
        '--color-bg-canvas':   colors.neutral[950],
        '--color-bg-surface':  colors.neutral[900],
        '--color-bg-elevated': colors.neutral[800],

        // Foreground / text
        '--color-fg-primary':   colors.neutral[50],
        '--color-fg-secondary': colors.neutral[300],
        '--color-fg-muted':     colors.neutral[500],
        '--color-fg-link':      colors.brand[400],
        '--color-fg-on-accent': '#ffffff',

        // Borders
        '--color-line':        colors.neutral[700],
        '--color-line-strong': colors.neutral[600],
        '--color-line-focus':  colors.brand[400],

        // Actions
        '--color-action-primary':       colors.brand[400],
        '--color-action-primary-hover': colors.brand[300],  // fixed: was brand[400]

        // Status accents
        '--color-status-success':     colors.green[400],
        '--color-status-warning':     colors.yellow[400],
        '--color-status-error':       colors.red[400],
        '--color-status-error-hover': colors.red[300],

        // Status surfaces — info
        '--color-status-info-surface': colors.brand[950],
        '--color-status-info-border':  colors.brand[700],
        '--color-status-info-fg':      colors.brand[300],

        // Status surfaces — success
        '--color-status-success-surface': colors.green[950],
        '--color-status-success-border':  colors.green[700],
        '--color-status-success-fg':      colors.green[300],

        // Status surfaces — warning
        '--color-status-warning-surface': colors.yellow[950],
        '--color-status-warning-border':  colors.yellow[700],
        '--color-status-warning-fg':      colors.yellow[300],

        // Status surfaces — error
        '--color-status-error-surface': colors.red[950],
        '--color-status-error-border':  colors.red[700],
        '--color-status-error-fg':      colors.red[300],
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          // Backgrounds
          'canvas':   'var(--color-bg-canvas)',
          'surface':  'var(--color-bg-surface)',
          'elevated': 'var(--color-bg-elevated)',

          // Foreground
          'fg-primary':   'var(--color-fg-primary)',
          'fg-secondary': 'var(--color-fg-secondary)',
          'fg-muted':     'var(--color-fg-muted)',
          'fg-link':      'var(--color-fg-link)',
          'fg-on-accent': 'var(--color-fg-on-accent)',

          // Borders
          'line':        'var(--color-line)',
          'line-strong': 'var(--color-line-strong)',
          'line-focus':  'var(--color-line-focus)',

          // Actions
          'action-primary':       'var(--color-action-primary)',
          'action-primary-hover': 'var(--color-action-primary-hover)',

          // Status accents
          'status-success':       'var(--color-status-success)',
          'status-warning':       'var(--color-status-warning)',
          'status-error':         'var(--color-status-error)',
          'status-error-hover':   'var(--color-status-error-hover)',

          // Status surfaces
          'status-info-surface':    'var(--color-status-info-surface)',
          'status-info-border':     'var(--color-status-info-border)',
          'status-info-fg':         'var(--color-status-info-fg)',
          'status-success-surface': 'var(--color-status-success-surface)',
          'status-success-border':  'var(--color-status-success-border)',
          'status-success-fg':      'var(--color-status-success-fg)',
          'status-warning-surface': 'var(--color-status-warning-surface)',
          'status-warning-border':  'var(--color-status-warning-border)',
          'status-warning-fg':      'var(--color-status-warning-fg)',
          'status-error-surface':   'var(--color-status-error-surface)',
          'status-error-border':    'var(--color-status-error-border)',
          'status-error-fg':        'var(--color-status-error-fg)',
        },
      },
    },
  },
);
```

- [ ] **Step 2: Verify TypeScript compilation**

```bash
npx tsc --noEmit --project last-samurai/tsconfig.json
```

Expected: no errors. If you see errors about missing color stops (e.g., `green[950]`), check `tokens/colors.ts` — all palettes should have 50–950 stops.

---

## Chunk 2: Storybook Dark Mode + Button + Badge

### Task 2: Dark mode decorator

**Files:**
- Modify: `last-samurai/.storybook/preview.tsx`

The dark mode decorator checks `context.globals.backgrounds.value` and wraps stories in `<div class="dark">` when the dark background is active.

- [ ] **Step 1: Write `.storybook/preview.tsx`**

```typescript
import type { Preview, Decorator } from '@storybook/react';
import '../globals.css';

const withDarkMode: Decorator = (Story, context) => {
  const isDark = context.globals.backgrounds?.value === '#111827';
  return (
    <div className={isDark ? 'dark' : ''}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withDarkMode],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111827' },
      ],
    },
  },
};

export default preview;
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit --project last-samurai/tsconfig.json
```

Expected: no errors.

---

### Task 3: Button — icon props + height + radius

**Files:**
- Modify: `last-samurai/components/primitives/Button.tsx`
- Modify: `last-samurai/components/primitives/Button.stories.tsx`

**Changes from Phase 2 version:**
- `rounded` → `rounded-lg` in base classes
- md: `h-10` → `h-9`; lg: `h-12` → `h-11`
- Add `startIcon`, `endIcon`, `iconOnly` props
- When `iconOnly` is true: override to square dimensions and remove padding

- [ ] **Step 1: Write `components/primitives/Button.tsx`**

```typescript
import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:   'bg-action-primary text-fg-on-accent hover:bg-action-primary-hover',
        secondary: 'bg-surface text-fg-primary hover:bg-elevated border border-line',
        ghost:     'hover:bg-surface text-fg-secondary',
        danger:    'bg-status-error text-fg-on-accent hover:bg-status-error-hover',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-9 px-4 text-sm',
        lg: 'h-11 px-6 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>;

const iconOnlySizeMap: Record<ButtonSize, string> = {
  sm: 'h-8 w-8 p-0',
  md: 'h-9 w-9 p-0',
  lg: 'h-11 w-11 p-0',
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconOnly?: boolean;
}

export function Button({
  variant,
  size,
  iconOnly,
  startIcon,
  endIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        buttonVariants({ variant, size }),
        iconOnly && iconOnlySizeMap[size ?? 'md'],
        className,
      )}
      {...props}
    >
      {startIcon && (
        <span className={clsx('inline-flex', children && !iconOnly && 'mr-1.5')}>
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className={clsx('inline-flex', children && !iconOnly && 'ml-1.5')}>
          {endIcon}
        </span>
      )}
    </button>
  );
}
```

- [ ] **Step 2: Write `components/primitives/Button.stories.tsx`**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Plus, Trash2, Settings } from 'lucide-react';
import { Button } from './Button';

const meta: Meta<typeof Button> = { component: Button, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Button>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Learn more</Button>
      <Button variant="danger">Delete account</Button>
    </div>
  ),
};

export const Primary: Story    = { args: { children: 'Save changes', variant: 'primary' } };
export const Secondary: Story  = { args: { children: 'Cancel', variant: 'secondary' } };
export const Ghost: Story      = { args: { children: 'Learn more', variant: 'ghost' } };
export const Danger: Story     = { args: { children: 'Delete account', variant: 'danger' } };
export const Small: Story      = { args: { children: 'Small', size: 'sm' } };
export const Large: Story      = { args: { children: 'Large', size: 'lg' } };
export const Disabled: Story   = { args: { children: 'Disabled', disabled: true } };

export const WithStartIcon: Story = {
  args: { children: 'Add item', startIcon: <Plus size={16} /> },
};

export const WithEndIcon: Story = {
  args: { children: 'Settings', endIcon: <Settings size={16} /> },
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="primary" iconOnly size="sm"><Plus size={14} /></Button>
      <Button variant="primary" iconOnly size="md"><Plus size={16} /></Button>
      <Button variant="secondary" iconOnly size="md"><Settings size={16} /></Button>
      <Button variant="danger" iconOnly size="md"><Trash2 size={16} /></Button>
    </div>
  ),
};
```

- [ ] **Step 3: TypeScript check**

```bash
npx tsc --noEmit --project last-samurai/tsconfig.json
```

Expected: no errors.

---

### Task 4: Badge → Chip upgrade

**Files:**
- Modify: `last-samurai/components/primitives/Badge.tsx`
- Modify: `last-samurai/components/primitives/Badge.stories.tsx`

**Changes from Phase 1 version:**
- `rounded-pill` → `rounded-full` (same visual, cleaner token)
- All color variants → semantic status surface tokens
- Add `default` variant using `bg-surface text-fg-secondary`
- Rename `brand` → keeps name, but uses `status-info-*` tokens
- Add `outlined` variant
- Add `onDelete` prop (renders × button)
- Add `avatar` prop (renders before label)

- [ ] **Step 1: Write `components/primitives/Badge.tsx`**

```typescript
import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        default:  'bg-surface text-fg-secondary',
        brand:    'bg-status-info-surface text-status-info-fg',
        success:  'bg-status-success-surface text-status-success-fg',
        warning:  'bg-status-warning-surface text-status-warning-fg',
        danger:   'bg-status-error-surface text-status-error-fg',
        outlined: 'border border-line-strong bg-transparent text-fg-secondary',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  onDelete?: () => void;
  avatar?: React.ReactNode;
}

export function Badge({ variant, onDelete, avatar, className, children, ...props }: BadgeProps) {
  return (
    <span className={clsx(badgeVariants({ variant }), className)} {...props}>
      {avatar && (
        <span className="-ml-1 mr-1.5 inline-flex">{avatar}</span>
      )}
      {children}
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className="ml-1 -mr-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-black/10 focus:outline-none"
          aria-label="Remove"
        >
          ×
        </button>
      )}
    </span>
  );
}
```

- [ ] **Step 2: Write `components/primitives/Badge.stories.tsx`**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Avatar } from './Avatar';

const meta: Meta<typeof Badge> = { component: Badge, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Badge>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="brand">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outlined">Outlined</Badge>
    </div>
  ),
};

export const Default: Story  = { args: { children: 'Default' } };
export const Brand: Story    = { args: { children: 'Info',    variant: 'brand' } };
export const Success: Story  = { args: { children: 'Active',  variant: 'success' } };
export const Warning: Story  = { args: { children: 'Pending', variant: 'warning' } };
export const Danger: Story   = { args: { children: 'Error',   variant: 'danger' } };
export const Outlined: Story = { args: { children: 'Draft',   variant: 'outlined' } };

export const Deletable: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="brand" onDelete={() => alert('delete info')}>React</Badge>
      <Badge variant="success" onDelete={() => alert('delete success')}>TypeScript</Badge>
      <Badge variant="default" onDelete={() => alert('delete default')}>Tag</Badge>
    </div>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <Badge
      variant="default"
      avatar={<Avatar size="sm" initials="JN" className="h-4 w-4 text-[9px]" />}
    >
      Jake Nelson
    </Badge>
  ),
};
```

- [ ] **Step 3: TypeScript check**

```bash
npx tsc --noEmit --project last-samurai/tsconfig.json
```

Expected: no errors.

---

## Chunk 3: Feedback Components

### Task 5: Avatar token migration

**Files:**
- Modify: `last-samurai/components/primitives/Avatar.tsx`
- Modify: `last-samurai/components/primitives/Avatar.stories.tsx`

- [ ] **Step 1: Write `components/primitives/Avatar.tsx`**

```typescript
import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const avatarVariants = cva(
  'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface',
  {
    variants: {
      size: {
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-14 w-14 text-base',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  initials?: string;
}

export function Avatar({ src, alt, initials, size, className, ...props }: AvatarProps) {
  return (
    <div className={clsx(avatarVariants({ size }), className)} {...props}>
      {src ? (
        <img src={src} alt={alt ?? ''} className="h-full w-full object-cover" />
      ) : (
        <span className="font-medium text-fg-secondary">{initials ?? '?'}</span>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Write `components/primitives/Avatar.stories.tsx`**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = { component: Avatar, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Avatar>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" initials="JN" />
      <Avatar size="md" initials="JN" />
      <Avatar size="lg" initials="JN" />
    </div>
  ),
};

export const WithInitials: Story = { args: { initials: 'JN', size: 'md' } };
export const Small: Story        = { args: { initials: 'AB', size: 'sm' } };
export const Large: Story        = { args: { initials: 'SK', size: 'lg' } };
```

---

### Task 6: Alert — icon + action props + semantic tokens

**Files:**
- Modify: `last-samurai/components/feedback/Alert.tsx`
- Modify: `last-samurai/components/feedback/Alert.stories.tsx`

**Changes:**
- Replace hardcoded `border-brand-200 bg-brand-50 text-brand-800` etc. with status surface tokens
- Remove `flex items-start gap-3` from base CVA string (now added inline so it only applies when icon is present)
- Add `icon` prop with static `iconBgMap` lookup (no dynamic class construction)
- Add `action` prop
- `rounded-card` → `rounded-lg`

- [ ] **Step 1: Write `components/feedback/Alert.tsx`**

```typescript
import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva('rounded-lg border p-4 text-sm', {
  variants: {
    variant: {
      info:    'border-status-info-border    bg-status-info-surface    text-status-info-fg',
      success: 'border-status-success-border bg-status-success-surface text-status-success-fg',
      warning: 'border-status-warning-border bg-status-warning-surface text-status-warning-fg',
      danger:  'border-status-error-border   bg-status-error-surface   text-status-error-fg',
    },
  },
  defaultVariants: { variant: 'info' },
});

type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

const iconBgMap: Record<AlertVariant, string> = {
  info:    'bg-status-info-surface text-status-info-fg',
  success: 'bg-status-success-surface text-status-success-fg',
  warning: 'bg-status-warning-surface text-status-warning-fg',
  danger:  'bg-status-error-surface text-status-error-fg',
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  icon?: React.ReactNode;
  action?: { label: string; onClick: () => void };
}

export function Alert({ variant, title, icon, action, children, className, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={clsx(alertVariants({ variant }), 'flex items-start gap-3', className)}
      {...props}
    >
      {icon && (
        <span
          className={clsx(
            'h-8 w-8 flex-shrink-0 rounded-full flex items-center justify-center',
            iconBgMap[variant ?? 'info'],
          )}
        >
          {icon}
        </span>
      )}
      <div className="flex-1 min-w-0">
        {title && <p className="font-medium">{title}</p>}
        {children && <p className={title ? 'mt-1 opacity-80' : ''}>{children}</p>}
      </div>
      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="ml-auto flex-shrink-0 text-sm font-medium text-fg-link hover:underline"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Write `components/feedback/Alert.stories.tsx`**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = { component: Alert, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Alert>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert variant="info"    title="Heads up"     >Your trial expires in 7 days.</Alert>
      <Alert variant="success" title="Saved"        >Your changes have been published.</Alert>
      <Alert variant="warning" title="Attention"    >This action may affect other users.</Alert>
      <Alert variant="danger"  title="Error"        >Failed to save. Please try again.</Alert>
    </div>
  ),
};

export const Info: Story    = { args: { variant: 'info',    title: 'Heads up',  children: 'Your trial expires in 7 days.' } };
export const Success: Story = { args: { variant: 'success', title: 'Saved',     children: 'Your changes have been published.' } };
export const Warning: Story = { args: { variant: 'warning', title: 'Attention', children: 'This action may affect other users.' } };
export const Danger: Story  = { args: { variant: 'danger',  title: 'Error',     children: 'Failed to save. Please try again.' } };

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert variant="info"    title="Update available" icon={<Info size={16} />}          >Version 2.0 is ready to install.</Alert>
      <Alert variant="success" title="Payment received" icon={<CheckCircle size={16} />}   >Invoice #1042 has been paid.</Alert>
      <Alert variant="warning" title="Low storage"      icon={<AlertTriangle size={16} />} >You have 500MB remaining.</Alert>
      <Alert variant="danger"  title="Login failed"     icon={<XCircle size={16} />}       >Incorrect password. 2 attempts left.</Alert>
    </div>
  ),
};

export const WithAction: Story = {
  args: {
    variant: 'info',
    title: 'Cookie policy',
    children: 'We use cookies to improve your experience.',
    action: { label: 'Manage settings', onClick: () => alert('manage') },
  },
};

export const WithIconAndAction: Story = {
  args: {
    variant: 'warning',
    title: 'Unsaved changes',
    children: 'You have unsaved changes that will be lost.',
    icon: <AlertTriangle size={16} />,
    action: { label: 'Dismiss', onClick: () => alert('dismiss') },
  },
};
```

- [ ] **Step 3: TypeScript check**

```bash
npx tsc --noEmit --project last-samurai/tsconfig.json
```

Expected: no errors.

---

### Task 7: Toast + Skeleton + Spinner token migration

**Files:**
- Modify: `last-samurai/components/feedback/Toast.tsx`
- Modify: `last-samurai/components/feedback/Toast.stories.tsx`
- Modify: `last-samurai/components/feedback/Skeleton.tsx`
- Modify: `last-samurai/components/feedback/Spinner.tsx`

**Toast changes:**
- `bg-neutral-900` → `bg-fg-primary` (inverse: dark on light, light on dark = correct)
- `text-white` → `text-canvas`
- `bg-green-600` → `bg-status-success`
- `bg-error-600` (invalid class, was a bug) → `bg-status-error`
- `rounded-card` → `rounded-lg`

- [ ] **Step 1: Write `components/feedback/Toast.tsx`**

```typescript
import { clsx } from 'clsx';

export interface ToastProps {
  message: string;
  description?: string;
  variant?: 'default' | 'success' | 'error';
  className?: string;
}

const variantMap = {
  default: 'bg-fg-primary text-canvas',
  success: 'bg-status-success text-fg-on-accent',
  error:   'bg-status-error text-fg-on-accent',
} as const;

export function Toast({ message, description, variant = 'default', className }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={clsx(
        'flex flex-col gap-1 rounded-lg px-4 py-3 shadow-modal text-sm max-w-sm',
        variantMap[variant],
        className,
      )}
    >
      <p className="font-medium">{message}</p>
      {description && <p className="opacity-80">{description}</p>}
    </div>
  );
}
```

- [ ] **Step 2: Write `components/feedback/Toast.stories.tsx`**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = { component: Toast, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Toast>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toast message="File saved" variant="default" />
      <Toast message="Success!" description="Your changes were saved." variant="success" />
      <Toast message="Error" description="Something went wrong. Please try again." variant="error" />
    </div>
  ),
};

export const Default: Story = { args: { message: 'File saved', variant: 'default' } };
export const Success: Story = { args: { message: 'Saved!', description: 'Your changes were saved.', variant: 'success' } };
export const Error: Story   = { args: { message: 'Error', description: 'Something went wrong.', variant: 'error' } };
```

- [ ] **Step 3: Write `components/feedback/Skeleton.tsx`**

```typescript
import { clsx } from 'clsx';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export function Skeleton({ width, height, className, style, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx('animate-pulse rounded bg-line-strong', className)}
      style={{ width, height, ...style }}
      {...props}
    />
  );
}
```

- [ ] **Step 4: Write `components/feedback/Spinner.tsx`**

```typescript
import { clsx } from 'clsx';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

const sizeMap = { sm: 'h-4 w-4', md: 'h-6 w-6', lg: 'h-10 w-10' } as const;

export function Spinner({ size = 'md', label = 'Loading…', className }: SpinnerProps) {
  return (
    <span role="status" aria-label={label} className="inline-flex items-center justify-center">
      <svg
        className={clsx('animate-spin text-action-primary', sizeMap[size], className)}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </span>
  );
}
```

- [ ] **Step 5: TypeScript check**

```bash
npx tsc --noEmit --project last-samurai/tsconfig.json
```

Expected: no errors.

---

## Chunk 4: Layout + Navigation Components

### Task 8: Layout components (Divider)

**Files:**
- Modify: `last-samurai/components/layout/Divider.tsx`

Container, Grid, Stack have no color classes — no changes needed.

- [ ] **Step 1: Write `components/layout/Divider.tsx`**

```typescript
import { clsx } from 'clsx';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Divider({ orientation = 'horizontal', className }: DividerProps) {
  return (
    <div
      role="separator"
      className={clsx(
        'bg-line',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
    />
  );
}
```

---

### Task 9: Navigation components

**Files:**
- Modify: `last-samurai/components/navigation/Tabs.tsx`
- Modify: `last-samurai/components/navigation/Breadcrumb.tsx`
- Modify: `last-samurai/components/navigation/Pagination.tsx`
- Modify: `last-samurai/components/navigation/Sidebar.tsx`
- Modify: `last-samurai/components/navigation/Sidebar.stories.tsx`

- [ ] **Step 1: Write `components/navigation/Tabs.tsx`**

```typescript
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
    <div role="tablist" className={clsx('flex border-b border-line', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={active === tab.value}
          onClick={() => onChange(tab.value)}
          className={clsx(
            'px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors',
            active === tab.value
              ? 'border-action-primary text-action-primary'
              : 'border-transparent text-fg-muted hover:text-fg-secondary',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Write `components/navigation/Breadcrumb.tsx`**

```typescript
import { clsx } from 'clsx';

export interface BreadcrumbItem { label: string; href?: string; }
export interface BreadcrumbProps { items: BreadcrumbItem[]; className?: string; }

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={clsx('flex items-center gap-1 text-sm', className)}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-fg-muted">/</span>}
          {item.href ? (
            <a href={item.href} className="text-fg-link hover:underline">{item.label}</a>
          ) : (
            <span className="text-fg-secondary" aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
```

- [ ] **Step 3: Write `components/navigation/Pagination.tsx`**

```typescript
import { clsx } from 'clsx';

export interface PaginationProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
  className?: string;
}

export function Pagination({ page, total, onChange, className }: PaginationProps) {
  return (
    <nav aria-label="Pagination" className={clsx('flex items-center gap-1', className)}>
      <button
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        className="rounded-lg px-3 py-1.5 text-sm font-medium text-fg-secondary hover:bg-surface disabled:opacity-40"
      >
        ‹ Prev
      </button>
      <span className="px-3 py-1.5 text-sm text-fg-secondary">
        {page} / {total}
      </span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= total}
        className="rounded-lg px-3 py-1.5 text-sm font-medium text-fg-secondary hover:bg-surface disabled:opacity-40"
      >
        Next ›
      </button>
    </nav>
  );
}
```

- [ ] **Step 4: Write `components/navigation/Sidebar.tsx`**

Active item gets left border treatment: `border-l-2 border-action-primary`. The 2px border shifts content right, so reduce left padding by 2px using `pl-[calc(0.75rem-2px)]` to keep text aligned.

```typescript
import { clsx } from 'clsx';

export interface SidebarItem { label: string; href: string; active?: boolean; }
export interface SidebarProps { items: SidebarItem[]; className?: string; }

export function Sidebar({ items, className }: SidebarProps) {
  return (
    <nav className={clsx('flex flex-col gap-1 w-56', className)}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={clsx(
            'rounded-lg py-2 text-sm font-medium transition-colors',
            item.active
              ? 'border-l-2 border-action-primary bg-surface pl-[calc(0.75rem-2px)] pr-3 text-action-primary'
              : 'px-3 text-fg-secondary hover:bg-surface',
          )}
          aria-current={item.active ? 'page' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
```

- [ ] **Step 5: Write `components/navigation/Sidebar.stories.tsx`**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = { component: Sidebar, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: { items: [
    { label: 'Dashboard',  href: '/',         active: true },
    { label: 'Orders',     href: '/orders' },
    { label: 'Customers',  href: '/customers' },
    { label: 'Products',   href: '/products' },
    { label: 'Settings',   href: '/settings' },
  ]},
};
```

- [ ] **Step 6: TypeScript check**

```bash
npx tsc --noEmit --project last-samurai/tsconfig.json
```

Expected: no errors.

---

## Chunk 5: Overlay + Data Display + Forms

### Task 10: Overlay components

**Files:**
- Modify: `last-samurai/components/overlay/Modal.tsx`
- Modify: `last-samurai/components/overlay/Drawer.tsx`
- Modify: `last-samurai/components/overlay/Tooltip.tsx`
- Modify: `last-samurai/components/overlay/Popover.tsx`

- [ ] **Step 1: Write `components/overlay/Modal.tsx`**

```typescript
import { clsx } from 'clsx';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        className={clsx(
          'relative z-10 w-full max-w-md rounded-lg bg-elevated p-6 shadow-modal',
          className,
        )}
      >
        {title && (
          <h2 id="modal-title" className="mb-4 text-lg font-semibold text-fg-primary">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write `components/overlay/Drawer.tsx`**

```typescript
import { clsx } from 'clsx';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: 'left' | 'right';
  title?: string;
  children?: React.ReactNode;
}

export function Drawer({ open, onClose, side = 'right', title, children }: DrawerProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        className={clsx(
          'relative z-10 flex w-80 flex-col bg-elevated shadow-modal',
          side === 'right' ? 'ml-auto' : 'mr-auto',
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          {title && <h2 className="text-base font-semibold text-fg-primary">{title}</h2>}
          <button
            onClick={onClose}
            className="ml-auto text-fg-muted hover:text-fg-secondary"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Write `components/overlay/Tooltip.tsx`**

```typescript
import { clsx } from 'clsx';
import { useState } from 'react';

export interface TooltipProps {
  content: string;
  children: React.ReactElement;
  className?: string;
}

export function Tooltip({ content, children, className }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={clsx(
            'absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-lg bg-fg-primary px-2 py-1 text-xs text-canvas shadow',
            className,
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
}
```

- [ ] **Step 4: Write `components/overlay/Popover.tsx`**

```typescript
import { clsx } from 'clsx';
import { useState } from 'react';

export interface PopoverProps {
  trigger: React.ReactElement;
  children: React.ReactNode;
  className?: string;
}

export function Popover({ trigger, children, className }: PopoverProps) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-flex">
      <span onClick={() => setOpen((v) => !v)}>{trigger}</span>
      {open && (
        <div
          className={clsx(
            'absolute top-full left-0 z-10 mt-1 min-w-48 rounded-lg border border-line bg-elevated p-3 shadow-card',
            className,
          )}
        >
          {children}
        </div>
      )}
    </span>
  );
}
```

---

### Task 11: Data display components

**Files:**
- Modify: `last-samurai/components/data-display/Card.tsx`
- Modify: `last-samurai/components/data-display/Card.stories.tsx`
- Modify: `last-samurai/components/data-display/Table.tsx`
- Modify: `last-samurai/components/data-display/Table.stories.tsx`
- Modify: `last-samurai/components/data-display/List.tsx`
- Modify: `last-samurai/components/data-display/List.stories.tsx`
- Modify: `last-samurai/components/data-display/Stat.tsx`
- Modify: `last-samurai/components/data-display/Stat.stories.tsx`

- [ ] **Step 1: Write `components/data-display/Card.tsx`**

```typescript
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg';
}

const paddingMap = { sm: 'p-3', md: 'p-4', lg: 'p-6' } as const;

export function Card({ padding = 'md', className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-line bg-elevated shadow-card',
        paddingMap[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Write `components/data-display/Card.stories.tsx`**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = { component: Card, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Card>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Card padding="sm"><p className="text-sm text-fg-secondary">Small padding card</p></Card>
      <Card padding="md">
        <h3 className="text-sm font-semibold text-fg-primary mb-1">Order #1042</h3>
        <p className="text-sm text-fg-secondary">Placed on March 10, 2026 · $148.00</p>
      </Card>
      <Card padding="lg">
        <h3 className="text-sm font-semibold text-fg-primary mb-2">Account summary</h3>
        <p className="text-sm text-fg-muted">Large padding for prominent content areas.</p>
      </Card>
    </div>
  ),
};

export const Default: Story = {
  args: { padding: 'md', children: 'Card content goes here.' },
};
```

- [ ] **Step 3: Write `components/data-display/Table.tsx`**

```typescript
import { clsx } from 'clsx';

export interface Column<T> { key: keyof T; header: string; }
export interface TableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

export function Table<T extends Record<string, unknown>>({ columns, data, className }: TableProps<T>) {
  return (
    <div className={clsx('w-full overflow-x-auto', className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-line">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-4 py-3 text-left font-medium text-fg-secondary"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-line hover:bg-surface">
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-3 text-fg-primary">
                  {String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

- [ ] **Step 4: Write `components/data-display/Table.stories.tsx`**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta = { title: 'Data Display/Table', tags: ['autodocs'] };
export default meta;

export const WithUserData: StoryObj = {
  render: () => (
    <Table
      columns={[
        { key: 'name',   header: 'Name' },
        { key: 'email',  header: 'Email' },
        { key: 'role',   header: 'Role' },
        { key: 'status', header: 'Status' },
      ]}
      data={[
        { name: 'Alice Chen',    email: 'alice@example.com',  role: 'Admin',  status: 'Active' },
        { name: 'Bob Martinez',  email: 'bob@example.com',    role: 'Editor', status: 'Active' },
        { name: 'Carol Kim',     email: 'carol@example.com',  role: 'Viewer', status: 'Inactive' },
      ]}
    />
  ),
};
```

- [ ] **Step 5: Write `components/data-display/List.tsx`**

```typescript
import { clsx } from 'clsx';

export interface ListItem { id: string | number; primary: string; secondary?: string; }
export interface ListProps { items: ListItem[]; className?: string; }

export function List({ items, className }: ListProps) {
  return (
    <ul className={clsx('divide-y divide-line', className)}>
      {items.map((item) => (
        <li key={item.id} className="flex flex-col px-4 py-3">
          <span className="text-sm font-medium text-fg-primary">{item.primary}</span>
          {item.secondary && (
            <span className="text-xs text-fg-muted">{item.secondary}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 6: Write `components/data-display/List.stories.tsx`**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = { component: List, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof List>;

export const WithDescriptions: Story = {
  args: { items: [
    { id: 1, primary: 'Alice Chen',   secondary: 'alice@example.com · Admin' },
    { id: 2, primary: 'Bob Martinez', secondary: 'bob@example.com · Editor' },
    { id: 3, primary: 'Carol Kim',    secondary: 'carol@example.com · Viewer' },
  ]},
};

export const Simple: Story = {
  args: { items: [
    { id: 1, primary: 'Dashboard' },
    { id: 2, primary: 'Orders' },
    { id: 3, primary: 'Settings' },
  ]},
};
```

- [ ] **Step 7: Write `components/data-display/Stat.tsx`**

```typescript
import { clsx } from 'clsx';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

export function Stat({
  label,
  value,
  change,
  changeType = 'neutral',
  className,
  ...props
}: StatProps) {
  const changeColor =
    changeType === 'positive'
      ? 'text-status-success-fg'
      : changeType === 'negative'
      ? 'text-status-error-fg'
      : 'text-fg-muted';

  return (
    <div className={clsx('flex flex-col gap-1', className)} {...props}>
      <p className="text-xs font-medium uppercase tracking-wide text-fg-muted">{label}</p>
      <p className="text-3xl font-bold text-fg-primary">{value}</p>
      {change && <p className={clsx('text-sm', changeColor)}>{change}</p>}
    </div>
  );
}
```

- [ ] **Step 8: Write `components/data-display/Stat.stories.tsx`**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Stat } from './Stat';

const meta: Meta<typeof Stat> = { component: Stat, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Stat>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-8 flex-wrap">
      <Stat label="Total Revenue" value="$48,295" change="+12% from last month" changeType="positive" />
      <Stat label="Active Users"  value="2,847"   change="+5.2%"               changeType="positive" />
      <Stat label="Churn Rate"    value="2.4%"    change="-0.3%"               changeType="negative" />
      <Stat label="Avg. Response" value="1.8s"    changeType="neutral" />
    </div>
  ),
};

export const Default:  Story = { args: { label: 'Total Revenue', value: '$48,295', change: '+12% from last month', changeType: 'positive' } };
export const Negative: Story = { args: { label: 'Churn Rate',    value: '2.4%',    change: '-0.3%',               changeType: 'negative' } };
```

---

### Task 12: Form components

**Files:**
- Modify: `last-samurai/components/forms/Select.tsx`
- Modify: `last-samurai/components/forms/Checkbox.tsx`
- Modify: `last-samurai/components/forms/Radio.tsx`
- Modify: `last-samurai/components/forms/Switch.tsx`
- Modify: `last-samurai/components/forms/DatePicker.tsx`

- [ ] **Step 1: Write `components/forms/Select.tsx`**

```typescript
import { clsx } from 'clsx';

export interface SelectOption { label: string; value: string; }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}

export function Select({ label, options, error, className, id, ...props }: SelectProps) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-fg-secondary">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={clsx(
          'h-10 w-full rounded-lg border border-line-strong bg-elevated px-3 text-sm text-fg-primary',
          'focus:border-line-focus focus:outline-none focus:ring-2 focus:ring-line-focus/20',
          'disabled:cursor-not-allowed disabled:bg-canvas disabled:text-fg-muted',
          error && 'border-status-error focus:border-status-error focus:ring-status-error/20',
          className,
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="text-xs text-status-error-fg">{error}</p>}
    </div>
  );
}
```

- [ ] **Step 2: Write `components/forms/Checkbox.tsx`**

```typescript
import { clsx } from 'clsx';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  const checkId = id ?? `cb-${Math.random().toString(36).slice(2)}`;
  return (
    <label htmlFor={checkId} className="inline-flex cursor-pointer items-center gap-2">
      <input
        type="checkbox"
        id={checkId}
        className={clsx(
          'h-4 w-4 rounded border-line-strong text-action-primary focus:ring-line-focus/20',
          className,
        )}
        {...props}
      />
      {label && <span className="text-sm text-fg-secondary">{label}</span>}
    </label>
  );
}
```

- [ ] **Step 3: Write `components/forms/Radio.tsx`**

```typescript
import { clsx } from 'clsx';

export interface RadioOption { label: string; value: string; }
export interface RadioProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Radio({ name, options, value, onChange, className }: RadioProps) {
  return (
    <fieldset className={clsx('flex flex-col gap-2', className)}>
      {options.map((opt) => (
        <label key={opt.value} className="inline-flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange?.(opt.value)}
            className="h-4 w-4 border-line-strong text-action-primary focus:ring-line-focus/20"
          />
          <span className="text-sm text-fg-secondary">{opt.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
```

- [ ] **Step 4: Write `components/forms/Switch.tsx`**

```typescript
import { clsx } from 'clsx';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export function Switch({ checked, onChange, label, disabled, className }: SwitchProps) {
  return (
    <label
      className={clsx(
        'inline-flex cursor-pointer items-center gap-2',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <button
        role="switch"
        type="button"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={clsx(
          'relative h-6 w-11 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-line-focus/30',
          checked ? 'bg-action-primary' : 'bg-line-strong',
        )}
      >
        <span
          className={clsx(
            'absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-elevated shadow transition-transform',
            checked && 'translate-x-5',
          )}
        />
      </button>
      {label && <span className="text-sm text-fg-secondary">{label}</span>}
    </label>
  );
}
```

- [ ] **Step 5: Write `components/forms/DatePicker.tsx`**

```typescript
import { clsx } from 'clsx';

export interface DatePickerProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
}

export function DatePicker({ label, value, onChange, error, className }: DatePickerProps) {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      {label && (
        <label className="text-sm font-medium text-fg-secondary">{label}</label>
      )}
      <input
        type="date"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={clsx(
          'h-10 w-full rounded-lg border border-line-strong bg-elevated px-3 text-sm text-fg-primary',
          'focus:border-line-focus focus:outline-none focus:ring-2 focus:ring-line-focus/20',
          error && 'border-status-error focus:border-status-error focus:ring-status-error/20',
        )}
      />
      {error && <p className="text-xs text-status-error-fg">{error}</p>}
    </div>
  );
}
```

- [ ] **Step 6: TypeScript check for entire codebase**

```bash
npx tsc --noEmit --project last-samurai/tsconfig.json
```

Expected: no errors. All 28 components should compile cleanly with the new semantic tokens.

---

## Chunk 6: Storybook Verification

### Task 13: Final Storybook smoke test

This task verifies the entire Phase 3 implementation visually.

- [ ] **Step 1: Start Storybook**

```bash
npm --prefix last-samurai run storybook
```

Navigate to `http://localhost:6006`

- [ ] **Step 2: Verify token layer**

Open **Storybook → Primitives → Button → AllVariants**. Switch background to "dark". Verify:
- Primary button shows lighter blue on dark background (brand[400])
- Hover shows brand[300] (visibly lighter than non-hover — this fixes the Phase 2 bug)
- Secondary button shows dark border with appropriate contrast

- [ ] **Step 3: Verify Button icon stories**

Open **Primitives → Button → WithStartIcon**, **WithEndIcon**, **IconOnly**. Verify:
- Icon renders to the left/right of label with correct spacing
- Icon-only buttons are square (equal width and height)
- All 3 sizes render correctly

- [ ] **Step 4: Verify Badge chip stories**

Open **Primitives → Badge → AllVariants**. Verify:
- All 6 variants render with pill shape (rounded-full)
- Open **Deletable** — verify × button appears and is hoverable
- Open **WithAvatar** — verify avatar renders before label

- [ ] **Step 5: Verify Alert stories**

Open **Feedback → Alert → WithIcon**. Verify:
- Colored circle icon appears to the left of text
- Icon circle background matches variant color
- Open **WithAction** — verify "Manage settings" link appears on right
- Open **WithIconAndAction** — verify both render together
- Switch to dark background — verify status surfaces invert correctly (dark tinted surfaces)

- [ ] **Step 6: Verify status surfaces in dark mode**

Open **Feedback → Alert → AllVariants**. Switch background to "dark". Verify:
- Info alert shows brand[950] background (very dark blue tint)
- Success alert shows green[950] background
- Warning shows yellow[950] background
- Danger shows red[950] background
- All have readable text (fg tokens are [300] stops)

- [ ] **Step 7: Verify Sidebar active state**

Open **Navigation → Sidebar → Default**. Verify:
- "Dashboard" (active item) has a visible left blue border
- Active item text is blue (action-primary)
- Inactive items have gray text with hover state

- [ ] **Step 8: Verify form components**

Open **Forms → Switch → On** and **Off**. Switch to dark background. Verify:
- Switch track is `action-primary` color when on
- Switch track is `line-strong` when off
- Thumb is elevated background color

- [ ] **Step 9: Verify data display**

Open **Data Display → Stat → AllVariants**. Verify:
- Positive change is green text (status-success-fg)
- Negative change is red text (status-error-fg)
- Neutral has muted text

Open **Data Display → Table → WithUserData**. Switch to dark. Verify:
- Table borders use `line` (visible but not harsh)
- Row hover uses `surface` background
- Header text is `fg-secondary` (lighter than body)

- [ ] **Step 10: Confirm no TypeScript errors remain**

```bash
npx tsc --noEmit --project last-samurai/tsconfig.json
```

Expected: exits with code 0, no output.

---

## Phase 3 Complete

All success criteria from the spec should now be met:

1. ✅ Storybook runs with no TypeScript errors
2. ✅ Every component story renders in light AND dark mode
3. ✅ No raw palette classes remain in component files
4. ✅ Button renders with/without icons, including icon-only square variant
5. ✅ Alert renders with colored icon circle and action link
6. ✅ Badge renders as pill-shaped chip with delete button
7. ✅ Sidebar active item shows left border + tinted background
8. ✅ All cards, inputs, buttons use `rounded-lg` (8px) corners
