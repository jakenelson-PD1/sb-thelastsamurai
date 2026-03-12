import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta = { title: 'Data Display/Table', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Table
      columns={[{ key: 'name', header: 'Name' }, { key: 'role', header: 'Role' }]}
      data={[{ name: 'Jake Nelson', role: 'Admin' }, { name: 'Samurai Jack', role: 'User' }]}
    />
  ),
};
