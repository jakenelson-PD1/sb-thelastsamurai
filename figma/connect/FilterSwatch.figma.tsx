/**
 * Code Connect — FilterSwatch
 *
 * Expected Figma component properties:
 *   Color:        fulfilled | not-started | outstanding | overdue (palette key)
 *   Size:         sm | md
 *   State:        Default | Selected | Hover | Focus | Disabled
 *   HighPriority: Boolean (overlay flag icon)
 *   Label:        Tooltip label (passed through to consumer-side `label` prop)
 *
 * Source-side `color` is a runtime CSS string — the Figma `Color` axis
 * documents named palette options but consumers pass the CSS color value.
 */
import figma from '@figma/code-connect';
import { FilterSwatch } from '../../components/primitives/FilterSwatch';

figma.connect(FilterSwatch, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=484-19', {
  props: {
    size: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
    }),
    selected: figma.enum('State', {
      Selected: true,
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    highPriority: figma.boolean('HighPriority'),
  },
  example: ({ size, selected, disabled, highPriority }) => (
    <FilterSwatch
      color="var(--color-tile-not-started)"
      size={size}
      selected={selected}
      disabled={disabled}
      highPriority={highPriority}
    />
  ),
});
