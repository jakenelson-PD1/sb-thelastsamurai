/**
 * Code Connect — Switch
 *
 * Expected Figma component properties:
 *   Checked: Off | On
 *   State:   Default | Focus | Disabled
 *   Label:   string (text layer)
 */
import figma from '@figma/code-connect';
import { Switch } from '../../components/forms/Switch';

figma.connect(Switch, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=492-18', {
  props: {
    checked: figma.enum('Checked', {
      Off: false,
      On:  true,
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    label: figma.string('Label'),
  },
  example: ({ checked, disabled, label }) => (
    <Switch
      checked={checked}
      onChange={() => {}}
      disabled={disabled}
      label={label}
    />
  ),
});
