import React from "react";
import { useFormikContext } from "formik";
import Button from "@material-ui/core/Button";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      onClick={handleSubmit}
      variant="contained"
      color="primary"
      size="large"
    >
      {title}
    </Button>
  );
}
export default SubmitButton;
