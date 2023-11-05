import React, { useRef } from 'react'
import emailjs from 'emailjs-com';


function ContactForm() {

    const formRef = useRef();

    function sendEmail(e) {
        e.preventDefault();
        const form = e.target;

        if (form.checkValidity()) {
            emailjs.sendForm('service_8olz9ou', 'template_etwgagg', form, '_WTQnIBSrnhLNcbOB')
                .then((result) => {
                    console.log(result.text);
                    formRef.current.reset();
                    window.location.reload(); // Refresh the page
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            form.reportValidity(); // Display validation messages if fields are not filled
        }
    }

    return (
        <>
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
                        <div className="form-group"><input type="tel" className="form-control style-white" name="phone" id="phone" placeholder="Phone Number*" required /> <i className="fal fa-phone"></i></div>
                    </div>
                    <div className="col-12">
                        <div className="form-group"><textarea name="message" id="message" cols="30" rows="3" className="form-control style-white" placeholder="Write Your Message*" required></textarea> <i className="fal fa-pen"></i></div>
                    </div>
                    <div className="form-btn col-12 mt-10"><button type="submit" value="Submit" className="th-btn">Send Message<i className="fas fa-long-arrow-right ms-2"></i></button></div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
            </form>
        </>
    )
  return (
    <>
    <form ref={formRef} onSubmit={sendEmail} className="contact-form ajax-contact">
        <div className="row">
            <div className="col-md-12">
                <div className="form-group"><input type="text" className="form-control style-white" name="name" id="name" placeholder="Your Name*" required /> <i className="fal fa-user"></i></div>
            </div>
            <div className="col-md-12">
                <div className="form-group"><input type="email" className="form-control style-white" name="email" id="email" placeholder="Email Address*" required /> <i className="fal fa-envelope"></i></div>
            </div>
            <div className="col-md-12">
                <div className="form-group"><input type="school" className="form-control style-white" name="school" id="school" placeholder="School*" required /> <i className="fal fa-book"></i></div>
            </div>
            <div className="col-md-12">
                <div className="form-group"><input type="tel" className="form-control style-white" name="number" id="number" placeholder="Phone Number*" required /> <i className="fal fa-phone"></i></div>
            </div>
            <div className="col-md-12">
                <div className="form-group"><input type="class" className="form-control style-white" name="class" id="class" placeholder="Class*" required /> <i className="fal fa-phone"></i></div>
            </div>
            <div className="col-md-12">
                <div className="form-group"><input type="city" className="form-control style-white" name="city" id="city" placeholder="City*" required /> <i className="fal fa-phone"></i></div>
            </div>
           
            <div className="form-btn col-12 mt-10"><button type="submit" value="Submit" className="th-btn">Send Message<i className="fas fa-long-arrow-right ms-2"></i></button></div>
        </div>
        <p className="form-messages mb-0 mt-3"></p>
        </form>
    </>
  )
}

export default ContactForm
