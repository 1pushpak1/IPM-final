import React, {useRef} from 'react'
import emailjs from 'emailjs-com';


function Scholarshiptest() {

    const formRef = useRef();

    function sendEmail(e) {
        e.preventDefault();
        const form = e.target;

        if (form.checkValidity()) {
            emailjs.sendForm('service_7h8nvct', 'template_w08t5bf', form, 'lcNiqMUS0_8DOjqy9')
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
                <div className="form-group"><input type="tel" className="form-control style-white" name="number" id="number" placeholder="Phone Number*" required /> <i className="fal fa-phone"></i></div>
            </div>
            <div className="col-12">
            <select name="service" className='form-control'placeholder='Select Program' > <i className="fal fa-pen"></i>
                                <option value="Mahascholarship test for Premium Mentorship batch">Maha Scholarship test for Premium Mentorship batch</option>
                                <option value="Mahascholarship test for Achivers Mentorship batch">Maha Scholarship test for Achivers Mentorship batch</option>
                                {/* <option value="Achivers Mentorship Program">Achivers Mentorship Program</option>
                                <option value="Master Mentorship Program">Master Mentorship Program</option>
                                <option value="Short Mentorship Program">Short Mentorship Program</option>
                                <option value="Speedester Mentorship Program">Speedester Mentorship Program</option>
                                <option value="Mocktest Mentorship Program">Mocktest Mentorship Program</option>
                                <option value="Classroom program">Classroom Program</option> */}
                            </select>
                {/* <div className="form-group"><textarea name="message" id="message" cols="30" rows="3" className="form-control style-white" placeholder="Write Your Message*" required></textarea> <i className="fal fa-pen"></i></div> */}
            </div>
            <div className="form-btn col-12 mt-10"><button className="th-btn">Book Your Slot<i className="fas fa-long-arrow-right ms-2"></i></button></div>
        </div>
        <p className="form-messages mb-0 mt-3"></p>
        </form>
    </>
  )
}

export default Scholarshiptest
