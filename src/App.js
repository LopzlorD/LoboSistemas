// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './pages/context/AuthContext';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Tablero from './pages/Tablero';
import Vehicle from './pages/VehicleInventory';


function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/tablero" element={<Tablero />} />
                    <Route path="/vehicle" element={<Vehicle />} />
                    {/* Agrega aquí otras rutas según sea necesario /dashboard*/}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
