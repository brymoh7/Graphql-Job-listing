import React from "react";
import { useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  TextInput: {
    "& .MuiFormControl-marginNormal": {
      marginTop: 0,
    },
  },
}));

function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  const classes = useStyles();

  return (
    <>
      <span className={classes.TextInput}>
        <TextField
          error={touched[name] && errors[name] ? true : false}
          helperText={touched[name] && errors[name]}
          onBlur={() => setFieldTouched(name)}
          fullWidth
          margin="normal"
          onChange={(e) => setFieldValue(name, e.target.value)}
          value={values[name]}
          name={name}
          {...otherProps}
          variant="outlined"
        />
      </span>
    </>
  );
}

export default AppFormField;
