import React from 'react'

import NavBar from '../components/nav_bar'
import Init_page from '../components/initial_pages'
import Menu_teacher from '../components/menu_teacher'

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
    <div className='content'>
      <div className='flex-container'>
        <Menu_teacher />
        <Init_page />
      </div>
    </div>
    </div>
  )
}

export default HomePage
