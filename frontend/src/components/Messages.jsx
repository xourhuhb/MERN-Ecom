import React from "react";
import { Alert } from "react-bootstrap";
const Messages = ({ variant, childern }) => {
  return (
    <div>
      <Alert variant={variant}>{childern}</Alert>
    </div>
  );
};
Messages.defaultProps = {
  variant: "info",
};

export default Messages;
