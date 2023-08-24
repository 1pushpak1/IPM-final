import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, Offcanvas, Dropdown, Nav } from 'react-bootstrap';


function Header() {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas  show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <div className="mobile-logo"><Link to="/"><img style={{width:'180px'}} src="assets/img/logo.png" alt="Edura" /></Link></div>
            <button onClick={handleClose} className="th-menu-toggle ms-3"><i className="fal fa-times"></i></button>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="th-mobile-menu">
               <ul>
                  <li className="menu-item-has-children">
                     <Link to="/" onClick={handleClose}>Home</Link>
                  </li>
                  {/* <li className="menu-item-has-children">
                     <Link to="/">About</Link>
                  </li> */}
                  <li className="menu-item-has-children">
                     <a href="#">Prep Module</a>
                     <ul className="sub-menu">
                        <li><Link to="/prep-module" onClick={handleClose}>Premium Mentorship Program</Link></li>
                        <li><Link to="/achivers" onClick={handleClose}>Achiver's Mentorship Program </Link></li>
                        <li><Link to="/master" onClick={handleClose}>Masters's Mentorship Program </Link></li>
                        <li><Link to="/short" onClick={handleClose}>Short Mentorship Program </Link></li>
                        <li><Link to="/testmod" onClick={handleClose}>Test Series Mentorship Program</Link></li>
                     </ul>
                  </li>
                  <li className="menu-item-has-children">
                     <a href="#">Exams</a>
                     <ul className="sub-menu">
                        <li><Link to="/exams" onClick={handleClose}>IIM Indore</Link></li>
                        <li><Link to="/exams1" onClick={handleClose}>IIM Rohtak </Link></li>
                        <li><Link to="/exams2" onClick={handleClose}>IIM Bodhgaya </Link></li>
                        <li><Link to="/exams3" onClick={handleClose}>IIM Ranchi </Link></li>
                        <li><Link to="/exams4" onClick={handleClose}>IIM Jammu </Link></li>
                        <li><Link to="/exams5" onClick={handleClose}>IIM Nagpur </Link></li>
                     </ul>
                  </li>
                  {/* <li className="menu-item-has-children">
                     <a href="#">Resources</a>
                  </li> */}
                  <li><Link to="/contactus" onClick={handleClose}>Contact us</Link></li>
               </ul>
            </div>
        </Offcanvas.Body>
      </Offcanvas>

      <header className="th-header header-layout1">
         <div className="header-top">
            <div className="container">
               <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                  <div className="col-auto d-none d-lg-block">
                     <div className="header-links">
                        <ul>
                           <li><i className="far fa-phone"></i><a href="tel:+91-9910098275">+91-99100 98275</a></li>
                           <li className="d-none d-xl-inline-block"><i className="far fa-envelope"></i><a href="mailto:info@ipmprime.com">info@ipmprime.com</a></li>
                           <li><i className="fas fa-telegram"></i><a href="mailto:info@ipmprime.com">Join our Forum</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-auto">
                     <div className="header-links header-right loginheader">
                        <ul>
                           <li style={{borderRight:'1px solid #ccc', paddingRight:'15px'}}>
                              <div className="header-social"><span className="social-title">Follow Us:</span> <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a> <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a> <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a> <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a> <a href="https://www.instagram.com/"><i className="fab fa-skype"></i></a></div>
                           </li>
                           <li className=""><Link to="/login"><i className="far fa-user"></i> <span className='d-none d-lg-inline'>Login / Register</span></Link></li>
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
                        <div className="header-logo"><Link to="/"><img src="assets/img/logo.png" alt="Edura" /></Link></div>
                     </div>
                     <div className="col-auto">
                        <div className="row">
                           <div className="col-auto">
                              <nav className="main-menu d-none d-lg-inline-block">
                                 <ul>
                                    <li>
                                       <Link to="/">Home</Link>
                                    </li>
                                    {/* <li>
                                       <a href="#">About</a>
                                    </li> */}
                                    <li className="menu-item-has-children">
                                       <a href="#">Prep Module</a>
                                       <ul className="sub-menu">
                                       <li><Link to="/prep-module">Premium Mentorship Program</Link></li>
                                       <li><Link to="/achivers">Achiver's Mentorship Program </Link></li>
                                       <li><Link to="/master">Masters's Mentorship Program </Link></li>
                                       <li><Link to="/short">Short Mentorship Program </Link></li>
                                       <li><Link to="/testmod">Test Series Mentorship Program</Link></li>
                                       </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                       <a href="#">Exams</a>
                                       <ul className="sub-menu">
                                       <li><Link to="/exams">IIM Indore</Link></li>
                                       <li><Link to="/exams1">IIM Rohtak </Link></li>
                                       <li><Link to="/exams2">IIM Bodhgaya </Link></li>
                                       <li><Link to="/exams3">IIM Ranchi </Link></li>
                                       <li><Link to="/exams4">IIM Jammu </Link></li>
                                       <li><Link to="/exams5">IIM Nagpur </Link></li>
                                       </ul>
                                    </li>
                                    {/* <li>
                                       <a href="#">Resources</a>
                                    </li> */}
                                    <li>
                                       <Link to="/contactus">Contact us</Link>
                                    </li>
                                 </ul>
                              </nav>
                              <button type="button" onClick={handleShow} className="th-menu-toggle d-block d-lg-none"><i className="far fa-bars"></i></button>
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
