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
                        <li><Link to="/master" onClick={handleClose}>Master's Mentorship Program </Link></li>
                        <li><Link to="/short" onClick={handleClose}>Short Mentorship Program </Link></li>
                        {/* <li><Link to="/testmod" onClick={handleClose}>Test Series Mentorship Program</Link></li> */}
                        <li><Link to="/" onClick={handleClose}>Speedester's Mentorship Program</Link></li>
                        <li><Link to="/testmod" onClick={handleClose}>Mock Test Mentorship Program</Link></li>
                        <li><Link to="/testseries" onClick={handleClose}>IPM Prime Test Series</Link></li>
                     </ul>
                  </li>
                  <li className="menu-item-has-children">
                     <a href="#">Exams</a>
                     <ul className="sub-menu">
                        
                        </ul>
                        <ul className="sub-menu">
                        <li><Link to="/exams">IPM-AT IIM Indore</Link></li>
                                       <li><Link to="/exams1" onClick={handleClose} >IPM-AT IIM Rohtak </Link></li>
                                       <li><Link to="/exams3" onClick={handleClose}>IPM-AT IIM Ranchi </Link></li>
                                       <li><Link to="/exams4" onClick={handleClose}>JIPMAT IIM Jammu </Link></li>
                                       <li><Link to="/exams2" onClick={handleClose}>JIPMAT IIM Bodhgaya </Link></li>
                                       <li><Link to="/exams5"onClick={handleClose}>DoMS IPM NALSAR</Link></li>
                                       <li><Link to="/exams6"onClick={handleClose}> IPM IIFT Kakinada </Link></li>
                                       <li><Link to="/exams7"onClick={handleClose}>NPAT NMIM </Link></li>
                                       <li><Link to="/exams8"onClick={handleClose}>SET Symbiosis </Link></li>
                                       {/* <li><Link to="/exams9"onClick={handleClose}>BMS/BFIA CUET </Link></li> */}
                                       <li><Link to="/exams10"onClick={handleClose}>HCL TechBee IIM Nagpur </Link></li>
                        
                     </ul>
                  </li>
                  <li>
                                       <a href="#">Explore Management</a>
                                       <ul className="sub-menu">
                                      
                                       </ul>
                                       <ul className="sub-menu">
                                       <li><Link to="/iimindore" onClick={handleClose}>IIM Indore</Link></li>
                                       <li><Link to="/bodhgaya" onClick={handleClose}>IIM Bodhgaya </Link></li>
                                       <li><Link to="/ranchi" onClick={handleClose}>IIM Ranchi </Link></li>
                                       <li><Link to="/jammu" onClick={handleClose}>IIM Jammu </Link></li>
                                       <li><Link to="/nagpur" onClick={handleClose}>IIM Nagpur </Link></li>
                                       <li><Link to="/rohtak" onClick={handleClose}>IIM Rohtak </Link></li>
                                       <li><Link to="/nmims" onClick={handleClose}>NMIMS </Link></li>
                                       <li><Link to="/symbiosis" onClick={handleClose}>Symbiosis </Link></li>
                                       <li><Link to="/indraprast" onClick={handleClose}>Indraprast University </Link></li>
                                       <li><Link to="/christ" onClick={handleClose}>Christ University</Link></li>
                                       {/* <li><Link to="/jamia" onClick={handleClose}>Jamia Millia University </Link></li> */}
                                       <li><Link to="/devi" onClick={handleClose}>Devi Ahilya Vishwavidyalaya </Link></li>
                                       <li><Link to="/upes" onClick={handleClose}>UPES </Link></li>
                                       <li><Link to="/du" onClick={handleClose}>Delhi University</Link></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="#">Resources</a>
                                       <ul className="sub-menu">
                                       </ul>
                                       <ul className="sub-menu">
                                       <li><Link to="/analysis" onClick={handleClose}>Exam Analysis</Link></li>
                                       <li><Link to="/pattern" onClick={handleClose}>Exam Pattern </Link></li>
                                       <li><Link to="/calander" onClick={handleClose}>Exam Calander </Link></li>
                                       {/* <li><Link to="/exams3" onClick={handleClose}>IPM  Colleges </Link></li> */}
                                       <li><Link to="/blog" onClick={handleClose}>Blogs </Link></li>
                                       <li><Link to="/news" onClick={handleClose}>News & Events </Link></li>
                                       {/* <li><Link to="/exams4">IIM Jammu </Link></li> */}
                                       {/* <li><Link to="/exams5">IIM Nagpur </Link></li> */}
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
                           <li><i className="far fa-phone"></i><a href="tel:+91-9910098275">+91-99100 88661</a></li>
                           <li className="d-none d-xl-inline-block"><i className="far fa-envelope"></i><a href="mailto:info@ipmprime.com">info@ipmprime.com</a></li>
                           <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-auto">
                     <div className="header-links ">
                        <ul>
                           <li style={{borderRight:'1px solid #ccc', paddingRight:'15px'}}>
                              <div className="header-social"><span className="social-title">Follow Us:</span> <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a> <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a> <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a> <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a> <a href="https://www.instagram.com/"><i className="fab fa-skype"></i></a></div>
                           </li>
                           {/* <li className=""><Link to="/login"><i className="far fa-user"></i> <span className='d-none d-lg-inline'>Login / Register</span></Link></li> */}
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
                                       <li><Link to="/master">Master's Mentorship Program </Link></li>
                                       <li><Link to="/short">Short Mentorship Program </Link></li>
                                       <li><Link to="/">Speedester's Mentorship Program</Link></li>
                                       <li><Link to="/testmod">Mock Test Mentorship Program</Link></li>
                                       <li><Link to="/testseries">IPM Prime Test Series</Link></li>
                                       {/* <li><Link to="/">Test Series Mentorship Program</Link></li> */}
                                       {/* <li><Link to="/">Online Course</Link></li> */}
                                       </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                       <a href="#">Exams</a>
                                       <ul className="sub-menu">
                                          </ul>
                                       <ul className="sub-menu">
                                       <li><Link to="/exams">IPM-AT IIM Indore</Link></li>
                                       <li><Link to="/exams1">IPM-AT IIM Rohtak </Link></li>
                                       <li><Link to="/exams3">IPM-AT IIM Ranchi </Link></li>
                                       <li><Link to="/exams4">JIPMAT IIM Jammu </Link></li>
                                       <li><Link to="/exams2">JIPMAT IIM Bodhgaya </Link></li>
                                       <li><Link to="/exams5">DoMS IPM NALSAR</Link></li>
                                       <li><Link to="/exams6"> IPM IIFT Kakinada </Link></li>
                                       <li><Link to="/exams7">NPAT NMIM </Link></li>
                                       <li><Link to="/exams8">SET Symbiosis </Link></li>
                                       {/* <li><Link to="/exams9">BMS/BFIA CUET </Link></li> */}
                                       <li><Link to="/exams10">HCL TechBee IIM Nagpur </Link></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="#">Explore Management</a>
                                       <ul className="sub-menu">
                                      
                                       </ul>
                                       <ul className="sub-menu">
                                       <li><Link to="/iimindore">IIM Indore</Link></li>
                                       <li><Link to="/rohtak">IIM Rohtak </Link></li>
                                       <li><Link to="/bodhgaya">IIM Bodhgaya </Link></li>
                                       <li><Link to="/ranchi">IIM Ranchi </Link></li>
                                       <li><Link to="/jammu">IIM Jammu </Link></li>
                                       <li><Link to="/nagpur">IIM Nagpur </Link></li>
                                       <li><Link to="/nmims">NMIMS </Link></li>
                                       <li><Link to="/symbiosis">Symbiosis </Link></li>
                                       <li><Link to="/indraprast">Indraprast University </Link></li>
                                       <li><Link to="/christ">Christ University</Link></li>
                                       {/* <li><Link to="/jamia">Jamia Millia University </Link></li> */}
                                       <li><Link to="/devi">Devi Ahilya Vishwavidyalaya </Link></li>
                                       <li><Link to="/upes">UPES </Link></li>
                                       <li><Link to="/du">Delhi University</Link></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="#">Resources</a>
                                       <ul className="sub-menu">
                                       </ul>
                                       <ul className="sub-menu">
                                       <li><Link to="/analysis">Exam Analysis</Link></li>
                                       <li><Link to="/pattern">Exam Pattern </Link></li>
                                       <li><Link to="/calander">Exam Calander </Link></li>
                                       
                                       <li><Link to="/blog">Blogs </Link></li>
                                       <li><Link to="/news">News & Events </Link></li>   
                                       {/* <li><Link to="/exams4">IIM Jammu </Link></li> */}
                                       {/* <li><Link to="/exams5">IIM Nagpur </Link></li> */}
                                       </ul>
                                    </li>
                                    {/* <li>
                                       <Link to="/contactus">Contact us</Link>
                                    </li> */}
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
