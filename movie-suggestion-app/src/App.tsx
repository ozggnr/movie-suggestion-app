import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Movies from './views/Movies';
import TVShows from './views/TVShows';
import Layout from './views/Layout';
import './style/App.scss';

export default function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* <Route index element={<Logo/>} /> */}
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tvshows" element={<TVShows />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}
