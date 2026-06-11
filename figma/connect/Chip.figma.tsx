/**
 * Code Connect — Chip
 *
 * Expected Figma component properties:
 *   Label:       string
 *   Size:        Regular | Small      → md | sm
 *   Interaction: Default | Focused | Hover (visual-only — handled by :hover/:focus-visible in code)
 *   Actions:     None | Single selected | Multi selected
 *   Icon:        None | Left | Right | Both | Only
 *   Icon Left:   INSTANCE_SWAP
 *   Icon Right:  INSTANCE_SWAP
 *   State:       Default | Error
 *
 * The X-to-remove pattern is just `iconRight={<XCloseIcon onClick={...} />}` —
 * no special `removable` prop. The Figma `Interaction` axis is presentational
 * only — code uses `hover:` and `focus-visible:` Tailwind classes.
 */
import figma from '@figma/code-connect';
import { Chip } from '../../components/data-display/Chip';

figma.connect(Chip, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=1142-410', {
  props: {
    label: figma.string('Label'),
    size: figma.enum('Size', {
      Regular: 'md',
      Small:   'sm',
    }),
    selected: figma.enum('Actions', {
      None:              'none',
      'Single selected': 'single',
      'Multi selected':  'multi',
    }),
    error: figma.enum('State', {
      Error: true,
    }),
    iconLeft: figma.enum('Icon', {
      Left: figma.instance('Icon Left'),
      Both: figma.instance('Icon Left'),
      Only: figma.instance('Icon Left'),
    }),
    iconRight: figma.enum('Icon', {
      Right: figma.instance('Icon Right'),
      Both:  figma.instance('Icon Right'),
    }),
  },
  example: ({ label, size, selected, error, iconLeft, iconRight }) => (
    <Chip
      label={label}
      size={size}
      selected={selected}
      error={error}
      iconLeft={iconLeft}
      iconRight={iconRight}
    />
  ),
});
