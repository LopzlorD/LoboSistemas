import React, { useState, useContext } from 'react';
import { AuthContext } from '../pages/context/AuthContext';
import { FaChevronDown, FaChevronRight, FaClipboardList, FaCog, FaFileAlt, FaHome, FaRegFileAlt, FaRegFileExcel, FaTruck, FaTachometerAlt, FaBook, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { user, logout } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    return (
        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-4 bg-gray-900">
                <h1 className="text-lg font-semibold">Lobo Sistemas</h1>
            </div>
            <ul className="flex-1 overflow-y-auto space-y-2">
                <li>
                    <Link to="/" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaBook className="mr-2"/> Empezando
                    </Link>
                </li>
                <li>
                    <Link to="/tablero" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaTachometerAlt className="mr-2"/> Tablero
                    </Link>
                </li>
                <li>
                    <div
                        className="p-4 hover:bg-gray-700 cursor-pointer flex items-center justify-between"
                        onClick={() => setOpen(!open)}
                    >
                        <div className="flex items-center">
                            <FaRegFileAlt className="mr-2"/> Informe de análisis y KPI
                        </div>
                        {open ? <FaChevronDown/> : <FaChevronRight/>}
                    </div>
                    {open && (
                        <ul className="pl-8 mt-2 space-y-2">
                            <li>
                                <Link to="#" className="block p-2 hover:bg-gray-600 flex items-center">
                                    <FaRegFileExcel className="mr-2"/> Informe de Excel
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="block p-2 hover:bg-gray-600 flex items-center">
                                    <FaFileAlt className="mr-2"/> Inspección KPI
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="block p-2 hover:bg-gray-600 flex items-center">
                                    <FaFileAlt className="mr-2"/> Mantenimiento KPI
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="block p-2 hover:bg-gray-600 flex items-center">
                                    <FaFileAlt className="mr-2"/> Gestión de combustible KPI
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="#" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaClipboardList className="mr-2"/> Inspección
                    </Link>
                </li>
                <li>
                    <Link to="#" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaCog className="mr-2"/> Mantenimiento
                    </Link>
                </li>
                <li>
                    <Link to="#" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaClipboardList className="mr-2"/> Administración de Seguridad
                    </Link>
                </li>
                <li>
                    <Link to="#" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaClipboardList className="mr-2"/> Orden de compra
                    </Link>
                </li>
                <li>
                    <Link to="/vehicle" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaTruck className="mr-2"/> Vehículo
                    </Link>
                </li>
                <li>
                    <Link to="#" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaClipboardList className="mr-2"/> Gestión de combustible
                    </Link>
                </li>
                <li>
                    <Link to="#" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaClipboardList className="mr-2"/> Inventario de neumáticos
                    </Link>
                </li>
                <li>
                    <Link to="#" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaClipboardList className="mr-2"/> Gestión de herramientas
                    </Link>
                </li>
                <li>
                    <Link to="#" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaClipboardList className="mr-2"/> Cuaderno
                    </Link>
                </li>
                <li>
                    <Link to="#" className="block p-4 hover:bg-gray-700 flex items-center">
                        <FaClipboardList className="mr-2"/> Datos maestros
                    </Link>
                </li>
                <li>
                    <button
                        onClick={logout}
                        className="block p-4 hover:bg-gray-700 flex items-center w-full text-left"
                    >
                        <FaSignOutAlt className="mr-2"/> Cerrar sesión
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
