import React from 'react';

const AddVehicleForm = () => {
    return (
        <form className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm">Número de vehículo:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Año:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Nombre del vehículo:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Número de chasis:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Categoría de vehículo:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Fabricar:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Número VIN:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Placa:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Modelo:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Última lectura de servicio:</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Lectura del medidor:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Última fecha de servicio:</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Estado:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Disponible</option>
                    <option>En servicio</option>
                    <option>Fuera de servicio</option>
                </select>
            </div>
            <div>
                <label className="block text-sm">Estado de registro:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Objetivo de utilización del vehículo:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Fecha de EXP de registro:</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Site/Project:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Nombre del operador:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Unidad de negocio:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Prioridad de mantenimiento:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Normal</option>
                    <option>Alta</option>
                    <option>Urgente</option>
                </select>
            </div>
            <div>
                <label className="block text-sm">Valor del activo:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Modo de propiedad:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Fecha de compra:</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Nota del vehículo:</label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <div>
                <label className="block text-sm">Fecha de garantía:</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Imagen del vehículo:</label>
                <input type="file" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">Ubicación geográfica requerida mientras inspección:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm">GPS habilitado</label>
            </div>
            <div>
                <label className="block text-sm">Identificación del dispositivo:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm">ID de vehículo GPS:</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="col-span-2">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
                    Agregar vehículo
                </button>
            </div>
        </form>
    );
};

export default AddVehicleForm;
