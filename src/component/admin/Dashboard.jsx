import React, {Component, useState} from 'react';
import backSvg from "../../img/background.svg";
import "./../../style/hamburgerMenu.css"
import EditArticles from "./editPages/editArticles";
import EditBooks from "./editPages/editBooks";
import EditCourses from "./editPages/editCourses";
import EditConferences from "./editPages/editConferences";
import Messages from "./editPages/messages";
import Hamburger from 'hamburger-react';
import EditMainPage from "./editPages/editMainPage";

function Dashboard () {
    const [activeMenu, setActiveMenu] = useState(false)
    const [selectedLink, setSelectedLink] = useState('mainPage')

        return (
            <>
                <img src={backSvg} className="back-svg-1"/>
                <img src={backSvg} className="back-svg-2"/>
                <img src={backSvg} className="back-svg-3"/>
                <div className={"main-container"} style={{overflow: 'hidden', display: "flex", height: window.innerHeight*0.93, backgroundColor: "#eee"}}>
                    <div className="hamburger-menu" style={{height: '105%', position: 'sticky'}}>
                        <Hamburger toggled={activeMenu} toggle={setActiveMenu} />
                        <ul className="menu__box" style={{width: activeMenu ? "200px" : 0, left: activeMenu ? 0 : "-500%"}}>
                            <li><button style={{width: "200px", textAlign: "left"}} className="menu__item" onClick={() => setSelectedLink('articles')}>Articles</button></li>
                            <li><button style={{width: "200px", textAlign: "left"}} className="menu__item" onClick={() => setSelectedLink('books')}>Books</button></li>
                            <li><button style={{width: "200px", textAlign: "left"}} className="menu__item" onClick={() => setSelectedLink('courses')}>Courses</button></li>
                            <li><button style={{width: "200px", textAlign: "left"}} className="menu__item" onClick={() => setSelectedLink('conferences')}>Conferences</button></li>
                            <li><button style={{width: "200px", textAlign: "left"}} className="menu__item" onClick={() => setSelectedLink('messages')}>Messages</button></li>
                            <li><button style={{width: "200px", textAlign: "left"}} className="menu__item" onClick={() => setSelectedLink('mainPage')}>Main Page</button></li>
                        </ul>
                    </div>
                    <div className={"w-100"}>
                        {
                            selectedLink === "articles"
                                ? <EditArticles />
                                    : selectedLink === "books"
                                ? <EditBooks />
                                    : selectedLink === "courses"
                                ? <EditCourses />
                                    : selectedLink === "conferences"
                                ? <EditConferences />
                                    : selectedLink === "mainPage"
                                ? <EditMainPage />
                                    : selectedLink === "messages"
                                ? <Messages />
                                    : null
                        }
                    </div>
                </div>
            </>
        );

}


export default Dashboard;