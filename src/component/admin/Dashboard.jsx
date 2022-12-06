import React, {Component, useState} from 'react';
import backSvg from "../../img/background.svg";
import {NavLink, Route, Routes} from "react-router-dom";
import "./../../style/hamburgerMenu.css"
import MainPage from "../mainPage";
import Main from "./Main";
import EditArticles from "./editPages/editArticles";
import EditBooks from "./editPages/editBooks";
import EditCourses from "./editPages/editCourses";
import EditConferences from "./editPages/editConferences";
import NavbarForEdit from "./NavbarForEdit";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import {t} from "i18next";
// import { Slide } from '@mui/material';


function Dashboard () {
    const [activeMenu, setActiveMenu] = useState(false)
    const [selectedLink, setSelectedLink] = useState('articles')

        return (
            <>
                <img src={backSvg} className="back-svg-1"/>
                <img src={backSvg} className="back-svg-2"/>
                <img src={backSvg} className="back-svg-3"/>
                <div className={"main-container"} style={{overflow: 'hidden', display: "flex"}}>
                    <div className="hamburger-menu" style={{height: '100%', position: 'sticky'}}>
                        <input id="menu__toggle" type="checkbox" onChange={() => {setActiveMenu(!activeMenu)}}/>
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>

                        <ul className="menu__box" style={{width: activeMenu ? "300px" : "100px"}}>
                            <li><button className="menu__item" onClick={() => setSelectedLink('articles')}>Articles</button></li>
                            <li><button className="menu__item" onClick={() => setSelectedLink('books')}>Books</button></li>
                            <li><button className="menu__item" onClick={() => setSelectedLink('courses')}>Courses</button></li>
                            <li><button className="menu__item" onClick={() => setSelectedLink('conferences')}>Conferences</button></li>
                        </ul>
                    </div>

                    {
                        selectedLink === "articles"
                        ? <EditArticles />
                            : selectedLink === "books"
                        ? <EditBooks />
                            : selectedLink === "courses"
                        ? <EditCourses />
                            : selectedLink === "conferences"
                        ? <EditConferences />
                                    : null
                    }
                    {/*<Main />*/}
                </div>
            </>
        );

}


export default Dashboard;