import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
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
        <span className="navbar-text"> 
            Clayton Ortiz
        </span>

    </nav>
    )
}

export default NavBar;