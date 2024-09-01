import React, { useState } from 'react';
import { Box, Button, IconButton, TextField, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Tabs, Tab, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Checkbox, FormControlLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/CloudUpload';
import CategoryIcon from '@mui/icons-material/Category';
import SearchIcon from '@mui/icons-material/Search';

export default function PartsInventory() {
    const [data, setData] = useState([]); // Estado para manejar los datos de la tabla
    const [selectedTab, setSelectedTab] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDialog, setOpenDialog] = useState(false); // Estado para controlar el diálogo/modal

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleAddItem = () => {
        setOpenDialog(true); // Abrir el diálogo cuando se presiona el botón
    };

    const handleCategoryClick = () => {
        // Lógica para manejar la categoría de piezas
    };

    const handleUploadClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false); // Cerrar el diálogo
    };

    return (
        <Box sx={{ width: '100%', mt: 3 }}>
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Parts Inventory Tabs">
                <Tab label="PARTES" />
                <Tab label="HISTORIAL DE TRANSFERENCIA DE PIEZAS" />
            </Tabs>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 2 }}>
                {selectedTab === 0 && (
                    <>
                        <Button 
                            variant="contained" 
                            startIcon={<AddIcon />} 
                            onClick={handleAddItem}
                        >
                            Agregar elemento de piezas
                        </Button>
                        <Box>
                            <Button
                                variant="outlined"
                                startIcon={<UploadIcon />}
                                onClick={handleUploadClick}
                            >
                                Subida a granel
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                            >
                                <MenuItem onClick={handleCloseMenu}>Opción 1</MenuItem>
                                <MenuItem onClick={handleCloseMenu}>Opción 2</MenuItem>
                                <MenuItem onClick={handleCloseMenu}>Opción 3</MenuItem>
                            </Menu>
                        </Box>
                    </>
                )}
                <Button
                    variant="contained"
                    startIcon={<CategoryIcon />}
                    onClick={handleCategoryClick}
                >
                    Categoría de piezas
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
                <Table sx={{ minWidth: 650 }} aria-label="Parts Inventory Table">
                    <TableHead>
                        {selectedTab === 0 ? (
                            <TableRow>
                                <TableCell>Acción</TableCell>
                                <TableCell>Partes</TableCell>
                                <TableCell>Cantidad</TableCell>
                                <TableCell>Coste del artículo</TableCell>
                                <TableCell>Tipo de artículo</TableCell>
                                <TableCell>Fabricante</TableCell>
                                <TableCell>Proveedor</TableCell>
                                <TableCell>Descripción</TableCell>
                                <TableCell>Sitio</TableCell>
                            </TableRow>
                        ) : (
                            <TableRow>
                                <TableCell>Fecha de transferencia</TableCell>
                                <TableCell>Partes</TableCell>
                                <TableCell>Cantidad</TableCell>
                                <TableCell>Fabricante</TableCell>
                                <TableCell>Sitio de</TableCell>
                                <TableCell>Sitio para</TableCell>
                                <TableCell>Transferir por</TableCell>
                                <TableCell>Transferir a</TableCell>
                                <TableCell>Nota</TableCell>
                            </TableRow>
                        )}
                    </TableHead>
                    <TableBody>
                        {data.length > 0 ? (
                            data.map((row, index) => (
                                <TableRow key={index}>
                                    {selectedTab === 0 ? (
                                        <>
                                            <TableCell>
                                                <Button variant="contained" sx={{ textTransform: 'none' }}>
                                                    Acción
                                                </Button>
                                            </TableCell>
                                            <TableCell>{row.partes}</TableCell>
                                            <TableCell>{row.cantidad}</TableCell>
                                            <TableCell>{row.costeArticulo}</TableCell>
                                            <TableCell>{row.tipoArticulo}</TableCell>
                                            <TableCell>{row.fabricante}</TableCell>
                                            <TableCell>{row.proveedor}</TableCell>
                                            <TableCell>{row.descripcion}</TableCell>
                                            <TableCell>{row.sitio}</TableCell>
                                        </>
                                    ) : (
                                        <>
                                            <TableCell>{row.fechaTransferencia}</TableCell>
                                            <TableCell>{row.partes}</TableCell>
                                            <TableCell>{row.cantidad}</TableCell>
                                            <TableCell>{row.fabricante}</TableCell>
                                            <TableCell>{row.sitioDe}</TableCell>
                                            <TableCell>{row.sitioPara}</TableCell>
                                            <TableCell>{row.transferirPor}</TableCell>
                                            <TableCell>{row.transferirA}</TableCell>
                                            <TableCell>{row.nota}</TableCell>
                                        </>
                                    )}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={selectedTab === 0 ? 9 : 9} align="center">
                                    Sin datos
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Dialog para agregar un nuevo elemento de piezas */}
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="lg" fullWidth>
                <DialogTitle>Agregar elemento de piezas</DialogTitle>
                <DialogContent>
                    <AddPartForm />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} variant="outlined">Cancelar</Button>
                    <Button variant="contained">Agregar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

function AddPartForm() {
    const [formValues, setFormValues] = useState({
        categoria: '',
        idSku: '',
        numeroParte: '',
        nombreArticulo: '',
        cantidad: '',
        unidad: 'Pieza',
        costeArticulo: '',
        fabricante: '',
        modeloVehiculoVinculado: '',
        terminoGarantia: '',
        parteReferencia: '',
        numeroSerie: '',
        tipoArticulo: '',
        ubicacionAlmacenada: '',
        etiquetaBusqueda: '',
        parteCritica: false,
        descripcion: '',
        proveedor: '',
        umbralPiezaBaja: '',
        crearDemandaAutomatica: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        label="Categoría"
                        name="categoria"
                        value={formValues.categoria}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        select
                    >
                        <MenuItem value="categoria1">Categoría 1</MenuItem>
                        <MenuItem value="categoria2">Categoría 2</MenuItem>
                    </TextField>
                    <TextField
                        required
                        label="ID de sku"
                        name="idSku"
                        value={formValues.idSku}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        required
                        label="Número de parte"
                        name="numeroParte"
                        value={formValues.numeroParte}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        required
                        label="Nombre del artículo"
                        name="nombreArticulo"
                        value={formValues.nombreArticulo}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        required
                        label="Cantidad"
                        name="cantidad"
                        value={formValues.cantidad}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                    <TextField
                        required
                        select
                        label="Unidad"
                        name="unidad"
                        value={formValues.unidad}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="Pieza">Pieza</MenuItem>
                        <MenuItem value="KG">KG</MenuItem>
                        <MenuItem value="Gramo">Gramo</MenuItem>
                        <MenuItem value="Galón">Galón</MenuItem>
                        <MenuItem value="Cuarto de galón">Cuarto de galón</MenuItem>
                        <MenuItem value="LTR">LTR</MenuItem>
                        <MenuItem value="Ml">Ml</MenuItem>
                        <MenuItem value="Metro">Metro</MenuItem>
                    </TextField>
                    <TextField
                        required
                        label="Coste del artículo"
                        name="costeArticulo"
                        value={formValues.costeArticulo}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                    <TextField
                        required
                        label="Fabricante"
                        name="fabricante"
                        value={formValues.fabricante}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Modelo de vehículo vinculado"
                        name="modeloVehiculoVinculado"
                        value={formValues.modeloVehiculoVinculado}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Término de garantía (en meses)"
                        name="terminoGarantia"
                        value={formValues.terminoGarantia}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                    <TextField
                        label="Parte de la referencia"
                        name="parteReferencia"
                        value={formValues.parteReferencia}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Número de serie"
                        name="numeroSerie"
                        value={formValues.numeroSerie}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Tipo de artículo"
                        name="tipoArticulo"
                        value={formValues.tipoArticulo}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Ubicación almacenada"
                        name="ubicacionAlmacenada"
                        value={formValues.ubicacionAlmacenada}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Etiqueta de búsqueda"
                        name="etiquetaBusqueda"
                        value={formValues.etiquetaBusqueda}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="parteCritica"
                                checked={formValues.parteCritica}
                                onChange={handleInputChange}
                            />
                        }
                        label="Parte crítica"
                    />
                    <TextField
                        label="Descripción"
                        name="descripcion"
                        value={formValues.descripcion}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Proveedor"
                        name="proveedor"
                        value={formValues.proveedor}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Umbral de pieza baja"
                        name="umbralPiezaBaja"
                        value={formValues.umbralPiezaBaja}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="crearDemandaAutomatica"
                                checked={formValues.crearDemandaAutomatica}
                                onChange={handleInputChange}
                            />
                        }
                        label="Crear demanda automática"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
