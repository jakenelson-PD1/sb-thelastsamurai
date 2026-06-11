import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const avatarVariants = cva(
  'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full',
  {
    variants: {
      size: {
        // The canonical Avatar (Figma 484:14) uses Body MD Strong (14px Semibold)
        // for the initial at EVERY size — only the circle scales, not the glyph.
        // (The span below adds font-semibold → Body MD Strong.)
        xs: 'h-6 w-6 text-body-md',
        sm: 'h-8 w-8 text-body-md',
        md: 'h-10 w-10 text-body-md',
      },
      variant: {
        // Client users — darker than card surface so avatar reads on purple bg
        client: 'bg-status-purple-surface text-status-purple-fg',
        // Firm users — orange background, orange-800 text
        firm:   'bg-status-orange-surface text-status-orange-fg',
      },
    },
    defaultVariants: { size: 'sm', variant: 'firm' },
  },
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  initials?: string;
}

export function Avatar({ src, alt, initials, size, variant, className, style, ...props }: AvatarProps) {
  return (
    <div
      className={clsx(
        avatarVariants({ size, variant }),
        // Allow inline style override (e.g. custom color) only when no src
        className,
      )}
      style={src ? undefined : style}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt ?? ''} className="h-full w-full object-cover" />
      ) : (
        <span className="font-semibold">
          {(initials ?? '?').slice(0, 1).toUpperCase()}
        </span>
      )}
    </div>
  );
}
