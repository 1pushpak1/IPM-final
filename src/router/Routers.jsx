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

            </Routes>
        <Footer/>
    </>
  )
}

export default Routers
