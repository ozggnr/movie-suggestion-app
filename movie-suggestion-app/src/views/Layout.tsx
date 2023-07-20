import { useEffect, useState, useContext, useRef, ChangeEvent } from 'react';

import SearchBar from '../components/SearchBar';
import AuthContext from '../context/AuthContext';
import { getTargetMovies } from '../services/movieService.js';
import AISearch from './AISearch';
import Navigation from './Navigation';

export default function Layout() {
    return (
        <div className="homepage">
            <Navigation />
            <AISearch />
            {/* <img src="https://image.tmdb.org/t/p/w500/uoplwswBDy7gsOyrbGuKyPFoPCs.jpg" /> */}
        </div>
    );
}
