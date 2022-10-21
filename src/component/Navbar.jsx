import React, { Component } from 'react';
import "../style/body.css"
import { NavLink } from 'react-router-dom';
class Navbar extends Component {
    state = {}
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand mx-3 logo" href="#">Dr. Kourosh Parand</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav mx-3">
                            <li className="nav-item">
                                <NavLink to="/about-me" className="nav-link"  href="#">About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/publications" className="nav-link"  activeClassName='active' href="#">Publications</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/books" className="nav-link " activeClassName='active' href="#">Books</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Researches" className="nav-link " activeClassName='active' href="#">Researches</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/courses" className="nav-link " activeClassName='active' href="#">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className="nav-link " activeClassName='active' href="#">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link " activeClassName='active' href="#">Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar