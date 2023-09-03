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
      <div className="space overflow-hidden" id="about-sec">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6">
                  <div className="img-box1 mb-40 mb-xl-0">
                     <div className="img1"><img className="tilt-active" src="assets/img/normal/att3.jpg" alt="About" /></div>
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
                  <p className="mb-30">All students are not same, they all have diffrent needs, strengths and weaknesses. So we as a team work believe in working with our student as their mate who are accessible to guide them at every step and enable them to accomplish theirgoal in the most effective manner.</p>
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
                  {/* <div className="btn-group mt-40"><Link to="/about" className="th-btn">About More<i className="fa-regular fa-arrow-right ms-2"></i></Link></div> */}
               </div>
            </div>
         </div>
      </div>





         </>
  )
}

export default About
