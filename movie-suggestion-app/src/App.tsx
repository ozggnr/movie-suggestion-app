import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import './App.scss';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
