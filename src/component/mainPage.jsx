import React, { Component } from 'react';
import "../style/mainPage.css"

import Home from "./pages/Home";
import backSvg from "../img/background.svg"
import { Routes, Route } from 'react-router-dom';
import Publications from "./pages/Publications";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Conferences from "./pages/Conferences";
import MainNavbar from "./Navbar";
import Course from "./pages/Course";

function mainPage() {

        return (
            <>
                <img src={backSvg} className="back-svg-1"/>
                <img src={backSvg} className="back-svg-2"/>
                <img src={backSvg} className="back-svg-3"/>
                <div className="main-container">
                    <MainNavbar/>
                    <div>
                        <Routes>
                            <Route exact path="/" element={(<Home />)} />
                            <Route path="/articles" element={(<Publications />)} />
                            <Route path="/books" element={(<Books />)} />
                            <Route path="/conferences" element={(<Conferences />)} />
                            <Route path="/courses" element={(<Course />)} />
                            <Route path="/contact" element={(<Contact />)} />
                        </Routes>
                    </div>
                </div>
            </>
        );
}

export default mainPage