import React, { useState } from 'react';
import { FaPlus, FaMapMarkedAlt, FaUpload } from 'react-icons/fa';
import Layout from './Layout';
import AddVehicleModal from '../components/modals/AddVehicleModal';

const VehicleInventory = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl mb-4">Inventario de vehículos</h1>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                        <button
                            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                            onClick={openModal}
                        >
                            <FaPlus className="mr-2" /> Agregar vehículo nuevo
                        </button>
                        <button className="flex items-center bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600">
                            <FaUpload className="mr-2" /> Subida a granel
                        </button>
                        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600">
                            <FaMapMarkedAlt className="mr-2" /> Vista del mapa
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Búsqueda"
                        className="px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-md shadow-md">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">Acción</th>
                            <th className="py-2 px-4 border-b">Número de vehículo</th>
                            <th className="py-2 px-4 border-b">Categoría</th>
                            <th className="py-2 px-4 border-b">Nombre del vehículo</th>
                            <th className="py-2 px-4 border-b">Modelo</th>
                            <th className="py-2 px-4 border-b">Metro</th>
                            <th className="py-2 px-4 border-b">Estado</th>
                            <th className="py-2 px-4 border-b">Operador</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td colSpan="8" className="text-center py-4">
                                Sin datos
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <AddVehicleModal isOpen={modalIsOpen} onClose={closeModal} />
            </div>
        </Layout>
    );
};

export default VehicleInventory;
