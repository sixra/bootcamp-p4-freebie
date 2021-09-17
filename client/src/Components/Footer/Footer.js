import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.scss"
import toastr from "toastr";
import ReactStoreBadges from 'react-store-badges'
import { IoLocationSharp } from "react-icons/io5"
import { CgPhone } from "react-icons/cg"
import { MdEmail } from "react-icons/md"
import { FiGithub } from "react-icons/fi"
import { FaPaperPlane, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"


const Footer = () => {

  const signNewsletter = (e) => {
    e.preventDefault()
    const { email } = e.target.elements;
    if(email.value){
      toastr["success"]("For Subscribing to our Newsletter!", "Thank You!")
    } else {
      toastr["error"]("Please try again, with a valid email!", "Something went wrong")
    }
    

    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-bottom-center",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }

  return (
      <footer className="footerContainer">
        <div className="footerInputContainer">
          <div className="footerLogoContainer">
            {/* <div className="footerLogo"> */}
            <span className="footerLogo">free</span>
            {/* </div> */}
            <div className="footerAddress">
              <IoLocationSharp className="icon" />
              <h3>10785 Mitte</h3>
              <h3>Berlin, DE</h3>
            </div>
            <div className="footerPhone">
              <CgPhone className="icon" />
              <h3>01575 141 615 </h3>
            </div>
            <div className="footerEmail">
              <MdEmail className="icon" />
              <h3>lorem@ipsum.com</h3>
            </div>
          </div>
          <div className="footerDetailsContainer">
            <div className="footerDetailsTips">
              <h3>Tips And Help</h3>
              <ul>
                <li><a rel="noreferrer" target="_blank" href="https://stackoverflow.com/">Help</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://reactjs.org/docs/create-a-new-react-app.html">Information</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://docs.npmjs.com/cli/v7/configuring-npm/package-json">Blog</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://developers.google.com/newsletter">Newsletter</a></li>
              </ul>
            </div>
            <div className="footerDetailsLinks">
            <h3>Quick Links</h3>
            <ul>
                <li> <NavLink to="/home">Home</NavLink> </li>
                <li> <NavLink to="/categories">Categories</NavLink> </li>
                <li> <NavLink to="/contact">Contact Us</NavLink> </li>
            </ul>
            </div>
            <div className="footerDetailsApps">
            <h3>Check Our App</h3>
              <ReactStoreBadges
                platform={'ios'}
                url={'https://www.apple.com/app-store/'}
                locale={'en-us'}
                className="footerDetailsAppsApple"
                target="_blank"
              />

              <ReactStoreBadges
                platform={'android'}
                url={'https://play.google.com/store'}
                locale={'en-us'}
                className="footerDetailsAppsAndroid"
                target="_blank"
              />
            
            </div>
            <div className="footerDetailsSubscribe">
              <h3>Subscribe</h3>
              <div >
                <form className="footerDetailsSubscribeInput" action="" onSubmit={signNewsletter}>
                <input id="email" type="email" placeholder="Email Adress"/>
                <button  type="submitButton"><FaPaperPlane size={16}/></button>
                </form>
              </div>
              <span>Get the latest updates in your mailbox!</span>
            </div>
          </div>
          <div className="footerSocialMedia">

            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/">
              <div className="footerSocialMediaFacebook">
                <FaFacebookF size={24} className="icon" />
              </div>
            </a>

            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
              <div className="footerSocialMediaInstagram">
                <FaInstagram size={24} className="icon" />
              </div>
            </a>

            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
              <div className="footerSocialMediaLinkedin">
                <FaLinkedinIn size={24} className="icon" />
              </div>
            </a>

            <a rel="noreferrer" target="_blank" href="https://github.com/Ratko-Sim/brah">
              <div className="footerSocialMediaGithub">
                <FiGithub size={24} className="icon" />
              </div>
            </a>

          </div>
          <div className="footerCopyright">
            <span> &copy; {(new Date().getFullYear())} Freebie GmbH. All Rights Reserved. </span>
          </div>
        </div>
      </footer>
  )
}

export default Footer
