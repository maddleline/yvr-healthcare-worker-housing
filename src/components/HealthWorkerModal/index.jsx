import "./HealthWorkerModal.scss";

import {
  Button,
  Checkbox,
  Form,
  Modal,
  TextInput,
} from "carbon-components-react";
import React, { useState } from "react";

import data from "./modalData";

const HealthWorkerModal = ({
  name,
  linkToListings,
  contact,
  email,
  isOpen,
  setIsOpen,
  language,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  let translatedData = language === "English" ? data.English : data.French;

  const handleSubmit = (event) => {
    const templateId = "canada_health_worker_housing_template";

    sendFeedback(templateId, {
      firstName,
      lastName,
      occupation,
      workplace,
      userEmail,
      name,
      linkToListings,
      contact,
      email,
    });
    return true;
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("default_service", templateId, variables)
      .then((res) => {
        setFormIsSubmitted(true);
        console.log("Email successfully sent!", variables);
        setFeedback(translatedData.feedbackSuccessText);
      })
      .catch((err) => {
        console.error("Email failed to send.", err);
        if (err.status === 412) {
          setFeedback(translatedData.feedbackEmailFailureText);
        } else {
          setFeedback(translatedData.feedbackFailureText);
        }
      });
  };

  return (
    <Modal
      className="health-worker-modal"
      modalHeading={translatedData.modalHeading}
      modalLabel={translatedData.modalLabel}
      selectorPrimaryFocus="[data-modal-primary-focus]"
      iconDescription="Close the modal"
      modalAriaLabel="Modal for healthcare workers to submit their information"
      passiveModal={true}
      hasForm={true}
      onRequestClose={() => {
        setIsOpen(false);
      }}
      open={isOpen}
    >
      {formIsSubmitted ? (
        <div className="feedback">{feedback}</div>
      ) : (
        <Form
          className="request-for-listings-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div style={{ display: "flex" }}>
            <TextInput
              required
              helperText=""
              id="first-name-text-input"
              labelText={translatedData.firstNameLabelText}
              placeholder=""
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <div className="spacer" style={{ width: "2rem" }} />
            <TextInput
              required
              helperText=""
              id="last-name-text-input"
              labelText={translatedData.lastNameLabelText}
              placeholder=""
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <br />
          <TextInput
            required
            helperText=""
            id="occupation-text-input"
            labelText={translatedData.occupationLabelText}
            placeholder=""
            type="text"
            onChange={(e) => {
              setOccupation(e.target.value);
            }}
          />
          <br />
          <TextInput
            required
            helperText=""
            id="workplace-text-input"
            labelText={translatedData.workplaceLabelText}
            placeholder=""
            type="text"
            onChange={(e) => {
              setWorkplace(e.target.value);
            }}
          />
          <br />
          <TextInput
            required
            helperText=""
            id="email-text-input"
            labelText={translatedData.emailLabelText}
            placeholder=""
            type="email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <br />
          <Checkbox
            className="checkbox"
            id="checkbox-1"
            required
            labelText={translatedData.acknowledgement1}
            name="checkbox-1"
            onChange={() => {}}
            value="standard"
          />
          <br />
          <Checkbox
            className="checkbox"
            id="checkbox-2"
            required
            labelText={translatedData.acknowledgement2}
            name="checkbox-2"
            onChange={() => {}}
            value="standard"
          />
          <br />
          <Checkbox
            className="checkbox"
            id="checkbox-3"
            required
            labelText={translatedData.acknowledgement3}
            name="checkbox-3"
            onChange={() => {}}
            value="standard"
          />
          <br />
          <Checkbox
            className="checkbox"
            id="checkbox-4"
            required
            labelText={translatedData.acknowledgement4}
            name="checkbox-4"
            onChange={() => {}}
            value="standard"
          />
          <br />
          <Button
            className="submit-request-for-listings"
            kind="primary"
            size="default"
            tabIndex={0}
            type="submit"
          >
            {translatedData.buttonText}
          </Button>
        </Form>
      )}
    </Modal>
  );
};

export default HealthWorkerModal;
