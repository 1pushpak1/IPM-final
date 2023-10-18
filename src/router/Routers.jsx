import React from 'react'
import { Routes,  Route } from 'react-router-dom'
import Home from '../componets/pages/home/Home'
import Header from '../componets/common/Header'
import Footer from '../componets/common/Footer'
import PrepModule from '../componets/pages/prepmodule/PrepModule'
import Achivers from '../componets/pages/prepmodule/Achivers'
import Master from '../componets/pages/prepmodule/Master'
import Short from '../componets/pages/prepmodule/Short'
import Test from '../componets/pages/prepmodule/Testmod'
import Exams from '../componets/pages/exams/Exams'
import Exams1 from '../componets/pages/exams/Exams1'
import Exams2 from '../componets/pages/exams/Exams2'
import Exams3 from '../componets/pages/exams/Exams3'
import Exams4 from '../componets/pages/exams/Exams4'
import Exams5 from '../componets/pages/exams/Exams5'
import Exams6 from '../componets/pages/exams/Exams6'
import Exams7 from '../componets/pages/exams/Exams7'
import Exams8 from '../componets/pages/exams/Exams8'
import Exams9 from '../componets/pages/exams/Exams9'
import Exams10 from '../componets/pages/exams/Exams10'
// import Exams11 from '../componets/pages/exams/Exams11'
import Login from '../componets/pages/authentication/Login'
import Signup from '../componets/pages/authentication/Signup'
import Contact from '../componets/pages/contactus/Contact'
import About from '../componets/pages/home/About'
import WhyIPM from '../componets/pages/home/Whyipmprime'
import Indore from '../componets/pages/management/indore'
import Bodhgaya from '../componets/pages/management/bodhgaya'
import Christ from '../componets/pages/management/christ'
import Devi from '../componets/pages/management/devi'
import Du from '../componets/pages/management/du'
import Indraprast from '../componets/pages/management/indraprast'
import Jmaia from '../componets/pages/management/jamia'
import Jammu from '../componets/pages/management/jammu'
import Nagpur from '../componets/pages/management/nagpur'
import Nmims from '../componets/pages/management/nmims'
import Ranchi from '../componets/pages/management/ranchi'
import Rohtak from '../componets/pages/management/rohtak'
import Symbiosis from '../componets/pages/management/symbiosis'
import Upes from '../componets/pages/management/upes'
import Jamia from '../componets/pages/management/jamia'
import Calander from '../componets/pages/resources/calander'
import Analysis from '../componets/pages/resources/analysis'
import ScrollToTop from '../ScrollTop'
import Scholarship from '../componets/pages/home/Scholarship'
import News from '../componets/pages/resources/news'
import Pattern from '../componets/pages/resources/Pattern'
import Blog from '../componets/pages/resources/blog'
import Scholarshiptest from '../componets/pages/resources/schoralshiptest'
import Testseries from '../componets/pages/prepmodule/testseries'
import Faq from '../componets/pages/resources/Faq'

function Routers() {
  return (
    <>
        <Header/>
        <ScrollToTop/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prep-module" element={<PrepModule />} />
                <Route path="/exams" element={<Exams />} />
                <Route path="/exams1" element={<Exams1 />} />
                <Route path="/exams2" element={<Exams2 />} />
                <Route path="/exams3" element={<Exams3 />} />
                <Route path="/exams4" element={<Exams4 />} />
                <Route path="/exams5" element={<Exams5 />} />
                <Route path="/exams6" element={<Exams6 />} />
                <Route path="/exams7" element={<Exams7 />} />
                <Route path="/exams8" element={<Exams8 />} />
                <Route path="/exams9" element={<Exams9 />} />
                <Route path="/exams10" element={<Exams10 />} />
                {/* <Route path="/exams11" element={<Exam11/>}/> */}
                <Route path="/master" element={<Master />} />
                <Route path="/short" element={<Short />} />
                <Route path="/testmod" element={<Test />} />
                <Route path="/achivers" element={<Achivers />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contactus" element={<Contact />} />
                <Route path="/about" element={<About/>} />
                <Route path="/whyipm" element={<WhyIPM/>} />
                <Route path="/iimindore" element={<Indore/>} />
                <Route path="/christ" element={<Christ/>} />
                <Route path="/bodhgaya" element={<Bodhgaya/>} />
                <Route path="/devi" element={<Devi/>} />
                <Route path="/du" element={<Du/>} />
                <Route path="/indraprast" element={<Indraprast/>} />
                <Route path="/jamia" element={<Jamia/>} />
                <Route path="/jammu" element={<Jammu/>} />
                <Route path="/nagpur" element={<Nagpur/>} />
                <Route path="/nmims" element={<Nmims/>} />
                <Route path="/ranchi" element={<Ranchi/>} />
                <Route path="/rohtak" element={<Rohtak/>} />
                <Route path="/symbiosis" element={<Symbiosis/>} />
                <Route path="/upes" element={<Upes/>} />
                <Route path="/calander" element={<Calander/>} />
                <Route path="/analysis" element={<Analysis/>} />
                <Route path="/scholarship" element={<Scholarship/>} />
                <Route path="/news" element={<News/>} />
                <Route path="/pattern" element={<Pattern/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/scholarshiptest" element={<Scholarshiptest/>} />
                <Route path="/testseries" element={<Testseries/>} />
                <Route path="/faq" element={<Faq/>}/>
            </Routes>
        <Footer/>
    </>
  )
}

export default Routers
