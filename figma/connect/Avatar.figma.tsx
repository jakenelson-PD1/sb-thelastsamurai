/**
 * Code Connect — Avatar
 *
 * Expected Figma component properties:
 *   Size:    XS | SM | MD
 *   Variant: Client | Firm
 *   Content: Initials | Image
 */
import figma from '@figma/code-connect';
import { Avatar } from '../../components/primitives/Avatar';

figma.connect(Avatar, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=484-14', {
  props: {
    size: figma.enum('Size', {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
    }),
    variant: figma.enum('Variant', {
      client: 'client',
      firm:   'firm',
    }),
    initials: figma.string('Initials'),
  },
  example: ({ size, variant, initials }) => (
    <Avatar size={size} variant={variant} initials={initials} />
  ),
});
