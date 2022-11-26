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
                                    <Form.Control type="text"  />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address :</Form.Label>
                                    <Form.Control type="text"  />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Subject :</Form.Label>
                                    <Form.Control type="text"  />
                                </Form.Group>
                                <Button className="btn submit-btn">Submit</Button>
                            </div>
                            <div className="col-md-7 col-sm-7 col-xs-12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your Massage :</Form.Label>
                                    <Form.Control as="textarea" rows={8} />
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