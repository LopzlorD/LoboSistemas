// MapModal.jsx
import React from 'react';
import { Modal, Box, Typography, Button, Grid, Stack, TextField } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import GoogleMapComponent from 'components/items/GoogleMapComponent';

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
    const [modalStyle] = React.useState(getModalStyle);

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
                <Typography variant="h6" component="h2">
                    Mapa
                </Typography>
                {/* Aquí iría el componente de tu mapa, por ejemplo Google Maps o Leaflet */}
                <div style={{ width: '100%', height: '100%' }}>
  <GoogleMapComponent />
</div>

            </Box>
            <Box sx={{ width: '30%', height: '100%', pl: 2 }}>
                <Typography variant="h6" component="h2">
                    Almacenes
                </Typography>
                <Stack spacing={2} sx={{ mt: 2 }}>
                    <TextField fullWidth label="Nombre del almacén" />
                    <TextField fullWidth label="Dirección del almacén" />
                    <Button variant="contained" color="primary">
                        Agregar almacén
                    </Button>
                </Stack>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" component="h2">
                        Lista de almacenes
                    </Typography>
                    {/* Aquí puedes mapear y mostrar una lista de almacenes */}
                    <div>Almacén 1</div>
                    <div>Almacén 2</div>
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
