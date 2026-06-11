/**
 * Code Connect — Alert
 *
 * Expected Figma component properties:
 *   Variant: Info | Success | Warning | Danger
 *   Title:   string (text layer)
 *   Body:    string (text layer)
 */
import figma from '@figma/code-connect';
import { Alert } from '../../components/feedback/Alert';

figma.connect(Alert, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=218-34', {
  props: {
    variant: figma.enum('Variant', {
      Info:    'info',
      Success: 'success',
      Warning: 'warning',
      Danger:  'danger',
    }),
    title:    figma.string('Title'),
    children: figma.string('Body'),
  },
  example: ({ variant, title, children }) => (
    <Alert variant={variant} title={title}>
      {children}
    </Alert>
  ),
});
