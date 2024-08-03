// assets
import {
    ProfileOutlined,
    CheckOutlined,
    SlidersOutlined,
    TeamOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    ProfileOutlined,
    CheckOutlined,
    SlidersOutlined,
    TeamOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const purchaseorder = {
    id: 'purchase-order',
    title: 'Orden de compra',
    type: 'group',
    children: [
      {
        id: 'purchase-order',
        title: 'Orden de compra',
        type: 'item',
        url: '/purchase-order',
        icon: icons.ProfileOutlined
      },
      {
        id: 'approval-of-PO',
        title: 'Aprovación de PO',
        type: 'item',
        url: '/approval-of-PO',
        icon: icons.CheckOutlined
      },
      {
        id: 'demand-parts',
        title: 'Piezas de demanda',
        type: 'item',
        url: '/demand-parts',
        icon: icons.SlidersOutlined
      },
      {
        id: 'sellers',
        title: 'Vendedores',
        type: 'item',
        url: '/sellers',
        icon: icons.TeamOutlined
      }
    ]
  };
  
  export default purchaseorder;
  