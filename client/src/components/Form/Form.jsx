import React, { useState } from "react";
import "./Form.css";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

export default function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",

    description: "",

    liabilityRequire: "",

    snackBring: "",
    snacks: "",
  });

  const {
    name,
    company,
    phone,

    email,

    description,

    liabilityRequire,

    snackBring,
    snacks,
  } = formData;
  // const { createSubmit } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { [name]: value };
    setFormData((formData) => {
      return { ...formData, ...newData };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createSubmit(formData);
    window.location.reload();
  };

  return (
    <form
      className="add-guest__form"
      // className={classes.root}
      // noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        className="text-field"
        required
        value={name}
        onChange={handleChange}
        type="text"
        id="standard-basic"
        label="Name"
        variant="outlined"
        name="name"
      />
      <br />
      <TextField
        required
        value={company}
        onChange={handleChange}
        type="text"
        id="standard-basic"
        label="Company"
        variant="outlined"
        name="company"
      />
      <br />
      <TextField
        required
        value={phone}
        onChange={handleChange}
        type="text"
        id="standard-basic"
        label="Phone Number"
        variant="outlined"
        name="phone"
      />
      <br />
      <TextField
        required
        value={email}
        onChange={handleChange}
        type="text"
        id="standard-basic"
        label="Email"
        variant="outlined"
        name="email"
      />
      <br />
      <TextField
        required
        value={description}
        onChange={handleChange}
        type="text"
        id="standard-basic"
        label="Description of what you do"
        variant="outlined"
        name="description"
      />
      <br />
      <label className="label__text">
        We require Liability Insurance for you to participate
      </label>

      <TextField
        required
        id="standard-select"
        select
        label="Select"
        name="liabilityRequire"
        type="text"
        value={liabilityRequire}
        onChange={handleChange}
      >
        <MenuItem value="YES">YES, I understand</MenuItem>
      </TextField>
      <br />
      <label className="label__text">Will you be bringing snacks?</label>
      <TextField
        required
        id="standard-select"
        select
        label="Select"
        name="snackBring"
        type="text"
        value={snackBring}
        onChange={handleChange}
      >
        <MenuItem value="YES">YES</MenuItem>
        <MenuItem value="NO">NO</MenuItem>
      </TextField>
      <br />
      {snackBring === "YES" && (
        <>
          <label className="label__text">Snack Choices</label>
          <TextField
            required
            id="standard-select"
            select
            label="Select"
            name="snacks"
            type="text"
            value={snacks}
            onChange={handleChange}
            // helperText="Please select your currency"
          >
            <MenuItem value="Water">Water</MenuItem>
            <MenuItem value="granola">Granola Bars</MenuItem>
            <MenuItem value="nuts">Packaged Nuts</MenuItem>
            <MenuItem value="popcorn">Packaged Popcorn</MenuItem>
            <MenuItem value="pretzels">Packaged Pretzels</MenuItem>
          </TextField>
          <br />
        </>
      )}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
