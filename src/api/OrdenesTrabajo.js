import api from './apiconfig';

export const createOrdenTrabajo = async (nuevaOrden) => {
  try {
    const response = await api.post('/work/ordenes-trabajo/', nuevaOrden);
    console.log('Orden de trabajo creada:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al crear la orden de trabajo:', error);
    throw error;
  }
};



export const getOrdenesTrabajo = async () => {
  try {
    const response = await api.get('/work/ordenes-trabajo/');
    console.log('Órdenes de trabajo obtenidas:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las órdenes de trabajo:', error);
    throw error;
  }
};


export const updateOrdenTrabajo = async (id, ordenActualizada) => {
  try {
    const response = await api.put(`/work/ordenes-trabajo/${id}/`, ordenActualizada);
    console.log('Orden de trabajo actualizada:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la orden de trabajo:', error);
    throw error;
  }
};



export const deleteOrdenTrabajo = async (id) => {
  try {
    await api.delete(`/work/ordenes-trabajo/${id}/`);
    console.log('Orden de trabajo eliminada');
  } catch (error) {
    console.error('Error al eliminar la orden de trabajo:', error);
    throw error;
  }
};


