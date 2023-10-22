import React from 'react'

import NavBar from '../components/nav_bar'
// import INF152 from '../components/INF152'
import INF134 from '../components/INF134'
import Menu_teacher from '../components/menu_teacher'

export const INF134P = () => {
  return (
    <div className='page'>
      <div className='Bar'>
        <h1 className='page__title'>Frontend Sample App</h1>
        <NavBar />
      </div>
      <div className='content'>
        <Menu_teacher />
        <INF134 />
      </div>
    </div>
  )
}

export default INF134P