/**
 * Code Connect — Badge
 *
 * Expected Figma component properties:
 *   Variant: Default | Brand | Success | Warning | Danger | Outlined | Cerulean | Purple | Pink
 */
import figma from '@figma/code-connect';
import { Badge } from '../../components/primitives/Badge';

figma.connect(Badge, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=485-20', {
  props: {
    variant: figma.enum('Variant', {
      Default:  'default',
      Brand:    'brand',
      Success:  'success',
      Warning:  'warning',
      Danger:   'danger',
      Outlined: 'outlined',
      Cerulean: 'cerulean',
      Purple:   'purple',
      Pink:     'pink',
    }),
    children: figma.string('Label'),
  },
  example: ({ variant, children }) => (
    <Badge variant={variant}>{children}</Badge>
  ),
});
