import { ModalWrapper, TextInput } from "carbon-components-react";

import { ArrowRight16 } from "@carbon/icons-react/es";
import React from "react";

const HealthWorkerModalWrapper = () => {
  return (
    <ModalWrapper
      buttonTriggerText="Request listings"
      className="health-worker-modal"
      disabled={false}
      handleSubmit={() => {}}
      id="input-modal"
      modalHeading="Request listings"
      modalLabel="Healthcare Workers"
      primaryButtonText="Submit"
      renderTriggerButtonIcon={ArrowRight16}
      secondaryButtonText="Cancel"
      selectorPrimaryFocus="[data-modal-primary-focus]"
      shouldCloseAfterSubmit
      triggerButtonIconDescription="Right arrow"
      triggerButtonKind="tertiary"
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
        id="workplace-text-input"
        labelText="Place of work:"
        placeholder=""
        type="text"
      />
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
        id="email-text-input"
        labelText="Email:"
        placeholder=""
        type="text"
      />
    </ModalWrapper>
  );
};

export default HealthWorkerModalWrapper;
