import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";

import Modal from 'react-bootstrap/Modal'
import styled from "styled-components";


const ModalHeader = styled(Modal.Header)`
    background: #1d8cf8;
    color: white;
    text-align: center;
    background: ${props => props.theme.colors.color3};
`

const ModalTitle = styled(Modal.Title)`
    width: 100%;
`

const ModalFooter = styled(Modal.Footer)`
    background: ${props => props.theme.colors.color4};
    padding: 0px 1px 1px 0px;
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
                <ModalHeader>
                    <ModalTitle>{children}</ModalTitle>
                </ModalHeader>
                <ModalFooter>
                    <Button onClick={() => toggleModal(false)}>Wyłącz</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}


export default ModalComp;