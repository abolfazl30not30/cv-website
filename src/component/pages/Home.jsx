import React, {useState, useEffect} from 'react';
import mainImg from "../../img/main_photo.jpg"
import '../../style/home.css'
import {TbCloudComputing} from 'react-icons/tb'
import {TfiPencil} from 'react-icons/tfi'
import {IoIosGitNetwork,} from "react-icons/io"
import {TbMathFunction} from "react-icons/tb"
import {RiArticleLine, RiBookMarkLine} from "react-icons/ri"
import {BiChalkboard} from "react-icons/bi";
import {GoPrimitiveDot} from "react-icons/go"

import {BsPeople} from "react-icons/bs"
import {useTranslation} from 'react-i18next'
import {Link} from "react-router-dom"
import i18next from 'i18next'
import "animate.css/animate.min.css";
import {AnimationOnScroll} from 'react-animation-on-scroll';

function Home() {
    const {t} = useTranslation();
    const [education, setEducation] = useState([]);
    const [cooperation, setCooperation] = useState([]);
    const [cooperationAli, setCooperationAli] = useState([]);
    const [award, setAward] = useState([]);
    const [journal1, setjournal1] = useState([]);
    const [journal2, setjournal2] = useState([]);

    useEffect(() => {
        let educationList = t('education', {returnObjects: true});
        setEducation(educationList);

        let cooperationList = t('cooperation', {returnObjects: true});
        setCooperation(cooperationList);

        let cooperationAliList = t('cooperation-ali', {returnObjects: true});
        setCooperationAli(cooperationAliList);

        let journalList1 = t('journal1', {returnObjects: true});
        setjournal1(journalList1);
        let journalList2 = t('journal2', {returnObjects: true});
        setjournal2(journalList2);

        let awardList = t('award', {returnObjects: true});
        setAward(awardList);
    }, [1]);

    return (
        <>

            <div
                className="d-flex justify-content-center align-items-start mt-5 card-contain animate__animated animate__fadeInDown">
                <div className="mainImgContain">
                    <img src={mainImg} className="mainImg"/>
                </div>
                <div className="cv-text mt-4">
                    <h5>Spectral Methods, ODEs, PDEs And Scientific Computing</h5>
                    <h2 className="my-4">{t("title")}</h2>
                    <h6>
                        I am Professor @ Department of Computer and Data Sciences,
                        Faculty of Mathematical Sciences, Shahid Beheshti University
                    </h6>
                    <p>
                        My main research field is Scientific Computing, Spectral Methods, Meshless methods, Ordinary
                        Differential Equations(ODEs), Partial Differential Equations(PDEs),Data Mining,Machine Learning
                        and Computational
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
                <AnimationOnScroll animateIn="animate__pulse">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
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
                        <div className="col-md-3 col-sm-6 col-xs-12 ">
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
                                        numerically solve certain differential equations, potentially involving the use
                                        of
                                        the
                                        Fast Fourier Transform.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
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
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="interested-card">
                                <div className="icon">
                                    <IoIosGitNetwork/>
                                </div>
                                <div className="title">
                                    <h4>Neuroscience Modeling</h4>
                                </div>
                                <div className="text">
                                    <p>
                                        is a branch of neuroscience which employs mathematical models, theoretical
                                        analysis
                                        and
                                        abstractions of the brain to understand the principles of the nervous system.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>

            <div className="mx-5 activities mb-5">
                <div className="activities-title">
                    <h3>My Activities</h3>
                </div>

                <AnimationOnScroll animateIn="animate__zoomIn">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
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
                        <div className="col-md-3 col-sm-6 col-xs-12">
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
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="activities-card">
                                <div className="icon">
                                    <RiBookMarkLine/>
                                </div>
                                <div className="title">
                                    <h4>Books</h4>
                                </div>
                                <div className="text">
                                    <span>1403</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
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
                </AnimationOnScroll>
            </div>
            <div className="mx-5 activities mb-5">
                <AnimationOnScroll animateIn="animate__pulse">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="activities-title">
                                <h3>Education</h3>
                            </div>
                            <div>
                                {education.map((edu) => (
                                    <div className="education-box">
                                        <div className="d-flex align-items-center">
                                            <span>{edu.year}</span>
                                            <h6>{edu.country}</h6>
                                        </div>
                                        <h4>{edu.university}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="activities-title">
                                <h3>Teaching</h3>
                            </div>
                            <div className="teaching-box">
                                <div>
                                    <h4>Graduate</h4>
                                    <p>
                                        {t("teachGraduate")}
                                    </p>
                                </div>
                                <div>
                                    <h4>Undergraduate</h4>
                                    <p>
                                        {t("teachUndergraduate")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
            <div className="mx-5 activities mb-5 ">
                <AnimationOnScroll animateIn="animate__zoomIn">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="activities-title">
                                <h3 style={{fontSize: "21px"}}>Cooperation with international organizations</h3>
                            </div>
                            <div>
                                {cooperation.map((co) => (
                                    <div className="cooperation-box d-flex align-items-center">
                                        <GoPrimitiveDot color="#007ced"/>
                                        <h5>{co.name}</h5>
                                        <h6>{co.description}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="activities-title">
                                <h3 style={{fontSize: "21px"}}>Cooperating with Prof.Ali Ghodsi</h3>
                            </div>
                            <div>
                                {cooperationAli.map((co) => (
                                    <div className="cooperationAli-box d-flex align-items-center my-4">
                                        <span>{co.year}</span>
                                        <h6>{co.description}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>

            <div className="mx-5 activities mb-5 row">
                <AnimationOnScroll animateIn="animate__fadeInDown">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="activities-title">
                                <h3>In the following journal</h3>
                            </div>
                            <div>
                                <h5>Editor-in-Chief:</h5>
                            </div>
                            <div className="teaching-box">
                                <div className="d-flex align-items-center my-4">
                                    <GoPrimitiveDot color="#007ced"/>
                                    <a href="https://cmcma.sbu.ac.ir/" target="_blank" style={{fontSize: '13px',textDecoration:"none"}}>Computational Mathematics and Computer Modeling with
                                        Applications (CMCMA)</a>
                                </div>
                                <h5>Managing Editor:</h5>
                                {
                                    journal1.map((p) => (
                                        <div className="d-flex align-items-center my-4">
                                            <GoPrimitiveDot color="#007ced"/>
                                            <h4 style={{fontSize: '13px'}}>{p.title}</h4>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 mt-sm-5">
                            <div className="teaching-box mt-sm-5">
                                {
                                    journal2.map((p) => (
                                        <div className="d-flex align-items-center my-4">
                                            <GoPrimitiveDot color="#007ced"/>
                                            <h4 style={{fontSize: '13px'}}>{p.title}</h4>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>

            <div className="mx-5 activities mb-5 row">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="activities-title">
                                <h3>Postdoc</h3>
                            </div>
                            <div>
                                <div className="postdoc-box">
                                    <h4>{t("postdoc.title")}</h4>
                                    <p>{t("postdoc.students")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="activities-title">
                                <h3>Honors and Awards</h3>
                            </div>
                            <div className="teaching-box">
                                {
                                    award.map((p) => (
                                        <div className="d-flex align-items-center my-4">
                                            <GoPrimitiveDot color="#007ced"/>
                                            <h4 style={{fontSize: '13px'}}>{p.title}</h4>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
        </>
    )
}

export default Home;