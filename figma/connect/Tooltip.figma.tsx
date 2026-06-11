/**
 * Code Connect — Tooltip
 *
 * Expected Figma component properties:
 *   Side:    Top | Bottom
 *   Content: string
 *
 * Tooltip wraps a trigger child. The Figma component documents the bubble
 * rendering; consumers pass any element as the `children` (trigger).
 */
import figma from '@figma/code-connect';
import { Tooltip } from '../../components/overlay/Tooltip';

figma.connect(Tooltip, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=746-6', {
  props: {
    side: figma.enum('Side', {
      Top:    'top',
      Bottom: 'bottom',
    }),
    content: figma.string('Content'),
  },
  example: ({ side, content }) => (
    <Tooltip side={side} content={content}>
      <button>Hover me</button>
    </Tooltip>
  ),
});
