import React, {useState} from 'react'

function Header() {
   const [menuVisible, setMenuVisible] = useState(false);
   const visiblemobilemenu = () =>{
      setMenuVisible(true);
   }
   const cancelsidemenu = () =>{
      setMenuVisible(false)
   }
  return (
    <>
      <div className="popup-search-box d-none d-lg-block">
         <button className="searchClose"><i className="fal fa-times"></i></button>
         <form action="#"><input type="text" placeholder="What are you looking for?" /> <button type="submit"><i className="fal fa-search"></i></button></form>
      </div>
      <div className={`th-menu-wrapper ${menuVisible ? 'th-body-visible' : ''}`}>
         <div className="th-menu-area text-center">
            <button onClick={cancelsidemenu} className="th-menu-toggle"><i className="fal fa-times"></i></button>
            <div className="mobile-logo"><a href="/"><img style={{width:'180px'}} src="assets/img/logo.png" alt="Edura" /></a></div>
            <div className="th-mobile-menu">
               <ul>
                  <li className="menu-item-has-children">
                     <a href="#">Home</a>
                  </li>
                  <li className="menu-item-has-children">
                     <a href="/">About</a>
                  </li>
                  <li className="menu-item-has-children">
                     <a href="#">Prep Module</a>
                     <ul className="sub-menu">
                        <li><a href="/prep-module">Premium Mentorship Program</a></li>
                        <li><a href="/prep-module">Achiver's Mentorship Program </a></li>
                        <li><a href="/prep-module">Masters's Mentorship Program </a></li>
                        <li><a href="/prep-module">Short Mentorship Program </a></li>
                        <li><a href="/prep-module">Test Series Mentorship Program</a></li>
                     </ul>
                  </li>
                  <li className="menu-item-has-children">
                     <a href="#">Exams</a>
                     <ul className="sub-menu">
                        <li><a href="/exams">IIM Indore</a></li>
                        <li><a href="/exams">IIM Rohtak </a></li>
                        <li><a href="/exams">IIM Bodhgaya </a></li>
                        <li><a href="/exams">IIM Ranchi </a></li>
                        <li><a href="/exams">IIM Jammu </a></li>
                        <li><a href="/exams">IIM Nagpur </a></li>
                     </ul>
                  </li>
                  <li className="menu-item-has-children">
                     <a href="#">Resources</a>
                  </li>
                  <li><a href="contact.html">Contact us</a></li>
               </ul>
            </div>
         </div>
      </div>


      <header className="th-header header-layout1">
         <div className="header-top">
            <div className="container">
               <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                  <div className="col-auto d-none d-lg-block">
                     <div className="header-links">
                        <ul>
                           <li><i className="far fa-phone"></i><a href="tel:+11156456825">+91-000 0000 000</a></li>
                           <li className="d-none d-xl-inline-block"><i className="far fa-envelope"></i><a href="mailto:info@ipmprime.com">info@ipmprime.com</a></li>
                           <li><i className="far fa-clock"></i>Mon - Sat: 8:00 - 20:00</li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-auto">
                     <div className="header-links header-right">
                        <ul>
                           <li style={{borderRight:'1px solid #ccc', paddingRight:'15px'}}>
                              <div className="header-social"><span className="social-title">Follow Us:</span> <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a> <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a> <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a> <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a> <a href="https://www.instagram.com/"><i className="fab fa-skype"></i></a></div>
                           </li>
                           <li className="d-none d-lg-inline-block"><i className="far fa-user"></i><a href="/login">Login / Register</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="sticky-wrapper">
            <div className="menu-area">
               <div className="container">
                  <div className="row align-items-center justify-content-between">
                     <div className="col-auto">
                        <div className="header-logo"><a href="/"><img src="assets/img/logo.png" alt="Edura" /></a></div>
                     </div>
                     <div className="col-auto">
                        <div className="row">
                           <div className="col-auto">
                              <nav className="main-menu d-none d-lg-inline-block">
                                 <ul>
                                    <li>
                                       <a href="#">Home</a>
                                    </li>
                                    <li>
                                       <a href="#">About</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                       <a href="#">Prep Module</a>
                                       <ul className="sub-menu">
                                       <li><a href="/prep-module">Premium Mentorship Program</a></li>
                                       <li><a href="/prep-module">Achiver's Mentorship Program </a></li>
                                       <li><a href="/prep-module">Masters's Mentorship Program </a></li>
                                       <li><a href="/prep-module">Short Mentorship Program </a></li>
                                       <li><a href="/prep-module">Test Series Mentorship Program</a></li>
                                       </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                       <a href="#">Exams</a>
                                       <ul className="sub-menu">
                                       <li><a href="/exams">IIM Indore</a></li>
                                       <li><a href="/exams">IIM Rohtak </a></li>
                                       <li><a href="/exams">IIM Bodhgaya </a></li>
                                       <li><a href="/exams">IIM Ranchi </a></li>
                                       <li><a href="/exams">IIM Jammu </a></li>
                                       <li><a href="/exams">IIM Nagpur </a></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="#">Resources</a>
                                    </li>
                                    <li>
                                       <a href="#">Contact us</a>
                                    </li>
                                 </ul>
                              </nav>
                              <button type="button" onClick={visiblemobilemenu} className="th-menu-toggle d-block d-lg-none"><i className="far fa-bars"></i></button>
                           </div>
                           <div className="col-auto d-none d-xl-block">
                              <div className="header-button">
                                  <a href="https://www.primeacademy.app/login" className="th-btn ml-25">Student Zone <i className="fas fa-arrow-right ms-1"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
    </>
  )
}

export default Header
