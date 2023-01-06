import React, {useState, useEffect} from 'react';
import '../../../style/home.css'
import {useTranslation} from 'react-i18next'
import "../../../style/card.scss"
import {Link} from "react-router-dom"
import img from "../../../img/iStock-1221293664-1.jpg"
import {IconButton} from "@mui/material";
import {IoIosAddCircle} from "react-icons/io";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {IoClose} from "react-icons/io5";
import {AiOutlineLink} from "react-icons/ai"
import axios from "axios";

function EditCourses() {
    const {t} = useTranslation();
    const [courses, setCourses] = useState([]);

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [text, setText] = useState('');

    const [validation, setValidation] = useState({
        titleReg: '',
        urlReg: '',
        textReg: '',
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

        setValidation({
            ...validation,
            textReg: '',
            titleReg: '',
            urlReg: '',
        })
    }

   const handleSubmitType = () => {
       let requiredReg = /^\s*$/;

       let urlReg = !requiredReg.test(url);
       let titleReg = !requiredReg.test(title);
       let textReg = !requiredReg.test(text);

       setValidation({
           ...validation,
           urlReg: urlReg,
           titleReg: titleReg,
           textReg: textReg,

       })

       if (urlReg && titleReg && textReg) {
           postCourse();
           setShowAddModal(false);
       }

       return urlReg && titleReg && textReg;
   }

    const postCourse = async () => {
        axios.post(`http://localhost:8089/api/v1/admin/save/course`, {
            title: title,
            url: url,
            text: text
        }, {
            headers: {
                // "content-type": "application/x-www-form-urlencoded",
                'Authorization': localStorage.getItem('token'),
                "Access-Control-Allow-Origin": "http://localhost:8089",
            }
        }).then((response) => response.data).then((response) => {
            handleCloseType();

            let updatedCourses = [...courses];
            updatedCourses.push({
                id: response.id,
                title: title,
                url: url,
                text: text
            })
            setCourses(updatedCourses)
            setShowAddModal(false)
        }).catch(() => {
            setShowAddModal(false)
            window.location = "/admin/"
        });

        axios.get('http://localhost:8089/api/v1/public/course').then((response) => response.data)
            .then((data) => setCourses(data));
    }

    const handleDeleteCourse = async (course) => {
        axios.delete(`http://localhost:8089/api/v1/admin/delete/course/${course.id}`, null, {
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

        axios.get('http://localhost:8089/api/v1/public/conferences').then((response) => response.data)
            .then((data) => setCourses(data));
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
                                                <a href={course.url}>
                                                    <IconButton color={'info'}>
                                                        <AiOutlineLink size={30}/>
                                                    </IconButton>
                                                </a>
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