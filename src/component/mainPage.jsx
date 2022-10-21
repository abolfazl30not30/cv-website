import React, { Component } from 'react';
import "../style/mainPage.css"
import Navbar from "./Navbar";
import Home from "./Home";
import backSvg from "../img/background.svg"
import { Routes, Route } from 'react-router-dom';
class mainPage extends Component {
    state = {}
    render() {
        return (
            <>
                <img src={backSvg} className="back-svg-1"/>
                <img src={backSvg} className="back-svg-2"/>
                <img src={backSvg} className="back-svg-3"/>
                <div className="main-container">
                    <Navbar/>
                    <div>
                        <Routes>
                            <Route path="/about-me" element={(<Home />)} />
                        </Routes>
                    </div>
                </div>
            </>
        );
    }
}

export default mainPage