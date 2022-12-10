import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DatePicker from "react-multi-date-picker"
import InputIcon from "react-multi-date-picker/components/input_icon"

class CustomModal extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
                <Modal.Header>
                    Add New "{this.props.sectionName}"
                </Modal.Header>
                <Modal.Body>
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
                    <div hidden={this.props.yearShow} className="input-group-register col-md-4 col-12 w-100">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>year :</Form.Label>
                            <DatePicker
                                onlyYearPicker
                                containerStyle={{
                                    width: "100%"
                                }}
                                inputClass={`input form-control`}
                                format={'YYYY'}
                                value={this.props.tempYear}
                                onChange={(e) => this.props.handleDate(e)}
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