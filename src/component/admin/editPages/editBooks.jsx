import React, {useState, useEffect} from 'react';
import '../../../style/home.css'
import {useTranslation} from 'react-i18next'
import "./../../../style/pages.css"
import {Modal} from "react-bootstrap";
import {IconButton} from "@mui/material";
import { IoIosAddCircle } from "react-icons/io";
import Form from "react-bootstrap/Form";
import { IoClose } from "react-icons/io5";
import "./../../../style/editPages.css";
import DatePicker from "react-multi-date-picker";
import axios from "axios";

function EditBooks() {

    const {t} = useTranslation();
    const [books, setBooks] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);

    const [year, setYear] = useState('');
    const [yearDateValue, setYearDateValue] = useState('');
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [authors, setAuthors] = useState('');

    const [validation, setValidation] = useState({
        yearReg: '',
        titleReg: '',
        detailsReg: '',
        authorsReg: ''
    })

    useEffect( () => {
        // let booksList = t('books-list', {returnObjects: true})
        // setBooks(booksList)

        axios.get('http://localhost:8089/api/v1/public/book').then((response) => response.data)
            .then((data) => setBooks(data));

    },[]);

    const handleSubmitType = () => {
        let requiredReg = /^\s*$/;

        let yearReg = !requiredReg.test(year);
        let titleReg = !requiredReg.test(title);
        let detailsReg = !requiredReg.test(details);
        let authorsReg = !requiredReg.test(authors);

        setValidation({
            ...validation,
            yearReg: yearReg,
            titleReg: titleReg,
            detailsReg: detailsReg,
            authorsReg: authorsReg,

        })

        if (yearReg && titleReg && detailsReg && authorsReg) {
            postBook();
        }

        return yearReg && titleReg && detailsReg && authorsReg;
    }

    const handleCloseType = () => {
        setShowAddModal(false)
    }

    const handleOpenType = () => {
        setShowAddModal(true)

        setAuthors('')
        setYear('')
        setTitle('')
        setDetails('')
        setYearDateValue('')

        setValidation({
            ...validation,
            yearReg: '',
            titleReg: '',
            detailsReg: '',
            authorsReg: '',

        })
    }

    const postBook = async () => {
        axios.post(`http://localhost:8089/api/v1/admin/save/book`, {
            year: year,
            title: title,
            details: details,
            authors: authors
        }, {
            headers: {
                // "content-type": "application/x-www-form-urlencoded",
                'Authorization': localStorage.getItem('token'),
                "Access-Control-Allow-Origin": "http://localhost:8089",
            }
        }).then((response) => response.data).then((response) => {
            handleCloseType();

            let updatedBooks = [...books];
            updatedBooks.push({
                id: response.id,
                year: year,
                title: title,
                details: details,
                authors: authors
            })
            setBooks(updatedBooks)
            setShowAddModal(false)
        }).catch(() => {
            setShowAddModal(false)
            window.location = '/admin/'
        });

        axios.get('http://localhost:8089/api/v1/public/book').then((response) => response.data)
            .then((data) => setBooks(data));
    }

    const handleDeleteBook = async (book) => {
        axios.delete(`http://localhost:8089/api/v1/admin/delete/book/${book.id}`, null, {
            headers: {
                // "content-type": "application/x-www-form-urlencoded",
                'Authorization': localStorage.getItem('token'),
                "Access-Control-Allow-Origin": "http://localhost:8089",
            }
        }).then(() => {
            let updatedBooks = [...books];
            updatedBooks = updatedBooks.filter((b) => b.id !== book.id)
            setBooks(updatedBooks)
        }).catch(() => {
            window.location = '/admin/'
        });

        axios.get('http://localhost:8089/api/v1/public/book').then((response) => response.data)
            .then((data) => setBooks(data));
    }

    return (
        <>
            <div className={"w-100"}>
                <div className="page-title">
                    <h3>{t("books")}</h3>
                </div>
                <div className={'d-flex justify-content-center'}>
                    <IconButton onClick={() => handleOpenType()}>
                        <IoIosAddCircle size={50}/>
                    </IconButton>
                </div>
                <div className="mx-3 d-flex flex-column" style={{overflowY: "scroll", height: window.innerHeight*0.75}}>
                    {
                        books.map((b) => (
                            <>
                                <div className={'d-flex justify-content-end'}>
                                    <IconButton color={'warning'} onClick={() => handleDeleteBook(b)}>
                                        <IoClose size={20}/>
                                    </IconButton>
                                </div>
                                <div className="research mb-4 p-3" style={{borderRadius: "10px", backgroundColor: "#fff"}}>
                                    <div>
                                        <h5 style={{fontWeight:"bold"}}>{b.title}</h5>
                                        <p>
                                            {b.authors}
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                    <span>
                                         {b.year}
                                    </span>
                                        <h6>
                                            {b.details}
                                        </h6>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>

            <Modal centered show={showAddModal} onHide={() => handleCloseType()}>
                <Modal.Header closeButton>
                    Add book
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
                        <Form.Label>details :</Form.Label>
                        <Form.Control
                            value={details}
                            className={`${validation.detailsReg === false ? "is-invalid" : ""}`}
                            type="text"
                            onChange={(e) => setDetails(e.target.value)}
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

export default EditBooks;