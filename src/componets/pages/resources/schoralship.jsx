import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'

function Scholarship() {
  return (
    <>
   
   <section>
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-lg-8">
                  <div className="course-single">
                     <div className="course-single-bottom">
                     
                        {/* <div className="course-img"><img src="assets/img/course/course-details.png" alt="Course Image" /> </div> */}
                        {/* <div className="course-meta style2"><span><i className="fal fa-file"></i>Lesson 8</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div> */}
                        {/* <h2 className="course-title">Five Year Integrated Programme in Management (IPM)</h2>
                        <ul className="course-single-meta"> */}
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        {/* </ul> */}
                       
                     
                        <ul className="nav course-tab" id="courseTab" role="tablist">
                           {/* <li className="nav-item" role="presentation"><a className="nav-link active" id="description-tab" data-bs-toggle="tab" href="#Coursedescription" role="tab" aria-controls="Coursedescription" aria-selected="true"><i className="fa-regular fa-bookmark"></i>Premium mentorship</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="curriculam-tab" data-bs-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false"><i className="fa-regular fa-book"></i>FREE Session</a></li> */}
                           {/* <li className="nav-item" role="presentation"><a className="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false"><i className="fa-regular fa-user"></i>Your Mentors</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false"><i className="fa-regular fa-star-sharp"></i>Testimonial</a></li> */}
                        </ul>
                        <div className="tab-content" id="productTabContent">
                           <div className="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">
                              <div className="course-description">
                                 <h5 className="h5">All India PRIME SCHOLARSHIP TEST</h5>
                                 {/* <p>Professionally expedite synergistic technology without out-of-the-box human capital. Enthusiastically coordinate state of the art leadership after professional manufactured products. Distinctively enhance future-proof e-services whereas functionalized partnerships. Quickly streamline focused paradigms via orthogonal "outside the box" thinking. Rapidiously administrate 2.0 total linkage for cross-platform channels.</p> */}
                                 <div><h5>     The Expert in ANYTHING 
                                    Was once a BEGINNER !!!
</h5></div>
                                    <p><b>Get into IIM right after Class 12th</b></p>
                                    <h6>ARE YOU in CLASS 10th, 11th or 12Th? and Planning to take the IPM-AT Entrance for admission to IIMs?</h6>
                                    <p>Prepare for IPM-AT with IPM Prime’s most trusted PREMIUM MENTORSHIP PROGRAM !!!
</p>
<h5 align="center">A CHANCE TO WIN UPTO 80% SCHOLARSHIP !!!!</h5>
<p>   Enroll in the All India Prime Scholarship Test and claim your seat and also an opportunity to win scholarship up-to 80% </p>

<div className="btn-group mt-40"><Link to="/testmod" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/scholarship" className="th-btn">Enroll For The Scholarship Test<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>

                                
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xxl-3 col-lg-4">
                    <BookFreeDemo/>
               </div>
            </div>
         </div>
       
      
      </section>
    </>
  )
}

export default Scholarship