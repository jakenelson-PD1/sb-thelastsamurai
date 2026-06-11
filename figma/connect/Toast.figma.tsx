/**
 * Code Connect — Toast
 *
 * Expected Figma component properties:
 *   Variant: Default | Success | Error
 *   Title:   string (text layer)
 *   Body:    string (text layer)
 */
import figma from '@figma/code-connect';
import { Toast } from '../../components/feedback/Toast';

figma.connect(Toast, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=222-22', {
  props: {
    variant: figma.enum('Variant', {
      Default: 'default',
      Success: 'success',
      Error:   'error',
    }),
    message:     figma.string('Title'),
    description: figma.string('Body'),
  },
  example: ({ variant, message, description }) => (
    <Toast variant={variant} message={message} description={description} />
  ),
});
