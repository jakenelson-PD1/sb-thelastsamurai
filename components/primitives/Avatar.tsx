import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const avatarVariants = cva('inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-200', {
  variants: {
    size: {
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-14 w-14 text-base',
    },
  },
  defaultVariants: { size: 'md' },
});

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
        <span className="font-medium text-neutral-600">{initials ?? '?'}</span>
      )}
    </div>
  );
}
