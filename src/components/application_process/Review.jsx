import { Button, Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import MultiStepFormContext from "./MultiStepContext";

const Review = () => {
  // Get details, address, and linksDetails from MultiStepFormContext
  const { next, prev } = useContext(MultiStepFormContext);
  // Define state variables to store user details
  const [details, setDetails] = useState({});
  const [address, setAddress] = useState({});
  const [passport, setPassport] = useState({});
  // const [linksDetails, setLinksDetails] = useState({});
  const [reference, setReference] = useState({});
  const [education, setEducation] = useState({});
  // const [linksDetails, setLinksDetails] = useState({});

  // Load user details from localStorage on mount
  useEffect(() => {
    const storedDetails = localStorage.getItem("details");
    if (storedDetails) {
      setDetails(JSON.parse(storedDetails));
    }

    const storedAddress = localStorage.getItem("address");
    if (storedAddress) {
      setAddress(JSON.parse(storedAddress));
    }

    const storedPassport = localStorage.getItem("passport");
    if (storedPassport) {
      setPassport(JSON.parse(storedPassport));
    }
    const storedReference = localStorage.getItem("reference");
    if (storedReference) {
      setReference(JSON.parse(storedReference));
    }
    const storedEducation = localStorage.getItem("education");
    if (storedEducation) {
      setEducation(JSON.parse(storedEducation));
    }
  }, []);

  // Define the submit function, which moves to the next step
  const handleSubmit = () => {
    next();
  };


  // Render the review form with the user's inputted details
  return (
    <div className={"details__wrapper"}>
      <div>
      <h1 className="header">
              Review <span className="gradient__text">  Details.</span>
            </h1>
      </div>
      <div className="underline"></div>
      <div className="review-info">
           <h3>Personal Details. 🧑</h3>
        <div className="personal">
          
              <p>FULL NAME: {details.name} {details.fathername} {details.grandfather} </p>
              <p>MOTHER NAME: {details.mothername}  </p>
              <p>EMAIL: {details.email}</p>
              <p>DOB: {details.dob}  </p>
              
              <p>PHONE NO.: {details.phone}  </p>
              <p>GENDER: {details.gender}</p>

              <p>COUNTRY: {details.country}</p>
              <p>REFERRED FROM: {details.referred}</p>
        </div>
        <h3>Address Details 📌 </h3>
          <div className="personal">
            <p>WOREDA: {address.woreda}</p>
            <p>KEBELE: {address.kebele}</p>
            <p>CITY: {address.city}</p>
            <p>ID no.: {address.id}</p>
            
              
        </div>
        <h3>Passport Details 🛂 </h3>
          <div className="personal">
            <p>NAME: {passport.name}</p>
            <p>DOB: {passport.dob}</p>
            <p>PLACE OF ISSUE: {passport.placeIssue}</p>
            <p>DATE OF ISSUE: {passport.dateIssue}</p>
            <p>EXPIRY DATE : {passport.dateExp}</p>
            <p>PASSPORT NO. :{passport.passNumber}</p>
            
              
        </div>
        <h3>Guardian Details 👪 </h3>
          <div className="personal">
            <p>GUARDIAN NAME: {reference.guardname}</p>
            <p>GUARDIAN ADDRESS: {reference.guardadress}</p>
            <p>GUARDIAN EMAIL: {reference.guardemail}</p>
            <p>GUARDIAN PHONE: {reference.guardphone}</p>

            
              
        </div>
        <h3>Acadamics Details 🏫 </h3>
          <div className="personal">
            <p>CURRENT SCHOOL NAME: {education.currentSchool}</p>
            <p>CURRENT STREAM: {education.currentStream}</p>
            <p>GRADE 10 RESULT: {education.grade10}</p>
            <p>GRADE 12/11 RESULT: {education.grade12or11}</p>

            
              
        </div>
          
          

      </div>
      <div className="nextbuttons">
              <Button type={"default"} onClick={prev} className="btn prev">
                Back
              </Button>
              {/* Render a "Next" button that submits the form data and moves to the next step in the form */}
              <Button type={"primary"} onClick={handleSubmit} className="btn">
                Confirm & Upload
              </Button>

           </div>
       
    </div>
  );
};

export default Review;
