import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import "./changeImage.css";

const ChangeImage = ({
    setImage,
    characterName,
    setImageLocalStorage
}) => {
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    };
    const changeImage = () => {
        setImageLocalStorage(characterName, inputValue);
        setImage(inputValue);
        handleClose();
    };

    const inputChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div className="change_image_container">
            <Button variant="primary" onClick={handleShow}>
                Change Image
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup onChange={inputChange} size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Image Url</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={changeImage}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ChangeImage