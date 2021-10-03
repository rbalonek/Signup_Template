import React from "react";
import Form from "../../components/Form/Form";
import "./Home.css";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

export default function Home(props) {
  let history = useHistory();

  const handleClick = () => {
    history.push("/vendors");
  };

  return (
    <div className="home__container">
      <h1 className="home__banner">Vendor Signup Form</h1>
      <div className="backend__button-holder">
        <Button onClick={handleClick} variant="outlined" color="primary">
          Backend
        </Button>
      </div>
      <div className="form-holder">
        <Form createSubmit={props.createSubmit} />
      </div>
    </div>
  );
}
