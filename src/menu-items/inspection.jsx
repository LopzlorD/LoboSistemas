// assets
import {
  FileExcelOutlined,
  AimOutlined,
  BlockOutlined,
  MonitorOutlined,
} from '@ant-design/icons';

// icons
const icons = {
  FileExcelOutlined,
  AimOutlined,
  BlockOutlined,
  MonitorOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const inspection = {
  id: 'inspection',
  title: 'Inspección',
  type: 'group',
  children: [
    {
      id: 'inspection-report',
      title: 'Informe de inspección',
      type: 'item',
      url: '/inspection-report',
      icon: icons.MonitorOutlined
    },
    {
      id: 'inspeccion-kpi',
      title: 'Inspección KPI',
      type: 'item',
      url: '/inpeccion-kpi',
      icon: icons.AimOutlined
    },
    {
      id: 'maintenance-kpi',
      title: 'Mantenimiento KPI',
      type: 'item',
      url: '/maintenance-kpi',
      icon: icons.BlockOutlined
    },
    {
      id: 'fuel-management-kpi',
      title: 'Gestión de combustible KPI',
      type: 'item',
      url: '/fuel-management-kpi',
      icon: icons.BlockOutlined
    }
  ]
};

export default inspection;
