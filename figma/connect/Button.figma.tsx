/**
 * Code Connect — Button
 *
 * After building the Button component in Figma:
 * 1. Right-click the component → "Copy link to selection"
 * 2. Replace FIGMA_NODE_URL with the copied link
 * 3. Run: FIGMA_TOKEN=<pat> npx figma connect publish
 *
 * Expected Figma component properties:
 *   Type:          Primary | Secondary | Ghost | Danger | Link
 *   Size:          xs | sm | md
 *   State:         Default | Hover | Focus | Disabled
 *   Icon & size:   None | Left | Right | Only | sm Only | md Only | lg Only
 */
import figma from '@figma/code-connect';
import { Button } from '../../components/primitives/Button';

figma.connect(Button, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=480-848', {
  props: {
    variant: figma.enum('Type', {
      Primary:   'primary',
      Secondary: 'secondary',
      Ghost:     'ghost',
      Danger:    'danger',
      Link:      'link',
    }),
    size: figma.enum('Size', {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    iconOnly: figma.enum('Icon & size', {
      Only:      true,
      'sm Only': true,
      'md Only': true,
      'lg Only': true,
    }),
    children: figma.string('Label'),
  },
  example: ({ variant, size, disabled, iconOnly, children }) => (
    <Button variant={variant} size={size} disabled={disabled} iconOnly={iconOnly}>
      {children}
    </Button>
  ),
});
