// apiFunctions.js
import api from './apiconfig';

// Obtener almacenes
export const fetchWarehouses = async () => {
  try {
    const response = await api.get('/vehiculos/warehouses/');
    return response.data;
  } catch (error) {
    console.error('Error fetching warehouses:', error);
    return [];
  }
};

// Agregar un almacén
export const addWarehouse = async (warehouseData) => {
  try {
    const response = await api.post('/vehiculos/warehouses/', warehouseData);
    return response.data;
  } catch (error) {
    console.error('Error adding warehouse:', error);
    throw error;
  }
};

// Actualizar un almacén
export const updateWarehouse = async (warehouseId, warehouseData) => {
  try {
    const response = await api.put(`/vehiculos/warehouses/${warehouseId}`, warehouseData);
    return response.data;
  } catch (error) {
    console.error('Error updating warehouse:', error);
    throw error;
  }
};

// Agregar o actualizar vehículo
export const addOrUpdateVehicle = async (vehicleData) => {
  try {
    const response = await api.post('/vehiculos/tow/', vehicleData);
    return response.data;
  } catch (error) {
    console.error('Error adding/updating vehicle:', error);
    throw error;
  }
};

// Obtener vehículos
export const fetchVehicles = async () => {
  try {
    const response = await api.get('/vehiculos/tow/');
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return [];
  }
};

// Eliminar un vehículo
export const deleteVehicle = async (vehicleId) => {
  try {
    const response = await api.delete(`/vehiculos/tow/${vehicleId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    throw error;
  }
};

// Actualizar un vehículo
export const updateVehicle = async (vehicleId, vehicleData) => {
  try {
    const response = await api.put(`/vehiculos/tow/${vehicleId}`, vehicleData);
    return response.data;
  } catch (error) {
    console.error('Error updating vehicle:', error);
    throw error;
  }
};

// Eliminar un almacén
export const deleteWarehouse = async (warehouseId) => {
  try {
    const response = await api.delete(`/vehiculos/warehouses/${warehouseId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting warehouse:', error);
    throw error;
  }
};


