import React from 'react';
import { Modal, Box, Typography, TextField, Grid, FormControl, InputLabel, Select, MenuItem, Button, Stack, IconButton, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

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

    const modalBody = (
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto', // Asegura que el ancho se ajusta al contenido hasta un máximo
            maxWidth: '100%', // No permite que el Box sea más ancho que la pantalla
            maxHeight: '90vh', // Limita la altura máxima para asegurar que siempre haya un margen
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            overflowY: 'auto', // Habilita el desplazamiento vertical cuando el contenido excede la altura del Box
        }}>
            <Typography variant="h6" component="h2">
                Agregar vehículo
            </Typography>
            <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                    {/* Columna izquierda */}
                    <Grid item xs={6}>
                        <TextField fullWidth required label="Número de vehículo" margin="normal" />
                        <TextField fullWidth required label="Nombre de vehículo" margin="normal" />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Categoría</InputLabel>
                            <Select defaultValue="">
                                <MenuItem value={10}>Compacto</MenuItem>
                                <MenuItem value={20}>Sedán</MenuItem>
                                <MenuItem value={30}>SUV</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField fullWidth label="Número VIN" margin="normal" />
                        <TextField fullWidth label="Modelo" margin="normal" />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Estado</InputLabel>
                            <Select defaultValue="Disponible">
                                <MenuItem value="Disponible">Disponible</MenuItem>
                                <MenuItem value="En reparación">En reparación</MenuItem>
                                <MenuItem value="Fuera de servicio">Fuera de servicio</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Objetivo de utilización del vehículo</InputLabel>
                            <Select defaultValue="">
                                <MenuItem value="Personal">Personal</MenuItem>
                                <MenuItem value="Comercial">Comercial</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    {/* Columna derecha */}
                    <Grid item xs={6}>
                        <TextField fullWidth label="Año" margin="normal" />
                        <TextField fullWidth label="Número de chasis" margin="normal" />
                        <TextField fullWidth label="Fabricante" margin="normal" />
                        <TextField fullWidth label="Placas" margin="normal" />
                        <TextField fullWidth label="Última lectura de servicio" margin="normal" type="date" InputLabelProps={{ shrink: true }} />
                        <TextField fullWidth label="Última fecha de servicio" margin="normal" type="date" InputLabelProps={{ shrink: true }} />
                        <TextField fullWidth label="Estado de registro" margin="normal" />
                        <TextField fullWidth label="Fecha de EXP de registro" margin="normal" type="date" InputLabelProps={{ shrink: true }} />
                        <TextField fullWidth label="Nombre del operador" margin="normal" />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Prioridad de mantenimiento</InputLabel>
                            <Select defaultValue="Normal">
                                <MenuItem value="Normal">Normal</MenuItem>
                                <MenuItem value="Alta">Alta</MenuItem>
                                <MenuItem value="Baja">Baja</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField fullWidth label="Notas del vehículo" margin="normal" multiline rows={4} />
                    </Grid>
                </Grid>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ubicación geográfica requerida mientras está inactivo" />
                </FormGroup>
                <Button variant="contained" component="label" startIcon={<PhotoCamera />}>
                    Subir foto
                    <input type="file" hidden />
                </Button>
                <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
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
