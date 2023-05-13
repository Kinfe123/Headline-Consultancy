import React, { useContext } from "react";
import { Formik } from "formik";
import { useState } from "react";
import {saveAs} from 'file-saver'
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepContext";
import { FileUploader } from "react-drag-drop-files";

import JSZip from "jszip";
import { ColorRing } from "react-loader-spinner";
window.Buffer = window.Buffer || require("buffer").Buffer;
Buffer.from("anything", "base64");

// Define a component named "Details"
const Documents = () => {
  // Get "address", "setAddress", "next", and "prev" from MultiStepFormContext using useContext hook
  const { address, setAddress, next, prev , details  , reference , education , passport  } = useContext(MultiStepFormContext);
  const [filename, setFileName] = useState();
  const handleClicker = (e) => {
    e.preventDefault();
    document.getElementById("file").click();
  };

  const sendEmail = (e) => {
    e.preventDefault()
    const form = document.getElementById("form");
    const formData = new FormData(form)
    
    
  
    
  }
  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);
  const [file7, setFile7] = useState(null);
  
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState(false)
  const [success , setSuccess] = useState(false)
  const [clicked , setClicked] = useState(false)
  const [file8 , setFile8] = useState(null)
  // const [photoName , photoName] = useState()
  const [photoBuffer , setPhotoBuffer] = useState(null)

  const fileTypes = ["JPEG", "PDF" , "ZIP"];



    const handleFinishing = async (e) => {
    e.preventDefault()
    const url  = "http://localhost:4000/send";
  

    if(!clicked){
      const zip = new JSZip()
    
    const contentsFile = `
    
    <h3>Personal Details. 🧑</h3>
    <div className="personal">
      
          <p>FULL NAME: ${details.name} ${details.fathername} ${details.grandfather} </p>
          <p>MOTHER NAME: ${details.mothername}  </p>
          <p>EMAIL: ${details.email}</p>
          <p>DOB: ${details.dob}  </p>
          
          <p>PHONE NO.: ${details.phone}  </p>
          <p>GENDER: ${details.gender}</p>
          <p>COUNTRY: ${details.country}</p>
          <p>REFERRED: ${details.referred}</p>

    </div>
    <h3>Address Details 📌 </h3>
      <div className="personal">
        <p>WOREDA: ${address.woreda}</p>
        <p>KEBELE: ${address.kebele}</p>
        <p>CITY: ${address.city}</p>
        <p>ID no.: ${address.id}</p>
        
          
    </div>
    <h3>Passport Details 🛂 </h3>
      <div className="personal">
        <p>NAME: ${passport.name}</p>
        <p>DOB: ${passport.dob}</p>
        <p>PLACE OF ISSUE: ${passport.placeIssue}</p>
        <p>DATE OF ISSUE: ${passport.dateIssue}</p>
        <p>EXPIRY DATE : ${passport.dateExp}</p>
        <p>PASSPORT NO. :${passport.passNumber}</p>
        
          
    </div>
    <h3>Guardian Details 👪 </h3>
      <div className="personal">
        <p>GUARDIAN NAME: ${reference.guardname}</p>
        <p>GUARDIAN ADDRESS: ${reference.guardadress}</p>
        <p>GUARDIAN EMAIL: ${reference.guardemail}</p>
        <p>GUARDIAN PHONE: ${reference.guardphone}</p>

        
          
    </div>
    <h3>Acadamics Details 🏫 </h3>
      <div className="personal">
        <p>CURRENT SCHOOL NAME: ${education.currentSchool}</p>
        <p>CURRENT STREAM: ${education.currentStream}</p>
        <p>GRADE 10 RESULT: ${education.grade10}</p>
        <p>GRADE 12/11 RESULT: ${education.grade12or11}</p>

        
          
    </div>
    
    `
    zip.file('details.html' , contentsFile)
    
    const documents = zip.folder('documents')
    const lists = [file , file1 , file2   , file4 , file5 , file6 , file7]
    // let f = file[0];
    // let allZip =  zip.file(f.name, f);
    // console.log(allZip)
    let val = 0;
    for(let i = 0; i<7; i++){
      if(lists[i]) {

        val =  documents.file(lists[i][0].name , lists[i][0])
      }

    }
 
    setClicked(true)
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // see FileSaver.js
       saveAs(content, `${details.name}${ details.fathername}${details.grandfathername}Application.zip`);
      
        
       
    
  });

    }
    

  if(clicked) {
    setLoading(true)
    const url = 'https://headway-api.onrender.com/send'
  if(clicked){
    //body.append('upload', fs.createReadStream(filePath)); // doesn't work
    const form = document.getElementById('form')
    const formData = new FormData(form)


    console.log(formData)

    // const response = await fetch(url, { method: 'POST', body })
    // const result = await response.json();
    // console.log( response.status, result )
    // console.log('The result , ', result)
    const makeRequest = async () => {
    
      // console.log(data)
      //  data.append('file' , content)
     
      // const formData = new FormData(content)
    // console.log(content)
    try {
      const res = await fetch(url  , {
        method:'POST',
        body:formData
      })
    //  console.log('The respinse data is; ' , res)
     
      if(res.status === 200){
        setSuccess(true)
        setError(false)
        setLoading(false)
      }
      if(res.status === 500){
        setSuccess(false)
        setError(true)
        setLoading(false)
        
      }

    }catch(err) {
    
      setLoading(false)
      setSuccess(false)
      setError(true)
    
    }

   }

   makeRequest()
  }
  }

   
  

  }

  const handleChange = (file) => {
    setFile(file);
  };
  const handleChange1 = (file) => {
    setFile1(file);
  };
  const handleChange2 = (file) => {
    setFile2(file);
  };
  const handleChange3 = (file) => {
    setFile3(file);
  };
  const handleChange4 = (file) => {
    setFile4(file);
  };
  const handleChange5 = (file) => {
    setFile5(file);
  };
  const handleChange6 = (file) => {
    setFile6(file);
  };
  const handleChange7 = (file) => {
    setFile7(file);
  };
  const handleChange8 = (file) => {
    setFile8(file);
  };

  // console.log('The fie zip : ' , send)
  
  const handleClick = async (e) => {
    e.preventDefault()
    // try {
    //   const form = document.getElementById('form')
    //   const formData = new FormData(form)
    //   const fetched = await fetch( url , {
    //     method: 'POST',
    //     body: formData
      

    //   })
    //   // const res = await fetched.body
    //   console.log(fetched.statusText)
      

      

    // }
    // catch(err) {
    //   console.log('the error caused: ' , err)
    // }
  }


  // the vlaie for the rest of the informationc an be handled and beig exputed on the normal client sde libraru and types can be 
  // 
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
          <div className={"details__wrapper"}>
   
            
      <form id='form'>
            <h1 className="header">Document  <span className="gradient__text">Needed.</span> </h1>
            <div className="underline"></div>
            <p className='file-label'>PHOTO (3X4)  </p>
            <FileUploader
              fileOrFiles={photoBuffer}
              label='Photo'
              multiple={true}
          
              handleChange={handleChange}
              name="file1"
              types={fileTypes}
            />
            <p>{file ? `📁 File name: ${file[0].name}` : "📁 no files uploaded yet"}</p>
            <p className='file-label'>SIGNITURE  </p>
            
            <FileUploader
            
              multiple={true}
              handleChange={handleChange1}
              name="file2"
              types={fileTypes}
              />
              <p>{file1 ? `📁 File name: ${file1[0].name}` : "📁 no files uploaded yet"}</p>
              <p className='file-label'>GRADE 10 TRANSCRIPT </p>
            
            <FileUploader
              multiple={true}
              handleChange={handleChange2}
              name="file3"
              types={fileTypes}
              />
              <p>{file2 ? ` 📁 File name: ${file2[0].name}` : "📁 no files uploaded yet"}</p>
            
              <p className='file-label'>GRADE 11 TRANSCRIPT </p>
            
            <FileUploader
              multiple={true}
              handleChange={handleChange4}
              name="file5"
              types={fileTypes}
              />
              <p>{file4 ? `📁 File name: ${file4[0].name}` : "📁 no files uploaded yet"}</p>
              <p className='file-label'>GRADE 12 TRANSCRIPT(Optional) </p>
            
            <FileUploader
              multiple={true}
              handleChange={handleChange5}
              name="file6"
              types={fileTypes}
              />
              <p>{file5 ? `📁 File name: ${file5 && file5[0].name}` : "📁 no files uploaded yet"}</p>
              <p className='file-label'>PASSPORT SCANNED COPY </p>
            
            <FileUploader
              multiple={true}
              handleChange={handleChange6}
              name="file7"
              types={fileTypes}
            />
          
            <p>{file6 ? `📁 File name: ${file6[0].name}` : "📁 no files uploaded yet"}</p>
              <p className='file-label'>NATIONAL ID SCANNED COPY </p>
            
            <FileUploader
              multiple={true}
              handleChange={handleChange7}
              name="file4"
              types={fileTypes}
            />
          
            <p>{file7 ? `📁 File name: ${file7[0].name}` :  "📁 no files uploaded yet"}</p>
            
            <p className='file-label'>ANY INTERNATIONAL PROFICIENCY CERTIFICATE Like SAT , Duolingo  (if you have multiple , send the pdf of it) </p>
            
            <FileUploader
              multiple={true}
              handleChange={handleChange7}
              name="file8"
              types={fileTypes}
            />
          
            <p>{file8 ? `📁 File name: ${file8[0].name}` :  "📁 no files uploaded yet"}</p>
            
          
            <div className="nextbuttons">
                    <Button type={"default"} onClick={prev} className="btn prev">
                      Back
                    </Button>
                    {/* Render a "Next" button that submits the form data and moves to the next step in the form */}
                    <Button type={"primary"} onClick={handleFinishing} className="btn">
                    {clicked ? "✅ Confirm & Submit" : 'Generate An Application' } 
                    </Button>

                </div>


                {clicked && (

              <div>
                <p>❗❕ Upload and Submit Only After Reviewing The Downloadable application below.</p>
              <FileUploader
                    multiple={true}
                    handleChange={handleChange8}
                    name="file8"
                    types={fileTypes}
                  />
                  
              <p>{file8 ? `📁 File name: ${file8[0].name}` :  "📁 no files uploaded yet"}</p>
            
              </div>
            )}

            <div className="loading">
            <ColorRing
                visible={loading}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#5ac22e', '#F49867', '#F49867', '#F49867', '#429EA6']}
              />

            </div>
           
           {success && ( <div className="success">
              <p> ✅ You have succussfully uploaded your application</p>

            </div>)}
            {error && (<div className="failure"><p>❌ You have not successully uploaded the application please try again. </p></div>)}
           
    
    
    </form>

      


      
          </div>
        );
      }}
    </Formik>
  );
};

export default Documents;
