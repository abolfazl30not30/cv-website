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
import img from "../../img/member-scientometrics-logo.png"
import {BsPeople} from "react-icons/bs"
import {useTranslation,} from 'react-i18next'
import {Link} from "react-router-dom"
import i18next from 'i18next'
import "animate.css/animate.min.css";
import {AnimationOnScroll} from 'react-animation-on-scroll';
import {SiGooglescholar} from "react-icons/si";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {Overlay} from "react-bootstrap";
import file from "../../file/Kourosh Parand CV.pdf"
function Home() {
    const [sections, setSections] = useState([])

    const {t} = useTranslation();
    const [education, setEducation] = useState([]);
    const [cooperation, setCooperation] = useState([]);
    const [award, setAward] = useState([]);
    const [journal1, setjournal1] = useState([]);
    const [journal2, setjournal2] = useState([]);

    useEffect(() => {
        // let educationList = i18next.t('education',{ returnObjects: true })
        // setEducation(educationList);
        //
        // let cooperationList = i18next.t('cooperation', {returnObjects: true});
        // setCooperation(cooperationList);
        //
        // let journalList1 = i18next.t('journal1', {returnObjects: true});
        // setjournal1(journalList1);
        //
        // let journalList2 = i18next.t('journal2', {returnObjects: true});
        // setjournal2(journalList2);
        //
        // let awardList = i18next.t('award', {returnObjects: true});
        // setAward(awardList);

        // fetch('http://localhost:8089/api/v1/public/mainPage').then((response) => response.json())
        //     .then((data) => setSections(data));
    },[]);

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
                    <div className="d-flex justify-content-center align-items-center">
                        <a href={file} className="cv-btn">Download CV</a>
                        <Link to="/contact" className="cv-btn">Contact</Link>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip className="deleteTooltip">
                                    Google Scholar
                                </Tooltip>
                            }
                        ><a className="mx-2" href="https://scholar.google.com/citations?user=44wzW2AAAAAJ&hl=en"
                            target="_blank"><SiGooglescholar fontSize="30px"/></a>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip className="deleteTooltip">
                                    Scientific evaluation system of faculty members
                                </Tooltip>
                            }
                        ><a href="http://scimet.sbu.ac.ir/Kourosh_Parand" target="_blank"><img src={img} style={{
                            width: "30px",
                            height: "30px"
                        }}/></a>
                        </OverlayTrigger>

                    </div>
                </div>
            </div>

            <div className="mx-5 interested mb-5">
                <div className="interested-title">
                    <h3>Interested In</h3>
                </div>
                    <div className="row">
                        {
                            sections.map((section) => (
                                section.header === 'InterestedIn'
                                ?
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="interested-card">
                                        <div className="icon">
                                            <TbCloudComputing/>
                                        </div>
                                        <div className="title">
                                            <h4>{section.title}</h4>
                                        </div>
                                        <div className="text">
                                            <p>
                                                {section.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                    : null
                            ))
                        }
                    </div>
            </div>

            <div className="mx-5 activities mb-5">
                <div className="activities-title">
                    <h3>My Activities</h3>
                </div>

                <AnimationOnScroll animateIn="animate__zoomIn">
                    <div className="row">
                        {
                            sections.map((section) => (
                                section.header === 'MyActivities'
                                ?
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="activities-card">
                                        <div className="icon">
                                            <RiArticleLine/>
                                        </div>
                                        <div className="title p-1">
                                            <h4>{section.title}</h4>
                                        </div>
                                        <div className="text">
                                            <span>{section.text}</span>
                                        </div>
                                    </div>
                                </div>
                                    : null
                            ))
                        }
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
                                {sections.map((section) => (
                                    section.header === 'Education'
                                    ?
                                    <div className="education-box">
                                        <div className="d-flex align-items-center">
                                            <span>{section.year}</span>
                                            <h6>{section.title}</h6>
                                        </div>
                                        <h4>{section.text}</h4>
                                    </div>
                                        : null
                                ))}
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="activities-title">
                                <h3>Teaching</h3>
                            </div>
                            <div className="teaching-box">
                                {
                                    sections.map((section) => (
                                        section.header === 'Teaching'
                                        ?
                                        <div>
                                            <h4>{section.title}</h4>
                                            <p>
                                                {section.text}
                                            </p>
                                        </div>
                                            : null
                                    ))
                                }
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
                                {sections.map((section) => (
                                    section.header === 'CooperationWithInternationalOrganizations'
                                    ?
                                    <div className="cooperation-box d-flex align-items-center">
                                        <GoPrimitiveDot color="#007ced"/>
                                        <h5>{section.title}</h5>
                                        <h6>{section.text}</h6>
                                    </div>
                                        :null
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="activities-title">
                                <h3>Postdoc</h3>
                            </div>
                            {
                                sections.map((section) => (
                                    section.header === 'Postdoc'
                                    ? <div>
                                            <div className="postdoc-box">
                                                <h4>{section.title}</h4>
                                                <p>{section.text}</p>
                                            </div>
                                        </div>
                                        : null
                                ))
                            }
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
                            {
                                sections.map((section) => (
                                    section.header === 'InTheFollowingJournal'
                                    ? <>
                                            <div>
                                                <h5>{section.title}</h5>
                                            </div>
                                            <div className="teaching-box">
                                                <div className="d-flex align-items-center my-4">
                                                    <GoPrimitiveDot color="#007ced"/>
                                                    <h4>
                                                        {section.text}
                                                    </h4>
                                                </div>
                                            </div>
                                      </>
                                        : null
                                ))
                            }
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>

            <div className="mx-5 activities mb-5 row">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="activities-title">
                                <h3>Honors and Awards</h3>
                            </div>
                            <div className="teaching-box">
                                {
                                    sections.map((section) => (
                                        section.header === 'HonorsAndAwards'
                                        ?
                                        <div className="d-flex align-items-center my-4">
                                            <GoPrimitiveDot color="#007ced"/>
                                            <h4 style={{fontSize: '13px'}}>{section.text}</h4>
                                        </div>
                                            : null
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