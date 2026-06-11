/**
 * Code Connect — Input
 *
 * Expected Figma component properties:
 *   Size:           xs | sm | md
 *   State:          Default | Hover | Focus | Error | Disabled
 *   Label:          string (text layer)
 *   Placeholder:    string (text layer)
 *   Error Message:  string (shown when State = Error)
 */
import figma from '@figma/code-connect';
import { Input } from '../../components/primitives/Input';

figma.connect(Input, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=537-41', {
  props: {
    size: figma.enum('Size', {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
    }),
    label:       figma.string('Label'),
    placeholder: figma.string('Placeholder'),
    error: figma.enum('State', {
      Error: figma.string('Error Message'),
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: ({ size, label, placeholder, error, disabled }) => (
    <Input
      size={size}
      label={label}
      placeholder={placeholder}
      error={error}
      disabled={disabled}
    />
  ),
});
