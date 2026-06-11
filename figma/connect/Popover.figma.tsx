/**
 * Code Connect — Popover
 *
 * Expected Figma component properties:
 *   Layout: Default | Info | Filter
 *
 * The Layout axis is a content-shape hint for the Figma documentation;
 * source-side Popover takes any ReactNode as children, so consumers compose
 * the appropriate inner content for each layout.
 */
import figma from '@figma/code-connect';
import { Popover } from '../../components/overlay/Popover';

figma.connect(Popover, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=764-31', {
  props: {},
  example: () => (
    <Popover trigger={<button>Open</button>}>
      <p>Popover content here.</p>
    </Popover>
  ),
});
