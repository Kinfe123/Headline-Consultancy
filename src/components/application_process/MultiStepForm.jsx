import React, { useState, useEffect } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepContext";
import Basic from "./Basic";
import Passport from "./Passport";
import Residential from "./Residential";
import Reference from "./Reference";
import Documents from "./DocumentNeeded";
import Review from "./Review";
import { Save } from "@mui/icons-material";
import Acadamics from "./Acadamics";
// import './styles.css'
// Destructuring Steps component from antd
const { Step } = Steps;

// Initial state values for user details, address details and links details
const detailsInitialState = {
  name: "",
  fathername: "",
  mothername: "",
  grandfathername: "",
  dob: "",
  phone: "",
  email:"",
  gender: "",
  country: ""
};

const addressInitialState = {
  woreda: "",
  city: "",
  kebele: "",
  id: ""
};

const passportDetailsInitialState = {
  name: "",
  dob: "",
  placeIssue: "",
  dateIssue: "",
  dateExp: "",
  passNumber:""
  
};
const refenceDetailIntialState = {
  guardname: "",
  guardadress: "",
  guardemail: "",
  guardphone: "",

  
};
const educationDetailInitialState = {
    currentSchool: "",
    currentStream: "",
    grade10: "",
    grade12or11: "",
  
    
  };
  // const documents = {
  //   photoName: "",
  //   photoBuffer: "",
  // }
//   const refenceDetailIntialState = {
//     guardname: "",
//     guardadress: "",
//     guardemail: "",
//     guardphone: "",
  
    
//   };

// Main component
const MultiStepForm = () => {
  // Initializing state for user details, address details, links details and current step
  const [details, setDetails] = useState(
    JSON.parse(localStorage.getItem("details")) || detailsInitialState
  );
  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("address")) || addressInitialState
  );
  const [passport, setPassport] = useState(
    JSON.parse(localStorage.getItem("passport")) || passportDetailsInitialState
  );
  const [reference, setReference] = useState(
    JSON.parse(localStorage.getItem("reference")) || refenceDetailIntialState
  );
  const [education, setEducation] = useState(
    JSON.parse(localStorage.getItem("education")) || educationDetailInitialState
  );
  const [currentStep, setCurrentStep] = useState(0);

  // Save state values to localStorage
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("passport", JSON.stringify(passport));
    localStorage.setItem("reference", JSON.stringify(reference));
    localStorage.setItem("education", JSON.stringify(education));
  }, [details, address, passport , reference , education]);

  // Function to navigate to the next step
  const next = () => {
    if (currentStep === 7 ) {
      // Resetting state values and going back to the first step after submitting the form
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      setPassport(passportDetailsInitialState);
      setReference(refenceDetailIntialState)
      setEducation(educationDetailInitialState)
      localStorage.removeItem("details");
      localStorage.removeItem("address");
      localStorage.removeItem("passport");
      localStorage.removeItem("reference");
      localStorage.removeItem("education");
      
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  // Function to navigate to the previous step
  const prev = () => setCurrentStep(currentStep - 1);

  console.log('The guardian informatuon: ' , reference.guardemail)
  
  return (
    // Providing state values to the MultiStepFormContext provider
    <Provider
      value={{
        details,
        setDetails,
        next,
        prev,
        address,
        setAddress,
        passport,
        setPassport,
        reference,
        currentStep,
        setReference, 
        education, 
        setEducation
      }}
    >
      <div className="nextbuttons">

      {/* <Steps current={currentStep}>
        <Step title={"Personal details"} />
        <Step title={"Address details"} />
        <Step title={"Passport Details"} />
        <Step title={"Residential Details"} />
        <Step title={"Reference Details"} />
        <Step title={"Acadamic Details"} />
        <Step title={"Document Details"} />
        <Step title={"Review"} />
        <Step title={"Confirm"} />
      </Steps> */}
    
      </div>
      {/* Rendering current step */}
      <main>{renderStep(currentStep)}</main>
    </Provider>
  );
};

// Function to render current step
const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Basic />;
    case 1:
      return <Residential />;
    case 2:
      return <Passport />;
    case 3:
      return <Reference />;
    case 4:
      return <Acadamics />;
    case 6:
      return <Documents />;
    case 5:
      return <Review />;
   
    default:
      return null;
  }
};

export default MultiStepForm;
