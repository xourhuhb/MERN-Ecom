import React from "react";
import { Alert } from "react-bootstrap";
const Message = ({ variant, children }) => {
  const message =
    typeof children === "object" && children !== null
      ? children.message || "An error occurred"
      : children;
  return <Alert variant={variant}>{message}</Alert>;
};
Message.defaultProps = {
  variant: "info",
};

export default Message;
