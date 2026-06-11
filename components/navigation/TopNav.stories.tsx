import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Building01Icon } from '../primitives/icons/Building01Icon';
import { Users01Icon } from '../primitives/icons/Users01Icon';
import { UserCircleIcon } from '../primitives/icons/UserCircleIcon';
import { Briefcase01Icon } from '../primitives/icons/Briefcase01Icon';
import { Send01Icon } from '../primitives/icons/Send01Icon';
import { TopNav, type TopNavItem } from './TopNav';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof TopNav> = {
  title: 'Navigation/TopNav',
  component: TopNav,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof TopNav>;

const SuralinkLogo = () => (
  <img src="/suralink-logo.svg" alt="Suralink" width={134} height={28} />
);

const baseItems: Omit<TopNavItem, 'active' | 'onClick'>[] = [
  { id: 'firm',        label: 'My firm',             icon: Building01Icon  },
  { id: 'team',        label: 'Team',                icon: Users01Icon     },
  { id: 'clients',     label: 'Clients',             icon: UserCircleIcon  },
  { id: 'engagements', label: 'Engagements',         icon: Briefcase01Icon },
  { id: 'sfs',         label: 'Secure File Sharing', icon: Send01Icon      },
];

function InteractiveNav({ initialActive = 'engagements', rightSlot }: {
  initialActive?: string;
  rightSlot?: React.ReactNode;
}) {
  const [active, setActive] = useState(initialActive);
  const items: TopNavItem[] = baseItems.map((item) => ({
    ...item,
    active: item.id === active,
    onClick: () => setActive(item.id),
  }));
  return <TopNav logo={<SuralinkLogo />} items={items} rightSlot={rightSlot} />;
}

export const Default: Story = {
  render: () => <InteractiveNav />,
};

export const EngagementsActive: Story = {
  render: () => <InteractiveNav initialActive="engagements" />,
};

export const ClientsActive: Story = {
  render: () => <InteractiveNav initialActive="clients" />,
};

export const LogoOnly: Story = {
  args: { logo: <SuralinkLogo /> },
};

// ─── Matrix — mirrors Figma TopNav ComponentSet (528:444) ───────────────────
// Single State=Default variant: 1280×60 dark navy bar with logo (left,
// 134×28 wordmark) and 5 NavItem instances right-aligned, with "Engagements"
// rendered active. Cell (x, y, w, h) values mirror Figma 76:53 / 528:444
// exactly so MatrixVerify can lock the slot grammar to the canonical.

const TN_CELLS: MatrixCellSpec[] = [
  { variant: 'State=Default', x: 0, y: 0, w: 1280, h: 60, expect: { headings: [] } },
];

const renderCell = () => {
  const items: TopNavItem[] = baseItems.map((item) => ({
    ...item,
    active: item.id === 'engagements',
    onClick: () => {},
  }));
  return <TopNav logo={<SuralinkLogo />} items={items} />;
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:53', cells: TN_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1280, height: 80 }}>
      {TN_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {renderCell()}
        </div>
      ))}
    </div>
  ),
};
