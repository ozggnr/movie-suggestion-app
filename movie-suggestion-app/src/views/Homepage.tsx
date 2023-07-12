import { useEffect, useState, useContext, useRef, ChangeEvent } from 'react';

import SearchBar from '../components/SearchBar';
import AuthContext from '../context/AuthContext';
import { getTargetMovies } from '../services/movieService.js';
import Navigation from './Navigation';

export default function Homepage() {
    const [prompt, setPrompt] = useState('');
    const [data, setData] = useState({});

    const text =
        'Share your movie preferences, including genres, themes, desired moods, or specific elements, and our AI will curate personalized recommendations tailored to your tastes!';
    ('Embark on a cinematic adventure by describing your movie preferences! From genres and themes to desired moods or specific elements, unleash your imagination and let our AI create thrilling, personalized recommendations just for you!');
    ('Discover the power of personalized movie recommendations! Describe your desired genres, themes, moods, and specific elements—such as a side-splitting comedy featuring lovable animals and moments of gripping tension—and watch as our AI conjures the perfect film suggestions just for you!');

    return (
        <div className="homepage">
            <Navigation />
            {/* <img src="https://image.tmdb.org/t/p/w500/uoplwswBDy7gsOyrbGuKyPFoPCs.jpg" /> */}
            <div className="ai-search">
                <h2>{text}</h2>
                <SearchBar
                    placeholder="what do you want to watch?"
                    onChange={handleSearchChange}
                    onClick={handleSearch}
                />
                {/* {Object.values(data).map((movies) => {
                    return <div>{movies}</div>;
                })} */}
            </div>
        </div>
    );
    function handleSearch() {
        console.log('here', data);
        getTargetMovies(prompt).then((data) => setData(data));
    }

    function handleSearchChange(ev: ChangeEvent<HTMLInputElement>) {
        setPrompt(ev.target.value);
    }
}
