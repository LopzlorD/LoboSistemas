// assets
import {
    FileDoneOutlined,
    HomeOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    FileDoneOutlined,
    HomeOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const fuelmanagement = {
    id: 'fuel-management',
    title: 'Gestión de combustible',
    type: 'group',
    children: [
      {
        id: 'fuel-loggere',
        title: 'Registrador de combustible',
        type: 'item',
        url: '/fuel-logger',
        icon: icons.FileDoneOutlined
      },
      {
        id: 'fuel-bunker',
        title: 'Búnker de combustible',
        type: 'item',
        url: '/fuel-bunker',
        icon: icons.HomeOutlined
      }
    ]
  };
  
  export default fuelmanagement;
  