import React, { useState } from 'react';
import { 
    Box, Button, IconButton, TextField, TableContainer, Paper, 
    Table, TableHead, TableRow, TableCell, TableBody, 
    Dialog, DialogActions, DialogContent, DialogTitle, MenuItem 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import GroupIcon from '@mui/icons-material/Group';

export default function MaintenanceRequest() {
    const [data, setData] = useState([
        {
            woNumero: 'WO1002',
            fechaCreacion: '10-Aug-2024 12:08 PM',
            vehiculo: '00123 Camión de Carga',
            estado: 'SOLICITADO',
            prioridad: 'BAJO',
            asignado: 0,
            memorandum: 'Revisar y limpiar filtros de aire...',
            solicitadoPor: 'Rafael Elias Lopez Rocca',
        }
    ]);

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAddRequest = () => {
        handleOpen();
    };

    return (
        <Box sx={{ width: '100%', mt: 3 }}>
            {/* Encabezado con el botón para crear solicitud y el campo de búsqueda */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Button 
                    variant="contained" 
                    startIcon={<AddIcon />} 
                    sx={{ mb: 1 }}
                    onClick={handleAddRequest}
                >
                    Crear solicitud
                </Button>
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

            {/* Tabla de solicitudes de mantenimiento */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Maintenance Request Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Acción</TableCell>
                            <TableCell>WO Número</TableCell>
                            <TableCell>Fecha de creación</TableCell>
                            <TableCell>Vehículo</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Prioridad</TableCell>
                            <TableCell>Asignado</TableCell>
                            <TableCell>Memorándum</TableCell>
                            <TableCell>Solicitado por</TableCell>
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
                                    <TableCell>{row.solicitadoPor}</TableCell>
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

            {/* Modal para crear una nueva solicitud */}
            <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
                <DialogTitle>Crear solicitud</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ flex: 1, mr: 2 }}>
                            <TextField required label="Título" fullWidth margin="normal" />
                            <TextField label="Memorándum" multiline rows={4} fullWidth margin="normal" />
                            <TextField select label="Prioridad" fullWidth margin="normal" defaultValue="Bajo">
                                <MenuItem value="Bajo">Bajo</MenuItem>
                                <MenuItem value="Medio">Medio</MenuItem>
                                <MenuItem value="Alto">Alto</MenuItem>
                            </TextField>
                            <TextField label="Asignado a" fullWidth margin="normal" />
                            <TextField label="Tipo de orden de trabajo" fullWidth margin="normal" defaultValue="General" />
                            <TextField label="Inspección de enlaces" fullWidth margin="normal" />
                            <TextField label="Orden de trabajo de enlace" fullWidth margin="normal" />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <TextField required select label="Número de vehículo" fullWidth margin="normal">
                                <MenuItem value="001">001</MenuItem>
                                <MenuItem value="002">002</MenuItem>
                            </TextField>
                            <TextField required label="Nombre del vehículo" fullWidth margin="normal" />
                            <TextField label="Modelo" fullWidth margin="normal" />
                            <TextField label="Lectura del medidor" fullWidth margin="normal" />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <TextField
                                    label="Fecha de inicio"
                                    fullWidth
                                    margin="normal"
                                    type="datetime-local"
                                    sx={{ mr: 1 }}
                                />
                                <TextField
                                    label="Fecha de vencimiento"
                                    fullWidth
                                    margin="normal"
                                    type="datetime-local"
                                    sx={{ ml: 1 }}
                                />
                            </Box>
                            <TextField label="Costo estimado" fullWidth margin="normal" type="number" />
                            <TextField label="Tiempo de trabajo estimado" fullWidth margin="normal" type="number" />
                        </Box>
                    </Box>

                    {/* Sección de detalles de la tarea */}
                    <Box sx={{ mt: 4 }}>
                        <TableContainer component={Paper}>
                            <Table aria-label="Detalles de la tarea">
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
                        <Button variant="contained" sx={{ mt: 2 }} startIcon={<AddIcon />}>
                            Agregar
                        </Button>
                    </Box>

                    {/* Sección de detalles de piezas y material */}
                    <Box sx={{ mt: 4 }}>
                        <TableContainer component={Paper}>
                            <Table aria-label="Detalles de piezas y material">
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

                    {/* Sección de detalles laborales */}
                    <Box sx={{ mt: 4 }}>
                        <TableContainer component={Paper}>
                            <Table aria-label="Detalles laborales">
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
                        <Button variant="contained" sx={{ mt: 2 }} startIcon={<AddIcon />}>
                            Agregar
                        </Button>
                    </Box>

                    {/* Sección de observaciones y archivos adjuntos */}
                    <Box sx={{ mt: 4 }}>
                        <TableContainer component={Paper}>
                            <Table aria-label="Observaciones">
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
                        <Button variant="contained" sx={{ mt: 2 }} startIcon={<AddIcon />}>
                            Agregar
                        </Button>

                        <Box sx={{ mt: 4 }}>
                            <TableContainer component={Paper}>
                                <Table aria-label="Archivo adjunto">
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
                                                    <SearchIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button variant="contained" sx={{ mt: 2 }} startIcon={<AddIcon />}>
                                Agregar
                            </Button>
                        </Box>
                    </Box>

                    {/* Sección de costo adicional */}
                    <Box sx={{ mt: 4 }}>
                        <TableContainer component={Paper}>
                            <Table aria-label="Costo adicional">
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
                        <Button variant="contained" sx={{ mt: 2 }} startIcon={<AddIcon />}>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleClose} variant="contained">Crear</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
