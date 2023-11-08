import { React, useState } from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
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
         <section>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-9 col-lg-8">
                     <div className="course-single">
                        <div className="course-single-bottom">
                           
                           <div className="tab-content" id="productTabContent">
                              <div className="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">
                                 <div className="course-description">
                                    <h3 align='center' className="h3">All India PRIME SCHOLARSHIP TEST</h3>{'\n'}
                                    {/* <p>Professionally expedite synergistic technology without out-of-the-box human capital. Enthusiastically coordinate state of the art leadership after professional manufactured products. Distinctively enhance future-proof e-services whereas functionalized partnerships. Quickly streamline focused paradigms via orthogonal "outside the box" thinking. Rapidiously administrate 2.0 total linkage for cross-platform channels.</p> */}
                                    <div><h5 align='center' >    The Expert in ANYTHING
                                       Was once a BEGINNER !!!
                                    </h5></div> {'\n'}
                                    <p align='center'><b>Get into IIM right after Class 12th</b></p>&nbsp;
                                   
                                             
                                             <p align='center'><b>Get into IIM right after Class 12th</b></p>&nbsp;
                                             <h6 align='center'>ARE YOU in CLASS 10th, 11th or 12Th? and Planning to take the IPM-AT Entrance for admission to IIMs?</h6>&nbsp;
                                             <p align='center'>Prepare for IPM-AT with IPM Prime’s most trusted PREMIUM MENTORSHIP PROGRAM !!!&nbsp;
                                             </p>&nbsp;
                                             <h5 align="center">A CHANCE TO WIN UPTO 80% SCHOLARSHIP !!!!</h5>{'\n'} &nbsp;
                                             <p align='center' >  Enroll in the All India Prime Scholarship Test and claim your seat and also an opportunity to win scholarship up-to 80% </p>

                                             


                                        
                                 </div>
                              </div>
                           </div>
                          </div>
                        </div>
                     </div>
                    
                 
                 
               </div>
            </div>
         </section >
         <div className="cta-area-1">
            <div className="container">
               <div className="row align-items-right justify-content-between">
                  <div className="col-lg-12">
                     <div className="cta-wrap title-area mb-0">

                        <div className="cta-content">
                           <h2 className=" footer-contact_link">Have Questions ? Call us : +91-99100 88661</h2>

                        </div>
                        <button onClick={() => { setIsOpen(true) }} className="th-btn style8">Enroll for Scholarship test<i className="fas fa-arrow-right ms-1"></i></button>
                     </div>
                     <Modal
                        style
                        isOpen={isOpen}
                        onEscape={() => {
                           setIsOpen(false)
                        }}
                        onOverlayClick={() => {
                           setIsOpen(false)
                        }}
                     >
                        <BookFreeDemo />
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
      </>
   )
}

export default Scholarshiptest







