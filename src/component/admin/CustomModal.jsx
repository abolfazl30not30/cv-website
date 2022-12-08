import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";

class CustomModal extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
                <Modal.Header>
                    Add New "{this.props.sectionName}"
                </Modal.Header>
                <Modal.Body>
                    {/*<Form.Group className="mb-3" controlId="formBasicEmail">*/}
                        {/*<Form.Label>header :</Form.Label>*/}
                        {/*<Form.Control*/}
                        {/*    value={this.props.tempHeader}*/}
                        {/*    // className={`${validation.yearReg === false ? "is-invalid" : ""}`}*/}
                        {/*    type="text"*/}
                        {/*    onChange={(e) =>*/}
                        {/*        this.props.handleTempValues(e.target.value, 'header')*/}
                        {/*    }*/}
                        {/*/>*/}
                    {/*</Form.Group>*/}

                    <div hidden={this.props.titleShow}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>title :</Form.Label>
                            <Form.Control
                                value={this.props.tempTitle}
                                // className={`${validation.titleReg === false ? "is-invalid" : ""}`}
                                type="text"
                                onChange={(e) =>
                                    this.props.handleTempValues(e.target.value, 'title')
                                }
                            />
                        </Form.Group>
                    </div>
                    <div hidden={this.props.yearShow}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>year :</Form.Label>
                            <Form.Control
                                value={this.props.tempYear}
                                // className={`${validation.authorsReg === false ? "is-invalid" : ""}`}
                                type="text"
                                onChange={(e) =>
                                    this.props.handleTempValues(e.target.value, 'year')
                                }
                            />
                        </Form.Group>
                    </div>
                    <div hidden={this.props.textShow}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>text :</Form.Label>
                            <Form.Control
                                value={this.props.tempText}
                                // className={`${validation.authorsReg === false ? "is-invalid" : ""}`}
                                type="text"
                                onChange={(e) =>
                                    this.props.handleTempValues(e.target.value, 'text')
                                }
                            />
                        </Form.Group>
                    </div>
                    <div hidden={this.props.imageShow}>
                        <label htmlFor="formFileLg" className="form-label">image:</label>
                        <div className="m-1">
                            <input className="form-control form-control " id="formFileLg" type="file"/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-success" onClick={() => this.props.handleSubmitModal()}>
                        submit
                    </button>
                    <button className="btn btn-light" onClick={() => this.props.handleCloseModal()}>
                        close
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CustomModal;