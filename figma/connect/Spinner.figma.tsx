/**
 * Code Connect — Spinner
 *
 * Expected Figma component properties:
 *   Size: sm | md | lg
 *
 * Spinner stroke uses `currentColor`; consumers set color via `text-*` classes
 * on the parent.
 */
import figma from '@figma/code-connect';
import { Spinner } from '../../components/feedback/Spinner';

figma.connect(Spinner, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=222-11', {
  props: {
    size: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
  },
  example: ({ size }) => <Spinner size={size} />,
});
