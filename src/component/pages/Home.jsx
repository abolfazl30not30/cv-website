import React, {Component} from 'react';
import mainImg from "../../img/main_photo.jpg"
import '../../style/home.css'
import {TbCloudComputing} from 'react-icons/tb'
import {TfiPencil} from 'react-icons/tfi'
import {IoIosGitNetwork,} from "react-icons/io"
import {TbMathFunction} from "react-icons/tb"
import {RiArticleLine,RiBookMarkLine} from "react-icons/ri"
import {BiChalkboard} from "react-icons/bi"
import {BsPeople} from "react-icons/bs"
import { useTranslation } from 'react-i18next'
import {Link} from "react-router-dom"
import i18next from 'i18next'


function Home(){
        const { t } = useTranslation();
        return (
            <>
                <div className="d-flex justify-content-center align-items-start mt-5 card-contain ">
                    <div className="mainImgContain">
                        <img src={mainImg} className="mainImg"/>
                    </div>
                    <div className="cv-text mt-4">
                        <h5>Spectral Methods, ODEs, PDEs And Scientific Computing</h5>
                        <h2 className="my-4">{t("title")}</h2>
                        <h6>
                            I am Professor @ Department of Computer Sciences,
                            Faculty of Mathematical Sciences, Shahid Beheshti University
                        </h6>
                        <p>
                            My main research field is Scientific Computing, Spectral Methods, Meshless methods, Ordinary
                            Differential Equations(ODEs), Partial Differential Equations(PDEs) and Computational
                            Neuroscience Modeling.
                        </p>
                        <div className="d-flex justify-content-center">

                            <a className="cv-btn">Download CV</a>
                            <Link to="/contact" className="cv-btn">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="mx-5 interested mb-5">
                    <div className="interested-title">
                        <h3>Interested In</h3>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="interested-card">
                                <div className="icon">
                                    <TbCloudComputing/>
                                </div>
                                <div className="title">
                                    <h4>Scientific Computing</h4>
                                </div>
                                <div className="text">
                                    <p>
                                        is a rapidly growing multidisciplinary field that uses advanced computing
                                        capabilities
                                        to understand and solve complex problems.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className='interested-card'>
                                <div className="icon">
                                    <TfiPencil/>
                                </div>
                                <div className="title">
                                    <h4>Spectral Methods</h4>
                                </div>
                                <div className="text">
                                    <p>
                                        are a class of techniques used in apply mathemathic and scientific computing to
                                        numerically solve certain differential equations, potentially involving the use of
                                        the
                                        Fast Fourier Transform.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="interested-card">
                                <div className="icon">
                                    <TbMathFunction/>
                                </div>
                                <div className="title">
                                    <h4>Meshless methods</h4>
                                </div>
                                <div className="text">
                                    <p>
                                        are uniquely simple, yet provide solution accuracies for certain classes of
                                        equations
                                        that rival those of finite elements and boundary elements, without requiring the
                                        need
                                        for mesh connectivity.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="interested-card">
                                <div className="icon">
                                    <IoIosGitNetwork/>
                                </div>
                                <div className="title">
                                    <h4>Neuroscience Modeling</h4>
                                </div>
                                <div className="text">
                                    <p>
                                        is a branch of neuroscience which employs mathematical models, theoretical analysis
                                        and
                                        abstractions of the brain to understand the principles of the nervous system.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-5 activities mb-5">
                    <div className="activities-title">
                        <h3>My Activities</h3>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="activities-card">
                                <div className="icon">
                                    <RiArticleLine/>
                                </div>
                                <div className="title">
                                    <h4>Articles</h4>
                                </div>
                                <div className="text">
                                    <span>1003</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className='activities-card'>
                                <div className="icon">
                                    <BiChalkboard/>
                                </div>
                                <div className="title">
                                    <h4>Conferances</h4>
                                </div>
                                <div className="text">
                                   <span>1520</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="activities-card">
                                <div className="icon">
                                    <RiBookMarkLine/>
                                </div>
                                <div className="title">
                                    <h4>Publications</h4>
                                </div>
                                <div className="text">
                                    <span>1403</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="activities-card">
                                <div className="icon">
                                    <BsPeople/>
                                </div>
                                <div className="title">
                                    <h4>Phd & Msc</h4>
                                </div>
                                <div className="text">
                                    <span>1002</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Home;