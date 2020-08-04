import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'emerald-ui/lib/Modal';

const ModalComponent = ({ title, payload, show, handleControl }) => {
    return (
        <div>
            <Modal onHide={() => handleControl(true)} show={show}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p>{`Firstname: ${payload.firstname}`}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p>{`Lastname: ${payload.lastname}`}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p>{`Email: ${payload.email}`}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p>{`Phone number: ${payload.phoneNumber}`}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p>{`Message: ${payload.message}`}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p>{`Checked: ${payload.checked}`}</p>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

ModalComponent.propTypes = {
    title: PropTypes.string.isRequired,
    payload: PropTypes.shape({
        firstname: PropTypes.string,
        lastname: PropTypes.string,
        email: PropTypes.string,
        phoneNumber: PropTypes.string,
        message: PropTypes.string,
        checked: PropTypes.bool,
    }),
    show: PropTypes.bool.isRequired,
    handleControl: PropTypes.func,
};

export default ModalComponent;
