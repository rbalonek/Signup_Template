import React from "react";
import Vendor from "../../components/Vendor/Vendor";
import "./Backend.css";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

export default function Backend(props) {
  let history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <div className="backend__container">
      <h1 className="backend__title">VENDOR LIST</h1>
      <div className="backend__button-holder">
        <Button onClick={handleClick} variant="contained" color="primary">
          HOME
        </Button>
      </div>
      {props.vendors ? (
        <div className="vendors__card__holder">
          {props.vendors.map((vendor) => (
            <>
              <Vendor vendor={vendor} handleDelete={props.handleDelete} />
            </>
          ))}
        </div>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
}
