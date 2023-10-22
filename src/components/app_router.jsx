import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from '../pages/login'
import LoginAuth from '../pages/login_auth'
import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import { ProfilePage } from '../pages/profile'
import { anaMariaData, adolfoData, sofiaData, joseData } from './profile_data'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/login_auth' element={<LoginAuth />} /> 
        <Route path='/' element={<HomePage/>} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/profile-AnaMaria' element={<ProfilePage {...anaMariaData} />} />
        <Route path='/profile-Adolfo' element={<ProfilePage {...adolfoData} />} />
        <Route path='/profile-Sofia' element={<ProfilePage {...sofiaData} />} />
        <Route path='/profile-Jose' element={<ProfilePage {...joseData} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
