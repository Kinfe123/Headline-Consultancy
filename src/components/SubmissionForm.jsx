import React, { useState } from "react";
import "./Contact.css";
import { Circles } from "react-loader-spinner";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function SubmissionForm() {
  // const url = 'http://localhost:4000/'
  // const SubmissionForm = new SubmissionForm()
  const navigate = useNavigate();
  const [filename, setFileName] = useState("");
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(null);
  const url = "http://localhost:4000/uploadfile";
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setClicked(true);

    try {
      console.log("Started");
      const form = document.getElementById("form");
      const formData = new FormData(form);
      const data = await fetch(url, {
        method: "POST",
        body: formData,
      });
      setSuccessful(true);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError("Error while sending the message");
      setLoading(false);
      setSuccessful(false);
    }

    // console.log('The data is ; ' , data.status)
  };

  const handleClicker = (e) => {
    e.preventDefault();
    document.getElementById("file").click();
  };

  return (
    <div className="contact-us">
      <form id="form">
        <div
          className="back"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowLeft />
        </div>
        <h1>
          Send <span className="gradient__text">Us.</span> 🍾
        </h1>
        <div className="underline"></div>

        <div className="contact-us-form">
          <input
            type="email"
            className="email"
            name="email"
            placeholder="✉️ Emaill"
          />

          <div className="names">
            <div>
              <input
                type="text"
                name="first_name"
                className="first_name"
                placeholder="🧔Fisrt Name"
              />
            </div>
            <div>
              <input
                type="text"
                name="last_name"
                className="second_name"
                placeholder="🧔 Second Name"
              />
            </div>
          </div>

          {/* <textarea  placeholder='💬 Put your thoughts here' className='text-area'/> */}
          <input
            type="file"
            name="file"
            id="file"
            className="file-upload"
            onChange={(e) => setFileName(e.target.files[0].name)}
          />
          <button className="btn upload" onClick={handleClicker}>
            {" "}
            🪧 Upload PDF
          </button>
          {filename && (
            <div className="file-name">
              <p>
                {" "}
                <span className="file-choosen">📁 File Chosen </span> :{" "}
                {filename}
              </p>
            </div>
          )}
        </div>

        {!clicked && (
          <button className="btn send" onClick={sendEmail}>
            {" "}
            🪧 Send Us
          </button>
        )}
        {isLoading && (
          <div className="loading">
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        {successful && (
          <div>
            <p>✅ Message has been succesfully delievered! </p>
          </div>
        )}
        {error && (
          <div>
            <p>❌ Message has NOT been succesfully delievered! </p>
          </div>
        )}
      </form>
      {}
    </div>
  );
}

export default SubmissionForm;
