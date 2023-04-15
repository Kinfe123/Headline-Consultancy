import React, { useState } from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Circles } from "react-loader-spinner";

function Contact() {
  const form = useRef();
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(null);
  console.log("The service id : ", process.env.REACT_APP_SERVICE_ID);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setClicked(true)
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(result.text);
          setError(null);
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
          setLoading(true);
          setSuccess(null);
        }
      );
  };
  return (
    <div className="contact-us" id="contact">
      <h1>
        Ping <span className="gradient__text">Us.</span> 🍾
      </h1>
      <div className="underline"></div>

      <form ref={form}>
        <div className="contact-us-form">
          <input
            type="email"
            name="user_email"
            className="email"
            placeholder="✉️ Email"
          />

          <div className="names">
            <div>
              <input
                type="text"
                name="from_name"
                className="first_name"
                placeholder="🧔Fisrt Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="from_name2"
                placeholder="🧔 Last Name"
              />
            </div>
          </div>

          <textarea
            name="message"
            placeholder="💬 Put your thoughts here"
            className="text-area"
          />
        </div>
      </form>

      {!clicked && (
        <button className="btn" onClick={sendEmail}>
          {" "}
          🪧 Contact Us
        </button>
      )}

      {isLoading && (
        <div className="loading">
          <Circles
            height="50"
            width="50"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
       {success && (
          <div>
            <p>✅ Message has been succesfully delievered! </p>
          </div>
        )}
        {error && (
          <div>
            <p>❌ Message has NOT been succesfully delievered! </p>
          </div>
        )}
    </div>
  );
}

export default Contact;
