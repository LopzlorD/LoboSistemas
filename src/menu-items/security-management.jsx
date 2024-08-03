// assets
import {
    LockOutlined,
    MonitorOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    LockOutlined,
    MonitorOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const securitymanagement = {
    id: 'securitymanagement',
    title: 'Administración de seguridad',
    type: 'group',
    children: [
      {
        id: 'security-point',
        title: 'Punto de seguridad',
        type: 'item',
        url: '/security-point',
        icon: icons.LockOutlined
      },
      {
        id: 'safety-observation',
        title: 'Observación de seguridad',
        type: 'item',
        url: '/safety-observation',
        icon: icons.MonitorOutlined
      }
    ]
  };
  
  export default securitymanagement;
  