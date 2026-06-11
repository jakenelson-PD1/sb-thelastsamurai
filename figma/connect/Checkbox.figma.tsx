/**
 * Code Connect — Checkbox
 *
 * Expected Figma component properties:
 *   Label:   With | Without (variant axis)
 *   Size:    sm | lg
 *   Checked: Unchecked | Checked | Indeterminate
 *   State:   Default | Hover | Focus | Disabled
 *   Label#text: string (text layer)
 */
import figma from '@figma/code-connect';
import { Checkbox } from '../../components/forms/Checkbox';

figma.connect(Checkbox, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=490-30', {
  props: {
    size: figma.enum('Size', {
      sm: 'sm',
      lg: 'lg',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    checked: figma.enum('Checked', {
      Checked:       true,
      Indeterminate: true,
    }),
    indeterminate: figma.enum('Checked', {
      Indeterminate: true,
    }),
    label: figma.string('Label'),
  },
  example: ({ size, disabled, checked, indeterminate, label }) => (
    <Checkbox
      size={size}
      disabled={disabled}
      defaultChecked={checked}
      indeterminate={indeterminate}
      label={label}
    />
  ),
});
