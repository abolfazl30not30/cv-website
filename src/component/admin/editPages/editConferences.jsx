import React, {useState, useEffect} from 'react';
import '../../../style/home.css'
import {useTranslation} from 'react-i18next'
import "./../../../style/pages.css"
import {IconButton, Typography} from "@mui/material";
import {IoIosAddCircle} from "react-icons/io";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {IoClose} from "react-icons/io5";
import "./../../../style/editPages.css"
import DatePicker from "react-multi-date-picker";

function EditConferences() {

    const {t} = useTranslation();
    const [conferences, setConferences] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false)

    const [year, setYear] = useState('');
    const [yearDateValue, setYearDateValue] = useState('');
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');

    const [validation, setValidation] = useState({
        yearReg: '',
        titleReg: '',
        authorsReg: ''
    })

    useEffect(() => {
        // let conferencesList = t('conferences-list', {returnObjects: true})
        // setConferences(conferencesList)

        const getConference = fetch('http://localhost:8089/api/v1/public/conference').then((response) => response.json())
            .then((data) => setConferences(data));
    },[]);

    const handleOpenType = () => {
        setShowAddModal(true)

        setAuthors('')
        setYear('')
        setTitle('')

        setValidation({
            ...validation,
            yearReg: '',
            titleReg: '',
            authorsReg: '',

        })

    }

    const handleCloseType = () => {
        setShowAddModal(false)
    }

    const handleSubmitType = () => {
        setShowAddModal(true)

        let requiredReg = /^\s*$/;

        let yearReg = !requiredReg.test(year);
        let titleReg = !requiredReg.test(title);
        let authorsReg = !requiredReg.test(authors);

        setValidation({
            ...validation,
            yearReg: yearReg,
            titleReg: titleReg,
            authorsReg: authorsReg,

        })

        if (yearReg && titleReg  && authorsReg) {
            postConference();
            setShowAddModal(false)

            let updatedConferences = [...conferences]

            updatedConferences.push({
                year: year,
                title: title,
                authors: authors
            })

            setConferences(updatedConferences)

        }

        return yearReg && titleReg  && authorsReg;
    }

    const postConference = async () => {
        await fetch('http://localhost:8089/api/v1/admin/save/conference', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                year: year,
                title: title,
                authors: authors,
            })
        }).then((response) => response.json()).then((response) => {
            handleCloseType();

            let updatedConferences = [...conferences];
            updatedConferences.push({
                id: response.id,
                year: year,
                title: title,
                authors: authors
            })
            setConferences(updatedConferences)
        });
    }

    const handleDeleteConference = async (conference) => {
        await fetch(`http://localhost:8089/api/v1/admin/delete/conference/${conference.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(() => {
            let updatedConferences = [...conferences];
            updatedConferences = updatedConferences.filter((c) => c.id !== conference.id)
            setConferences(updatedConferences)
        });
    }
    return (
        <>
            <div>
                <div className="page-title">
                    <h3>{t("conferences")}</h3>
                </div>
                <div className={'d-flex justify-content-center'}>
                    <IconButton onClick={() => handleOpenType()}>
                        <IoIosAddCircle size={50}/>
                    </IconButton>
                </div>
                <div className="mt-5 mx-3" style={{overflowY: "scroll", height: window.innerHeight*0.7}}>
                    {
                        conferences.map((p) => (
                            <>
                                <div className={'d-flex justify-content-end'}>
                                    <IconButton color={'warning'} onClick={() => handleDeleteConference(p)}>
                                        <IoClose size={20}/>
                                    </IconButton>
                                </div>
                                <div className="section mb-4 p-3" style={{borderRadius: "10px", backgroundColor: "#fff"}}>
                                    <div className="d-flex align-items-center mb-2">
                                    <span style={{backgroundColor:"#007ced",color:"#fff"}}>
                                         {p.year}
                                    </span>
                                    </div>
                                    <div>
                                        <Typography noWrap={true} style={{color: "black", display: "block", fontWeight:"bold"}}>{p.title}</Typography>
                                        <p>
                                            {p.authors}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>

            <Modal centered show={showAddModal} onHide={() => handleCloseType()}>
                <Modal.Header closeButton>
                    Add conference
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>year :</Form.Label>
                        <DatePicker
                            onlyYearPicker
                            containerStyle={{
                                width: "100%"
                            }}
                            inputClass={`input form-control ${validation.yearReg === false ? "is-invalid" : ""}`}
                            format={'YYYY'}
                            value={yearDateValue}
                            onChange={(e) => {
                                setYearDateValue(e);
                                setYear(e.year)
                            }}
                        />
                    </Form.Group>
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
                        <Form.Label>authors :</Form.Label>
                        <Form.Control
                            value={authors}
                            className={`${validation.authorsReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => setAuthors(e.target.value)}
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
        </>
    )
}

export default EditConferences;