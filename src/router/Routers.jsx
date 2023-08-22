import React from 'react'
import { Routes,  Route } from 'react-router-dom'
import Home from '../componets/pages/home/Home'
import Header from '../componets/common/Header'
import Footer from '../componets/common/Footer'
import PrepModule from '../componets/pages/prepmodule/PrepModule'
import Exams from '../componets/pages/exams/Exams'
import Login from '../componets/pages/authentication/Login'
import Signup from '../componets/pages/authentication/Signup'

function Routers() {
  return (
    <>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prep-module" element={<PrepModule />} />
                <Route path="/exams" element={<Exams />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        <Footer/>
    </>
  )
}

export default Routers
