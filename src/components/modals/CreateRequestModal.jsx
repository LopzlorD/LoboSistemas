import React, { useState } from 'react';
import { Box, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Tabs, Tab, IconButton, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import GroupIcon from '@mui/icons-material/Group';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function CreateRequestModal() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChangeTab = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={{ width: '100%', mt: 3 }}>
            <Tabs value={selectedTab} onChange={handleChangeTab} sx={{ mb: 3 }}>
                <Tab label="DETALLES DE WO" />
                <Tab label="DETALLES DE LA TAREA" />
                <Tab label="DETALLES DE PIEZAS" />
                <Tab label="DETALLES LABORALES" />
                <Tab label="OBSERVACIÓN Y ARCHIVOS ADJUNTOS" />
                <Tab label="COSTO" />
            </Tabs>

            {selectedTab === 0 && (
                <Box component={Paper} sx={{ p: 3 }}>
                    <Typography variant="h6">Detalles de WO</Typography>
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

                            {/* Fechas agrupadas */}
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
                </Box>
            )}

            {selectedTab === 1 && (
                <Box component={Paper} sx={{ p: 3 }}>
                    <Typography variant="h6">Detalle de la tarea</Typography>
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
            )}

            {selectedTab === 2 && (
                <Box component={Paper} sx={{ p: 3 }}>
                    <Typography variant="h6">Detalles de piezas y material</Typography>
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
            )}

            {selectedTab === 3 && (
                <Box component={Paper} sx={{ p: 3 }}>
                    <Typography variant="h6">Detalles laborales</Typography>
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
            )}

            {selectedTab === 4 && (
                <Box component={Paper} sx={{ p: 3 }}>
                    <Typography variant="h6">Observaciones</Typography>
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

                    <Typography variant="h6" sx={{ mt: 4 }}>Archivo adjunto</Typography>
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
                                            <AttachFileIcon />
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
            )}

            {selectedTab === 5 && (
                <Box component={Paper} sx={{ p: 3 }}>
                    <Typography variant="h6">Costo adicional</Typography>
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
            )}
        </Box>
    );
}