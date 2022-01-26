import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import  {useParams} from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";
import QRModal from "./component/QRCode.js";
import QRCode from "qrcode";

const TokenGenerator = () => {
  const [token, setToken] = useState(null);
  const [modalIsShown, setModalIsShown] = useState(false);


    
  const showModal = () => {
    setModalIsShown(true);
  };

  const hideModal = () => {
    setModalIsShown(false);
  };

  useEffect(() => {
    QRCode.toDataURL(uuid()).then((data) => {
      setToken(data);
    });
  }, []);

  return (
    <>
          {modalIsShown && <QRModal onClose={hideModal} />}
      <section className="queue-info-container">
        <div className="back-arrow">
          <BsArrowLeft style={{ fontSize: "30px" }} />
        </div>

        <p className="queue-info">Your turn will be in 30 minutes</p>
        <p className="queue-info">You are behind 10 persons</p>
        <div className="qr-container">
          <div className="qr-div">
            <img src={token} className="qr-image" alt="QR-Token" onClick={showModal}></img>
          </div>
          <div className="qr-info-div">
            <p style={{ textTransform: "uppercase" }}>Test Meeting</p>
            <p>Jan 25th, Slot: 1am-1:30am</p>
            <p>Total Visiting: 1</p>
            <p>Token ID: {uuid()}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TokenGenerator;
