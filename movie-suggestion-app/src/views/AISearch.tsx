import { ChangeEvent, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { getTargetMovies } from '../services/movieService';

export default function AISearch() {
    const text =
        'Share your movie preferences, including genres, themes, desired moods, or specific elements, and our AI will curate personalized recommendations tailored to your tastes!';
    ('Embark on a cinematic adventure by describing your movie preferences! From genres and themes to desired moods or specific elements, unleash your imagination and let our AI create thrilling, personalized recommendations just for you!');
    ('Discover the power of personalized movie recommendations! Describe your desired genres, themes, moods, and specific elements—such as a side-splitting comedy featuring lovable animals and moments of gripping tension—and watch as our AI conjures the perfect film suggestions just for you!');

    const [prompt, setPrompt] = useState('');
    const [data, setData] = useState({});
    return (
        <div className="ai-search">
            <h2>{text}</h2>
            <SearchBar placeholder="what do you want to watch?" onChange={handleSearchChange} onClick={handleSearch} />
            {/* {Object.values(data).map((movies) => {
        return <div>{movies}</div>;
    })} */}
        </div>
    );
    function handleSearch() {
        getTargetMovies(prompt).then((data) => setData(data));
    }

    function handleSearchChange(ev: ChangeEvent<HTMLInputElement>) {
        setPrompt(ev.target.value);
    }
}
