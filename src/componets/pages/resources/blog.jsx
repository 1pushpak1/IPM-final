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
                  <li>Blogs</li>
               </ul>
            </div>
         </div>
      </div>


      

    </>
  )
}

export default Blog
