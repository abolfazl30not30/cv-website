import React, {useState, useEffect} from 'react';
import '../../style/home.css'
import {useTranslation} from 'react-i18next'
import "./../../style/pages.css"
import {BsFillTelephoneFill} from "react-icons/bs"
import {HiLocationMarker} from "react-icons/hi"
import {MdEmail} from "react-icons/md"
import {AiOutlineInstagram,AiFillLinkedin} from "react-icons/ai"
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import "../../style/contact.css";

function Contact() {
    const [fullName, setFullName] = useState('')
    const [textMessage, setTextMessage] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [subject, setSubject] = useState('')

    const [validation, setValidation] = useState({
        fullNameReg: '',
        textMessageReg: '',
        emailAddressReg: '',
        subjectReg: '',
    })

    const handleFields = () => {
        let requiredReg = /^\s*$/;

        let fullNameReg = !requiredReg.test(fullName);
        let textMessageReg = !requiredReg.test(textMessage);
        let emailAddressReg = !requiredReg.test(emailAddress);
        let subjectReg = !requiredReg.test(subject);

        setValidation({
            ...validation,
            fullNameReg: fullNameReg,
            textMessageReg: textMessageReg,
            emailAddressReg: emailAddressReg,
            subjectReg: subjectReg,

        })

        if (fullNameReg && textMessageReg && emailAddressReg && subjectReg) {
            postMessage();
            // console.log(textMessage, emailAddress, subject, fullName)
        }

        return fullNameReg && textMessageReg && emailAddressReg && subjectReg;
    }

    const postMessage = async () => {

        await fetch('http://localhost:8089/api/v1/public/save/message', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: fullName,
                textMessage:  textMessage,
                emailAddress: emailAddress,
                subject: subject,
            })
        }).then(() => {
            setFullName('')
            setTextMessage('')
            setEmailAddress('')
            setSubject('')
        });
    }

    const {t} = useTranslation();
    return (
        <>
            <div>
                <div className="main-title">
                    <h3>{t("contact")}</h3>
                </div>
                <div className="row mt-4 p-5">
                    <div className="col-md-5 col-sm-5 col-xs-12 d-flex flex-column justify-content-center">
                        <div className="contact-container d-flex align-items-center">
                                <BsFillTelephoneFill/>
                                <h4>{t("phoneNumber")}</h4>
                        </div>
                        <div className="contact-container d-flex align-items-center">
                            <MdEmail/>
                            <h4>{t("email1")}</h4>
                            <h4>{t("email2")}</h4>
                        </div>
                        <div className="contact-container d-flex align-items-center">
                            <HiLocationMarker fontSize="55px"/>
                            <h4>{t("address")}</h4>
                        </div>
                        <div className="contact-icons d-flex align-items-center justify-content-center">
                            <a href="https://www.linkedin.com/in/kourosh-parand" target="_blank"><AiOutlineInstagram/></a>
                            <a href="https://www.linkedin.com/in/kourosh-parand" target="_blank"><AiFillLinkedin/></a>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-7 col-xs-12">
                        <div className="row">
                            <div className="col-md-5 col-sm-5 col-xs-12">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name :</Form.Label>
                                    <Form.Control
                                        className={`${validation.fullNameReg === false ? "is-invalid" : ""}`}
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address :</Form.Label>
                                    <Form.Control
                                        className={`${validation.emailAddressReg === false ? "is-invalid" : ""}`}
                                        type="text"
                                        value={emailAddress}
                                        onChange={(e) => setEmailAddress(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Subject :</Form.Label>
                                    <Form.Control
                                        className={`${validation.subjectReg === false ? "is-invalid" : ""}`}
                                        type="text"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </Form.Group>
                                <Button
                                    className="btn submit-btn"
                                    onClick={() => handleFields()}
                                >
                                    Submit
                                </Button>
                            </div>
                            <div className="col-md-7 col-sm-7 col-xs-12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your Massage :</Form.Label>
                                    <Form.Control
                                        className={`${validation.textMessageReg === false ? "is-invalid" : ""}`}
                                        as="textarea"
                                        value={textMessage}
                                        rows={8}
                                        onChange={(e) => setTextMessage(e.target.value)}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;