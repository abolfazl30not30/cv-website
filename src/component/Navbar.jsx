import React, { Component } from 'react';
import "../style/body.css"

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
                                <a className="nav-link active" href="#">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Publication</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Books</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Research</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Course</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Contact</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar