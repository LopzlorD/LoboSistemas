// src/pages/Home.js
import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Layout from './Layout';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <Layout>
            <div className="p-4">
                <h2 className="text-xl">Welcome to Lobosystem</h2>
                {user && <p>Logged in as {user.email}</p>}
            </div>
        </Layout>
    );
};

export default Home;
