// assets
import {
  FileExcelOutlined,
  AimOutlined,
  BlockOutlined,
} from '@ant-design/icons';

// icons
const icons = {
  FileExcelOutlined,
  AimOutlined,
  BlockOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const maintenance = {
  id: '',
  title: 'Inspección',
  type: 'group',
  children: [
    {
      id: 'informe-excel',
      title: 'Informe de Excel',
      type: 'item',
      url: '/infor-excel',
      icon: icons.FileExcelOutlined
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

export default maintenance;
