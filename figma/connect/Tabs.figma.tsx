/**
 * Code Connect — Tabs
 *
 * Expected Figma component properties:
 *   Active Tab: string matching one of the tab values
 *   Tab Count:  2 | 3 | 4 (drives how many Tab Item instances are shown)
 *
 * Note: Tabs are data-driven in code. The Figma component shows representative
 * instances; in production pass the full `tabs` array with real labels/values.
 */
import figma from '@figma/code-connect';
import { Tabs } from '../../components/navigation/Tabs';

figma.connect(Tabs, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=520-9', {
  props: {},
  example: () => (
    <Tabs
      tabs={[
        { label: 'Overview', value: 'overview' },
        { label: 'Activity', value: 'activity' },
        { label: 'Documents', value: 'documents' },
      ]}
      active="overview"
      onChange={(value) => console.log(value)}
    />
  ),
});
