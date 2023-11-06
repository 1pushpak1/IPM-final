import { React, useState } from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import { Link } from 'react-router-dom';
import { Modal } from '@weahead/react-customizable-modal-vite'

function Speedester() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <>
         <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
            <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
            <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
            <div className="container">
               <div className="breadcumb-content text-center">
                  <h1 className="breadcumb-title">Speedesters' Mentorship Program</h1>
                  <ul className="breadcumb-menu">
                     <li><a href="#">Prep Module</a></li>
                     <li>Speedesters' Mentorship Program</li>
                  </ul>
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
                  <div>
                     <div className="course-single">
                        <div className="course-single-bottom">
                           <ul className="nav course-tab" id="courseTab" role="tablist">
                              <li className="nav-item" role="presentation"><a className="nav-link active" id="description-tab" data-bs-toggle="tab" href="#Coursedescription" role="tab" aria-controls="Coursedescription" aria-selected="true"><i className="fa-regular fa-bookmark"></i>Short Term mentorship</a></li>
                              <li className="nav-item" role="presentation"><a className="nav-link" id="curriculam-tab" data-bs-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false"><i className="fa-regular fa-book"></i>FREE Session</a></li>
                              {/* <li className="nav-item" role="presentation"><a className="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false"><i className="fa-regular fa-user"></i>Your Mentors</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false"><i className="fa-regular fa-star-sharp"></i>Testimonial</a></li> */}
                           </ul>
                           <div className="tab-content" id="productTabContent">
                              <div className="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">
                                 <div className="course-description">
                                    {/* <h5 className="h5">One-on-One Live Classes</h5> */}
                                    <h5> Why Speedesters' Mentorship Program</h5>
                                    
                                    <div className="row mt-25">
                                       <div className="col-lg-6">
                                          <div className="checklist mb-4">
                                             <ul>
                                                <li> 1-to-1 Session with Rajeev Sir & mentors</li>
                                                <li> Diagonist Test & Counselling</li>
                                                <li> Mock Analysis & Remedial Classes</li>

                                             </ul>
                                          </div>
                                       </div>
                                       <div className="col-lg-6">
                                          <div className="checklist">
                                             <ul>
                                                <li>  Most Popular Mentorship Program</li>
                                                <li>  Personalized Study Plans & Strategy</li>
                                                <li>  Expert Faculties and IIM alumni mentors</li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 <p><b>It’s NEVER too late !!! ……………..Start your preparation TODAY!</b></p>
                                 <p>About SPEEDSTERS’ MENTORSHIP PROGRAM</p>
                                 <p>
Speedesters’ Mentorship Program is for those students who delayed their decision making process and are in the mind of the session in class 12th. This is a RIGOROUS MENTORSHIP PROGRAM of Six Months duration aimed at these 12 standard students who are already in the rush of their board exams and this is suitable to those students as well who planned to take a year drop for the preparation.
</p>
<p>So this is the golden opportunity for those students who delayed their decision but definitely do not want to let their preparation be affected with this delay. Join our exclusive mentorship batch today and make for the time lapse with the most effective Mentorship Program for serious aspirants.</p>
<p>Our Innovative and Unique “Regular Mentorship Program” becomes a little more intensive in this short format and rest is the same as our Trusted Mentorship Program.</p>

