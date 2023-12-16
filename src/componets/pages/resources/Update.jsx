import React, { useState } from 'react'
import UpdateForm from '../form/UpdateForm';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Update() {
   const [login, setLogin] = useState(0);
   const notify = async (msg) => {
      toast(msg);
   }
   const handleSubmit = async () => {
      const user = document.getElementById("Username");
      const pass = document.getElementById("Password");
      if (user["value"] == "ipmtutorialadmin" && pass["value"] == "ipm*tutorial*admin") {
         notify("Login Successful!!")
         setLogin(1);
      }
      else {
         notify('Incorrect Credentials!!')
         const forms = document.getElementsByClassName("mt-3");
         forms[0].reset();
      }
   }
   return (
      <>
         {login ?
            <div className="space" id="contact-sec">
               <div className="container">
                  {/* <div className="map-sec">
               <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510192051!2d76.76357332396312!3d28.644287356088828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1692724000760!5m2!1sen!2sin" width="100%" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div> */}
                  <div className="row">
                     <div className="col-xl-7 mx-auto">
                        <div className="contact-form-wrap" data-bg-src="assets/img/bg/contact_bg_1.png">
                           <span className="sub-title">Update Resource Pages</span>
                           <h2 className="border-title">Fill the form to update the details</h2>
                           {/* <p className="mt-n1 mb-30 sec-text">Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                           <UpdateForm />
                           <Toaster />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            :
            <div className="space" id="contact-sec">
               <div className="container">
                  {/* <div className="map-sec">
<div className="map">
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510192051!2d76.76357332396312!3d28.644287356088828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1692724000760!5m2!1sen!2sin" width="100%" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div> */}
                  <div className="row">
                     <div className="col-xl-7 mx-auto">
                        <div className="contact-form-wrap" data-bg-src="assets/img/bg/contact_bg_1.png">
                           {/* <span className="sub-title">Login</span> */}
                           <h2 className="border-title">Login</h2>
                           {/* <p className="mt-n1 mb-30 sec-text">Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                           <>
                              <aside className="sidebar-area">
                                 <div className="widget widget_info">
                                    <h3 className="widget_title mt-0">Enter your Login Credentials</h3>
                                    <form className='mt-3'>
                                       <div className="form-group mb-2">
                                          <input id="Username" type="text" name="name" className='form-control' placeholder='Username' required />
                                       </div>
                                       <div className="form-group mb-2">
                                          <input id="Password" type="text" name="email" className='form-control' placeholder='Password' required />
                                       </div>
                                       <div className="form-group">
                                          <Toaster />
                                          <p onClick={() => { handleSubmit() }} type="submit" value="Send" className='th-btn'>Submit</p>
                                       </div>
                                    </form>
                                 </div>
                              </aside>
                           </>
                        </div>
                     </div>
                  </div>
               </div>
            </div>}
      </>
   )
}

export default Update;
