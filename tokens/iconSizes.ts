// Icon sizes — aligned to the 4px spacing grid.
// Use these constants wherever icon `size` props are set.
export const iconSize = {
  xs: 12,  // 12px — small overlay / badge icons
  sm: 16,  // 16px — inline / compact UI
  md: 20,  // 20px — default / most contexts
  lg: 24,  // 24px — prominent / standalone icons
} as const;

export type IconSize = keyof typeof iconSize;
