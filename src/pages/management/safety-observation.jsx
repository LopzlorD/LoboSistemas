import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

// ============================|| COMPONENT - SHADOW ||============================ //

export default function ToolInventory() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
                textAlign: 'center',
                backgroundColor: theme.palette.background.default,
                padding: theme.spacing(4)
            }}
        >
            <ConstructionIcon sx={{ fontSize: 100, color: theme.palette.primary.main, mb: 2 }} />
            <Typography variant="h3" component="h1" gutterBottom>
                Muy pronto
            </Typography>
            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                Seguimos trabajando
            </Typography>
            <Typography variant="body1" color="textSecondary">
                Estamos trabajando duro para traer esta funcionalidad lo antes posible.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={() => window.history.back()}
            >
                Volver
            </Button>
        </Box>
    );
}
