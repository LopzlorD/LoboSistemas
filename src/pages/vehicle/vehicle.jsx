import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Grid, Stack, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MapIcon from '@mui/icons-material/Map';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VehicleModal from 'components/modals/VehicleModal';
import MapModal from 'components/modals/MapModal';
import { fetchVehicles, deleteVehicle } from 'api/apivehiculos';

export default function Vehicle() {
  const [openVehicleModal, setOpenVehicleModal] = useState(false);
  const [openMapModal, setOpenMapModal] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles().then(setVehicles);
  }, []);

  const handleOpenVehicleModal = () => setOpenVehicleModal(true);
  const handleCloseVehicleModal = () => setOpenVehicleModal(false);

  const handleOpenMapModal = () => setOpenMapModal(true);
  const handleCloseMapModal = () => setOpenMapModal(false);

  const handleDeleteVehicle = async (vehicleId) => {
    try {
      await deleteVehicle(vehicleId);
      setVehicles(vehicles.filter(vehicle => vehicle.id !== vehicleId));
    } catch (error) {
      console.error('Failed to delete vehicle:', error);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Inventario de vehículos
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenVehicleModal}>
            Agregar vehículo nuevo
          </Button>
          <Button variant="contained" startIcon={<MapIcon />} onClick={handleOpenMapModal}>
            Vista de mapa
          </Button>
          <VehicleModal open={openVehicleModal} handleClose={handleCloseVehicleModal} />
          <MapModal open={openMapModal} handleClose={handleCloseMapModal} />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="inventario de vehículos">
            <TableHead>
              <TableRow>
                <TableCell>Acción</TableCell>
                <TableCell>Número de vehículo</TableCell>
                <TableCell>Categoría</TableCell>
                <TableCell>Nombre de vehículo</TableCell>
                <TableCell>Modelo</TableCell>
                <TableCell>Metraje</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Operador</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.map(vehicle => (
                <TableRow key={vehicle.id}>
                  <TableCell>
                    <IconButton onClick={() => { /* Función para editar vehículo */ }}>
                      <EditIcon color="primary" />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteVehicle(vehicle.id)}>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </TableCell>
                  <TableCell>{vehicle.numero_de_vehiculo}</TableCell>
                  <TableCell>{vehicle.categoria}</TableCell>
                  <TableCell>{vehicle.nombre}</TableCell>
                  <TableCell>{vehicle.modelo}</TableCell>
                  <TableCell>{vehicle.metraje}</TableCell>
                  <TableCell>{vehicle.estado}</TableCell>
                  <TableCell>{vehicle.operador}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}