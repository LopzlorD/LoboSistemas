import React, { useState } from 'react';
import { Box, Button, IconButton, TextField, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

export default function WorkCode() {
    const [data, setData] = useState([]); // Estado para manejar los datos de la tabla
    const [openModal, setOpenModal] = useState(false);
    const [workCode, setWorkCode] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');
    const [description, setDescription] = useState('');

    const handleAddCode = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleSaveCode = () => {
        const newWorkCode = {
            codigo: workCode,
            tarifa: hourlyRate,
            descripcion: description,
        };
        setData([...data, newWorkCode]); // Agrega el nuevo código laboral a la tabla
        setWorkCode('');
        setHourlyRate('');
        setDescription('');
        handleCloseModal();
    };

    return (
        <Box sx={{ width: '100%', mt: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Button 
                    variant="contained" 
                    startIcon={<AddIcon />} 
                    sx={{ mb: 1 }}
                    onClick={handleAddCode}
                >
                    Agregar código laboral
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
                <Table sx={{ minWidth: 650 }} aria-label="Work Code Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Código de Trabajo</TableCell>
                            <TableCell>Tarifa por hora</TableCell>
                            <TableCell>Descripción</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.length > 0 ? (
                            data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.codigo}</TableCell>
                                    <TableCell>{row.tarifa}</TableCell>
                                    <TableCell>{row.descripcion}</TableCell>
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

            {/* Modal para agregar código laboral */}
            <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
                <DialogTitle>Agregar código laboral</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Código de Trabajo"
                            required
                            value={workCode}
                            onChange={(e) => setWorkCode(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Tarifa por hora"
                            required
                            type="number"
                            value={hourlyRate}
                            onChange={(e) => setHourlyRate(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Descripción"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            fullWidth
                        />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'space-between', padding: '16px 24px', backgroundColor: '#2c3e50' }}>
                    <Button onClick={handleCloseModal} variant="outlined" color="secondary" sx={{ color: '#ffffff', borderColor: '#ffffff' }}>
                        ✖ Cancelar
                    </Button>
                    <Button onClick={handleSaveCode} variant="contained" sx={{ backgroundColor: '#2980b9', color: '#ffffff' }}>
                        ➕ Agregar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
