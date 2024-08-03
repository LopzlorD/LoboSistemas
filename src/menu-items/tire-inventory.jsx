// assets
import {
  ContainerOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    ContainerOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const tireinventory = {
    id: 'tire-inventory',
    title: 'Inventario de neumáticos',
    type: 'group',
    children: [
      {
        id: 'tire-inventory',
        title: 'Inventario de neumáticos',
        type: 'item',
        url: '/tire-inventory',
        icon: icons.ContainerOutlined
      }
    ]
  };
  
  export default tireinventory;
  