import React, { useState } from 'react';
import { Box, Button, IconButton, TextField, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

export default function TaskMaster() {
    const [data, setData] = useState([]); // Estado para manejar los datos de la tabla
    const [openModal, setOpenModal] = useState(false);
    const [category, setCategory] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleSaveTask = () => {
        const newTask = {
            categoria: category,
            vehiculo: vehicle,
            tarea: task,
        };
        setData([...data, newTask]); // Agrega la nueva tarea a la tabla
        setCategory('');
        setVehicle('');
        setTask('');
        handleCloseModal();
    };

    return (
        <Box sx={{ width: '100%', mt: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Button 
                    variant="contained" 
                    startIcon={<AddIcon />} 
                    sx={{ mb: 1 }}
                    onClick={handleAddTask}
                >
                    Agregar tarea
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

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Task Master Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Categoría</TableCell>
                            <TableCell>Vehículo</TableCell>
                            <TableCell>Tarea</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.length > 0 ? (
                            data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.categoria}</TableCell>
                                    <TableCell>{row.vehiculo}</TableCell>
                                    <TableCell>{row.tarea}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} align="center">
                                    Sin datos
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modal para agregar tarea */}
            <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
                <DialogTitle>Agregar tarea</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Categoría"
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Número de vehículo"
                            required
                            value={vehicle}
                            onChange={(e) => setVehicle(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Nombre de la tarea"
                            required
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            fullWidth
                        />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'space-between', padding: '16px 24px', backgroundColor: '#2c3e50' }}>
                    <Button onClick={handleCloseModal} variant="outlined" color="secondary" sx={{ color: '#ffffff', borderColor: '#ffffff' }}>
                        ✖ Cancelar
                    </Button>
                    <Button onClick={handleSaveTask} variant="contained" sx={{ backgroundColor: '#2980b9', color: '#ffffff' }}>
                        ➕ Agregar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
