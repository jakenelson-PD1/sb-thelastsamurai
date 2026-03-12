import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta = { title: 'Data Display/Table', tags: ['autodocs'] };
export default meta;

export const WithUserData: StoryObj = {
  render: () => (
    <Table
      columns={[
        { key: 'name',   header: 'Name' },
        { key: 'email',  header: 'Email' },
        { key: 'role',   header: 'Role' },
        { key: 'status', header: 'Status' },
      ]}
      data={[
        { name: 'Alice Chen',    email: 'alice@example.com',  role: 'Admin',  status: 'Active' },
        { name: 'Bob Martinez',  email: 'bob@example.com',    role: 'Editor', status: 'Active' },
        { name: 'Carol Kim',     email: 'carol@example.com',  role: 'Viewer', status: 'Inactive' },
      ]}
    />
  ),
};
