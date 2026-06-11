/**
 * Code Connect — Select
 *
 * Expected Figma component properties:
 *   Size:           xs | sm | md
 *   State:          Closed | Open | Hover | Error | Disabled
 *   Label:          string (text layer)
 *   Placeholder:    string (text layer)
 *   Error Message:  string (shown when State = Error)
 */
import figma from '@figma/code-connect';
import { Select } from '../../components/forms/Select';

figma.connect(Select, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=539-97', {
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
    <Select
      size={size}
      label={label}
      placeholder={placeholder}
      error={error}
      disabled={disabled}
      options={[
        { value: 'first',  label: 'First option' },
        { value: 'second', label: 'Second option' },
        { value: 'third',  label: 'Third option' },
      ]}
    />
  ),
});
