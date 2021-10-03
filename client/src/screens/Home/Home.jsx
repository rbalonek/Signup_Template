import React from "react";
import Form from "../../components/Form/Form";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home__container">
      <h1>Vendor Signup Form</h1>
      <div className="form-holder">
        <Form createSubmit={props.createSubmit} />
      </div>
    </div>
  );
}
