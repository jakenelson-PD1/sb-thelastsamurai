/**
 * Code Connect — Table (Modern)
 *
 * Expected Figma component properties:
 *   HeaderActions: With | Without
 *
 * Modern UI table — bottom borders only, no vertical column dividers.
 * For an Excel-grid style, see `ExcelTable`.
 */
import figma from '@figma/code-connect';
import { Table } from '../../components/data-display/Table';

figma.connect(Table, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=2040-10371', {
  props: {},
  example: () => (
    <Table
      columns={[
        { key: 'name',   header: 'Name' },
        { key: 'email',  header: 'Email' },
        { key: 'role',   header: 'Role' },
        { key: 'status', header: 'Status' },
      ]}
      data={[
        { name: 'Alice Chen',   email: 'alice@example.com', role: 'Admin',  status: 'Active' },
        { name: 'Bob Martinez', email: 'bob@example.com',   role: 'Editor', status: 'Active' },
        { name: 'Carol Kim',    email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
      ]}
    />
  ),
});
