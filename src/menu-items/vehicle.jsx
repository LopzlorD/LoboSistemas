// assets
import {
    CarOutlined,
    FormOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    CarOutlined,
    FormOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const vehicle = {
    id: 'vehicle',
    title: 'Vehículo',
    type: 'group',
    children: [
      {
        id: 'vehicle',
        title: 'Vehículo',
        type: 'item',
        url: '/vehicle',
        icon: icons.CarOutlined
      },
      {
        id: 'vehicle-description',
        title: 'Descripción del vehículo',
        type: 'item',
        url: '/vehicle-description',
        icon: icons.FormOutlined
      }
    ]
  };
  
  export default vehicle;
  