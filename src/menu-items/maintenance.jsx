// assets
import {
  ProfileOutlined,
  MailOutlined,
  CalendarOutlined,
  ContainerOutlined,
  BarcodeOutlined,
  FolderOutlined
} from '@ant-design/icons';

// icons
const icons = {
  ProfileOutlined,
  MailOutlined,
  CalendarOutlined,
  ContainerOutlined,
  BarcodeOutlined,
  FolderOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const maintenance = {
  id: 'maintenance',
  title: 'Mantenimiento',
  type: 'group',
  children: [
    {
      id: 'work-order',
      title: 'Orden de trabajo',
      type: 'item',
      url: '/work-order',
      icon: icons.ProfileOutlined
    },
    {
      id: 'maintenance-request',
      title: 'Solicitud de mantenimiento',
      type: 'item',
      url: '/maintenance-request',
      icon: icons.MailOutlined
    },
    {
      id: 'service-hours',
      title: 'Horario de servicio',
      type: 'item',
      url: '/service-hours',
      icon: icons.CalendarOutlined
    },
    {
      id: 'parts-inventory',
      title: 'Inventario de piezas',
      type: 'item',
      url: '/parts-inventory',
      icon: icons.ContainerOutlined
    },
    {
      id: 'work-code',
      title: 'Código de trabajo',
      type: 'item',
      url: '/work-code',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'task-master',
      title: 'Maestro de tareas',
      type: 'item',
      url: '/task-master',
      icon: icons.FolderOutlined
    }
  ]
};

export default maintenance;
