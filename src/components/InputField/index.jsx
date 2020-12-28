import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ value, handleChange, label, name }) => {
  return (
    <TextField
      id="outlined-number"
      label={label}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: "0", max: "100", step: "1" } }}
      variant="outlined"
      value={value}
      onChange={handleChange}
      name={name}
    />
  );
};

export default Input;
