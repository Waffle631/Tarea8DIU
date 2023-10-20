import React from 'react'

import NavBar from '../components/nav_bar'
import Init_page from '../components/initial_pages'
import Menu_teacher from '../components/menu_teacher'

export const HomePage = () => {
  return (
    <div className='page'>
      <div className='Bar'>
        <h1 className='page__title'>Frontend Sample App</h1>
        <NavBar />
      </div>
      <div className='content'>
        <Menu_teacher />
        <Init_page />
      </div>
    </div>
  )
}

export default HomePage
