import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './ProjectData.css'

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

Modal.setAppElement('#root')

const ProjectsData = (props) => {

    const { name, img, link, details, tecnology } = props.data
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className="anm">
            <Card className="m-3 ml-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <small>{tecnology}</small>
                    </Card.Text>
                    <Button href={link} variant="primary">Watch it</Button>
                    <Button onClick={openModal} className="m-2" variant="primary">Read Me</Button>
                </Card.Body>
            </Card>

            <div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                <div className="box">
               
                    <h2 className="text-center text-brand">{name}</h2>
                    <p className="text-secondary text-center"><h6>{details}</h6></p>
                    <form className="p-5">
                        <div className="form-group text-right">
                            <Button onClick={closeModal} variant="primary">close</Button>
                        </div>
                    </form>
                    </div>
                </Modal>

            </div>

        </div>
    );
};

export default ProjectsData;