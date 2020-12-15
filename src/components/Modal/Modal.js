import React, { useEffect } from "react";

import Modal from 'react-bootstrap/Modal'
import styled from "styled-components";


const ModalHeader = styled(Modal.Header)`
    background: #1d8cf8;
    color: white;
    border: unset;
    text-align: center;
    border-radius: 5px;
`

const ModalComp = ({children, showModal, toggleModal}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            toggleModal(false);
        }, 3000);
        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
            <Modal show={showModal}>
                <ModalHeader closeButton>
                    <Modal.Title>{children}</Modal.Title>
                </ModalHeader>
            </Modal>
        </>
    );
}


export default ModalComp;