// assets
import {
    ReadOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    ReadOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const notebook = {
    id: 'notebook',
    title: 'Cuaderno',
    type: 'group',
    children: [
      {
        id: 'notebook',
        title: 'Cuaderno',
        type: 'item',
        url: '/notebook',
        icon: icons.ReadOutlined
      }
    ]
  };
  
  export default notebook;
  