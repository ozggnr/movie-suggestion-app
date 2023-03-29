import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import './main.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
