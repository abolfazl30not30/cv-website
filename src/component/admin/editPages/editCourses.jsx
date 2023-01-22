import React, {useState, useEffect} from 'react';
import '../../../style/home.css'
import {useTranslation} from 'react-i18next'
import "../../../style/card.scss"
import {Link} from "react-router-dom"
import img from "../../../img/iStock-1221293664-1.jpg"
import {
    IconButton,
    Input,
    setRef,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {IoIosAddCircle} from "react-icons/io";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {IoClose} from "react-icons/io5";
import {AiFillInfoCircle} from "react-icons/ai"
import axios from "axios";

import ReactListInput from 'react-list-input'
import {use} from "i18next";

function EditCourses() {
    const {t} = useTranslation();
    const [value, setValue] = useState([]);
    const [infoModal, setInfoModal] = useState(false);
    const [info, setInfo] = useState([]);
    const [courses, setCourses] = useState([]);
    const [coursesInfo, setCoursesInfo] = useState([]);

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [text, setText] = useState('');

    const [sponsor, setSponsor] = useState('');
    const [length, setLength] = useState('');
    const [type, setType] = useState('');
    const [goal, setGoal] = useState('');
    const [chapters, setChapters] = useState([]);
    const [benefits, setBenefits] = useState([]);
    const [certification, setCertification] = useState('');

    const [validation, setValidation] = useState({
        titleReg: '',
        urlReg: '',
        textReg: '',
        sponsorReg: '',
        lengthReg: '',
        typeReg: '',
        goalReg: '',
        chaptersReg: '',
        benefitsReg: '',
        certificationReg: '',
    })

    const [showAddModal, setShowAddModal] = useState(false);
    useEffect(() => {
        // let conferencesList = t('courses-list', {returnObjects: true})
        // setCourses(conferencesList)

        axios.get('http://localhost:8089/api/v1/public/course').then((response) => response.data)
            .then((data) => setCourses(data));

    }, []);

    const handleCloseType = () => {
        setShowAddModal(false)
    }

    const handleOpenType = () => {
        setShowAddModal(true)

        setText('')
        setUrl('')
        setTitle('')
        setSponsor('')
        setLength('')
        setType('')
        setGoal('')
        setChapters([])
        setBenefits([])
        setCertification('')

        setValidation({
            ...validation,
            textReg: '',
            titleReg: '',
            urlReg: '',
            sponsorReg: '',
            lengthReg: '',
            typeReg: '',
            goalReg: '',
            chapterReg: '',
            benefitsReg: '',
            certificationReg: '',
        })
    }

   const handleSubmitType = () => {
       let requiredReg = /^\s*$/;

       let urlReg = !requiredReg.test(url);
       let titleReg = !requiredReg.test(title);
       let textReg = !requiredReg.test(text);
       let sponsorReg = !requiredReg.test(sponsor);
       let lengthReg = !requiredReg.test(length);
       let typeReg = !requiredReg.test(type);
       let goalReg = !requiredReg.test(goal);
       let chaptersReg = chapters.length !== 0;
       let benefitsReg = benefits.length !== 0;
       let certificationReg = !requiredReg.test(certification);

       setValidation({
           ...validation,
           urlReg: urlReg,
           titleReg: titleReg,
           textReg: textReg,
           sponsorReg: sponsorReg,
           lengthReg: lengthReg,
           typeReg: typeReg,
           goalReg: goalReg,
           chaptersReg: chaptersReg,
           benefitsReg: benefitsReg,
           certificationReg: certificationReg,
       })

       if (urlReg && titleReg && textReg && sponsorReg && lengthReg && typeReg && goalReg && chaptersReg
           && benefitsReg && certificationReg) {
           postCourse();
           setShowAddModal(false);
       }

       return urlReg && titleReg && textReg && sponsorReg && lengthReg && typeReg && goalReg && chaptersReg
           && benefitsReg && certificationReg;
   }

    const postCourse = async () => {
        let courseInfoId = '';
        await axios.post('http://localhost:8089/api/v1/admin/save/courseInfo', {
            title: title,
            sponsor: sponsor,
            length: length,
            type: type,
            goal: goal,
            chapters: chapters,
            benefits: benefits,
            certification: certification,
        }, {
            headers: {
                // "content-type": "application/x-www-form-urlencoded",
                'Authorization': localStorage.getItem('token'),
                "Access-Control-Allow-Origin": "http://localhost:8089",
            }
        }).then((res) => {
            handleCloseType();

            let updatedCoursesInfo = [...coursesInfo];
            updatedCoursesInfo.push({
                id: res.data.id,
                title: title,
                sponsor: sponsor,
                length: length,
                type: type,
                goal: goal,
                chapters: chapters,
                benefits: benefits,
                certification: certification,
            })
            setCoursesInfo(updatedCoursesInfo);

            courseInfoId = res.data.id;
        }).catch(() => {
            setShowAddModal(false)
            window.location = "/admin/"
        })

        await axios.post(`http://localhost:8089/api/v1/admin/save/course`, {
            title: title,
            url: url,
            text: text,
            courseInfoId: courseInfoId
        }, {
            headers: {
                // "content-type": "application/x-www-form-urlencoded",
                'Authorization': localStorage.getItem('token'),
                "Access-Control-Allow-Origin": "http://localhost:8089",
            }
        }).then((response) => response.data).then((response) => {

            let updatedCourses = [...courses];
            updatedCourses.push({
                id: response.id,
                title: title,
                url: url,
                text: text
            })
            setCourses(updatedCourses)
        }).catch(() => {
            setShowAddModal(false)
            window.location = "/admin/"
        });

        axios.get('http://localhost:8089/api/v1/public/course').then((response) => response.data)
            .then((data) => setCourses(data));
    }

    const handleDeleteCourse = async (course) => {
        await axios.delete(`http://localhost:8089/api/v1/admin/delete/course/${course.id}`, {
            headers: {
                // "content-type": "application/x-www-form-urlencoded",
                'Authorization': localStorage.getItem('token'),
                "Access-Control-Allow-Origin": "http://localhost:8089",
            }
        }).then(() => {
            let updatedCourses = [...courses];
            updatedCourses = updatedCourses.filter((c) => c.id !== course.id)
            setCourses(updatedCourses)
        }).catch(() => {
            window.location = "/admin/"
        });

        axios.get('http://localhost:8089/api/v1/public/course').then((response) => response.data)
            .then((data) => setCourses(data));
    }

    const handleCourseInfo = async (course) => {

        await axios.get(`http://localhost:8089/api/v1/public/courseInfo/${course.courseInfoId}`)
            .then((res) => {
                setInfo(res.data);
            })


        setInfoModal(true);
    }

    return (
        <div className={"w-100"}>
            <div className="page-title">
                <h3>{t("courses")}</h3>
            </div>
            <div className={'d-flex justify-content-center'}>
                <IconButton onClick={() => handleOpenType()}>
                    <IoIosAddCircle size={50}/>
                </IconButton>
            </div>
            <div className="mt-5 mx-4 mb-5" style={{overflowX: "hidden", overflowY: "scroll", height: window.innerHeight*0.7}}>
                <div className="">
                    <div className="d-flex px-4 row">
                        {
                            courses.map((course) => (
                                <div className={'col mb-3'}>
                                    <div className={''}>
                                        <div className='card' style={{backgroundImage: `url(${img})`}}>
                                            <div className={'d-flex justify-content-between'}>
                                                <IconButton color={'info'} onClick={() => handleCourseInfo(course)}>
                                                    <AiFillInfoCircle size={30}/>
                                                </IconButton>
                                                <div className={''}>
                                                    <IconButton color={'warning'} onClick={() => handleDeleteCourse(course)}>
                                                        <IoClose size={20}/>
                                                    </IconButton>
                                                </div>
                                            </div>
                                            <div className='info'>
                                                <h1 className='title'>{course.title}</h1>
                                                <p className='description'>
                                                    {course.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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

            <Modal centered show={showAddModal} onHide={() => handleCloseType()}>
                <Modal.Header closeButton>
                    Add Course
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>title :</Form.Label>
                        <Form.Control
                            value={title}
                            className={`${validation.titleReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>text :</Form.Label>
                        <Form.Control
                            value={text}
                            className={`${validation.textReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => setText(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>url :</Form.Label>
                        <Form.Control
                            value={url}
                            className={`${validation.urlReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>sponsor :</Form.Label>
                        <Form.Control
                            value={sponsor}
                            className={`${validation.sponsorReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => setSponsor(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>chapters :</Form.Label>
                        <Form.Control
                            value={chapters}
                            className={`${validation.chaptersReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => {
                                setChapters(e.target.value.split(','))
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>length :</Form.Label>
                        <Form.Control
                            value={length}
                            className={`${validation.lengthReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => setLength(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>benefits :</Form.Label>
                        <Form.Control
                            value={benefits}
                            className={`${validation.benefitsReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => {
                                setBenefits(e.target.value.split(','))
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>type :</Form.Label>
                        <Form.Control
                            value={type}
                            className={`${validation.typeReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => setType(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>goal :</Form.Label>
                        <Form.Control
                            value={goal}
                            className={`${validation.goalReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => setGoal(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>certification :</Form.Label>
                        <Form.Control
                            value={certification}
                            className={`${validation.certificationReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => setCertification(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <button className="btn btn-success" onClick={() => handleSubmitType()}>
                        submit
                    </button>
                    <button className="btn btn-light" onClick={() => handleCloseType()}>
                        close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditCourses;