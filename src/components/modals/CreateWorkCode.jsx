import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box } from '@mui/material';

export default function CreateWorkCode({ open, onClose, onAdd }) {
    const [workCode, setWorkCode] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');
    const [description, setDescription] = useState('');

    const handleAdd = () => {
        const newWorkCode = {
            codigo: workCode,
            tarifa: hourlyRate,
            descripcion: description,
        };
        onAdd(newWorkCode);
        onClose(); // Cierra el modal después de agregar
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
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
                <Button onClick={onClose} variant="outlined" color="secondary" sx={{ color: '#ffffff', borderColor: '#ffffff' }}>
                    ✖ Cancelar
                </Button>
                <Button onClick={handleAdd} variant="contained" sx={{ backgroundColor: '#2980b9', color: '#ffffff' }}>
                    ➕ Agregar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
