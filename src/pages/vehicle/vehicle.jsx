import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Grid, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MapIcon from '@mui/icons-material/Map';
import VehicleModal from 'components/modals/VehicleModal';
import MapModal from 'components/modals/MapModal';

export default function Vehicle() {
  const [openVehicleModal, setOpenVehicleModal] = useState(false);
  const [openMapModal, setOpenMapModal] = useState(false);

  const handleOpenVehicleModal = () => setOpenVehicleModal(true);
  const handleCloseVehicleModal = () => setOpenVehicleModal(false);

  const handleOpenMapModal = () => setOpenMapModal(true);
  const handleCloseMapModal = () => setOpenMapModal(false);
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
              {/* Datos de vehículos */}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
