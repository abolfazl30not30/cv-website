import React, { Component } from 'react';
import "../style/mainPage.css"
import Navbar from "./Navbar";
import Home from "./pages/Home";
import backSvg from "../img/background.svg"
import { Routes, Route } from 'react-router-dom';
import Publications from "./pages/Publications";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Conferences from "./pages/Conferences";

function mainPage() {

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
                            <Route path="/publications" element={(<Publications />)} />
                            <Route path="/books" element={(<Books />)} />
                            <Route path="/conferences" element={(<Conferences />)} />
                            <Route path="/contact" element={(<Contact />)} />
                        </Routes>
                    </div>
                </div>
            </>
        );
}

export default mainPage