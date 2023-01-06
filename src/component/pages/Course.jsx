import React, {useState, useEffect} from 'react';
import '../../style/home.css'
import {useTranslation} from 'react-i18next'
import "../../style/card.scss"
import {Link} from "react-router-dom"
import img from "../../img/iStock-1221293664-1.jpg"
import {IconButton} from "@mui/material";
import {AiOutlineLink} from "react-icons/ai";
import {IoClose} from "react-icons/io5";

function Conferences() {

    const {t} = useTranslation();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        // let conferencesList = t('conferences-list', {returnObjects: true})
        // setConferences(conferencesList)

        fetch('http://localhost:8089/api/v1/public/course').then((response) => response.json())
            .then((data) => setCourses(data));
    }, []);

    return (
        <div>
            <div className="main-title">
                <h3>{t("courses")}</h3>
            </div>
            <div className="mt-5 mx-4 mb-5">
                <div className="row">
                    <div className="row px-4">
                        {
                            courses.map((course) => (
                                <div className={'col mb-3'}>
                                    {/*<div className={''}>*/}
                                        <div className='card' style={{backgroundImage: `url(${img})`}}>
                                            <div className={'d-flex justify-content-between'}>
                                                <Link>
                                                    <IconButton color={'info'}>
                                                        <AiOutlineLink size={30}/>
                                                    </IconButton>
                                                </Link>
                                            </div>
                                            <div className='info'>
                                                <h1 className='title'>{course.title}</h1>
                                                <p className='description'>
                                                    {course.text}
                                                </p>
                                            </div>
                                        </div>
                                    {/*</div>*/}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conferences;