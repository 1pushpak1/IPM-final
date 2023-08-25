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

function Routers() {
  return (
    <>
        <Header/>
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

            </Routes>
        <Footer/>
    </>
  )
}

export default Routers