<div className="row mt-25">
                                       <div className="col-lg-6">
                                          <div className="checklist mb-4">
                                             <ul>
                                                <li> Beginners' Assessment and Counselling</li>
                                                <li> Personalised Strategy and Remedial Classes</li>


                                             </ul>
                                          </div>
                                       </div>
                                       <div className="col-lg-6">
                                          <div className="checklist">
                                             <ul>
                                                <li>  Regular 1 to 1 session and remedial classes</li>
                                                <li>  Customize personal study plan</li>

                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                   <p><b>If you are in mid of class 12th and confused how to manage your boards with the IPMAT preparation </b></p> 

                                    {/* <h5 className="h5 mt-40">Certification</h5>
                                 <p>It is designed to validate the knowledge, skills, and competencies of individuals in a specific area of study or professional field. The certification program is meticulously designed to ensure that candidates have acquired a comprehensive understanding of the subject matter. It encompasses both theoretical knowledge and practical application, allowing candidates to demonstrate their expertise in real-world scenarios.</p> */}
                                 </div>
                              </div>
                              <div className="tab-pane fade" id="curriculam" role="tabpanel" aria-labelledby="curriculam-tab">
                                 <div className="course-curriculam">
                                    <h5 className="h5">Book a FREE Session for Short Mentorship Batch By IPM Prime Tutorials</h5>
                                    {/* <p className="mb-30">Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary, making this the first true dummy generator on the Internet.</p> */}
                                    <div className="checklist mb-1">
                                       <ul>
                                          <li>Interactive One-to-One Sessions: Engaging and interactive sessions where aspirants can directly communicate with mentors, ask questions, and receive personal study plan. This feature fosters a dynamic learning environment.</li>
                                          <li>Expert Mentors: Access to experienced mentors who have a strong background in the subject matter. They can provide insights, guidance, and personalized advice to help participants excel in their studies.</li>
                                          <li>Curriculum Overview: A comprehensive overview of the curriculum and topics covered in the Prime Mentorship Batch. This helps participants understand what they can expect to learn and achieve during the mentorship program.</li>
                                          <li>Study Resources: Provision of study materials, resources, and practice questions relevant to the mentorship batch. This can aid participants in their preparation and ensure they have the necessary tools to succeed.</li>
                                          <li>Progress Assessment: An opportunity for aspirants to receive feedback on their progress and performance. This could include mock tests, assignments, and its detailed analysis that help participants gauge their prepration level and work on improvement over time.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                 <div className="course-instructor">
                                    <div className="course-author-box">
                                       <div className="auhtor-img"><img src="assets/img/team/team_2_1.jpg" alt="Author Image" /></div>
                                       <div className="media-body">
                                          <h3 className="author-name"><a className="text-inherit" href="#">Kevin Perry</a></h3>
                                          <p className="author-text">Optimize resource eveling innoation whereas visionary value. Compellingly engage extensible process with business process improvements.</p>
                                          <div className="author-meta"><a href="#"><i className="fal fa-circle"></i>Master IIM Ahmedabad</a> <span><i className="fal fa-circle"></i>Bachlor Thapa University</span></div>
                                          <div className="th-social"><a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a> <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a> <a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a> <a href="https://instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                 <div className="course-Reviews">
                                    <div className="th-comments-wrap">
                                       <ul className="comment-list">
                                          <li className="review th-comment-item">
                                             <div className="th-post-comment">
                                                <div className="comment-avater"><img src="assets/img/blog/comment-author-3.jpg" alt="Comment Author" /></div>
                                                <div className="comment-content">
                                                   <h4 className="name">Mark Jack</h4>
                                                   <span className="commented-on"><i className="fal fa-calendar-alt"></i>22 April, 2022</span>
                                                   <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span></div>
                                                   <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                                </div>
                                             </div>
                                          </li>
                                          <li className="review th-comment-item">
                                             <div className="th-post-comment">
                                                <div className="comment-avater"><img src="assets/img/blog/comment-author-2.jpg" alt="Comment Author" /></div>
                                                <div className="comment-content">
                                                   <h4 className="name">Alexa Deo</h4>
                                                   <span className="commented-on"><i className="fal fa-calendar-alt"></i>26 April, 2022</span>
                                                   <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span></div>
                                                   <p className="text">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages.</p>
                                                </div>
                                             </div>
                                          </li>
                                          <li className="review th-comment-item">
                                             <div className="th-post-comment">
                                                <div className="comment-avater"><img src="assets/img/blog/comment-author-1.jpg" alt="Comment Author" /></div>
                                                <div className="comment-content">
                                                   <h4 className="name">Tara sing</h4>
                                                   <span className="commented-on"><i className="fal fa-calendar-alt"></i>26 April, 2022</span>
                                                   <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span></div>
                                                   <p className="text">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                    {/* <div className="th-comment-form">
                                    <div className="form-title">
                                       <h3 className="blog-inner-title">Add a review</h3>
                                    </div>
                                    <div className="row">
                                       <div className="form-group rating-select d-flex align-items-center">
                                          <label>Your Rating</label>
                                          <p className="stars"><span><a className="star-1" href="#">1</a> <a className="star-2" href="#">2</a> <a className="star-3" href="#">3</a> <a className="star-4" href="#">4</a> <a className="star-5" href="#">5</a></span></p>
                                       </div>
                                       <div className="col-12 form-group"><textarea placeholder="Write a Message" className="form-control"></textarea> <i className="text-title far fa-pencil-alt"></i></div>
                                       <div className="col-md-6 form-group"><input type="text" placeholder="Your Name" className="form-control" /> <i className="text-title far fa-user"></i></div>
                                       <div className="col-md-6 form-group"><input type="text" placeholder="Your Email" className="form-control" /> <i className="text-title far fa-envelope"></i></div>
                                       <div className="col-12 form-group"><input id="reviewcheck" name="reviewcheck" type="checkbox" /> <label htmlFor="reviewcheck">Save my name, email, and website in this browser for the next time I comment.<span className="checkmark"></span></label></div>
                                       <div className="col-12 form-group mb-0"><button className="th-btn">Post Review <i className="far fa-arrow-right ms-1"></i></button></div>
                                    </div>
                                 </div> */}
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
               <div className="row align-items-right justify-content-between">
                  <div className="col-lg-12">
                     <div className="cta-wrap title-area mb-0">

                        <div className="cta-content">
                           <h2 className=" footer-contact_link">Have Questions ? Call us : +91-99100 88661</h2>

                        </div>
                        <button onClick={() => { setIsOpen(true) }} className="th-btn style8">Book a Counselling Session<i className="fas fa-arrow-right ms-1"></i></button>
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

export default Speedester