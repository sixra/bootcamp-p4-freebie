/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Contact.scss";
import { IoLocationSharp } from "react-icons/io5"
import { CgPhone } from "react-icons/cg"
import { MdEmail } from "react-icons/md"
import HeroImage from "../../Components/Header/HeroImage"

const Contact = () => {
    return (
        <section className="contactContainer">
            {/* <HeroImage height="20" /> */}
            <div className="contactAllContainer">

                <div className="contactFormContainer">
                    <div className="contactUs">
                        <div className="contactSideHeader">
                            <h1>⎯⎯⎯⎯&nbsp;&nbsp;CONTACT US</h1>
                        </div>
                    </div>
                    <div className="contactHeader">
                        <h1>Get in Touch</h1>
                        <h2>Any Questions or remarks? Just write us a message!</h2>
                    </div>
                    <div className="contactAddress">
                        <IoLocationSharp className="icon" />
                        <h3>10785 Mitte</h3>
                        <h3>Berlin, DE</h3>
                    </div>
                    <div className="contactPhone">
                        <CgPhone className="icon" />
                        <h3>01575 141 615 </h3>
                    </div>
                    <div className="contactEmail">
                        <MdEmail className="icon" />
                        <h3>lorem@ipsum.com</h3>
                    </div>
                    <div className="contactForm">
                        <form>
                            <input placeholder="Name" type="text" />
                            <input placeholder="Email" type="email" />
                            <textarea
                                placeholder="Write your message..."
                                rows={4}
                                defaultValue={""}
                            />
                            <button type="submitButton">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301941.965402527!2d13.144553707447377!3d52.50651327072207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e1!3m2!1sen!2sde!4v1631625218844!5m2!1sen!2sde"
            ></iframe>
        </section>
    );
};

export default Contact;
