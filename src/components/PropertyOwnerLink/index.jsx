import { Button } from "carbon-components-react";
import { Launch32 } from "@carbon/icons-react/es";
import React from "react";

const PropertyOwnerLink = () => {
  return (
    <Button
      renderIcon={Launch32}
      kind="tertiary"
      iconDescription="External link arrow"
      href="https://docs.google.com/forms/d/e/1FAIpQLSeoDudR3nhYv8KvutU6osarBFqdnNBUq303LI_k2qf0CiRAnQ/viewform?usp=pp_url"
      target="_blank"
    >
      List your property
    </Button>
  );
};

export default PropertyOwnerLink;
