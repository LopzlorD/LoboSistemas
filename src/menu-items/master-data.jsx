// assets
import {
    ReconciliationOutlined,
    FileOutlined,
    FundProjectionScreenOutlined,
    IdcardOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    ReconciliationOutlined,
    FileOutlined,
    FundProjectionScreenOutlined,
    IdcardOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const masterdata= {
    id: 'master-data',
    title: 'Datos maestros',
    type: 'group',
    children: [
      {
        id: 'team-management',
        title: 'Gestión de equipos',
        type: 'item',
        url: '/team-management',
        icon: icons.ReconciliationOutlined
      },
      {
        id: 'documents',
        title: 'Documentos',
        type: 'item',
        url: '/documents',
        icon: icons.FileOutlined
      },
      {
        id: 'site-project',
        title: 'Proyecto del sitio',
        type: 'item',
        url: '/site-project',
        icon: icons.FundProjectionScreenOutlined
      },
      {
        id: 'account',
        title: 'Cuenta',
        type: 'item',
        url: '/account',
        icon: icons.IdcardOutlined
      }
    ]
  };
  
  export default masterdata;
  