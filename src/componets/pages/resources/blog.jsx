import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'

function Blog() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">BLOGS</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Resources</a></li>
                  <li>Blogss</li>
               </ul>
            </div>
         </div>
      </div>




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
                                 <h5 className="h5">Preparation of Maths section for IPMAT</h5>
                                 {/* <p>Professionally expedite synergistic technology without out-of-the-box human capital. Enthusiastically coordinate state of the art leadership after professional manufactured products. Distinctively enhance future-proof e-services whereas functionalized partnerships. Quickly streamline focused paradigms via orthogonal "outside the box" thinking. Rapidiously administrate 2.0 total linkage for cross-platform channels.</p> */}
                                 <p>Preparing for the IPMAT (Integrated Program in Management Aptitude Test) requires a dedication and structured approach to mathematics, as it is a crucial part of the exam. In this article, we will outline a comprehensive strategy to excel in the mathematics section of the IPMAT.</p>
                                 <div className="row mt-25">
                                    <div className="col-lg-6">
                                       <div className="checklist mb-4">
                                          <ul>
                                             <li> As we know that Quantitative Aptitude is an important section in the IPMAT entrance exam. So in this article, we will answer some of the most frequently asked questions related to Maths for IPMAT.
</li>
                                             <li> The weightage to Quantitative Aptitude is high for Both IPMAT Indore and IPMAT Rohtak. JIPMAT does not have a Quantitative Aptitude section.
</li>
                                             <li> What is the syllabus of Maths for IPMAT? How to prepare for this section for IPMAT? What should be the strategy to solve maths problems? We will elaborate on these things further in this article.</li>
                                             
                                          </ul>
                                       </div>
                                    </div>
                                    
                                 </div>
                                    <Link to="/#">More.</Link> 
                                    
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

export default Blog
