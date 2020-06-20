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
        <div>
          {props.team ? (
            <>
              <h3>Team name: {props.team.name}</h3>
              <div>Count: {props.team.count}</div>
              <hr />
              <div
                className="modal_content"
                dangerouslySetInnerHTML={{
                  __html: props.team.content,
                }}
              ></div>
            </>
          ) : null}
        </div>
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </>
  );
}

export default MyModal;
