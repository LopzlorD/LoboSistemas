// project import
import dashboard from './dashboard';
import informe from './informe';
import inspection from './inspection';
import maintenance from './maintenance';
import securitymanagement from './security-management';
import purchaseorder from './purchase-order'
import vehicle from './vehicle';
import fuelmanagement from './fuel-management';
import tireinventory from './tire-inventory';
import toolmanagement from './tool-management';
import notebook from './notebook';
import masterdata from './master-data';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, informe, inspection, maintenance, securitymanagement, 
    purchaseorder, vehicle, fuelmanagement, tireinventory, toolmanagement,
    notebook, masterdata]
};

export default menuItems;
