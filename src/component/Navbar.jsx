import React, {useState} from 'react';
import "../style/body.css"
import {NavLink} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import Form from 'react-bootstrap/Form';
import i18next from "i18next";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar() {

    const [language, setLanguage] = useState("en")

    let handleLanguage = (e) => {
        setLanguage(e.target.value);
        i18next.changeLanguage(e.target.value);
    }

    const {t} = useTranslation();
    return (
        <>
            <Navbar bg="light" expand="lg" className="justify-content-between">
                <Navbar.Brand className="logo mx-3">{t("title")}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
                    <Nav className="">
                        <ul className="navbar-nav mx-3">
                            <li className="nav-item">
                                <NavLink end to="/" className="nav-link" activeClassName='active'>{t("about-me")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/articles" className="nav-link"
                                         activeClassName='active'>{t("articles")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/books" className="nav-link " activeClassName='active'>{t("books")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/conferences" className="nav-link "
                                         activeClassName='active'>{t("conferences")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/courses" className="nav-link "
                                         activeClassName='active' >{t("courses")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className="nav-link "
                                         activeClassName='active' style={{pointerEvents:"none",color:"#b3b3b3"}}>{t("projects")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link "
                                         activeClassName='active'>{t("contact")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/setting" className="nav-link "
                                         activeClassName='active'>{t("setting")}</NavLink>
                            </li>
                        </ul>
                        <div className="mx-3">
                            <Form.Select aria-label="Default select example" value={language} size="sm"
                                         onChange={(e) => handleLanguage(e)} disabled>
                                <option value="en">English</option>
                                <option value="fa">فارسی</option>
                            </Form.Select>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default MainNavbar