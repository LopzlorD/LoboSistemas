import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Layout from './Layout';

const Dashboard = () => {
    const layout = [
        { i: 'a', x: 0, y: 0, w: 3, h: 2 },
        { i: 'b', x: 3, y: 0, w: 3, h: 2 },
        { i: 'c', x: 6, y: 0, w: 3, h: 2 },
        { i: 'd', x: 9, y: 0, w: 3, h: 2 },
        { i: 'e', x: 0, y: 2, w: 6, h: 2 },
        { i: 'f', x: 6, y: 2, w: 6, h: 2 },
    ];

    return (
        <Layout>
            <div><h1 className="text-lg">TABLERO</h1></div>
            <div>
                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={12}
                    rowHeight={30}
                    width={1200}
                >
                    <div key="a" className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Inspección realizada</h2>
                        <p>Total de inspecciones: 10</p>
                        <p>Inspecciones defectuosas: 2</p>
                    </div>
                    <div key="b" className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Informe de emisión</h2>
                        <p>Problemas totales reportados: 5</p>
                        <p>En progreso: 3</p>
                    </div>
                    <div key="c" className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Resumen de fallas</h2>
                        <p>Vehículos defectuosos: 1</p>
                        <p>Reparar artículos: 3</p>
                    </div>
                    <div key="d" className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Calendario</h2>
                        <p>Eventos pendientes: 2</p>
                        <p>Eventos atrasados: 1</p>
                    </div>
                    <div key="e" className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Resumen de orden de trabajo</h2>
                        <p>Ordenes completadas: 7</p>
                        <p>En progreso: 2</p>
                    </div>
                    <div key="f" className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Resumen de la solicitud</h2>
                        <p>Solicitudes aceptadas: 5</p>
                        <p>Solicitudes pendientes: 3</p>
                    </div>
                </GridLayout>
            </div>
        </Layout>
    );
};

export default Dashboard;
