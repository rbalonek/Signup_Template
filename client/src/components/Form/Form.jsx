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
    address: "",
    email: "",
    service: "",
    description: "",
    canopy: "",
    liabilityRequire: "",
    prize: "",
    snackBring: "",
    snacks: "",
  });

  const {
    name,
    company,
    phone,
    address,
    email,
    service,
    description,
    canopy,
    liabilityRequire,
    prize,
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
        required
        value={name}
        onChange={handleChange}
        type="text"
        id="standard-basic"
        label="Name"
        variant="outlined"
        name="name"
      />
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
      <TextField
        required
        value={address}
        onChange={handleChange}
        type="text"
        id="standard-basic"
        label="Address"
        variant="outlined"
        name="address"
      />
      <TextField
        required
        value={service}
        onChange={handleChange}
        type="text"
        id="standard-basic"
        label="Service Provided"
        variant="outlined"
        name="service"
      />
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

      <label>
        Will you need a canopy?{" "}
        <p className="canopy_description">
          (We can provide one canopy and two chairs)
        </p>
      </label>
      <TextField
        required
        id="standard-select"
        select
        label="Select"
        name="canopy"
        type="text"
        value={canopy}
        onChange={handleChange}
        // helperText="Please select your currency"
      >
        <MenuItem value="YES">YES</MenuItem>
        <MenuItem value="NO">NO</MenuItem>
      </TextField>

      <label>We require Liability Insurance for you to participate</label>

      <TextField
        required
        id="standard-select"
        select
        label="Select"
        name="liabilityRequire"
        type="text"
        value={liabilityRequire}
        onChange={handleChange}
        // helperText="Please select your currency"
      >
        <MenuItem value="YES">YES, I understand</MenuItem>
      </TextField>

      <label>Requesting Door Prize for Raffle</label>
      <TextField
        required
        id="standard-select"
        select
        label="Select"
        name="prize"
        type="text"
        value={prize}
        onChange={handleChange}
        // helperText="Please select your currency"
      >
        <MenuItem value="YES">YES, I understand.</MenuItem>
      </TextField>

      <label>Requesting snacks for your table. (To feed 50-70 people)</label>
      <TextField
        required
        id="standard-select"
        select
        label="Select"
        name="snackBring"
        type="text"
        value={snackBring}
        onChange={handleChange}
        // helperText="Please select your currency"
      >
        <MenuItem value="YES">YES, I understand</MenuItem>
      </TextField>

      <label>Snack Choices</label>
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

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
