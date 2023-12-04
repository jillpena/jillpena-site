import React from 'react'
import { Link } from 'gatsby'
//import * as styles from './layout.module.css'

const Navigation = () => {
  return (
    <nav role='navigation' className='p-4 col-span-2'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
