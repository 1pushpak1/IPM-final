import React from 'react'

function Login() {
  return (
    <>
      {/* <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">Login</h1>
               <ul className="breadcumb-menu">
                  <li><a href="index.html">Home</a></li>
                  <li>Login</li>
               </ul>
            </div>
         </div>
      </div> */}


      <div className="space" id="contact-sec">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-5">
                  <div className="contact-form-wrap">
                     <form method="POST" className="contact-form ajax-contact">
                        <div className="row">
                           <div className="col-md-12">
                              <h4>Login</h4>
                              <p>To keep learning on your pace signup with your personal account </p>
                              <div className="form-group">
                                 <input type="email" className="form-control style-white"  placeholder="Email*" /> <i className="fal fa-envelope"></i>
                              </div>
                              <div className="form-group">
                                 <input type="password" className="form-control style-white" placeholder="Password*" /> <i className="fal fa-key"></i>
                              </div>
                           </div>
                           <div className="form-btn col-12 mt-10 text-center"><button className="th-btn">login<i className="fas fa-long-arrow-right ms-2"></i></button></div>
                        </div>
                        <p className="form-messages mb-0 mt-3"></p>
                        <hr />
                        <p className='text-center'>If not have an account</p>
                        <div className="form-btn col-12 mt-10 text-center">
                           <a href="/signup" className="th-btn btn-outline-danger">Signup</a>
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

export default Login
