/**
 * Code Connect — Drawer
 *
 * Expected Figma component properties:
 *   Side:      Right | Left
 *   ShowTitle: Boolean
 *   Title:     string (text layer in header)
 *
 * Drawer wraps any ReactNode as its body. The scrim uses the new `bg-scrim`
 * token (rgba(0,0,0,0.40) light / rgba(0,0,0,0.60) dark).
 */
import figma from '@figma/code-connect';
import { Drawer } from '../../components/overlay/Drawer';

figma.connect(Drawer, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=754-18', {
  props: {
    side: figma.enum('Side', {
      Right: 'right',
      Left:  'left',
    }),
    title: figma.string('Title'),
  },
  example: ({ side, title }) => (
    <Drawer
      open={true}
      onClose={() => {}}
      side={side}
      title={title}
    >
      Drawer content.
    </Drawer>
  ),
});
