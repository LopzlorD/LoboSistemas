// assets
import { DashboardOutlined, DoubleRightOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  DoubleRightOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Inicio',
  type: 'group',
  children: [
    {
      id: 'init',
      title: 'Empezando',
      type: 'item',
      url: '/default',
      icon: icons.DoubleRightOutlined,
      breadcrumbs: false
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
