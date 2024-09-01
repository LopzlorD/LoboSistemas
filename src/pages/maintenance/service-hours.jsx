import React, { useState } from 'react';
import { Box, Button, IconButton, TextField, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Tabs, Tab, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

export default function ServiceHours() {
    const [data, setData] = useState([]); // Estado para manejar los datos de la tabla
    const [selectedTab, setSelectedTab] = useState(0);
    const [openModal, setOpenModal] = useState(false); // Estado para controlar el modal
    const [formValues, setFormValues] = useState({
        idHorario: 'SCH1001',
        tituloProgramacion: '',
        numeroVehiculo: '',
        nombreVehiculo: '',
        lecturaMedidor: '',
        fechaServicio: '',
        tipoRepeticion: 'Repetir',
        intervaloMillas: '',
        intervaloDias: '',
        asignarA: '',
        generarWOAutomaticamente: false,
        nota: '',
        tarea: '',
        notificarAntesMillas: 0,
        notificarAntesDias: 0,
    });

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleAddSchedule = () => {
        setOpenModal(true); // Abre el modal al presionar el botón
    };

    const handleCloseModal = () => {
        setOpenModal(false); // Cierra el modal
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <Box sx={{ width: '100%', mt: 3 }}>
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Service Hours Tabs">
                <Tab label="TODO EL HORARIO" />
                <Tab label="ATRASADO" />
                <Tab label="DEBIDO PRONTO" />
                <Tab label="HORARIO COMPLETADO" />
            </Tabs>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 2 }}>
                {selectedTab === 0 && (
                    <Button 
                        variant="contained" 
                        startIcon={<AddIcon />} 
                        onClick={handleAddSchedule}
                    >
                        Crear horario
                    </Button>
                )}
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Búsqueda"
                    InputProps={{
                        endAdornment: (
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                />
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Service Hours Table">
                    <TableHead>
                        {selectedTab === 3 ? (  // Si la pestaña seleccionada es "HORARIO COMPLETADO"
                            <TableRow>
                                <TableCell>Calendario</TableCell>
                                <TableCell>Número de vehículo</TableCell>
                                <TableCell>Terminado</TableCell>
                                <TableCell>Orden de trabajo</TableCell>
                            </TableRow>
                        ) : (
                            <TableRow>
                                <TableCell>Acción</TableCell>
                                <TableCell>Calendario</TableCell>
                                <TableCell>Número de vehículo</TableCell>
                                <TableCell>Adeudado</TableCell>
                                <TableCell>Orden de trabajo</TableCell>
                            </TableRow>
                        )}
                    </TableHead>
                    <TableBody>
                        {data.length > 0 ? (
                            data.map((row, index) => (
                                <TableRow key={index}>
                                    {selectedTab === 3 ? ( // Mostrar columnas específicas para "HORARIO COMPLETADO"
                                        <>
                                            <TableCell>{row.calendario}</TableCell>
                                            <TableCell>{row.numeroVehiculo}</TableCell>
                                            <TableCell>{row.terminado}</TableCell>
                                            <TableCell>{row.ordenTrabajo}</TableCell>
                                        </>
                                    ) : (
                                        <>
                                            <TableCell>
                                                <Button variant="contained" sx={{ textTransform: 'none' }}>
                                                    Acción
                                                </Button>
                                            </TableCell>
                                            <TableCell>{row.calendario}</TableCell>
                                            <TableCell>{row.numeroVehiculo}</TableCell>
                                            <TableCell>{row.adeudado}</TableCell>
                                            <TableCell>{row.ordenTrabajo}</TableCell>
                                        </>
                                    )}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={selectedTab === 3 ? 4 : 5} align="center">
                                    Sin datos
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
                <DialogTitle>Agregar horario</DialogTitle>
                <DialogContent>
                    <Box sx={{ p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    label="ID de horario"
                                    name="idHorario"
                                    value={formValues.idHorario}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    label="Título de programación"
                                    name="tituloProgramacion"
                                    value={formValues.tituloProgramacion}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    select
                                    label="Número de vehículo"
                                    name="numeroVehiculo"
                                    value={formValues.numeroVehiculo}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                >
                                    <MenuItem value="001">001 - Vehículo A</MenuItem>
                                    <MenuItem value="002">002 - Vehículo B</MenuItem>
                                </TextField>
                                <TextField
                                    required
                                    label="Nombre del vehículo"
                                    name="nombreVehiculo"
                                    value={formValues.nombreVehiculo}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    label="Última lectura del medidor de servicio"
                                    name="lecturaMedidor"
                                    value={formValues.lecturaMedidor}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    label="Última fecha de servicio"
                                    name="fechaServicio"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    value={formValues.fechaServicio}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    select
                                    label="Tipo de repetición"
                                    name="tipoRepeticion"
                                    value={formValues.tipoRepeticion}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                >
                                    <MenuItem value="Repetir">Repetir</MenuItem>
                                    <MenuItem value="Una vez">Una vez</MenuItem>
                                </TextField>

                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="intervaloMillasCheck"
                                                    checked={Boolean(formValues.intervaloMillas)}
                                                    onChange={(e) =>
                                                        setFormValues({ ...formValues, intervaloMillas: e.target.checked ? '' : '' })
                                                    }
                                                />
                                            }
                                            label="Cada"
                                        />
                                        <TextField
                                            name="intervaloMillas"
                                            value={formValues.intervaloMillas}
                                            onChange={handleInputChange}
                                            fullWidth
                                            type="number"
                                            disabled={!Boolean(formValues.intervaloMillas)}
                                            sx={{ mb: 2 }}
                                            placeholder="Millas"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="intervaloDiasCheck"
                                                    checked={Boolean(formValues.intervaloDias)}
                                                    onChange={(e) =>
                                                        setFormValues({ ...formValues, intervaloDias: e.target.checked ? '' : '' })
                                                    }
                                                />
                                            }
                                            label="Cada"
                                        />
                                        <TextField
                                            name="intervaloDias"
                                            value={formValues.intervaloDias}
                                            onChange={handleInputChange}
                                            fullWidth
                                            type="number"
                                            disabled={!Boolean(formValues.intervaloDias)}
                                            sx={{ mb: 2 }}
                                            placeholder="Días"
                                        />
                                    </Grid>
                                </Grid>

                                <TextField
                                    label="Asignar a"
                                    name="asignarA"
                                    value={formValues.asignarA}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                />

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="generarWOAutomaticamente"
                                            checked={formValues.generarWOAutomaticamente}
                                            onChange={handleInputChange}
                                        />
                                    }
                                    label="Generar WO automáticamente"
                                />

                                <TextField
                                    label="Nota"
                                    name="nota"
                                    value={formValues.nota}
                                    onChange={handleInputChange}
                                    multiline
                                    rows={4}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Tarea"
                                    name="tarea"
                                    value={formValues.tarea}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 2 }}>
                                    Agregar
                                </Button>
                                <Button variant="contained" sx={{ mt: 2, ml: 2 }}>
                                    Lista de tareas
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Notificar Millas"
                                    name="notificarAntesMillas"
                                    value={formValues.notificarAntesMillas}
                                    onChange={handleInputChange}
                                    type="number"
                                    fullWidth
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    label="Notificar antes (días)"
                                    name="notificarAntesDias"
                                    value={formValues.notificarAntesDias}
                                    onChange={handleInputChange}
                                    type="number"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                            <Button variant="contained" onClick={handleCloseModal}>Establecer un horario</Button>
                            <Button variant="outlined" onClick={handleCloseModal}>Cerrar</Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
