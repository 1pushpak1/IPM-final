import { React, useState } from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import Contact from '../form/ContactForm'
import { Link } from 'react-router-dom';
import { Modal } from '@weahead/react-customizable-modal-vite'

function Scholarshiptest() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <>
         <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
            <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
            <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
            <div className="container">
               <div className="breadcumb-content text-center">
                  <h1 className="breadcumb-title">Scholarshiptest Program</h1>
                 
               </div>
            </div>
         </div>


         {/* <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6">
                  <div className="wcu-img-1">
                     <div className="img1"><img src="assets/img/normal/short.png" alt="img" /></div>

                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="wcu-wrap1">
                     <div className="title-area mb-25">

                        <h2 className="sec-title">"IPM PRIME is a Mentorship Platform not a random Coaching institute"</h2>
                        <h5>Its Never Too Late!</h5>


                     </div>
                  </div>
               </div>
            </div>
         </div> */}

<section>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-9 col-lg-8">
                     <div className="course-single">
                        <div className="course-single-bottom">
                           <ul className="nav course-tab" id="courseTab" role="tablist">
                              {/* <li className="nav-item" role="presentation"><a className="nav-link active" id="description-tab" data-bs-toggle="tab" href="#Coursedescription" role="tab" aria-controls="Coursedescription" aria-selected="true"><i className="fa-regular fa-bookmark"></i>Premium mentorship</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="curriculam-tab" data-bs-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false"><i className="fa-regular fa-book"></i>FREE Session</a></li> */}
                              {/* <li className="nav-item" role="presentation"><a className="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false"><i className="fa-regular fa-user"></i>Your Mentors</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false"><i className="fa-regular fa-star-sharp"></i>Testimonial</a></li> */}
                           </ul>
                           <div className="tab-content" id="productTabContent">
                              <div className="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">
                                 <div className="course-description">
                                    <h5 align='center' className="h5">All India PRIME SCHOLARSHIP TEST</h5>{'\n'}
                                    {/* <p>Professionally expedite synergistic technology without out-of-the-box human capital. Enthusiastically coordinate state of the art leadership after professional manufactured products. Distinctively enhance future-proof e-services whereas functionalized partnerships. Quickly streamline focused paradigms via orthogonal "outside the box" thinking. Rapidiously administrate 2.0 total linkage for cross-platform channels.</p> */}
                                    <div><h5 align='center' >    The Expert in ANYTHING
                                       Was once a BEGINNER !!!
                                    </h5></div> {'\n'}
                                    <p align='center'><b>Get into IIM right after Class 12th</b></p>{'\n'}{'\n'}
                                    <div className="tab-content" id="productTabContent">
                                       <div className="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">
                                          <div className="course-description">
                                             <h5 align='center' className="h5">All India PRIME SCHOLARSHIP TEST</h5>{'\n'}{'\n'}{'\n'}{'\n'}
                                             {/* <p>Professionally expedite synergistic technology without out-of-the-box human capital. Enthusiastically coordinate state of the art leadership after professional manufactured products. Distinctively enhance future-proof e-services whereas functionalized partnerships. Quickly streamline focused paradigms via orthogonal "outside the box" thinking. Rapidiously administrate 2.0 total linkage for cross-platform channels.</p> */}
                                             <div><h5 align='center' >    The Expert in ANYTHING
                                                Was once a BEGINNER !!!
                                             </h5></div> {'\n'}{'\n'}{'\n'}
                                             <p align='center'><b>Get into IIM right after Class 12th</b></p>{'\n'}{'\n'}{'\n'}{'\n'}
                                             <h6 align='center'>ARE YOU in CLASS 10th, 11th or 12Th? and Planning to take the IPM-AT Entrance for admission to IIMs?</h6>{'\n'}
                                             <p align='center'>Prepare for IPM-AT with IPM Prime’s most trusted PREMIUM MENTORSHIP PROGRAM !!!{'\n'}
                                             </p>{'\n'}{'\n'}
                                             <h5 align="center">A CHANCE TO WIN UPTO 80% SCHOLARSHIP !!!!</h5>{'\n'}
                                             <p align='center' >  Enroll in the All India Prime Scholarship Test and claim your seat and also an opportunity to win scholarship up-to 80% </p>

                                             <div className="btn-group mt-40"><Link to="/scholarship" className="th-btn">Enroll For The Scholarship Test<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>


                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xxl-3 col-lg-4">
                              <BookFreeDemo />
                           </div>
                        </div>
                     </div>
                     <div className="cta-area-1">
                        <div className="container">
                           <div className="row align-items-right justify-content-between">
                              <div className="col-lg-12">
                                 <div className="cta-wrap title-area mb-0">

                                    <div className="cta-content">
                                       <h2 className=" footer-contact_link">Have Questions ? Call us : +91-99100 88661</h2>

                                    </div>
                                    <Link to="/contactus" className="th-btn style8">Book a Counselling Session<i className="fas fa-arrow-right ms-1"></i></Link>
                                 </div>
                                 <div className="btn-group mt-40"><button onClick={() => { setIsOpen(true) }} className="th-btn">Enroll For The Scholarship Test<i className="fa-regular fa-arrow-right ms-2"></i></button></div>
                                 <Modal
                                    isOpen={isOpen}
                                    onEscape={() => {
                                       setIsOpen(false)
                                    }}
                                    onOverlayClick={() => {
                                       setIsOpen(false)
                                    }}
                                 >
                                    <div style={{ background: "white", padding: 10, marginRight: -10 }}>
                                       <Contact />
                                    </div>
                                    <button
                                       style={{
                                          position: "absolute",
                                          top: 30,
                                          right: 30,
                                          zIndex: 101,
                                          background: "none",
                                          border: "none",
                                          color: "black",
                                          fontSize: 30
                                       }}
                                       onClick={() => {
                                          setIsOpen(false)
                                       }}
                                    >
                                       <i class="fa-solid fa-circle-xmark"></i>
                                    </button>
                                 </Modal>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                 
                 
               </div>
            </div>
         </section >

        
                

      </>
   )
}

export default Scholarshiptest