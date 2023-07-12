import { useEffect, useState, useContext, useRef, ChangeEvent } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../components/SearchBar';
import { getTargetMovies } from '../services/movieService';

export default function Navigation() {
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setOpenSearchBar(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <nav>
            <ul className="nav-menu-left">
                <li>Movie App Logo</li>
                <li>Movies</li>
                <li>TV Shows</li>
            </ul>
            <div className="nav-menu-right">
                {openSearchBar ? (
                    <SearchBar
                        searchRef={searchRef}
                        className="collapse"
                        onClick={handleSubmitSearch}
                        onChange={handleSearchChange}
                    />
                ) : (
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => setOpenSearchBar(true)} />
                )}
                <Link to="/signup">Signup</Link>
                {/* {isAuth ? <Link to="/logout">Logout</Link> : <Link to="/login"> Login</Link>} */}
            </div>
            <Outlet />
        </nav>
    );
    function handleSubmitSearch() {
        console.log(searchInput);
        getTargetMovies(searchInput).then((data) => console.log(data));
    }
    function handleSearchChange(ev: ChangeEvent<HTMLInputElement>) {
        setSearchInput(ev.target.value);
    }
}
