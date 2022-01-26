import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Modal from './Modal.js'
import QRCode from 'qrcode';
import uuid from 'react-uuid';
const QRModal = (props) => {

    const params = useParams();
    const [token, setToken] = useState(null);

    const tokenId = params.tokenId;
    useEffect(() => {
        QRCode.toDataURL(uuid()).then(data => {
            setToken(data)
        })
    },[])
    return (
        <Modal onClose={props.onClose}>
            <img src={token} alt="QR-Token" className='qr-modal-image'></img>
        </Modal>
    )
}

export default QRModal;