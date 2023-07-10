import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './style/App.scss';
import { PrivateRoutes } from './utils/PrivateRoute';
import Homepage from './views/Homepage';
import { AuthProvider } from './context/AuthContext';

export default function App() {
    return (
        <div className="app">
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Homepage />}>
                        {/* <Route element={<PrivateRoutes />}>
                            <Route path="/home" element={<Homepage />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} /> */}
                    </Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}
