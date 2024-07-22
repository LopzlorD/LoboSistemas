import React from 'react';
import AddVehicleForm from '../forms/AddVehicleForm';

const AddVehicleModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-md shadow-lg w-3/4 max-w-4xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Agregar vehículo nuevo</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>
                <AddVehicleForm />
            </div>
        </div>
    );
};

export default AddVehicleModal;
