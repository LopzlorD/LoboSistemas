import React, { useState, useEffect } from 'react'; 
import { Modal, Box, Typography, Button, Grid, Stack, TextField } from '@mui/material';
import GoogleMapComponent from 'components/items/GoogleMapComponent';
import { addWarehouse, fetchWarehouses } from 'api/apivehiculos';

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-50%, -50%)`,
    };
}

const MapModal = ({ open, handleClose }) => {
    const [modalStyle] = useState(getModalStyle);
    const [warehouseData, setWarehouseData] = useState({
        nombre: '',
        direccion: ''
    });
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        if (open) {
            fetchWarehouses().then(data => setWarehouses(data));
        }
    }, [open]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setWarehouseData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitWarehouse = async (event) => {
        event.preventDefault();
        try {
            const response = await addWarehouse(warehouseData);
            console.log('Warehouse added:', response);
            setWarehouses([...warehouses, response]); // Agrega el nuevo almacén a la lista
            handleClose(); // Cerrar el modal después de la operación
        } catch (error) {
            console.error('Failed to add warehouse:', error);
        }
    };

    const modalBody = (
        <Box sx={{
            position: 'absolute',
            width: '90%',
            height: '90%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'row',
            ...modalStyle
        }}>
            <Box sx={{ width: '70%', height: '100%', borderRight: '1px solid #000', pr: 2 }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <GoogleMapComponent />
                </div>
            </Box>
            <Box sx={{ width: '30%', height: '100%', pl: 2 }}>
                <Typography variant="h6" component="h2">
                    <h2>Almacenes</h2>
                </Typography>
                <form onSubmit={handleSubmitWarehouse}>
                    <Stack spacing={2}>
                        <TextField fullWidth label="Nombre del almacén" name="nombre" value={warehouseData.nombre} onChange={handleInputChange} />
                        <TextField fullWidth label="Dirección del almacén" name="direccion" value={warehouseData.direccion} onChange={handleInputChange} />
                        <Button type="submit" variant="contained" color="primary">Agregar almacén</Button>
                    </Stack>
                </form>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" component="h2">
                        <h3>Lista de almacenes</h3>
                    </Typography>
                    {warehouses.map((wh, index) => (
                        <div key={index}>{wh.nombre} - {wh.direccion}</div>
                    ))}
                </Box>
            </Box>
        </Box>
    );

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {modalBody}
        </Modal>
    );
}

export default MapModal;
