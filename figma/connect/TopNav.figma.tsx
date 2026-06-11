/**
 * Code Connect — TopNav
 *
 * Expected Figma component properties:
 *   Has Logo:      Boolean (shows/hides logo slot)
 *   Has Right Slot: Boolean (shows/hides right slot)
 *   Active Item:   string (which nav item is highlighted)
 *
 * TopNav is always dark (nav-bg token). The Figma component should use
 * the nav/* semantic variables regardless of file mode.
 */
import figma from '@figma/code-connect';
import { TopNav } from '../../components/navigation/TopNav';

figma.connect(TopNav, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=528-444', {
  props: {},
  example: () => (
    <TopNav
      items={[
        { id: 'requests', label: 'Requests', active: true },
        { id: 'clients',  label: 'Clients' },
        { id: 'reports',  label: 'Reports' },
      ]}
    />
  ),
});
