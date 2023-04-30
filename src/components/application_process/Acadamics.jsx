import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepContext";
import './styles.css'
const Acadamics = () => {
  // get details, setDetails and next from the MultiStepFormContext
  const {  next , prev , education , setEducation , currentStep} = useContext(MultiStepFormContext);

  return (
    <Formik
      // set the initial values of the form
      initialValues={education}
      // handle form submission
      onSubmit={(values) => {
      
        setEducation(values); // update the details in the context
        next(); // move to the next step
      }}
      // validate the form fields
      validate={(values) => {
        // console.log('the educatin; ' , education)
        // const errors = {};
        // // if (!values.name) errors.name = "Name is required";
        // // else if (!/^[a-zA-Z\s]+$/.test(values.name))
        // //   errors.name = "Name should only contain alphabets and spaces";
        // if (!values.username) errors.username = "Username is required";
        // if (!values.email) errors.email = "Email is required";
        // // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        // //   errors.email = "Invalid email address";
        //   if (!values.phone) errors.phone = "Phone number is required";
        // // else if (!/^(\+?\d{1,3}\s?)?(\d{10})$/.test(values.phone))
        // //   errors.phone =
        // //     "Phone number must be 10 digits with an optional country code";
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
          Acadamics <span className="gradient__text">Details.</span>
        </h1>
        <div className="underline"></div>
        <p style={{color:"wheat"}}>{currentStep + 1} / 5 </p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Current School Name *</label>
            <Input name={"currentSchool"} />
            <p className="error__feedback">{errors.name}</p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Current Stream Name *</label>
            <Input name={"currentStream"} />
            <p className="error__feedback">{errors.name}</p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Grade 10 Average  *</label>
            <Input name={"grade10"} />
            <p className="error__feedback">{errors.name}</p>
          </div>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Grade 11 / 12 Average</label>
            <Input name={"grade12or11"} />
            <p className="error__feedback">{errors.name}</p>
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

export default Acadamics;
