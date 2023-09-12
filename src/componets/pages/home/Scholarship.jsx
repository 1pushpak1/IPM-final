import React from 'react'
// import ContactForm from '../form/Scholarshiptest'
import Scholarshiptest from '../form/Scholarshiptest'

function Scholarship() {
  return (
    <>
    
      <div className="space" id="contact-sec">
         <div className="container">
            <div className="map-sec">
               <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510192051!2d76.76357332396312!3d28.644287356088828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1692724000760!5m2!1sen!2sin" width="100%" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div>
            <div className="row">
               <div className="col-xl-5 mb-30 mb-xl-0">
                  <div className="me-xxl-5 mt-40">
                     <div className="title-area mb-25">
                        <h2 className="border-title h3">MAHA SCHOLARSHIP TEST</h2>
                     </div>
                     <p className="mt-n2 mb-25">Have a inquiry or some feedback for us? Fill out the form<br/>below to contact our team.</p>
                     <div className="contact-feature">
                        <div className="contact-feature-icon"><i className="fal fa-location-dot"></i></div>
                        <div className="media-body">
                           <p className="contact-feature_label">Our Address</p>
                           <a href="https://www.google.com/maps" target='_blank' className="contact-feature_link">147/I, Green Road, Noida</a>
                        </div>
                     </div>
                     <div className="contact-feature">
                        <div className="contact-feature-icon"><i className="fal fa-phone"></i></div>
                        <div className="media-body">
                           <p className="contact-feature_label">Phone Number</p>
                           {/* <a href="tel:+011456586986" className="contact-feature_link">Mobile:<span>+91-99100 88661</span></a>  */}
                           <a href="tel:+91-99100 88661" className="contact-feature_link">Phone: <span>+91-99100 88661</span></a>
                        </div>
                     </div>
                     <div className="contact-feature">
                        <div className="contact-feature-icon"><i className="fal fa-clock"></i></div>
                        <div className="media-body">
                           <p className="contact-feature_label">Hours of Operation</p>
                           <span className="contact-feature_link">Monday - Friday: 09:00 - 20:00</span> <span className="contact-feature_link">Sunday & Saturday: 10:30 - 22:00</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-7">
                  <div className="contact-form-wrap" data-bg-src="assets/img/bg/contact_bg_1.png">
                     <span className="sub-title">Contact With Us!</span>
                     <h2 className="border-title">Get in Touch</h2>
                     {/* <p className="mt-n1 mb-30 sec-text">Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                     <Scholarshiptest/>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Scholarship
