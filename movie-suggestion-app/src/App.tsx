import { useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';

import { PrivateRoutes } from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Movies from './views/Movies';
import TVShows from './views/TVShows';
import Navigation from './views/Navigation';
import Home from './views/Home';
import './style/App.scss';

export default function App() {
    return (
        <AuthProvider>
            <Navigation>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tvshows" element={<TVShows />} />
                </Routes>
            </Navigation>
        </AuthProvider>
    );
}
