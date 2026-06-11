/**
 * Code Connect — Breadcrumb
 *
 * Expected Figma component properties:
 *   Length: Single | Short | Long
 *   State:  Default | Hover | Focus | Disabled
 *
 * Note: Breadcrumb is data-driven via the `items` array. The Length variant
 * in Figma represents typical chain sizes; the State variants demonstrate the
 * link-segment interaction state (the last segment is non-interactive).
 */
import figma from '@figma/code-connect';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';

figma.connect(Breadcrumb, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=838-26', {
  props: {},
  example: () => (
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Clients', href: '/clients' },
        { label: 'Acme Corp', href: '/clients/acme' },
        { label: 'Engagements' },
      ]}
    />
  ),
});
