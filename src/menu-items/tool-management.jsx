// assets
import {
    ContainerOutlined,
    IssuesCloseOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    ContainerOutlined,
    IssuesCloseOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const toolmanagement = {
    id: 'tool-management',
    title: 'Gestión de herramientas',
    type: 'group',
    children: [
      {
        id: 'tool-inventory',
        title: 'Inventario de herramientas',
        type: 'item',
        url: '/tool-inventory',
        icon: icons.ContainerOutlined
      },
      {
        id: 'tool-problem',
        title: 'Problema de herramienta',
        type: 'item',
        url: '/tool-problem',
        icon: icons.IssuesCloseOutlined
      }
    ]
  };
  
  export default toolmanagement;
  