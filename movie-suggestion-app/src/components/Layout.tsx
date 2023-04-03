import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
export default function Layout() {
    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/api/users/')
    //         .then((response) => response.json())
    //         .then((data) => console.log(data));
    // }, []);
    return (
        <div className="layout">
            <nav className="nav">
                <Link to="/">Public Page</Link>
                <Link to="/login">Login</Link>/<Link to="/signup">Signup</Link>
            </nav>

            <Outlet />
        </div>
    );
}
