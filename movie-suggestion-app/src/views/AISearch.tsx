import { ChangeEvent, useState } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { getTargetMovies } from '../services/movieService';
type Movie = {
    id?: string;
    title: string;
    overwiew: string;
    poster_path: string;
    release_date: string;
    original_title: string;
    original_langiage: string;
};
type MoviesDict = {
    [id: string]: Movie;
};
const TMDB_POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

export default function AISearch() {
    const text =
        'Share your movie preferences, including genres, themes, desired moods, or specific elements, and our AI will curate personalized recommendations tailored to your tastes!';
    ('Embark on a cinematic adventure by describing your movie preferences! From genres and themes to desired moods or specific elements, unleash your imagination and let our AI create thrilling, personalized recommendations just for you!');
    ('Discover the power of personalized movie recommendations! Describe your desired genres, themes, moods, and specific elements—such as a side-splitting comedy featuring lovable animals and moments of gripping tension—and watch as our AI conjures the perfect film suggestions just for you!');

    const [prompt, setPrompt] = useState('');
    const [suggestedMovies, setSuggestedMovies] = useState<MoviesDict>({});
    console.log(Object.values(suggestedMovies));
    return (
        <div className="ai-search">
            <h2>{text}</h2>
            <SearchBar placeholder="what do you want to watch?" onChange={handleSearchChange} onClick={handleSearch} />
            <div className="ai-search__results">
                {Object.values(suggestedMovies).map((movie: Movie) => {
                    console.log('movie', movie);
                    return (
                        <Card>
                            <img src={TMDB_POSTER_PATH + movie.poster_path} alt={movie.title} />
                            <div>{movie.title}</div>
                            <div>{movie.release_date}</div>
                            <div>{movie.overwiew}</div>
                            <div>{movie.original_langiage}</div>
                            <div>{movie.title}</div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
    function handleSearch() {
        getTargetMovies(prompt).then((movies) => setSuggestedMovies(movies));
    }

    function handleSearchChange(ev: ChangeEvent<HTMLInputElement>) {
        setPrompt(ev.target.value);
    }
}
