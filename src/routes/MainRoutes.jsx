import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const Default = Loadable(lazy(() => import('pages/start/default')));

// Vistas Informe de analisis y KPI
const ReportExcel = Loadable(lazy(() => import('pages/report/report-excel')));
const InspectionKPI = Loadable(lazy(() => import('pages/report/inspection-KPI')));
const MaintenanceKPI = Loadable(lazy(() => import('pages/report/maintenance-KPI')));
const FuelManagementKPI = Loadable(lazy(() => import('pages/report/fuel-management-KPI')));

// Vistas Inspección
const InspectionReport = Loadable(lazy(() => import('pages/inspection/inspection-report')));
const DailyReportOperator = Loadable(lazy(() => import('pages/inspection/daily-report-operator')));
const IncidentReport = Loadable(lazy(() => import('pages/inspection/incident-report')));
const InspectionForms = Loadable(lazy(() => import('pages/inspection/inspection-forms')));
const Reminder = Loadable(lazy(() => import('pages/inspection/reminder')));

// Vistas Mantenimiento
const WorkOrder = Loadable(lazy(() => import('pages/maintenance/work-order')));
const MaintenanceRequest = Loadable(lazy(() => import('pages/maintenance/maintenance-request')));
const ServiceHours = Loadable(lazy(() => import('pages/maintenance/service-hours')));
const PartsInventory = Loadable(lazy(() => import('pages/maintenance/parts-inventory')));
const WorkCode = Loadable(lazy(() => import('pages/maintenance/work-code')));
const TaskMaster = Loadable(lazy(() => import('pages/maintenance/task-master')));

// Vistas Administración de seguridad
const SecurityPoint = Loadable(lazy(() => import('pages/management/security-point')));
const SafetyObservation = Loadable(lazy(() => import('pages/management/safety-observation')));

// Vistas Orden de compra
const PurchaseOrder = Loadable(lazy(() => import('pages/order/purchase-order')));
const ApprovalOfPO = Loadable(lazy(() => import('pages/order/approval-of-PO')));
const DemandParts = Loadable(lazy(() => import('pages/order/demand-parts')));
const Sellers = Loadable(lazy(() => import('pages/order/sellers')));

// Vistas Vehículo
const Vehicle = Loadable(lazy(() => import('pages/vehicle/vehicle')));
const VehicleDescription = Loadable(lazy(() => import('pages/vehicle/vehicle-description')));

// Vistas Gestión de combustible
const FuelLogger = Loadable(lazy(() => import('pages/fuel/fuel-logger')));
const FuelBunker = Loadable(lazy(() => import('pages/fuel/fuel-bunker')));

// Vistas Inventario de neumáticos
const TireInventory = Loadable(lazy(() => import('pages/inventory/tire-inventory')));

// Vistas Gestión de herramienta
const ToolInventory = Loadable(lazy(() => import('pages/tool/tool-inventory')));
const ToolProblem = Loadable(lazy(() => import('pages/tool/tool-problem')));

// Vistas Cuaderno
const Notebook = Loadable(lazy(() => import('pages/notebook/notebook')));

// Vistas Datos maestros
const TeamManagement = Loadable(lazy(() => import('pages/data/team-management')));
const Documents = Loadable(lazy(() => import('pages/data/documents')));
const SiteProject = Loadable(lazy(() => import('pages/data/site-project')));
const Account = Loadable(lazy(() => import('pages/data/account')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard/>,
  children: [
    {
      path: '/',
      element: <DashboardDefault/>
    },
    {
      path: 'dashboard',
      element: <DashboardDefault/>,
      children: [
        
      ]
    },
    {
      path: 'default',
      element: <Default/>
    },
    {
      path: 'report-excel',
      element: <ReportExcel/>
    },
    {
      path: 'inpeccion-kpi',
      element: <InspectionKPI/>
    },
    {
      path: 'maintenance-kpi',
      element: <MaintenanceKPI/>
    },
    {
      path: 'fuel-management-kpi',
      element: <FuelManagementKPI/>
    },
    {
      path: 'inspection-report',
      element: <InspectionReport/>
    },
    {
      path: 'daily-report-operator',
      element: <DailyReportOperator/>
    },
    {
      path: 'incident-report',
      element: <IncidentReport/>
    },
    {
      path: 'inspection-forms',
      element: <InspectionForms/>
    },
    {
      path: 'reminder',
      element: <Reminder/>
    },
    {
      path: 'work-order',
      element: <WorkOrder/>
    },
    {
      path: 'maintenance-request',
      element: <MaintenanceRequest/>
    },
    {
      path: 'service-hours',
      element: <ServiceHours/>
    },
    {
      path: 'parts-inventory',
      element: <PartsInventory/>
    },
    {
      path: 'work-code',
      element: <WorkCode/>
    },
    {
      path: 'task-master',
      element: <TaskMaster/>
    },
    {
      path: 'security-point',
      element: <SecurityPoint/>
    },
    {
      path: 'safety-observation',
      element: <SafetyObservation/>
    },
    {
      path: 'purchase-order',
      element: <PurchaseOrder/>
    },
    {
      path: 'approval-of-PO',
      element: <ApprovalOfPO/>
    },
    {
      path: 'demand-parts',
      element: <DemandParts/>
    },
    {
      path: 'sellers',
      element: <Sellers/>
    },
    {
      path: 'vehicle',
      element: <Vehicle/>
    },
    {
      path: 'vehicle-description',
      element: <VehicleDescription/>
    },
    {
      path: 'fuel-logger',
      element: <FuelLogger/>
    },
    {
      path: 'fuel-bunker',
      element: <FuelBunker/>
    },
    ,
    {
      path: 'tire-inventory',
      element: <TireInventory/>
    },
    {
      path: 'tool-inventory',
      element: <ToolInventory/>
    },
    {
      path: 'tool-problem',
      element: <ToolProblem/>
    },
    {
      path: 'notebook',
      element: <Notebook/>
    },
    {
      path: 'team-management',
      element: <TeamManagement/>
    },
    {
      path: 'documents',
      element: <Documents/>
    },
    {
      path: 'site-project',
      element: <SiteProject/>
    },
    {
      path: 'account',
      element: <Account/>
    }
  ]
};

export default MainRoutes;
