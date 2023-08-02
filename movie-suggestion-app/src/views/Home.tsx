import { useEffect, useState, useContext, useRef, ChangeEvent } from 'react';
import { Outlet } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import AuthContext from '../context/AuthContext';
import { getTargetMovies } from '../services/movieService.js';
import AISearch from './AISearch';
import Navigation from './Navigation';

export default function Home() {
    return (
        <div className="homepage">
            <AISearch />
        </div>
    );
}
