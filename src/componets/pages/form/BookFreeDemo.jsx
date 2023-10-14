import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function BookFreeDemo() {
    const formRef = useRef();

    function sendEmail(e) {
        e.preventDefault();
        const form = e.target;

        if (form.checkValidity()) {
            emailjs.sendForm('service_8olz9ou', 'template_etwgagg',  form.current, '_WTQnIBSrnhLNcbOB')
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
            <aside className="sidebar-area">
                <div className="widget widget_info">
                    <h3 className="widget_title mt-0">Book Free Demo</h3>
                    <form ref={formRef} onSubmit={sendEmail} className='mt-3'>
                        <div className="form-group mb-2">
                            <input type="text" name="name" className='form-control' placeholder='Name' required />
                        </div>
                        <div className="form-group mb-2">
                            <input type="text" name="email" className='form-control' placeholder='Email' required />
                        </div>
                        <div className="form-group mb-2">
                            <input type="text" name="phone" className='form-control' placeholder='Phone' required />
                        </div>
                        <div className="form-group mb-2">
                            <select name="service" className='form-control'placeholder='Select Program'>
                                <option value="Premium Mentorship program">Premium Mentorship Program</option>
                                <option value="Achivers Mentorship Program">Achivers Mentorship Program</option>
                                <option value="Master Mentorship Program">Master Mentorship Program</option>
                                <option value="Short Mentorship Program">Short Mentorship Program</option>
                                <option value="Speedester Mentorship Program">Speedester Mentorship Program</option>
                                <option value="Mocktest Mentorship Program">Mocktest Mentorship Program</option>
                                <option value="Classroom program">Classroom Program</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" value="Send" className='th-btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </aside>
        </>
    )
}

export default BookFreeDemo;
