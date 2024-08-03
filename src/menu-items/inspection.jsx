// assets
import {
  MonitorOutlined,
  AimOutlined,
  ReconciliationOutlined,
  ProfileOutlined,
  MessageOutlined,
} from '@ant-design/icons';

// icons
const icons = {
  MonitorOutlined,
  AimOutlined,
  ReconciliationOutlined,
  ProfileOutlined,
  MessageOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const inspection = {
  id: 'inspection',
  title: 'Inspección',
  type: 'group',
  children: [
    {
      id: 'inspection-report',
      title: 'Reporte de inspección',
      type: 'item',
      url: '/inspection-report',
      icon: icons.MonitorOutlined
    },
    {
      id: 'daily-report-operator',
      title: 'Operador de informes diarios',
      type: 'item',
      url: '/daily-report-operator',
      icon: icons.AimOutlined
    },
    {
      id: 'incident-report',
      title: 'Reporte de incidente',
      type: 'item',
      url: '/incident-report',
      icon: icons.ReconciliationOutlined
    },
    {
      id: 'inspection-forms',
      title: 'Formularios de inspección',
      type: 'item',
      url: '/inspection-forms',
      icon: icons.ProfileOutlined
    },
    {
      id: 'reminder',
      title: 'Recordatorio',
      type: 'item',
      url: '/reminder',
      icon: icons.MessageOutlined
    }
  ]
};

export default inspection;
