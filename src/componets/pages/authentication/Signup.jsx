import React from 'react'

function Signup() {
  return (
    <>
      <div className="space" id="contact-sec">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-5">
                  <div className="contact-form-wrap">
                     <form method="POST" className="contact-form ajax-contact">
                        <div className="row">
                           <div className="col-md-12">
                              <h4>Signup</h4>
                              <p>To keep learning on your pace sign in with your personal account </p>
                              <div className="form-group">
                                 <input type="text" className="form-control style-white"  placeholder="Name*" /> <i className="fal fa-user"></i>
                              </div>
                              <div className="form-group">
                                 <input type="email" className="form-control style-white"  placeholder="Email*" /> <i className="fal fa-envelope"></i>
                              </div>
                              <div className="form-group">
                                 <input type="tel" className="form-control style-white"  placeholder="Phone*" /> <i className="fal fa-phone"></i>
                              </div>
                           </div>
                           <div className="form-btn col-12 mt-10 text-center"><button className="th-btn">Signup<i className="fas fa-long-arrow-right ms-2"></i></button></div>
                        </div>
                        <p className="form-messages mb-0 mt-3"></p>
                        <hr />
                        <p className='text-center'>If already have an account</p>
                        <div className="form-btn col-12 mt-10 text-center">
                           <a href="/login" className="th-btn btn-outline-danger">Login</a>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Signup
