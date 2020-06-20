import React, { useState, useEffect } from "react";
import Modal from "react-modal";

function MyModal(props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("team change inside MyModal", props.team);
    if (props.team != null) {
      setShowModal(true);
    }
  }, [props.team]);

  const handleCloseModal = () => {
    props.clearModal();
    setShowModal(false);
  };

  return (
    <>
      <Modal isOpen={showModal} ariaHideApp={false}>
        <button onClick={handleCloseModal}>Close Modal</button>
        testing
      </Modal>
    </>
  );
}

export default MyModal;
