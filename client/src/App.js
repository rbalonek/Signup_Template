import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import Layout from "./layouts/Layout.jsx";
import { getAllVendors, postVendor, deleteVendor } from "./services/vendors";

import emailjs from "emailjs-com";

function App() {
  const [vendors, setVendors] = useState([]);
  const serviceID = "service_bob_gmail"; //ADD
  // const templateID = "template_Template_App"; //ADD
  const templateIDForVendor = "template_Template_App"; //ADD when you have vendor

  const userID = "user_Blpwinwws9EdtYZw9FBKd"; //ADD

  useEffect(() => {
    const fetchVendors = async () => {
      const vendorArray = await getAllVendors();
      setVendors(vendorArray);
    };
    fetchVendors();
  }, []);
  const createSubmit = async (formData) => {
    const newVendor = await postVendor(formData);
    setVendors((prevState) => [...prevState, newVendor]);
    //
    // const templateParamsForClient = {
    //   send_to: "", //ADD
    //   cc_to: "", //ADD
    //   reply_to: "", //ADD
    //   to_name: "", //ADD
    //   message: `You have a new vendor, ${formData.name} from ${formData.company}.`,
    // };
    const templateParamsForVendor = {
      send_to: `${formData.email}`,
      reply_to: "rdevbob@gmail.com", //ADD
      from_name: "Vendor Signup Form", //ADD
      to_name: `${formData.name}`,
      company_name: `${formData.company}`,
    };
    // emailjs.send(
    //   serviceID,
    //   // templateID,
    //   // templateParamsForClient,
    //   userID
    // );
    emailjs.send(
      serviceID,
      templateIDForVendor,
      templateParamsForVendor,
      userID
    );

    alert(`Vendor ${formData.company} Added!`);
    console.log(`Vendor ${formData.company} Added!`);
    //
  };

  const handleDelete = async (id) => {
    await deleteVendor(id);
    setVendors((prevState) => prevState.filter((vendor) => vendor.id !== id));
    alert("Vendor Deleted!");
  };

  console.log("vendors", vendors);
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <MainContainer
            vendors={vendors}
            createSubmit={createSubmit}
            handleDelete={handleDelete}
          />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
