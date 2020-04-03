import { Modal, TextInput } from "carbon-components-react";
import React, { useState } from "react";

const HealthWorkerModal = ({ isOpen, setIsOpen }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    const templateId = "health_worker_housing_yvr";

    sendFeedback(templateId, {
      firstName,
      lastName,
      occupation,
      workplace,
      email,
    });
    return true;
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("default_service", templateId, variables)
      .then((res) => {
        alert(
          "Your request has been received! We'll contact you shortly by email."
        );
        console.log("Email successfully sent!", variables);
      })
      .catch((err) => console.error("Email failed to send.", err));
  };

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
        handleSubmit();
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
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <div className="spacer" style={{ width: "2rem" }} />
        <TextInput
          helperText=""
          id="last-name-text-input"
          labelText="Last name:"
          placeholder=""
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <br />
      <TextInput
        helperText=""
        id="occupation-text-input"
        labelText="Occupation:"
        placeholder=""
        type="text"
        onChange={(e) => {
          setOccupation(e.target.value);
        }}
      />
      <br />
      <TextInput
        helperText=""
        id="workplace-text-input"
        labelText="Place of work:"
        placeholder=""
        type="text"
        onChange={(e) => {
          setWorkplace(e.target.value);
        }}
      />
      <br />
      <TextInput
        helperText=""
        id="email-text-input"
        labelText="Email:"
        placeholder=""
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </Modal>
  );
};

export default HealthWorkerModal;
