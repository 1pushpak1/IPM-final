import React from 'react'

function Calander() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">Exam Calander</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Resources</a></li>
                  <li>Exam Calander</li>
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
                        <h2 className="course-title">Management Exam Calander</h2>
                        <ul className="course-single-meta">
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        </ul>
                     </div>
                     <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                               <h5>IPMAT 2023 (Indore) Calendar</h5>
                                <table className="table table-striped table-hover">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">S.No.</th>
                                            <th scope="col">Milestone</th>
                                            <th scope="col">Date/Deadline</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>IPMAT Application start date</td>
                                            <td>6 March 2023</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> IPMAT Application last date</td>
                                            <td>14 April 2023</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Exam Date</td>
                                            <td>16 June 2023 (2 to 4 PM)</td>
                                         
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Announcement of Interviews</td>
                                            <td>End of June 2023</td>
                                       
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Final Announcement of the result</td>
                                            <td>Second week of July 2023</td>
                                       
                                        </tr>
                                    </tbody>
                                </table>

                               


                            </div>

                            <h5>IPM Ranchi Calendar</h5>
                                <table className="table table-striped table-hover">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">S.No.</th>
                                            <th scope="col">Milestone</th>
                                            <th scope="col">Date/Deadline</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>IPMAT Application start date</td>
                                            <td>6 March 2023</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> IPMAT Application last date</td>
                                            <td>14 April 2023</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Exam Date</td>
                                            <td>16 June 2023 (2 to 4 PM)</td>
                                         
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Announcement of Interviews</td>
                                            <td>End of June 2023</td>
                                       
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Final Announcement of the result</td>
                                            <td>Second week of July 2023</td>
                                       
                                        </tr>
                                    </tbody>
                                </table>

                               


                            
                        </div>
                     </div>
                  </div>
               </div>
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
            </div>
         </div>
      </section>
    </>
  )
}

export default Calander
