import React from 'react';
import "../style/body.css"
import {NavLink} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import Form from 'react-bootstrap/Form';
function Navbar() {
    const {t} = useTranslation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand mx-3 logo" href="#">{t("title")}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end mx-4" id="navbarNav">
                    <ul className="navbar-nav mx-3">
                        <li className="nav-item">
                            <NavLink to="/about-me" className="nav-link">{t("about-me")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/publications" className="nav-link"
                                     activeClassName='active'>{t("publications")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/books" className="nav-link " activeClassName='active'>{t("books")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/conferences" className="nav-link "
                                     activeClassName='active'>{t("conferences")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link " activeClassName='active'>{t("courses")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link " activeClassName='active'>{t("projects")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link " activeClassName='active'>{t("contact")}</NavLink>
                        </li>
                    </ul>
                    <div>
                        <Form.Select aria-label="Default select example" size="sm">
                            <option value="en">English</option>
                            <option value="fa">فارسی</option>
                        </Form.Select>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar