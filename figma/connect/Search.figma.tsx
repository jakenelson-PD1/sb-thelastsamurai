/**
 * Code Connect — Search
 *
 * Expected Figma component properties:
 *   Size:        xs | sm | md
 *   State:       Idle | Hover | Focus | Active | Disabled
 *   Placeholder: string
 *   Value:       string (when State = Active, the input has a value)
 *
 * Source treats Active as "has-value (filled)" and Focus as "focused, empty",
 * matching the Figma split.
 */
import figma from '@figma/code-connect';
import { Search } from '../../components/primitives/Search';

figma.connect(Search, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=541-84', {
  props: {
    size: figma.enum('Size', {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
    }),
    placeholder: figma.string('Placeholder'),
    value: figma.enum('State', {
      Active: figma.string('Value'),
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: ({ size, placeholder, value, disabled }) => (
    <Search
      size={size}
      placeholder={placeholder}
      value={value}
      onChange={() => {}}
      disabled={disabled}
      currentMatch={1}
      totalMatches={5}
    />
  ),
});
