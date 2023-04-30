import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepContext";

// Define a component named "Details"
const Residential = () => {
  // Get "address", "setAddress", "next", and "prev" from MultiStepFormContext using useContext hook
  const { address, setAddress, next, prev , currentStep} = useContext(MultiStepFormContext);
  
  // Render a Formik form that manages state, validation, and submission of form data
  return (
    <Formik
      // Set initial values of the form fields to "address"
      initialValues={address}
      // Define what happens when the form is submitted
      onSubmit={(values) => {
        // Update the "address" state with the submitted form data
        setAddress(values);
        // Move to the next step in the multi-step form
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.address1) errors.address1 = "Address is required";
        else if (!/^[a-zA-Z0-9\s]*$/.test(values.address1))
          errors.address1 =
            "Address must contain only letters, digits, and spaces";
        if (!values.city) errors.city = "City is required";
        else if (!/^[a-zA-Z\s]*$/.test(values.city))
          errors.city = "City must contain only letters and spaces";
        if (!values.country) errors.country = "Country is required";
        else if (!/^[a-zA-Z\s]*$/.test(values.country))
          errors.country = "Country must contain only letters and spaces";
        if (!values.state) errors.state = "State is required";
        else if (!/^[a-zA-Z\s]*$/.test(values.state))
          errors.state = "State must contain only letters and spaces";
        if (!values.phone) errors.phone = "Phone number is required";
        else if (!/^(\+?\d{1,3}\s?)?(\d{10})$/.test(values.phone))
          errors.phone =
            "Phone number must be 10 digits with an optional country code";
        // Return any validation errors that occur
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        // Render the form using the Ant Design framework
        return (
          <div className={''}>
            <div>
            <h1 className="header">
              Residentail <span className="gradient__text">Details.</span>
            </h1>
            <div className="underline"></div>

              <p style={{color:"wheat"}}>{currentStep + 1} / 5 </p>
            </div>
            <div className={`form__item ${errors.address1 && "input__error"}`}>
              <label>Woreda *</label>
              <Input name={"woreda"} />
              <p className={"error__feedback"}>{errors.address1}</p>
            </div>
            <div className={`form__item ${errors.city && "input__error"}`}>
              <label>City *</label>
              <Input name={"city"} />
              <p className={"error__feedback"}>{errors.city}</p>
            </div>
            <div className={`form__item ${errors.country && "input__error"}`}>
              <label>Kebele *</label>
              <Input name={"kebele"} />
              <p className={"error__feedback"}>{errors.country}</p>
            </div>
            <div className={`form__item ${errors.state && "input__error"}`}>
              <label>ID Card No. *</label>
              <Input name={"id"}  />
              <p className={"error__feedback"}>{errors.state}</p>
            </div>
           
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              {/* Render a "Back" button that moves to the previous step in the form */}
              <div className="nextbuttons">
              <Button type={"default"} onClick={prev} className="btn prev">
                Back
              </Button>
              {/* Render a "Next" button that submits the form data and moves to the next step in the form */}
              <Button type={"primary"} onClick={handleSubmit} className="btn">
                Next
              </Button>

           </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Residential;
