import {useState} from "react";
import {Modal} from "react-bootstrap";
// import React, {useState} from "@types/react";

function EditCourses() {
    const [showAddModal, setShowAddModal] = useState(false)


    const handleSubmitType = () => {

    }

    const handleCloseType = () => {
        setShowAddModal(false)
    }

    return (
        <>
            <div>

            </div>
            <Modal centered show={showAddModal} onHide={() => handleCloseType()}>
                <Modal.Header closeButton>
                    Add article
                </Modal.Header>
                <Modal.Body>

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
    );
}
export default EditCourses;