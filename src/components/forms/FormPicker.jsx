import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";

import { makeStyles } from "@material-ui/core/styles";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // height: 7,
  },
  formControl: {
    // margin: 0,
    fullWidth: true,
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    // wrap: "nowrap"
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FormPicker(props) {
  const classes = useStyles();
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const { label, name, items } = props;

  return (
    <div>
      <FormControl
        variant="outlined"
        {...props}
        className={classes.formControl}
        error={touched[name] && errors[name] ? true : false}
        onBlur={() => setFieldTouched(name)}
      >
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          autoWidth={true}
          value={values[name]}
          name={name}
          onChange={(e) => setFieldValue(name, e.target.value)}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {items.map((item, index) => (
            <MenuItem key={index} value={item.id}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
        {touched[name] && errors[name] && (
          <FormHelperText>{errors[name]}</FormHelperText>
        )}
      </FormControl>
    </div>
  );
}
