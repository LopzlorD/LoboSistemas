// assets
import {
  FileExcelOutlined,
  AimOutlined,
  ToolOutlined,
  ReconciliationOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FileExcelOutlined,
  AimOutlined,
  ToolOutlined,
  ReconciliationOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const informe = {
  id: 'informe',
  title: 'Informe de Análisis y KPI',
  type: 'group',
  children: [
    {
      id: 'informe-excel',
      title: 'Informe de Excel',
      type: 'item',
      url: '/report-excel',
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
      icon: icons.ToolOutlined
    },
    {
      id: 'fuel-management-kpi',
      title: 'Gestión de combustible KPI',
      type: 'item',
      url: '/fuel-management-kpi',
      icon: icons.ReconciliationOutlined
    }
  ]
};

export default informe;
