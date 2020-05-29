import "./PropertyOwnerModal.scss";

import { Modal } from "carbon-components-react";
import React from "react";

import data from "./modalData";

const HealthWorkerModal = ({ isOpen, setIsOpen, language }) => {
  let translatedData = language === "en" ? data.English : data.French;

  return (
    <Modal
      className="property-owner-modal"
      modalHeading={translatedData.modalHeading}
      modalLabel={translatedData.modalLabel}
      selectorPrimaryFocus="[data-modal-primary-focus]"
      iconDescription="Close the modal"
      modalAriaLabel="Modal for property owners"
      passiveModal={true}
      hasForm={true}
      onRequestClose={() => {
        setIsOpen(false);
      }}
      open={isOpen}
    >
      <div>{translatedData.dormantMessage}</div>
    </Modal>
  );
};

export default HealthWorkerModal;
