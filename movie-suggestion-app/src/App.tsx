import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import './App.scss';
import Signup from './components/Signup';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
