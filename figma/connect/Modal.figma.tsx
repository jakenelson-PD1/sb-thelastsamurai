/**
 * Code Connect — Modal
 *
 * Expected Figma component properties:
 *   Variant: Default | Destructive
 *   Title:   string (text layer in header)
 *   Body:    string (text layer in body)
 *
 * `Variant=Destructive` automatically maps to `variant="destructive"` on the
 * source side, which auto-styles the trailing footer action with `danger` colors.
 *
 * Radius → modal (16px), shadow → modal, bg → bg/elevated
 */
import figma from '@figma/code-connect';
import { Modal } from '../../components/overlay/Modal';

figma.connect(Modal, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=752-29', {
  props: {
    variant: figma.enum('Variant', {
      Default:     'default',
      Destructive: 'destructive',
    }),
    title:    figma.string('Title'),
    children: figma.string('Body'),
  },
  example: ({ variant, title, children }) => (
    <Modal
      open={true}
      onClose={() => {}}
      variant={variant}
      title={title}
      footer={
        variant === 'destructive'
          ? [
              { label: 'Cancel', onClick: () => {}, variant: 'secondary' },
              { label: 'Delete', onClick: () => {} },
            ]
          : [
              { label: 'Cancel', onClick: () => {}, variant: 'secondary' },
              { label: 'Confirm', onClick: () => {}, variant: 'primary' },
            ]
      }
    >
      {children}
    </Modal>
  ),
});
