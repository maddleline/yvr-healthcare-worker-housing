import { Modal, TextInput } from "carbon-components-react";

import React from "react";

const HealthWorkerModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      className="health-worker-modal"
      modalHeading="Request access to listings"
      modalLabel="Healthcare Workers"
      primaryButtonText="Submit"
      secondaryButtonText="Cancel"
      selectorPrimaryFocus="[data-modal-primary-focus]"
      hasScrollingContent={false}
      iconDescription="Close the modal"
      modalAriaLabel="Modal for healthcare workers to submit their information"
      onBlur={() => {}}
      onClick={() => {}}
      onFocus={() => {}}
      onKeyDown={() => {}}
      onRequestClose={() => {
        setIsOpen(false);
      }}
      onRequestSubmit={() => {
        setIsOpen(false);
      }}
      onSecondarySubmit={() => {
        setIsOpen(false);
      }}
      open={isOpen}
      passiveModal={false}
      primaryButtonDisabled={false}
      size={undefined}
    >
      <div style={{ display: "flex" }}>
        <TextInput
          helperText=""
          id="first-name-text-input"
          labelText="First name:"
          placeholder=""
          type="text"
        />
        <div className="spacer" style={{ width: "2rem" }} />
        <TextInput
          helperText=""
          id="last-name-text-input"
          labelText="Last name:"
          placeholder=""
          type="text"
        />
      </div>
      <br />
      <TextInput
        helperText=""
        id="occupation-text-input"
        labelText="Occupation:"
        placeholder=""
        type="text"
      />
      <br />
      <TextInput
        helperText=""
        id="workplace-text-input"
        labelText="Place of work:"
        placeholder=""
        type="text"
      />
      <br />
      <TextInput
        helperText=""
        id="email-text-input"
        labelText="Email:"
        placeholder=""
        type="text"
      />
    </Modal>
  );
};

export default HealthWorkerModal;
