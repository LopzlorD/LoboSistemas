// Importaciones de Material-UI
import React from 'react';
import { TextField, Button, Typography, Grid, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function VehicleDescription() {
    // Estado para manejar la selección de vehículo y fechas
    const [vehicle, setVehicle] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');

    // Manejadores de cambio para los inputs
    const handleVehicleChange = (event) => {
        setVehicle(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Descripción general del vehículo
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <FormControl fullWidth>
                        <InputLabel id="vehicle-select-label">Seleccionar vehículo</InputLabel>
                        <Select
                            labelId="vehicle-select-label"
                            id="vehicle-select"
                            value={vehicle}
                            label="Seleccionar vehículo"
                            onChange={handleVehicleChange}
                        >
                            {/* Los MenuItem deben ser dinámicos basados en tus datos */}
                            <MenuItem value={1}>Vehículo A</MenuItem>
                            <MenuItem value={2}>Vehículo B</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        label="Fecha de inicio"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        label="Fecha final"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        value={endDate}
                        onChange={handleEndDateChange}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button
                        variant="contained"
                        startIcon={<SearchIcon />}
                        onClick={() => console.log('Buscar datos del vehículo')}
                        fullWidth
                    >
                        Vista
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
