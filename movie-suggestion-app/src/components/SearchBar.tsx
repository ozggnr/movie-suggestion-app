import { ForwardedRef, InputHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type SearchBarProps = {
    placeholder?: string;
    searchRef?: ForwardedRef<HTMLDivElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export default function SearchBar({ placeholder, searchRef, className }: SearchBarProps) {
    const cn = 'search' + (className ? ` ${className}` : '');
    return (
        <div className={cn} ref={searchRef}>
            <input type="search" name="q" placeholder={placeholder} onChange={(ev) => console.log(ev.target.value)} />
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}
