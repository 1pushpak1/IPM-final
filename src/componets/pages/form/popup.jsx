import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import emailjs from 'emailjs-com';

export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <form ref={formRef} onSubmit={sendEmail} className="contact-form ajax-contact">
        <div className="row">
            <div className="col-md-6">
                <div className="form-group"><input type="text" className="form-control style-white" name="name" id="name" placeholder="Your Name*" required /> <i className="fal fa-user"></i></div>
            </div>
            <div className="col-md-6">
                <div className="form-group"><input type="email" className="form-control style-white" name="email" id="email" placeholder="Email Address*" required /> <i className="fal fa-envelope"></i></div>
            </div>
            <div className="col-md-6">
                <div className="form-group"><input type="subject" className="form-control style-white" name="subject" id="subject" placeholder="Subject*" required /> <i className="fal fa-book"></i></div>
            </div>
            <div className="col-md-6">
                <div className="form-group"><input type="tel" className="form-control style-white" name="number" id="number" placeholder="Phone Number*" required /> <i className="fal fa-phone"></i></div>
            </div>
            <div className="col-12">
                <div className="form-group"><textarea name="message" id="message" cols="30" rows="3" className="form-control style-white" placeholder="Write Your Message*" required></textarea> <i className="fal fa-pen"></i></div>
            </div>
            <div className="form-btn col-12 mt-10"><button type="submit" value="Submit" className="th-btn">Send Message<i className="fas fa-long-arrow-right ms-2"></i></button></div>
        </div>
        <p className="form-messages mb-0 mt-3"></p>
        </form>
  
  
  
  
  </Popup>
);