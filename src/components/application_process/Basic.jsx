import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepContext";
import './styles.css'
const Basic = () => {
  // get details, setDetails and next from the MultiStepFormContext
  const { details, setDetails, next , currentStep } = useContext(MultiStepFormContext);

  return (
    <Formik
      // set the initial values of the form
      initialValues={details}
      // handle form submission
      onSubmit={(values) => {
        setDetails(values); // update the details in the context
        next(); // move to the next step
      }}
      // validate the form fields
      validate={(values) => {
        const errors = {};
        // if (!values.name) errors.name = "Name is required";
        // else if (!/^[a-zA-Z\s]+$/.test(values.name))
        //   errors.name = "Name should only contain alphabets and spaces";
        // if (!values.username) errors.username = "Username is required";
        // if (!values.email) errors.email = "Email is required";
        // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        //   errors.email = "Invalid email address";
        //   if (!values.phone) errors.phone = "Phone number is required";
        // else if (!/^(\+?\d{1,3}\s?)?(\d{10})$/.test(values.phone))
        //   errors.phone =
        //     "Phone number must be 10 digits with an optional country code";
        // // Return any validation errors that occur
        // if (/^[0-9]+$/.test(values.username))
        //   errors.username =
        //     "Username does not require numbers or special characters";
        // return errors;
      }}
    >
      {({ handleSubmit, errors }) => (
        <div className="details__wrapper">
          <div>
          <h1 className="header">
          Personal <span className="gradient__text">Detail.</span>
        </h1>
        <div className="underline"></div>
        <p style={{color:"wheat"}}>{currentStep + 1} / 5 </p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Name *</label>
            <Input name={"name"} />
            <p className="error__feedback">{errors.name}</p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Father Name *</label>
            <Input name={"fathername"} />
            <p className="error__feedback">{errors.name}</p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>GrandFather Name *</label>
            <Input name={"grandfathername"} />
            <p className="error__feedback">{errors.name}</p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Mother Name *</label>
            <Input name={"mothername"} />
            <p className="error__feedback">{errors.name}</p>
          </div>
          <div className={`form__item ${errors.email && "input__error"}`}>
            <label>Personal Email *</label>
            <Input name={"email"} />
            <p className="error__feedback">{errors.email}</p>
          </div>
          <div className={`form__item ${errors.phone && "input__error"}`}>
              <label>Phone *</label>
              <Input name={"phone"} />
              <p className={"error__feedback"}>{errors.phone}</p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
              <label>Date Of Birth *</label>
              <Input name={"dob"} />
              <p className={"error__feedback"}>{errors.name}</p>
          </div>
          
          <div className={`form__item ${errors.email && "input__error"}`}>
            <label>Email *</label>
            <Input name={"email"} />
            <p className="error__feedback">{errors.email}</p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Country *</label>
            <Input name={"country"} />
            <p className="error__feedback">{errors.name}</p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Referred From (e.g Abebe Kebede) *</label>
            <Input name={"referred"} />
            <p className="error__feedback">{errors.name}</p>
          </div>
          <div
            className="form__item button__items d-flex justify-content-end"
          >
            <Button type={"primary"} onClick={handleSubmit} className="btn">
              Next
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Basic;
