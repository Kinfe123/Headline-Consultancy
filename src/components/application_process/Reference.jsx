import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepContext";
import './styles.css'
const Reference = () => {
  // get details, setDetails and next from the MultiStepFormContext
  const { next  , prev  , reference , setReference , currentStep} = useContext(MultiStepFormContext);

  return (
    <Formik
      // set the initial values of the form
      initialValues={reference}
      // handle form submission
      onSubmit={(values) => {
        console.log('The values are : ' , reference)
        setReference(values); // update the details in the context
        next(); // move to the next step
      }}
      // validate the form fields
      validate={(values) => {
        // const errors = {};
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
          Guardians <span className="gradient__text">Detail.</span>
        
         
        </h1>
        <div className="underline"></div>
        <p style={{color:"wheat"}}>{currentStep + 1} / 5 </p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Guardian Name *</label>
            <Input name={"guardname"} />
            <p className="error__feedback">{errors.name}</p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Guardian Adress *</label>
            <Input name={"guardadress"} />
            <p className="error__feedback">{errors.name}</p>
          </div>
          <div className={`form__item ${errors.email && "input__error"}`}>
            <label>Guardian email *</label>
            <Input name={"guardemail"} />
            <p className="error__feedback">{errors.email}</p>
          </div>
         
          <div className={`form__item ${errors.phone && "input__error"}`}>
            <label>Phone *</label>
            <Input name={"guardphone"} />
            <p className="error__feedback">{errors.phone}</p>
          </div>
         
          <div
            className="form__item button__items d-flex justify-content-end"
          >

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
      )}
    </Formik>
  );
};

export default Reference;
