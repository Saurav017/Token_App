import React from 'react'
import './Modal.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className="modal">
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

// getting access to that overlay-dom
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}        </>
    )
}

export default Modal;