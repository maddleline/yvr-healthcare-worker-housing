import "./HealthWorkerModal.scss";

import {
  Button,
  Checkbox,
  Form,
  Modal,
  TextInput,
} from "carbon-components-react";
import React, { useState } from "react";

const HealthWorkerModal = ({
  name,
  linkToListings,
  contact,
  email,
  isOpen,
  setIsOpen,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

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
        setFeedback(
          "Your request has been received! We'll contact you shortly by email."
        );
      })
      .catch((err) => {
        console.error("Email failed to send.", err);
        if (err.status === 412) {
          setFeedback(
            "Whoops-- we weren't able to process your request.  Please try again with a valid email."
          );
        } else {
          setFeedback(
            "Whoops-- we weren't able to process your request.  Please try again later."
          );
        }
      });
  };

  return (
    <Modal
      className="health-worker-modal"
      modalHeading="Request access to listings"
      modalLabel="Health Workers"
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
              labelText="First name:"
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
            required
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
            required
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
            required
            helperText=""
            id="email-text-input"
            labelText="Email:"
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
            labelText="I confirm I am a healthcare or other essential worker at high risk of contracting COVID-19."
            name="checkbox-1"
            onChange={() => {}}
            value="standard"
          />
          <br />
          <Checkbox
            className="checkbox"
            id="checkbox-2"
            required
            labelText="I confirm I am willing to pay a reasonable rate for a seperate, furnished suite."
            name="checkbox-2"
            onChange={() => {}}
            value="standard"
          />
          <br />
          <Checkbox
            className="checkbox"
            id="checkbox-3"
            required
            labelText="I understand that it's my responsibility to contact suites to set up viewings and come up with a suitable rental agreement."
            name="checkbox-3"
            onChange={() => {}}
            value="standard"
          />
          <br />
          <Checkbox
            className="checkbox"
            id="checkbox-4"
            required
            labelText="I understand that I may be asked to show my work identification to property owners before entering into an agreement."
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
            Submit
          </Button>
        </Form>
      )}
    </Modal>
  );
};

export default HealthWorkerModal;
