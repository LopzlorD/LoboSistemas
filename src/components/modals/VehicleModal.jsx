import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Grid, FormControl, InputLabel, Select, MenuItem, Button, Stack, IconButton, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { addOrUpdateVehicle } from 'api/apivehiculos';

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const VehicleModal = ({ open, handleClose }) => {
    const [modalStyle] = React.useState(getModalStyle);
    const [vehicleData, setVehicleData] = useState({
        numero_de_vehiculo: '',
        nombre: '',
        categoria: '',
        numero_vin: '',
        modelo: '',
        estado: '',
        objetivo_utilizacion: '',
        ano: '',
        numero_chasis: '',
        fabricante: '',
        placas: '',
        estado_registro: '',
        fecha_exp_registro: '',
        nombre_operador: '',
        prioridad_mantenimiento: '',
        notas: '',
        ubicacion_geografica: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVehicleData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addOrUpdateVehicle(vehicleData);
            console.log('Vehicle added/updated:', response);
            handleClose(); // Cierra el modal tras la actualización
        } catch (error) {
            console.error('Failed to add/update vehicle:', error);
        }
    };

    const modalBody = (
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
            maxWidth: '100%',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            overflowY: 'auto',
        }}>
            <Typography variant="h6" component="h2">
                Agregar vehículo
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {/* Columna izquierda */}
                    <Grid item xs={6}>
                        <TextField fullWidth required label="Número de vehículo" margin="normal" name="numero_de_vehiculo" value={vehicleData.numero_de_vehiculo} onChange={handleInputChange} />
                        <TextField fullWidth required label="Nombre de vehículo" margin="normal" name="nombre" value={vehicleData.nombre} onChange={handleInputChange} />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Categoría</InputLabel>
                            <Select
                                name="categoria"
                                value={vehicleData.categoria}
                                onChange={handleInputChange}
                                label="Categoría"
                            >
                                <MenuItem value="Compacto">Compacto</MenuItem>
                                <MenuItem value="Sedán">Sedán</MenuItem>
                                <MenuItem value="SUV">SUV</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField fullWidth label="Número VIN" margin="normal" name="numero_vin" value={vehicleData.numero_vin} onChange={handleInputChange} />
                        <TextField fullWidth label="Modelo" margin="normal" name="modelo" value={vehicleData.modelo} onChange={handleInputChange} />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Estado</InputLabel>
                            <Select
                                name="estado"
                                value={vehicleData.estado}
                                onChange={handleInputChange}
                                label="Estado"
                            >
                                <MenuItem value="Disponible">Disponible</MenuItem>
                                <MenuItem value="En reparación">En reparación</MenuItem>
                                <MenuItem value="Fuera de servicio">Fuera de servicio</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Objetivo de utilización del vehículo</InputLabel>
                            <Select
                                name="objetivo_utilizacion"
                                value={vehicleData.objetivo_utilizacion}
                                onChange={handleInputChange}
                                label="Objetivo de utilización del vehículo"
                            >
                                <MenuItem value="Personal">Personal</MenuItem>
                                <MenuItem value="Comercial">Comercial</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    {/* Columna derecha */}
                    <Grid item xs={6}>
                        <TextField fullWidth label="Año" margin="normal" name="ano" value={vehicleData.ano} onChange={handleInputChange} />
                        <TextField fullWidth label="Número de chasis" margin="normal" name="numero_chasis" value={vehicleData.numero_chasis} onChange={handleInputChange} />
                        <TextField fullWidth label="Fabricante" margin="normal" name="fabricante" value={vehicleData.fabricante} onChange={handleInputChange} />
                        <TextField fullWidth label="Placas" margin="normal" name="placas" value={vehicleData.placas} onChange={handleInputChange} />
                        <TextField fullWidth label="Última lectura de servicio" margin="normal" type="date" name="fecha_ultima_lectura_servicio" value={vehicleData.fecha_ultima_lectura_servicio} onChange={handleInputChange} InputLabelProps={{ shrink: true }} />
                        <TextField fullWidth label="Última fecha de servicio" margin="normal" type="date" name="fecha_ultima_servicio" value={vehicleData.fecha_ultima_servicio} onChange={handleInputChange} InputLabelProps={{ shrink: true }} />
                        <TextField fullWidth label="Estado de registro" margin="normal" name="estado_registro" value={vehicleData.estado_registro} onChange={handleInputChange} />
                        <TextField fullWidth label="Fecha de EXP de registro" margin="normal" type="date" name="fecha_exp_registro" value={vehicleData.fecha_exp_registro} onChange={handleInputChange} InputLabelProps={{ shrink: true }} />
                        <TextField fullWidth label="Nombre del operador" margin="normal" name="nombre_operador" value={vehicleData.nombre_operador} onChange={handleInputChange} />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Prioridad de mantenimiento</InputLabel>
                            <Select
                                name="prioridad_mantenimiento"
                                value={vehicleData.prioridad_mantenimiento}
                                onChange={handleInputChange}
                                label="Prioridad de mantenimiento"
                            >
                                <MenuItem value="Normal">Normal</MenuItem>
                                <MenuItem value="Alta">Alta</MenuItem>
                                <MenuItem value="Baja">Baja</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField fullWidth label="Notas del vehículo" margin="normal" name="notas" value={vehicleData.notas} onChange={handleInputChange} multiline rows={4} />
                    </Grid>
                </Grid>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="ubicacion_geografica"
                                checked={vehicleData.ubicacion_geografica === 'Sí'}
                                onChange={e => setVehicleData(prev => ({ ...prev, ubicacion_geografica: e.target.checked ? 'Sí' : 'No' }))}
                                value={vehicleData.ubicacion_geografica}
                            />
                        }
                        label="Ubicación geográfica requerida mientras está inactivo"
                    />
                </FormGroup>
                <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
                    <Button variant="contained" component="label" startIcon={<PhotoCamera />}>
                        Subir foto
                        <input type="file" hidden />
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cerrar
                    </Button>
                    <Button type="submit" color="secondary" variant="contained">
                        Agregar vehículo
                    </Button>
                </Stack>
            </form>
        </Box>
    );

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            disableEscapeKeyDown // Evita que el modal se cierre con la tecla Escape
            BackdropProps={{
                onClick: (event) => {
                    // Prevenir que el modal se cierre al hacer clic en el backdrop
                    event.stopPropagation();
                }
            }}
        >
            {modalBody}
        </Modal>
    );
}

export default VehicleModal;
