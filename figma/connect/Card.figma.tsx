/**
 * Code Connect — Card
 *
 * Expected Figma component properties:
 *   Padding: SM | MD | LG
 */
import figma from '@figma/code-connect';
import { Card } from '../../components/data-display/Card';

figma.connect(Card, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=375-8', {
  props: {
    padding: figma.enum('Padding', {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    children: figma.children('*'),
  },
  example: ({ padding, children }) => (
    <Card padding={padding}>{children}</Card>
  ),
});
