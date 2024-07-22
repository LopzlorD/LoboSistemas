// src/pages/auth/Register.js
import React from 'react';

const Register = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl mb-4">Register</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                </div>
                <div>
                    <label className="block text-sm">Password</label>
                    <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                </div>
                <div>
                    <label className="block text-sm">Confirm Password</label>
                    <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
            </form>
        </div>
    );
};

export default Register;
