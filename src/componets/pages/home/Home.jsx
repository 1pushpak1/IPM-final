import React from 'react'
import Banner from './Banner'

function Home() {
  return (
    <>
      <Banner/>
      <div className="space overflow-hidden" id="about-sec">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6">
                  <div className="img-box1 mb-40 mb-xl-0">
                     <div className="img1"><img className="tilt-active" src="assets/img/team/att1.jpg" alt="About" /></div>
                     {/* <div className="about-grid" data-bg-src="assets/img/normal/about_1_3.png">
                         <h3 className="about-grid_year"><span className="counter-number">10</span>k<span className="text-theme">+</span></h3> 
                        <p className="about-grid_text">Students Active Our Courses</p>
                     </div> */}
                     <div className="img2"><img className="tilt-active" src="assets/img/normal/att3.jpg" alt="About" /></div>
                     <div className="shape-mockup about-shape1 jump" data-left="-67px" data-bottom="0"><img src="assets/img/normal/about_1_shape1.png" alt="img" /></div>
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
                  <div className="btn-group mt-40"><a href="/about" className="th-btn">About More<i className="fa-regular fa-arrow-right ms-2"></i></a></div>
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
                        <h2 className="sec-title">Our Popular Courses</h2>
                     </div>
                  </div>
                  {/* <div className="col-md-auto"><a href="#" className="th-btn">View All Courses<i className="fa-solid fa-arrow-right ms-2"></i></a></div> */}
               </div>
            </div>
            <div className="row slider-shadow th-carousel course-slider-1" data-slide-show="4" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/Course1.png" alt="img" />  </div>
                     <div className="course-content">
                        {/* <div className="course-rating">
                           <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style={{width:'79%'}}>Rated <strong className="rating">4.00</strong> out of 5</span></div>
                           (4.7)
                        </div> */}
                        <h3 className="course-title"><a href="#">Premium Mentorship Course</a></h3>
                        <div className="course-meta"><span><i className="fal fa-file"></i>10 weeks</span> <span><i className="fal fa-user"></i>Students 60+</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div>
                        <div className="course-author">
                           <div className="author-info"><a href="#" className="author-name">RV Sir</a></div>
                           <div className="offer-tag"> </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/course2.png" alt="img" />  </div>
                     <div className="course-content">
                        {/* <div className="course-rating"> */}
                           {/* <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style={{width:'79%'}}>Rated <strong className="rating">4.00</strong> out of 5</span></div>
                           (4.7)
                        </div> */}
                        <h3 className="course-title"><a href="#">Achivers mentorship Course</a></h3>
                        <div className="course-meta"><span><i className="fal fa-file"></i>10 Weeks</span> <span><i className="fal fa-user"></i>Students 50+</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div>
                        <div className="course-author">
                           <div className="author-info"> <a href="#" className="author-name">RV Sir</a></div>
                           <div className="offer-tag"> </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/course3.png" alt="img" />  </div>
                     <div className="course-content">
                        {/* <div className="course-rating"> */}
                           {/* <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style={{width:'79%'}}>Rated <strong className="rating">4.00</strong> out of 5</span></div>
                           (4.7)
                        </div> */}
                        <h3 className="course-title"><a href="#">Masters Mentorship Course</a></h3>
                        <div className="course-meta"><span><i className="fal fa-file"></i>10 Weeks</span> <span><i className="fal fa-user"></i>Students 30+</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div>
                        <div className="course-author">
                           <div className="author-info"> <a href="#" className="author-name">RV Sir</a></div>
                           <div className="offer-tag"> </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/course4.png" alt="img" />  </div>
                     <div className="course-content">
                        {/* <div className="course-rating">
                           <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style={{width:'79%'}}>Rated <strong className="rating">4.00</strong> out of 5</span></div>
                           (4.7)
                        </div> */}
                        <h3 className="course-title"><a href="#">Short Mentorship Course</a></h3>
                        <div className="course-meta"><span><i className="fal fa-file"></i>10 Weeks</span> <span><i className="fal fa-user"></i>Students 20+</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div>
                        <div className="course-author">
                           <div className="author-info"> <a href="#" className="author-name">RV Sir</a></div>
                           <div className="offer-tag"> </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/course5.png" alt="img" /> </div>
                     <div className="course-content">
                        {/* <div className="course-rating">
                           <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style={{width:'79%'}}>Rated <strong className="rating">4.00</strong> out of 5</span></div>
                           (4.7)
                        </div> */}
                        <h3 className="course-title"><a href="#">TestSeries Mentorship Course</a></h3>
                        <div className="course-meta"><span><i className="fal fa-file"></i>8 Weeks</span> <span><i className="fal fa-user"></i>Students 60+</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div>
                        <div className="course-author">
                           <div className="author-info">  <a href="#" className="author-name">RV Sir</a></div>
                           <div className="offer-tag"> </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <div className="col-md-6 col-lg-4">
                  <div className="course-box">
                     <div className="course-img"><img src="assets/img/course/course_1_2.png" alt="img" /> <span className="tag"><i className="fas fa-clock"></i> 02 WEEKS </span></div>
                     <div className="course-content">
                        <div className="course-rating">
                           <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style={{width:'79%'}}>Rated <strong className="rating">4.00</strong> out of 5</span></div>
                           (4.7)
                        </div>
                        <h3 className="course-title"><a href="#">Learn Figma – UI/UX Design Essential Training</a></h3>
                        <div className="course-meta"><span><i className="fal fa-file"></i>Lesson 9</span> <span><i className="fal fa-user"></i>Students 50+</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div>
                        <div className="course-author">
                           <div className="author-info"><img src="assets/img/course/author.png" alt="author" /> <a href="#" className="author-name" >Kevin Perry</a></div>
                           <div className="offer-tag"> </div>
                        </div>
                     </div>
                  </div> */}
               {/* </div> */}
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
                        {/* <p className="cta-text">Met consectetur adipiscing sed eiustempore dolore</p> */}
                     </div>
                     <a  className="th-btn style8">Join With Us<i className="fas fa-arrow-right ms-1"></i></a>
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
                     {/* <div className="student-count jump-reverse">
                        <h5 className="title"><span className="text-theme"><span className="counter-number">500</span>+</span> Active Students</h5>
                        <img src="assets/img/normal/student-group_1_1.png" alt="img" />
                     </div> */}
                     {/* <div className="text-end"><a className="th-btn mt-30" href="#">Get Started <i className="far fa-arrow-right ms-1"></i></a></div> */}
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
                                 {/* <p className="wcu-box_text">Seamlessly envisioneer tactical data through services.</p> */}
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="wcu-box">
                              <div className="wcu-box_icon"><i className="fas fa-check-circle"></i></div>
                              <div className="wcu-box_details">
                                 <h3 className="box-title">Individual Attention</h3>
                                 {/* <p className="wcu-box_text">Seamlessly envisioneer tactical data through services.</p> */}
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
                     <h2 className="counter-card_number"><span className="counter-number">0</span>k<span className="fw-normal">+</span></h2>
                     <p className="counter-card_text"><strong>Successfully</strong> Trained</p>
                  </div>
               </div>
               <div className="col-sm-6 col-xl-3 counter-card-wrap">
                  <div className="counter-card">
                     <h2 className="counter-card_number"><span className="counter-number">0</span>k<span className="fw-normal">+</span></h2>
                     <p className="counter-card_text"><strong>Classes</strong> Completed</p>
                  </div>
               </div>
               <div className="col-sm-6 col-xl-3 counter-card-wrap">
                  <div className="counter-card">
                     <h2 className="counter-card_number"><span className="counter-number">0</span>k<span className="fw-normal">+</span></h2>
                     <p className="counter-card_text"><strong>Satisfaction</strong> Rate</p>
                  </div>
               </div>
               <div className="col-sm-6 col-xl-3 counter-card-wrap">
                  <div className="counter-card">
                     <h2 className="counter-card_number"><span className="counter-number">0</span>k<span className="fw-normal">+</span></h2>
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
                  <span className="sub-title"><i className="fal fa-book me-2"></i>Are You Ready For This Offer</span>
                  <h2 className="sec-title text-white">40% Offer First <span className="text-theme2">100 Student’s</span> For Featured<br/><span className="fw-normal">Topics by Education Category</span></h2>
                  <p className="cta-text">Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tec, design, and more.</p>
               </div>
               <div className="btn-group justify-content-center"><a href="#" className="th-btn style3">Join With Us<i className="fas fa-arrow-right ms-2"></i></a> <a href="#" className="th-btn style2">Become A Teacher<i className="fas fa-arrow-right ms-2"></i></a></div>
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
                     <h2 className="sec-title">Meet Our Expert Instructor</h2>
                     <p className="sec-text mt-20">Team IPM PRIME is here to make you work on your weaknesses in the most effective manner and at the same time make your strangths sharpened with proven methodologies and believe us</p>
                     <p className="sec-text">You are ready to ACE any test!!</p>
                  </div>
                  <div className="btn-group mt-30"><a href="#" className="th-btn">Explore Courses<i className="fas fa-arrow-right ms-2"></i></a> <a href="/contactus" className="th-btn style7">Contact Us<i className="fas fa-arrow-right ms-2"></i></a></div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="team-card team-card-1-1 team-card-1-1-active mt-0">
                     <div className="team-img-wrap">
                        <div className="team-img"><img src="assets/img/team/team_1_1.jpg" alt="Team" /></div>
                     </div>
                     <div className="team-hover-wrap">
                        <div className="team-social">
                           <a href="#" className="icon-btn"><i className="far fa-plus"></i></a>
                           <div className="th-social"><a target="_blank" href="https://vimeo.com/"><i className="fab fa-vimeo-v"></i></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a> <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a></div>
                        </div>
                        <div className="team-content">
                           <h3 className="team-title"><a href="#">Rajeev Verma</a></h3>
                           <span className="team-desig">Instructor</span>
                        </div>
                        <div className="team-info"><span><i className="fal fa-file-check"></i>2 Courses</span> <span><i className="fa-light fa-users"></i>Students 60+</span></div>
                     </div>
                  </div>
                  <div className="team-card team-card-1-1">
                     <div className="team-img-wrap">
                        <div className="team-img"><img src="assets/img/team/team_1_2.jpg" alt="Team" /></div>
                     </div>
                     <div className="team-hover-wrap">
                        <div className="team-social">
                           <a href="#" className="icon-btn"><i className="far fa-plus"></i></a>
                           <div className="th-social"><a target="_blank" href="https://vimeo.com/"><i className="fab fa-vimeo-v"></i></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a> <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a></div>
                        </div>
                        <div className="team-content">
                           <h3 className="team-title"><a href="#">Marvin McKinney</a></h3>
                           <span className="team-desig">Founder & CEO</span>
                        </div>
                        <div className="team-info"><span><i className="fal fa-file-check"></i>3 Courses</span> <span><i className="fa-light fa-users"></i>Students 50+</span></div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="team-card team-card-1-2 mt-md-0">
                     <div className="team-img-wrap">
                        <div className="team-img"><img src="assets/img/team/team_1_3.jpg" alt="Team" /></div>
                     </div>
                     <div className="team-hover-wrap">
                        <div className="team-social">
                           <a href="#" className="icon-btn"><i className="far fa-plus"></i></a>
                           <div className="th-social"><a target="_blank" href="https://vimeo.com/"><i className="fab fa-vimeo-v"></i></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a> <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a></div>
                        </div>
                        <div className="team-content">
                           <h3 className="team-title"><a href="#">Courtney Henry</a></h3>
                           <span className="team-desig">Junior Instructor</span>
                        </div>
                        <div className="team-info"><span><i className="fal fa-file-check"></i>4 Courses</span> <span><i className="fa-light fa-users"></i>Students 30+</span></div>
                     </div>
                  </div>
                  <div className="team-card team-card-1-2 team-card-1-2-active">
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
                  </div>
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
                           <div className="testi-box-bg-shape">
                              <svg width="150" height="137" viewBox="0 0 150 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 9.99951C0 4.47666 4.47715 -0.000488281 10 -0.000488281H140C145.523 -0.000488281 150 4.47666 150 9.99951V10.5803C150 13.3951 148.814 16.0796 146.732 17.9747L18.8619 134.394C17.0205 136.07 14.6199 137 12.1297 137H10C4.47715 137 0 132.522 0 127V9.99951Z" fill="#0D5EF4"/>
                              </svg>
                           </div>
                           <div className="testi-box_content">
                              <div className="testi-box_img"><img src="assets/img/testimonial/testi_1.png" alt="Avater" /></div>
                              <p className="testi-box_text">“Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">David H. Smith</h3>
                                 <span className="testi-box_desig">IT Student</span>
                              </div>
                              <div className="testi-box_review"><i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> (4.7)</div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="testi-box">
                           <div className="testi-box-bg-shape">
                              <svg width="150" height="137" viewBox="0 0 150 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 9.99951C0 4.47666 4.47715 -0.000488281 10 -0.000488281H140C145.523 -0.000488281 150 4.47666 150 9.99951V10.5803C150 13.3951 148.814 16.0796 146.732 17.9747L18.8619 134.394C17.0205 136.07 14.6199 137 12.1297 137H10C4.47715 137 0 132.522 0 127V9.99951Z" fill="#0D5EF4"/>
                              </svg>
                           </div>
                           <div className="testi-box_content">
                              <div className="testi-box_img"><img src="assets/img/testimonial/testi_1.png" alt="Avater" /></div>
                              <p className="testi-box_text">“Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">Zara Head Milan</h3>
                                 <span className="testi-box_desig">Regular Student</span>
                              </div>
                              <div className="testi-box_review"><i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> (4.7)</div>
                           </div>
                        </div>
                     </div>
                     {/* <div className="col-lg-6">
                        <div className="testi-box">
                           <div className="testi-box-bg-shape">
                              <svg width="150" height="137" viewBox="0 0 150 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 9.99951C0 4.47666 4.47715 -0.000488281 10 -0.000488281H140C145.523 -0.000488281 150 4.47666 150 9.99951V10.5803C150 13.3951 148.814 16.0796 146.732 17.9747L18.8619 134.394C17.0205 136.07 14.6199 137 12.1297 137H10C4.47715 137 0 132.522 0 127V9.99951Z" fill="#0D5EF4"/>
                              </svg>
                           </div>
                           <div className="testi-box_content">
                              <div className="testi-box_img"><img src="assets/img/testimonial/testi_1_1.jpg" alt="Avater" /></div>
                              <p className="testi-box_text">“Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">David H. Smith</h3>
                                 <span className="testi-box_desig">IT Student</span>
                              </div>
                              <div className="testi-box_review"><i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> (4.7)</div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="testi-box">
                           <div className="testi-box-bg-shape">
                              <svg width="150" height="137" viewBox="0 0 150 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 9.99951C0 4.47666 4.47715 -0.000488281 10 -0.000488281H140C145.523 -0.000488281 150 4.47666 150 9.99951V10.5803C150 13.3951 148.814 16.0796 146.732 17.9747L18.8619 134.394C17.0205 136.07 14.6199 137 12.1297 137H10C4.47715 137 0 132.522 0 127V9.99951Z" fill="#0D5EF4"/>
                              </svg>
                           </div>
                           <div className="testi-box_content">
                              <div className="testi-box_img"><img src="assets/img/testimonial/testi_1_2.jpg" alt="Avater" /></div>
                              <p className="testi-box_text">“Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">Zara Head Milan</h3>
                                 <span className="testi-box_desig">Regular Student</span>
                              </div>
                              <div className="testi-box_review"><i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> (4.7)</div>
                           </div>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Home
