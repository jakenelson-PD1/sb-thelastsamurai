/**
 * Code Connect — Accordion (AccordionItem)
 *
 * Expected Figma component properties:
 *   Size:     sm | md | lg
 *   State:    Closed | Open
 *   Chevron:  Show | Hide
 *   Avatars:  None | Show
 *   Title:    string (text layer)
 *
 * Note: `Avatars=Show` corresponds to passing an `<AvatarStack>` (or any
 * ReactNode) through the `extra` slot — the same slot supports buttons,
 * dropdowns, inputs, badges, etc.
 */
import figma from '@figma/code-connect';
import { AccordionItem } from '../../components/data-display/Accordion';

figma.connect(AccordionItem, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=388-59', {
  props: {
    size: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    defaultOpen: figma.enum('State', {
      Open: true,
    }),
    showChevron: figma.enum('Chevron', {
      Show: true,
      Hide: false,
    }),
    title: figma.string('Title'),
  },
  example: ({ size, defaultOpen, showChevron, title }) => (
    <AccordionItem
      size={size}
      defaultOpen={defaultOpen}
      showChevron={showChevron}
      title={title}
    >
      Content here.
    </AccordionItem>
  ),
});
