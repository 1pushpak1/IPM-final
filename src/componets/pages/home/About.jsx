import React from 'react'

function About() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">ABOUT IPM PRIME</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">About</a></li>
                  <li>IPM PRIME</li>
               </ul>
            </div>
         </div>
      </div>
      <section className="space-top space-extra2-bottom">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-lg-8">
                  <div className="course-single">
                     <div className="course-single-top">
                        {/* <div className="course-img"><img src="assets/img/course/course-details.png" alt="Course Image" /> </div> */}
                        {/* <div className="course-meta style2"><span><i className="fal fa-file"></i>Lesson 8</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div> */}
                        <h2 className="course-title">Welcome to IPM PRIME</h2>
                        <ul className="course-single-meta">
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        </ul>
                     </div>
                     <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                                
                                <p>IPM PIRME is a students' Mentorship Platform exclusively for IPM-AT,JIPMT and other U.G. Managemwnt Entrance Testpreps. IPM PRIME lead by a team of highly experienced faculties and IIM allumni Mentor, aims to provide "Presonalizes Mentorship Program" which are meticulously curates and customised tp suit the individual requirements of our mentees as we believe that every student is capable of cracking these tests if they get proper guidance and personalizes mentors.

                                </p>
                                <p>All students are not same, they all have diffrent needs, strengths and weaknesses. So we as a team work believe in working with our student as their mate who are accessible to guide them at every step and enable them to accomplish theirgoal in the most effective manner.</p>
                                <h5 className="h5 mt-40">SELECTION & ADMISSION PROCESS</h5>
                                <div className="col-md-auto">
                        <div className="checklist">
                           <ul>
                              <li>Get access to Prime Mentorship Programs</li>
                              <li>Popular topics to learn now</li>
                              <li>Find the right instructor for you</li>
                           </ul>
                        </div>
                     </div>
                                <div className="title-area mb-4 mt-5">
                                    {/* <h2 className="sec-title mb-0">Frequently Asked Question?</h2> */}
                                </div>
                                <div className="accordion-area accordion" id="faqAccordion">
                                    <div className="accordion-card">
                                        {/* <div className="accordion-header" id="collapse-item-1"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">What Does It Take Excellent Author?</button></div> */}
                                        {/* <div id="collapse-1" className="accordion-collapse collapse" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p className="faq-text">The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, a Edura or team might be at your home for half a day.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-card active">
                                    {/* <div className="accordion-header" id="collapse-item-2"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">Purpose of education is the integral development?</button></div> */}
                                    {/* <div id="collapse-2" className="accordion-collapse collapse show" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="faq-text">The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, a Edura or team might be at your home for half a day.</p> */}
                                        </div>
                                    </div>
                                    </div>
                                    <div className="accordion-card">
                                    {/* <div className="accordion-header" id="collapse-item-3"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">Education can contribute to the betterment?</button></div> */}
                                    {/* <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="faq-text">The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, a Edura or team might be at your home for half a day.</p> */}
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                {/* <h5 className="h5 mt-40">Certification</h5>
                                <p>It is designed to validate the knowledge, skills, and competencies of individuals in a specific area of study or professional field. The certification program is meticulously designed to ensure that candidates have acquired a comprehensive understanding of the subject matter. It encompasses both theoretical knowledge and practical application, allowing candidates to demonstrate their expertise in real-world scenarios.</p>
                            </div> */}
                        </div>
                     {/* </div>
                  </div> */}
            {/* //    </div> */}
               <div className="col-xxl-3 col-lg-4">
                  <aside className="sidebar-area stickypositin">
                     <div className="widget widget_info">
                        <h3 className="widget_title mt-0">Book a Free Demo</h3>
                         <form action="" className='mt-3'>
                             <div className="form-group mb-2">
                                 <input type="text" className='form-control' placeholder='Name' />
                             </div>
                             <div className="form-group mb-2">
                                 <input type="text" className='form-control' placeholder='Email' />
                             </div>
                             <div className="form-group mb-2">
                                 <input type="text" className='form-control' placeholder='Phone' />
                             </div>
                             <div className="form-group mb-2">
                                 <select name="" id="" className='form-control'>
                                     <option value="">One-On-Live Clasess</option>
                                     <option value="">Ten One-On-One Session with RV Sir</option>
                                 </select>
                             </div>
                             <div className="form-group">
                                 <button className='th-btn'>Submit</button>
                             </div>
                         </form>
                     </div>
                  </aside>
               </div>
            {/* </div>
         </div> */}
      </section>
    </>
  )
}

export default About
