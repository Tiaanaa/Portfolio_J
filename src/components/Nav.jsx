import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
      <nav className='fixed w-full'>
          <div className='flex justify-between items-center h-12 border-b-1 border-teal-200/10 pl-7 pr-7'>
              <span className='text-teal-800'>omonola-christiana</span>

              <div className='flex items-center justify-center border-1 -ml-150 h-full '>
                  <Link to='/' className='text-teal-100/50  border-l-1 border-teal-200/10 border-r h-full p-2 pr-4 pl-4'>_hello</Link>
                  <Link to='/About' className='text-teal-100/50  h-full p-2 pr-4 pl-4 '>_about-me</Link>
                  <Link to='/Projects' className='text-teal-100/50  border-l-1 border-teal-200/10 border-r h-full p-2 pr-4 pl-4'>_projects</Link>
        </div>
        <Link to='/Contact' className='text-teal-800'>_contact-me</Link>
          </div>  
    </nav>
  )
}

export default Nav
