import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from '../pages/login'
import LoginAuth from '../pages/login_auth'
import HomePage from '../pages/home'
import InternalPage from '../pages/internal'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/login_auth' element={<LoginAuth />} /> 
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
