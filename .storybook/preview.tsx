import type { Preview, Decorator } from '@storybook/react';
import { useEffect } from 'react';
import '../globals.css';

// Must be a named export for Storybook to register the toolbar item
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Light or dark color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark',  title: 'Dark',  icon: 'moon' },
      ],
      dynamicTitle: true,
    },
  },
};

const withDarkMode: Decorator = (Story, context) => {
  const isDark = context.globals.theme === 'dark';

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    document.body.style.backgroundColor = isDark ? '#1b1b21' : '#ffffff';
    return () => {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '';
    };
  }, [isDark]);

  return <Story />;
};

const preview: Preview = {
  decorators: [withDarkMode],
  parameters: {
    layout: 'centered',
    options: {
      // Sidebar order mirrors Figma's page list, section-by-section, in
      // Figma's per-page order. Every stories file now uses an explicit
      // `title: 'Section/Component'` (see the bulk-rewrite script in
      // the project history) so the section names below match exactly.
      //
      // NOTE: this array must be inline — Storybook statically parses it.
      storySort: {
        order: [
          'RLM Layout', [
            'CommentCard', 'EngagementHeader', 'FilterSwatchGroupRow',
            'SubToolbar', 'FileDropZone', 'RequestDetailActionBar',
            'RequestRow', 'FileRow', 'RequestDetailHeader',
            'RequestDetailAssignments', 'ClientFilesSection', 'ActivitySection',
            'Request Detail', 'EngagementLayout', '*',
          ],
          'Layout', [
            'AppShell', 'Container', 'DetailPanel', 'Foundation', 'Grid',
            'Inset', 'ListPanel', 'MasterDetailLayout', 'Panel', 'PanelGroup',
            'PanelHeader', 'ScrollArea', 'Stack', 'ThreeColumnLayout', '*',
          ],
          'Navigation', [
            'Breadcrumb', 'NavItem', 'PageHeader', 'Pagination', 'SideNav',
            'Tabs', 'TopNav', '*',
          ],
          'Overlay', [
            'Drawer', 'Modal', 'Popover', 'Tooltip', 'Search',
            'CommentComposer', 'Card', 'Alert', 'Accordion', 'ActionMenu',
            '*',
          ],
          'Primitives', [
            'Avatar', 'Badge', 'Button', 'Checkbox', 'CountBadge', 'DatePicker',
            'Divider', 'Dropdown', 'FilterSwatch', 'FilterSwatchGroup', 'FilterChip',
            'Input', 'List', 'NotificationBadge', 'StatusTile', 'StatusDot',
            'Radio', 'ResizeHandle', 'Skeleton', 'Switch', 'Spinner',
            'Timestamp', 'Toast', 'Table', 'HighPriorityFlag', 'Icon', '*',
          ],
          'Foundation', [
            'Colors', 'Radii', 'Semantics', 'Shadows', 'Spacing', 'Typography',
            'Icons', '*',
          ],
        ],
      },
    },
  },
};

export default preview;
