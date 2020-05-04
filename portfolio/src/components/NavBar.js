import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    return(
    <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/about" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                    Projects
                </Link>
            </li>
        </ul>
    )
}

export default NavBar;