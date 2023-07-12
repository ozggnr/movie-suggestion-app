import { ChangeEventHandler, ForwardedRef, InputHTMLAttributes, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type SearchBarProps = {
    placeholder?: string;
    searchRef?: ForwardedRef<HTMLDivElement>;
    onClick: MouseEventHandler;
    onChange: ChangeEventHandler;
} & InputHTMLAttributes<HTMLInputElement>;

export default function SearchBar({ placeholder, searchRef, className, onChange, onClick }: SearchBarProps) {
    const cn = 'search' + (className ? ` ${className}` : '');
    return (
        <div className={cn} ref={searchRef}>
            <input type="search" name="q" placeholder={placeholder} onChange={onChange} />
            <button onClick={onClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}
