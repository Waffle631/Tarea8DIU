import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from '../pages/login'
import LoginAuth from '../pages/login_auth'
import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import { ProfilePage } from '../pages/profile'
import INF134P from '../pages/INF134P'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/login_auth' element={<LoginAuth />} /> 
        <Route path='/' element={<HomePage/>} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/INF134' element={<INF134P/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
