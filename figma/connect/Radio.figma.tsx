/**
 * Code Connect — Radio
 *
 * Expected Figma component properties:
 *   Checked: Unchecked | Checked
 *   State:   Default | Hover | Focus | Disabled
 *   Label:   string (text layer)
 *
 * Note: Source `Radio` is data-driven (`options` array). The Figma component
 * shows a single radio item in isolation; in production pass the full options.
 */
import figma from '@figma/code-connect';
import { Radio } from '../../components/forms/Radio';

figma.connect(Radio, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=491-12', {
  props: {
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    label: figma.string('Label'),
  },
  example: ({ label, disabled }) => (
    <Radio
      name="example"
      options={[{ value: 'opt-1', label: label || 'Option' }]}
      disabled={disabled}
    />
  ),
});
