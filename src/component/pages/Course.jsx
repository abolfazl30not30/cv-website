import React, {useState, useEffect} from 'react';
import '../../style/home.css'
import {useTranslation} from 'react-i18next'
import "../../style/card.scss"
import {Link} from "react-router-dom"
import img from "../../img/iStock-1221293664-1.jpg"
import {IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {AiFillInfoCircle} from "react-icons/ai";
import {IoClose} from "react-icons/io5";
import {Modal} from "react-bootstrap";
import axios from "axios";

function Conferences() {
    const [infoModal, setInfoModal] = useState(false);
    const [info, setInfo] = useState([]);
    const {t} = useTranslation();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        // let conferencesList = t('conferences-list', {returnObjects: true})
        // setConferences(conferencesList)

        fetch('http://localhost:8089/api/v1/public/course').then((response) => response.json())
            .then((data) => setCourses(data));
    }, []);


    const handleCourseInfo = async (course) => {

        await axios.get(`http://localhost:8089/api/v1/public/courseInfo/${course.courseInfoId}`)
            .then((res) => {
                setInfo(res.data);
            })


        setInfoModal(true);
    }

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
                                                <IconButton color={'info'} onClick={() => handleCourseInfo(course)}>
                                                    <AiFillInfoCircle size={30}/>
                                                </IconButton>
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

            <Modal centered size={'lg'} show={infoModal} onHide={() => setInfoModal(false)}>
                <Modal.Header closeButton>
                    Course Info
                </Modal.Header>
                <Modal.Body>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">title</TableCell>
                                    <TableCell align="right">sponsor</TableCell>
                                    <TableCell align="right">length</TableCell>
                                    <TableCell align="right">type</TableCell>
                                    <TableCell align="right">goal</TableCell>
                                    <TableCell align="right">chapters</TableCell>
                                    <TableCell align="right">benefits</TableCell>
                                    <TableCell align="right">certification</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{info.title}</TableCell>
                                    <TableCell align="right">{info.sponsor}</TableCell>
                                    <TableCell align="right">{info.length}</TableCell>
                                    <TableCell align="right">{info.type}</TableCell>
                                    <TableCell align="right">{info.goal}</TableCell>

                                    <TableCell align="right">
                                        <ol>
                                            {
                                                info.chapters?.map((chapter) => (
                                                    <li>
                                                        {chapter}
                                                    </li>
                                                ))
                                            }
                                        </ol>
                                    </TableCell>
                                    <TableCell align="right">
                                        <ul>
                                            {
                                                info.benefits?.map((benefit) => (
                                                    <li>
                                                        {benefit}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </TableCell>

                                    <TableCell align="right">{info.certification}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Conferences;