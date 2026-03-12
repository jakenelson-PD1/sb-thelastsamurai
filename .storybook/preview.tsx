import type { Preview, Decorator } from '@storybook/react';
import '../globals.css';

const withDarkMode: Decorator = (Story, context) => {
  const isDark = context.globals.backgrounds?.value === '#111827';
  return (
    <div className={isDark ? 'dark' : ''}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withDarkMode],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111827' },
      ],
    },
  },
};

export default preview;
