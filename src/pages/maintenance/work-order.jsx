import React, { useState } from 'react';
import { Box, Button, IconButton, TextField, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Tabs, Tab, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import ExportIcon from '@mui/icons-material/SaveAlt';
import { createOrdenTrabajo } from '../../api/OrdenesTrabajo';

export default function WorkOrder() {
    const [data, setData] = useState([
        {
            woNumero: 'WO1001',
            fechaCreacion: '10-Aug-2024 11:48 AM',
            vehiculo: '00123 Camión de Carga',
            fechaVencimiento: '16-Aug-2024 11:46 AM',
            estado: 'INICIADO',
            prioridad: 'BAJO',
            asignado: 0,
            memorandum: 'Realizar inspección de motor...',
        }
    ]);

    const [formValues, setFormValues] = useState({
        titulo: '',
        memorandum: '',
        prioridad: '',
        asignado_a: '',
        tipo_orden_trabajo: '',
        inspeccion_enlaces: '',
        orden_trabajo_enlace: '',
        numero_vehiculo: '',
        nombre_vehiculo: '',
        modelo: '',
        lectura_medidor: '',
        fecha_inicio: '',
        fecha_vencimiento: '',
        costo_estimado: '',
        tiempo_trabajo_estimado: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const nuevaOrden = await createOrdenTrabajo(formValues);
            console.log('Orden de trabajo creada:', nuevaOrden);
            // Aquí podrías hacer algo adicional, como limpiar el formulario o mostrar una notificación
        } catch (error) {
            console.error('Error al crear la orden de trabajo:', error);
        }
    };

    const [selectedTab, setSelectedTab] = useState(0);
    const [openModal, setOpenModal] = useState(false); // Estado para controlar el modal

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleAddOrder = () => {
        setOpenModal(true); // Abre el modal al presionar el botón
    };

    const handleCloseModal = () => {
        setOpenModal(false); // Cierra el modal
    };

    return (
        <Box sx={{ width: '100%', mt: 3 }}>
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Tabs">
                <Tab label="ABIERTO" />
                <Tab label="TERMINADO" />
                <Tab label="ARCHIVO" />
            </Tabs>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 2 }}>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAddOrder} // Abre el modal al presionar
                >
                    Crear orden de trabajo
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Búsqueda"
                        sx={{ mr: 2 }}
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                    />
                    <IconButton>
                        <ExportIcon />
                    </IconButton>
                </Box>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Work Order Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Acción</TableCell>
                            <TableCell>WO Número</TableCell>
                            <TableCell>Fecha de creación</TableCell>
                            <TableCell>Vehículo</TableCell>
                            <TableCell>Fecha de vencimiento fecha completada</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Prioridad</TableCell>
                            <TableCell>Asignado</TableCell>
                            <TableCell>Memorándum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.length > 0 ? (
                            data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Button variant="contained" startIcon={<EditIcon />} sx={{ textTransform: 'none' }}>
                                            Acción
                                        </Button>
                                    </TableCell>
                                    <TableCell>{row.woNumero}</TableCell>
                                    <TableCell>{row.fechaCreacion}</TableCell>
                                    <TableCell>{row.vehiculo}</TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'inline-block', color: '#fff', padding: '2px 8px', borderRadius: '4px', backgroundColor: row.fechaVencimiento === 'OVERDUE' ? 'red' : 'inherit' }}>
                                            {row.fechaVencimiento}
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'inline-block', backgroundColor: '#aaaaaa', padding: '2px 8px', borderRadius: '4px', color: '#fff' }}>
                                            {row.estado}
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'inline-block', backgroundColor: '#8bc34a', padding: '2px 8px', borderRadius: '4px', color: '#fff' }}>
                                            {row.prioridad}
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'red' }}>
                                            <GroupIcon fontSize="small" sx={{ mr: 0.5 }} /> {row.asignado}
                                        </Box>
                                    </TableCell>
                                    <TableCell>{row.memorandum}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={9} align="center">
                                    Sin datos
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={openModal} onClose={handleCloseModal} maxWidth="lg" fullWidth>
                <DialogTitle>Crear Orden de Trabajo</DialogTitle>
                <DialogContent>
                    <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Tabs">
                        <Tab label="DETALLES DE WO" />
                        <Tab label="DETALLES DE LA TAREA" />
                        <Tab label="DETALLES DE PIEZAS" />
                        <Tab label="DETALLES LABORALES" />
                        <Tab label="OBSERVACIÓN Y ARCHIVOS ADJUNTOS" />
                        <Tab label="COSTO" />
                    </Tabs>

                    {selectedTab === 0 && (
                        <Box sx={{ mt: 3 }}>
                            <TextField label="Título" name="titulo" required fullWidth margin="normal" value={formValues.titulo} onChange={handleInputChange} />
                            <TextField label="Memorándum" name="memorandum" multiline rows={4} fullWidth margin="normal" value={formValues.memorandum} onChange={handleInputChange} />
                            <TextField label="Prioridad" name="prioridad" select fullWidth margin="normal" value={formValues.prioridad} onChange={handleInputChange} >
                                <option value="Bajo">Bajo</option>
                                <option value="Medio">Medio</option>
                                <option value="Alto">Alto</option>
                            </TextField>
                            <TextField label="Asignado a" name="asignado_a" fullWidth margin="normal" value={formValues.asignado_a} onChange={handleInputChange} />
                            <TextField label="Tipo de orden de trabajo" name="tipo_orden_trabajo" fullWidth margin="normal" value={formValues.tipo_orden_trabajo} onChange={handleInputChange} />
                            <TextField label="Inspección de enlaces" name="inspeccion_enlaces" fullWidth margin="normal" value={formValues.inspeccion_enlaces} onChange={handleInputChange} />
                            <TextField label="Orden de trabajo de enlace" name="orden_trabajo_enlace" fullWidth margin="normal" value={formValues.orden_trabajo_enlace} onChange={handleInputChange} />
                            <TextField label="Número de vehículo" name="numero_vehiculo" required fullWidth margin="normal" value={formValues.numero_vehiculo} onChange={handleInputChange} />
                            <TextField label="Nombre del vehículo" name="nombre_vehiculo" required fullWidth margin="normal" value={formValues.nombre_vehiculo} onChange={handleInputChange} />
                            <TextField label="Modelo" name="modelo" fullWidth margin="normal" value={formValues.modelo} onChange={handleInputChange} />
                            <TextField label="Lectura del medidor" name="lectura_medidor" fullWidth margin="normal" value={formValues.lectura_medidor} onChange={handleInputChange} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <TextField label="Fecha de inicio" name="fecha_inicio" type="datetime-local" fullWidth margin="normal" sx={{ mr: 1 }} value={formValues.fecha_inicio} onChange={handleInputChange} />
                                <TextField label="Fecha de vencimiento" name="fecha_vencimiento" type="datetime-local" fullWidth margin="normal" sx={{ ml: 1 }} value={formValues.fecha_vencimiento} onChange={handleInputChange} />
                            </Box>
                            <TextField label="Costo estimado" name="costo_estimado" fullWidth margin="normal" type="number" value={formValues.costo_estimado} onChange={handleInputChange} />
                            <TextField label="Tiempo de trabajo estimado" name="tiempo_trabajo_estimado" fullWidth margin="normal" type="number" value={formValues.tiempo_trabajo_estimado} onChange={handleInputChange} />
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Crear Orden de Trabajo
                            </Button>
                        </Box>
                    )}

                    {selectedTab === 1 && (
                        <Box sx={{ mt: 3 }}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Tarea</TableCell>
                                            <TableCell>Estado</TableCell>
                                            <TableCell>Tipo</TableCell>
                                            <TableCell>Asignado</TableCell>
                                            <TableCell>Nota</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 2 }}>
                                Agregar
                            </Button>
                        </Box>
                    )}

                    {selectedTab === 2 && (
                        <Box sx={{ mt: 3 }}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Número de artículo</TableCell>
                                            <TableCell>Nombre del artículo</TableCell>
                                            <TableCell>Cantidad</TableCell>
                                            <TableCell>Coste del artículo</TableCell>
                                            <TableCell>Coste total</TableCell>
                                            <TableCell>Nota</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                <Button variant="contained" startIcon={<SearchIcon />} sx={{ mr: 2 }}>
                                    Escanear
                                </Button>
                                <Button variant="contained" startIcon={<AddIcon />}>
                                    Agregar
                                </Button>
                            </Box>
                        </Box>
                    )}

                    {selectedTab === 3 && (
                        <Box sx={{ mt: 3 }}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Trabajador</TableCell>
                                            <TableCell>Código de Trabajo</TableCell>
                                            <TableCell>Velocidad</TableCell>
                                            <TableCell>Tiempo</TableCell>
                                            <TableCell>Costo</TableCell>
                                            <TableCell>Nota</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 2 }}>
                                Agregar
                            </Button>
                        </Box>
                    )}

                    {selectedTab === 4 && (
                        <Box sx={{ mt: 3 }}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Observación</TableCell>
                                            <TableCell>Fecha</TableCell>
                                            <TableCell>Observar por</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 2 }}>
                                Agregar
                            </Button>

                            <TableContainer component={Paper} sx={{ mt: 3 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Tipo de archivo adjunto</TableCell>
                                            <TableCell>Descripción</TableCell>
                                            <TableCell>Descargar</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>
                                                <IconButton>
                                                    {/* Aquí va el ícono para descargar archivos */}
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 2 }}>
                                Agregar
                            </Button>
                        </Box>
                    )}

                    {selectedTab === 5 && (
                        <Box sx={{ mt: 3 }}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Descripción del costo</TableCell>
                                            <TableCell>Costo</TableCell>
                                            <TableCell>Fecha</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                            <TableCell>Sin datos</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 2 }}>
                                Agregar
                            </Button>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                                <TextField label="Costo de piezas y material" type="number" fullWidth margin="normal" sx={{ mr: 2 }} />
                                <TextField label="Costo de mano de obra total" type="number" fullWidth margin="normal" sx={{ mr: 2 }} />
                                <TextField label="Costo adicional" type="number" fullWidth margin="normal" sx={{ mr: 2 }} />
                                <TextField label="Impuesto" type="number" fullWidth margin="normal" sx={{ mr: 2 }} />
                                <TextField label="Costo total de WO" type="number" fullWidth margin="normal" />
                            </Box>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal}>Cancelar</Button>
                    <Button variant="contained" color="primary">Guardar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
