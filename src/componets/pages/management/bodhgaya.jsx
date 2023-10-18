import React from 'react'
import { Link } from 'react-router-dom';
import BookFreeDemo from '../form/BookFreeDemo'
function Bodhgaya() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">IIM Bodhgaya</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Explore Management</a></li>
                  <li>IIM Bodhgaya</li>
               </ul>
            </div>
         </div>
      </div>


      <div className="container">
         <div className="row align-items-center">
            <div className="col-xl-11">
               <div className="wcu-img-1">
                  <div className="img1"><img src="assets/img/normal/bodhgaya.png" alt="img" /></div>
                                        
                  </div>
               </div>
               
        
         </div>
      </div>
      <section className="space-top space-extra2-bottom">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-lg-8">
                  <div className="course-single">
                     <div className="course-single-top">
                       
                        <h2 className="course-title">IIM Bodhgaya</h2>
                        <ul className="course-single-meta">
                       
                        </ul>
                     </div>
                     <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                                <p>Instituted in 2015, The indian Institute if Management Bodhgaya is located in Bodh-Gaya Bihar and the institute was mentored by IIM Calcutta</p>
                               
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

export default Bodhgaya