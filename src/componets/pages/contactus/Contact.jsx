import React from 'react'
import ContactForm from '../form/ContactForm'
import { Link } from 'react-router-dom';

function Contact() {
   return (
      <>
         <div className="space" id="contact-sec">
            <div className="container">
               {/* <div className="map-sec">
               <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510192051!2d76.76357332396312!3d28.644287356088828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1692724000760!5m2!1sen!2sin" width="100%" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div> */}
               <div className="row">
                  <div className="col-xl-8 contact-div">
                     <div className="me-xxl-5">
                     {/* <div className="wcu-img-1"> */}

                        <div className="mb-1 mx-auto" width="272px" height="214px"><img src="https://ik.imagekit.io/yhoez8no8al/admission/book-consultation-illustration.svg?tr=w-272,bl-6,f-avif" alt="img" /></div>
                        {/* <div className="mb-2 mb-md-5 mx-auto" width="272px" height="214px"><img src="https://ik.imagekit.io/yhoez8no8al/admission/book-consultation-illustration.svg?tr=w-272,bl-6,f-avif" alt="img" /></div> */}
                        {/* </div> */}
                        <div className="title-area mb-25">

                           {/* <h3 className="border-title h4">Book a Consultation</h3> */}
                           <h2 className="border-title h3">Book a Session with Mentors</h2>
                        </div>
                        <p className="mt-n2 mb-25">Have a dream of joining IPM after "10+2" But Confused with the process! NO WORRIES!<br/>
                        Book a consultation with your expert mentor today.</p>
                        {/* <div className="contact-feature">
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
                               <a href="tel:+011456586986" className="contact-feature_link">Mobile:<span>+91-99100 88661</span></a>  
                              <a href="tel:+91-99100 88661" className="contact-feature_link">Phone: <span>+91-99100 88661</span></a>
                           </div>
                        </div>
                        <div className="contact-feature">
                           <div className="contact-feature-icon"><i className="fal fa-clock"></i></div>
                           <div className="media-body">
                              <p className="contact-feature_label">Hours of Operation</p>
                              <span className="contact-feature_link">Monday - Friday: 09:00 - 20:00</span> <span className="contact-feature_link">Sunday & Saturday: 10:30 - 22:00</span>
                           </div>
                        </div> */}
                     </div>
                  </div>
                  <div className="col-xl-8 contact-div">
                     <div className="contact-form-wrap" data-bg-src="assets/img/bg/contact_bg_1.png">
                                                
                        {/* <p className="mt-n1 mb-30 sec-text">Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                        <ContactForm />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Contact;
