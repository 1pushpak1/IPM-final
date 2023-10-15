import React from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <Banner/>
      <div className="space overflow-hidden" id="about-sec">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6">
                  <div className="img-box1 mb-40 mb-xl-0">
                  <div className="img1"><img src="assets/img/normal/att3.jpg" alt="img" /></div>
                     {/* <div className="img1"><img className="tilt-active" src="assets/img/normal/att3.jpg" alt="About" /></div> */}
                     {/* <div className="about-grid" data-bg-src="assets/img/normal/about_1_3.png">
                         <h3 className="about-grid_year"><span className="counter-number">10</span>k<span className="text-theme">+</span></h3> 
                        <p className="about-grid_text">Students Active Our Courses</p>
                     </div> */}
                     {/* <div className="img2"><img className="tilt-active" src="assets/img/normal/att3.jpg" alt="About" /></div> */}
                     {/* <div className="shape-mockup about-shape1 jump" data-left="-67px" data-bottom="0"><img src="assets/img/normal/about_1_shape1.png" alt="img" /></div> */}
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="title-area mb-30">
                     <span className="sub-title"><i className="fal fa-book me-2"></i> About IPM Prime</span>
                     <h2 className="sec-title">Welcome to IPM Prime</h2>
                  </div>
                  <p className="mt-n2 mb-25">IPM PIRME is a students' Mentorship Platform exclusively for IPM-AT,JIPMT and other U.G. Managemwnt Entrance Testpreps. IPM PRIME lead by a team of highly experienced faculties and IIM allumni Mentor, aims to provide "Presonalizes Mentorship Program" which are meticulously curates and customised tp suit the individual requirements of our mentees as we believe that every student is capable of cracking these tests if they get proper guidance and personalizes mentors.</p>
                  {/* <p className="mb-30">All students are not same, they all have diffrent needs, strengths and weaknesses. So we as a team work believe in working with our student as their mate who are accessible to guide them at every step and enable them to accomplish theirgoal in the most effective manner.</p> */}
                  <div className="row align-items-center">
                     {/* <div className="col-md-auto">
                         <div className="about-grid_img mb-30 mb-md-0"><img src="assets/img/normal/about_1_4.png" alt="img" /></div>
                     </div> */}
                     <div className="col-md-auto">
                        <div className="checklist">
                           <ul>
                              <li>Get access to Prime Mentorship Programs</li>
                              <li>Popular topics to learn now</li>
                              <li>Find the right instructor for you</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="btn-group mt-40"><Link to="/about" className="th-btn">About More<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
               </div>
            </div>
         </div>
      </div>
      <section className="space" data-bg-src="assets/img/bg/course_bg_1.png" id="course-sec">
         <div className="container">
            <div className="mb-35 text-center text-md-start">
               <div className="row align-items-center justify-content-between">
                  <div className="col-md-8">
                     <div className="title-area mb-md-0">
                        <span className="sub-title"><i className="fal fa-book me-2"></i> Popular Courses</span>
                        <h2 className="sec-title">Our Courses</h2>
                        <h5>Pick the best suited course for yourself</h5>
                     </div>
                  </div>
                  {/* <div className="col-md-auto"><a href="#" className="th-btn">View All Courses<i className="fa-solid fa-arrow-right ms-2"></i></a></div> */}
               </div>
            </div>






            <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-lg-12">
                  <div className="course-single">
                     <div className="course-single-bottom">
                        <ul className="nav course-tab" id="courseTab" role="tablist">
                           <li className="nav-item" role="presentation"><a className="nav-link active" id="description-tab" data-bs-toggle="tab" href="#Coursedescription" role="tab" aria-controls="Coursedescription" aria-selected="true"><i className="fa-regular fa-bookmark"></i>Premium Courses</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="curriculam-tab" data-bs-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false"><i className="fa-regular fa-book"></i>Popular Courses</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false"><i className="fa-regular fa-user"></i>Test Series</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false"><i className="fa-regular fa-star-sharp"></i>Short Term Courses</a></li>
                        </ul>
                        <div className="tab-content" id="productTabContent">
                           <div className="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">
                              
                           <div className="row slider-shadow th-carousel course-slider-1" data-slide-show="4" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course 1.png" alt="img" />  </div>
                     <div className="course-content">
                        
                        <h5 className="course-title">Premium Mentorship Program</h5>
                        <div className="btn-group mt-40"><Link to="/prep-module" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course2.png" alt="img" />  </div>
                     <div className="course-content">
                       
                         <h5 className="course-title">Premium Mentorship Program </h5>
                         <h6 >For Class 11th</h6>
                        {/* // <div className="course-meta"><span><i className="fal fa-file"></i>10 Weeks</span> <span><i className="fal fa-user"></i>Students 50+</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div> */} 
                        <div className="btn-group mt-40"><Link to="/prep-module" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course 2.png" alt="img" />  </div>
                     <div className="course-content">
                       
                        <h5 className="course-title">Premium Mentorship </h5>
                        <h6>(Ranker's Program)</h6>
                        <div className="btn-group mt-40"><Link to="/prep-module" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                     </div>
                  </div>
               </div>
              
               </div>
                           </div>
                           <div className="tab-pane fade" id="curriculam" role="tabpanel" aria-labelledby="curriculam-tab">
                              
                              
                           <div className="row slider-shadow th-carousel course-slider-1" data-slide-show="4" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course 3.png" alt="img" />  </div>
                     <div className="course-content">
                    
                        <h5 className="course-title">Achivers' Mentorship Program </h5>
                        <h6>(For Class 11)</h6>
                        <div className="btn-group mt-40"><Link to="/achivers" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course 4.png" alt="img" />  </div>
                     <div className="course-content">
                        
                        <h5 className="course-title">Masters' Mentorship Program</h5>
                        <h6>(For Class 12)</h6>
                        <div className="btn-group mt-40"><Link to="/master" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course 5.png" alt="img" />  </div>
                     <div className="course-content">
                       
                        <h5 className="course-title">Mentorship appearing student </h5>
                        <h6>rankers & Dropers</h6>
                        <div className="btn-group mt-40"><Link to="/master" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                     </div>
                  </div>
               </div>
              
               </div>

                                 

                           </div>
                           <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                           <div className="row slider-shadow th-carousel course-slider-1" data-slide-show="4" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course 6.png" alt="img" />  </div>
                     <div className="course-content">
                       
                        <h5 className="course-title">Pocket IPM Test Series</h5>
                        <div className="btn-group mt-40"><Link to="/testmod" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course 7.png" alt="img" />  </div>
                     <div className="course-content">
                       
                        <h5 className="course-title">Prime IPM Test Series</h5>
                        <div className="btn-group mt-40"><Link to="/testmod" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course 8.png" alt="img" />  </div>
                     <div className="course-content">
                       
                        <h5 className="course-title">Premium IPM Test series</h5>
                        <div className="btn-group mt-40"><Link to="/testmod" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                     </div>
                  </div>
               </div>
              
               </div>
                     
                           </div>

                           <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                              
                           <div className="row slider-shadow th-carousel course-slider-1" data-slide-show="4" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">
               
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course 9.png" alt="img" />  </div>
                     <div className="course-content">
                        
                        <h5 className="course-title">MockTest Mentorship Program</h5>
                        <div className="btn-group mt-40"><Link to="/short" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course 10.png" alt="img" />  </div>
                     <div className="course-content">
                        
                        <h5 className="course-title">Short Term Courses </h5>
                        <div className="btn-group mt-40"><Link to="/short" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                     </div>
                  </div>
               </div>
               </div>
          </div> 
           </div>
         </div>
       </div>
                </div>
                </div>
         </div>
         </div>
      </section>
      <div className="cta-area-1">
         <div className="container">
            <div className="row align-items-center justify-content-between">
               <div className="col-lg-8">
                  <div className="cta-wrap title-area mb-0">
                     <div className="cta-icon"><img src="assets/img/normal/cta-icon1.png" alt="icon" /></div>
                     <div className="cta-content">
                        <h2 className="cta-title sec-title">Get Personalized Mentorship Program</h2>
                      
                     </div>
                     <Link to="/contactus"  className="th-btn style8">Book a Counselling Session<i className="fas fa-arrow-right ms-1"></i></Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="cta-img-1" data-overlay="title" data-opacity="8"><img src="assets/img/normal/cta_1_1.png" alt="Image" /> <a href="javascript:;" className="play-btn style2 popup-video"><i className="fa-sharp fa-solid fa-play"></i></a></div>
      </div>
      <div className="why-area-1 space overflow-hidden">
         <div className="shape-mockup why-shape-1 jump" data-top="10%" data-left="7%"><img src="assets/img/normal/about_1_shape1.png" alt="img" /></div>
         <div className="shape-mockup why-shape-2" data-bg-src="assets/img/normal/wcu_1_shape1.png"></div>
         <div className="shape-mockup why-shape-3 jump-reverse" data-bottom="25%" data-right="-3%"><img src="assets/img/normal/wcu_1_shape2.png" alt="img" /></div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6">
                  <div className="wcu-img-1">
                     <div className="img1"><img src="assets/img/normal/Seminar-pana.png" alt="img" /></div>
                    
                     <div className="text-end"><Link to="/whyipm" className="th-btn mt-30" >More <i className="far fa-arrow-right ms-1"></i></Link></div>
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="wcu-wrap1">
                     <div className="title-area mb-25">
                        <span className="sub-title"><i className="fal fa-book me-2"></i> WHY IPM PRIME</span>
                        <h2 className="sec-title">"IPM PRIME is a Mentorship Platform not a random Coaching institute"</h2>
                        <p className="sec-text mt-20">IPM PRIME is a student Mentorship Platform, definitely not a random Coaching institute hell bent on only completing the syllabus. There is a reason why we call ourself a mentorship platform and offer personalised mentorship, We are completely aware of the gaps in the functioning of today's coaching industry which provides "One Size Fit all" Kind of sollution but our student are diffrent varies requirements. Our experienced mentors and IIM allumni Coaches, Know the correct path to address this serious gap in the test prep arena</p>
                        <p className="sec-text mt-20">"We don't offer Crash Courses" Even our short term courses are only subject wise or topic wise Mentorship programs as we believe you can rush the whole preparation it is a process. We don't want to fool anybody</p>
                     </div>
                     <div className="row gy-4">
                        <div className="col-md-6">
                           <div className="wcu-box">
                              <div className="wcu-box_icon"><i className="fas fa-check-circle"></i></div>
                              <div className="wcu-box_details">
                                 <h3 className="box-title">Mentorship Program</h3>
                                
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="wcu-box">
                              <div className="wcu-box_icon"><i className="fas fa-check-circle"></i></div>
                              <div className="wcu-box_details">
                                 <h3 className="box-title">Individual Attention</h3>
                                
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="wcu-box">
                              <div className="wcu-box_icon"><i className="fas fa-check-circle"></i></div>
                              <div className="wcu-box_details">
                                 <h3 className="box-title">Flexible Timing</h3>
                                 {/* <p className="wcu-box_text">Seamlessly envisioneer tactical data through services.</p> */}
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="wcu-box">
                              <div className="wcu-box_icon"><i className="fas fa-check-circle"></i></div>
                              <div className="wcu-box_details">
                                 <h3 className="box-title">Top Faculties</h3>
                                 {/* <p className="wcu-box_text">Seamlessly envisioneer tactical data through services.</p> */}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="container">
         <div className="counter-area-1 bg-theme" data-bg-src="assets/img/bg/counter-bg_1.png">
            <div className="row justify-content-between">
               <div className="col-sm-6 col-xl-3 counter-card-wrap">
                  <div className="counter-card">
                     <h2 className="counter-card_number"><span className="counter-number">1000</span><span className="fw-normal">+</span></h2>
                     <p className="counter-card_text"><strong>Successfully</strong> Trained</p>
                  </div>
               </div>
               <div className="col-sm-6 col-xl-3 counter-card-wrap">
                  <div className="counter-card">
                     <h2 className="counter-card_number"><span className="counter-number">200</span><span className="fw-normal">+</span></h2>
                     <p className="counter-card_text"><strong>Classes</strong> Completed</p>
                  </div>
               </div>
               <div className="col-sm-6 col-xl-3 counter-card-wrap">
                  <div className="counter-card">
                     <h2 className="counter-card_number"><span className="counter-number">100</span><span className="fw-normal">+</span></h2>
                     <p className="counter-card_text"><strong>Satisfaction</strong> Rate</p>
                  </div>
               </div>
               <div className="col-sm-6 col-xl-3 counter-card-wrap">
                  <div className="counter-card">
                     <h2 className="counter-card_number"><span className="counter-number">5</span>k<span className="fw-normal">+</span></h2>
                     <p className="counter-card_text"><strong>Students</strong> Community</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <section className="cta-area-2 position-relative space-bottom">
         <div className="cta-bg-img" data-bg-src="assets/img/bg/cta-bg2.png"></div>
         <div className="cta-bg-img2" data-bg-src="assets/img/bg/cta-bg2-shape.png"></div>
         <div className="shape-mockup cta-shape1 jump d-md-block d-none" data-left="-2%" data-bottom="-7%"><img src="assets/img/normal/cta_2_shape1.png" alt="img" /></div>
         <div className="shape-mockup cta-shape2 jump-reverse d-md-block d-none" data-right="-1%" data-top="-3%"><img src="assets/img/normal/cta_2_shape2.png" alt="img" /></div>
         <div className="shape-mockup cta-shape3 spin d-md-block d-none" data-right="20%" data-top="30%"><img src="assets/img/normal/cta_2_shape3.png" alt="img" /></div>
         <div className="container text-center">
            <div className="cta-wrap2">
               <div className="title-area text-center mb-35">
                  <span className="sub-title"><i className="fal fa-book me-2"></i>IPM PRIME</span>
                  <h2 className="sec-title text-white">MAHA <span className="text-theme2">SCHOLARSHIP</span> TEST<br/><span className="fw-normal">For Mentorship Batch</span></h2>
                  <p className="cta-text">Join Us on 21st Sep 2023</p>
               </div>
               <div className="btn-group justify-content-center"><Link to="/contactus" className="th-btn style3">Book A COUNSELLING SESSION<i className="fas fa-arrow-right ms-2"></i></Link> <Link to="/scholarship" className="th-btn style2">Register For Test<i className="fas fa-arrow-right ms-2"></i></Link></div>
            </div>
         </div>
      </section>
      <div className="team-area overflow-hidden space" id="team-sec">
         <div className="shape-mockup team-bg-shape1 jump-reverse d-xxl-block d-none" data-left="-2%" data-top="0"><img src="assets/img/team/team-shape_1_1.png" alt="img" /></div>
         <div className="shape-mockup team-bg-shape2 jump d-xxl-block d-none" data-left="40%" data-top="20%"><img src="assets/img/team/team-shape_1_2.png" alt="img" /></div>
         <div className="shape-mockup team-bg-shape3 jump" data-left="5%" data-bottom="9%"><img src="assets/img/team/team-shape_1_3.png" alt="img" /></div>
         <div className="shape-mockup team-bg-shape4 spin" data-left="40%" data-bottom="20%"><img src="assets/img/team/team-shape_1_4.png" alt="img" /></div>
         <div className="shape-mockup team-bg-shape5 jump d-lg-block d-none" data-right="-7%" data-top="10%"><img src="assets/img/team/team-shape_1_5.png" alt="img" /></div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6 mb-40 mb-xl-0">
                  <div className="title-area mb-30">
                     <span className="sub-title"><i className="fal fa-book me-2"></i> Our Instructor</span>
                     <h2 className="sec-title">Meet Our Expert Mentors</h2>
                     <p className="sec-text mt-20">Team IPM PRIME is here to make you work on your weaknesses in the most effective manner and at the same time make your strangths sharpened with proven methodologies and believe us</p>
                     <p className="sec-text">You are ready to ACE any test!!</p>
                  </div>
                  <div className="btn-group mt-30"><a href="#" className="th-btn">Explore Courses<i className="fas fa-arrow-right ms-2"></i></a> <a href="/contactus" className="th-btn style7">Speek to Mentor<i className="fas fa-arrow-right ms-2"></i></a></div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="team-card team-card-1-1 team-card-1-1-active mt-0">
                     <div className="team-img-wrap">
                        <div className="team-img"><img src="assets/img/team/Rajeev.jpg" alt="Team" /></div>
                     </div>
                     <div className="team-hover-wrap">
                        <div className="team-social">
                           <a href="#" className="icon-btn"><i className="far fa-plus"></i></a>
                           <div className="th-social"><a target="_blank" href="https://vimeo.com/"><i className="fab fa-vimeo-v"></i></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a> <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a></div>
                        </div>
                        <div className="team-content">
                           <h3 className="team-title"><a href="#">Rajeev Sir</a></h3>
                           <span className="team-desig">Senior Mentor</span>
                        </div>
                        {/* <div className="team-info"><span><i className="fal fa-file-check"></i>2 Courses</span> <span><i className="fa-light fa-users"></i>Students 60+</span></div> */}
                     </div>
                  </div>
                  <div className="team-card team-card-1-1">
                     <div className="team-img-wrap">
                        <div className="team-img"><img src="assets/img/team/richa.jpg" alt="Team" /></div>
                     </div>
                     <div className="team-hover-wrap">
                        <div className="team-social">
                           <a href="#" className="icon-btn"><i className="far fa-plus"></i></a>
                           <div className="th-social"><a target="_blank" href="https://vimeo.com/"><i className="fab fa-vimeo-v"></i></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a> <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a></div>
                        </div>
                        <div className="team-content">
                           <h3 className="team-title"><a href="#">Richa Mam</a></h3>
                           <span className="team-desig">Mentor</span>
                        </div>
                        {/* <div className="team-info"><span><i className="fal fa-file-check"></i>3 Courses</span> <span><i className="fa-light fa-users"></i>Students 50+</span></div> */}
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="team-card team-card-1-2 mt-md-0">
                     <div className="team-img-wrap">
                        <div className="team-img"><img src="assets/img/team/priyanshu.jpg" alt="Team" /></div>
                     </div>
                     <div className="team-hover-wrap">
                        <div className="team-social">
                           <a href="#" className="icon-btn"><i className="far fa-plus"></i></a>
                           <div className="th-social"><a target="_blank" href="https://vimeo.com/"><i className="fab fa-vimeo-v"></i></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a> <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a></div>
                        </div>
                        <div className="team-content">
                           <h3 className="team-title"><a href="#">Priyanshu Sir</a></h3>
                           <span className="team-desig">Mentor</span>
                        </div>
                        {/* <div className="team-info"><span><i className="fal fa-file-check"></i>4 Courses</span> <span><i className="fa-light fa-users"></i>Students 30+</span></div> */}
                     </div>
                  </div>
                  {/* <div className="team-card team-card-1-2 team-card-1-2-active">
                     <div className="team-img-wrap">
                        <div className="team-img"><img src="assets/img/team/team_1_4.jpg" alt="Team" /></div>
                     </div>
                     <div className="team-hover-wrap">
                        <div className="team-social">
                           <a href="#" className="icon-btn"><i className="far fa-plus"></i></a>
                           <div className="th-social"><a target="_blank" href="https://vimeo.com/"><i className="fab fa-vimeo-v"></i></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a> <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a></div>
                        </div>
                        <div className="team-content">
                           <h3 className="team-title"><a href="#">Brooklyn Simmons</a></h3>
                           <span className="team-desig">Senior Instructor</span>
                        </div>
                        <div className="team-info"><span><i className="fal fa-file-check"></i>4 Courses</span> <span><i className="fa-light fa-users"></i>Students 70+</span></div>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
      </div>

      {/* <section className="cta-area-3 space-top bg-light">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 mb-30 mb-lg-0">
                  <div className="cta-card ctacardbg1">
                     <div className="title-area mb-40">
                        <span className="sub-title text-white"><i className="fal fa-book me-2"></i>Popular Courses</span>
                        <h4 className="sec-title text-white">Get The Best Courses &<br/>Upgrade Your Skills</h4>
                     </div>
                     <a href="#" className="th-btn style8">Join With Us<i className="fas fa-arrow-right ms-2"></i></a>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="cta-card ctacardbg2">
                     <div className="title-area mb-40">
                        <span className="sub-title text-white"><i className="fal fa-book me-2"></i>Popular Courses</span>
                        <h4 className="sec-title text-white">Engaging Courses for<br/>Intellectual Exploration</h4>
                     </div>
                     <a href="#" className="th-btn style8">Join With Us<i className="fas fa-arrow-right ms-2"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section> */}
      <section className="testi-area-1 bgingtest overflow-hidden space-bottom">
         <div className="shape-mockup testi-bg-shape1 jump" data-right="0" data-top="50%"><img src="assets/img/testimonial/testi-bg-shape_1_1.png" alt="img" /></div>
         <div className="shape-mockup testi-bg-shape2 spin" data-left="0" data-top="15%"><img src="assets/img/testimonial/testi-bg-shape_1_2.png" alt="img" /></div>
         <div className="container">
            <div className="title-area text-center mb-50">
               <span className="sub-title"><i className="fal fa-book me-2"></i> Our Students Testimonials</span>
               <h2 className="sec-title">Students Say’s About Us</h2>
            </div>
            <div className="row">
               <div className="col-xl-12">
                  <div className="th-carousel testi-slider1 dot-style2 row" id="testimonial-slider1" data-slide-show="2" data-ml-slide-show="2" data-lg-slide-show="1" data-md-slide-show="1" data-dots="true" data-arrows="false">
                     <div className="col-lg-6">
                        <div className="testi-box">
                           
                           <div className="testi-box_content">
                              
                              <p className="testi-box_text">“I started my prep journey by enrolling myself into IPM Prime’s Premium Mentorship Program immediately after my class 11th exam. Enrolling in IPM Prime Tutorial was the best decision for me. I give full credit to IPM Prime for my success. I cannot thank IPM Prime and Rajeev Sir enough. The mentors helped a lot in sharpening all the concepts. Every concept was explained thoroughly and various approaches to questions were taught on a daily basis in the class. Mock tests, Detailed mock analysis, study material and especially the Personalised sessions and Schedule plan which they prepared for us helped me a lot in quality preparation. While appearing for the exam, I felt like repeating the Mock Tests of IPM Prime and wondered if the exam had copied IPM Prime’s Mock. ”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">Shikha Sharma</h3>
                                 
                              </div>
                              
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-6">
                        <div className="testi-box">
                           
                           <div className="testi-box_content">
                              
                              <p className="testi-box_text">“I started my prep journey by enrolling myself into IPM Prime’s Premium Mentorship Program immediately after my class 11th exam. Enrolling in IPM Prime Tutorial was the best decision for me. I give full credit to IPM Prime for my success. I cannot thank IPM Prime and Rajeev Sir enough. The mentors helped a lot in sharpening all the concepts. Every concept was explained thoroughly and various approaches to questions were taught on a daily basis in the class. Mock tests, Detailed mock analysis, study material and especially the Personalised sessions and Schedule plan which they prepared for us helped me a lot in quality preparation. While appearing for the exam, I felt like repeating the Mock Tests of IPM Prime and wondered if the exam had copied IPM Prime’s Mock. ”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">Shikha Sharma</h3>
                                 
                              </div>
                              
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-6">
                        <div className="testi-box">
                           
                           <div className="testi-box_content">
                              
                              <p className="testi-box_text">“I started my prep journey by enrolling myself into IPM Prime’s Premium Mentorship Program immediately after my class 11th exam. Enrolling in IPM Prime Tutorial was the best decision for me. I give full credit to IPM Prime for my success. I cannot thank IPM Prime and Rajeev Sir enough. The mentors helped a lot in sharpening all the concepts. Every concept was explained thoroughly and various approaches to questions were taught on a daily basis in the class. Mock tests, Detailed mock analysis, study material and especially the Personalised sessions and Schedule plan which they prepared for us helped me a lot in quality preparation. While appearing for the exam, I felt like repeating the Mock Tests of IPM Prime and wondered if the exam had copied IPM Prime’s Mock. ”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">Shikha Sharma</h3>
                                 
                              </div>
                              
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-6">
                        <div className="testi-box">
                           
                           <div className="testi-box_content">
                              
                              <p className="testi-box_text">“I started my prep journey by enrolling myself into IPM Prime’s Premium Mentorship Program immediately after my class 11th exam. Enrolling in IPM Prime Tutorial was the best decision for me. I give full credit to IPM Prime for my success. I cannot thank IPM Prime and Rajeev Sir enough. The mentors helped a lot in sharpening all the concepts. Every concept was explained thoroughly and various approaches to questions were taught on a daily basis in the class. Mock tests, Detailed mock analysis, study material and especially the Personalised sessions and Schedule plan which they prepared for us helped me a lot in quality preparation. While appearing for the exam, I felt like repeating the Mock Tests of IPM Prime and wondered if the exam had copied IPM Prime’s Mock. ”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">Shikha Sharma</h3>
                                 
                              </div>
                              
                           </div>
                        </div>
                     </div>
                   </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Home
