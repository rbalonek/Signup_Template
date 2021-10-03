import React from "react";
import Vendor from "../../components/Vendor/Vendor";
import "./Backend.css";

export default function Backend(props) {
  return (
    <div className="backend__container">
      <h1>VENDOR LIST</h1>
      {props.vendors ? (
        <>
          {props.vendors.map((vendor) => (
            <>
              <Vendor vendor={vendor} handleDelete={props.handleDelete} />
            </>
          ))}
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
}
