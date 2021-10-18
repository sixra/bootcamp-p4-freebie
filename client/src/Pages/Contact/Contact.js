/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import axios from "axios";
import "./Contact.scss";
import toastr from "toastr";
import { CgPhone } from "react-icons/cg"
import { MdEmail } from "react-icons/md"
import { IoLocationSharp } from "react-icons/io5"


const Contact = () => {
  const submitRequest = (e) => {
    e.preventDefault();

    const { contactName, email, message } = e.target.elements;

    axios({
      method: "POST",
      url: "http://localhost:4000/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        contactName: contactName.value,
        email: email.value,
        message: message.value,
      },
    }).then((response) => {
      toastr.options = {
        closeButton: true,
        debug: true,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-center",
        preventDuplicates: true,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      };
      if (response) {
        toastr["success"](
          "We have received your message and will get back to you as soon as possible!",
          "Thank you!"
        );
        console.log("Email has been sent");
        e.target.reset();
      } else if (!response) {
        toastr["error"](
          "There was an issue sending your message to us, please try again later!",
          "Message not sent!"
        );
        console.log("FAILURE");
      }
    });
  };

  return (
    <section className="contactPage">
      <div className="contactMainContainer">
        <div className="contactInfo">
          <div className="overlay">
            <div className="contactInfoTitle">
              <h2>Let's get in touch</h2>
              <p>We're open for any suggestions or just to have a chat</p>
            </div>
            <div className="contactInfoBody">
              <div>
                <CgPhone size="20" />
                <span>01575 141 615 </span>
              </div>
              <div>
                <MdEmail size="20" />
                <span>brah.freebie@gmail.com</span>
              </div>
              <div>
                <IoLocationSharp size="20" />
                <span>10785 Mitte Berlin, DE</span>
              </div>
            </div>
          </div>
        </div>
        <form className="contactForm" onSubmit={submitRequest}>
          <h1>Contact Us</h1>
          <div className="inputNameContainer">
            <input required id="contactName" type="text" />
            <label>Name</label>
          </div>
          <div className="inputEmailContainer">
            <input required id="email" type="email" />
            <label>Email</label>
          </div>
          <div className="textareaContainer">
            <textarea
              required
              id="message"
              maxLength="300"
              defaultValue={""}
            />
            <label>Message</label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
