import React from 'react';
import {
  CompassOutlined,
  DashboardOutlined,
  FormOutlined,
  HomeOutlined,
  LayoutOutlined,
  LineChartOutlined,
  TableOutlined,
  UserOutlined,
  BlockOutlined,
} from '@ant-design/icons';
import { ReactComponent as NftIcon } from '@app/assets/icons/nft-icon.svg';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.analytics',
    key: 'nft-dashboard',
    // TODO use path variable
    url: '/',
    icon: <NftIcon />,
  },
  {
    title: 'common.applications',
    key: 'medical-dashboard',
    url: '/medical-dashboard',
    icon: <DashboardOutlined />,
  },
  {
    title: 'common.contracts',
    key: 'apps',
    icon: <HomeOutlined />,
    children: [
      {
        title: 'common.feed',
        key: 'feed',
        url: '/apps/feed',
      },
    ],
  },  
  {
    title: 'common.reviews',
    key: 'forms',
    icon: <FormOutlined />,
    children: [
      {
        title: 'common.advancedForms',
        key: 'advanced-forms',
        url: '/forms/advanced-forms',
      },
    ],
  },
  {
    title: 'common.settings',
    key: 'dataTables',
    url: '/data-tables',
    icon: <TableOutlined />,
  },  
  
];
