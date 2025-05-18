import React, {useState} from 'react';
import { Link } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <nav className='fixed w-full'>
      
          <div className='flex justify-between items-center h-12 border-b-1 border-teal-200/10 pl-7 pr-7'>
              <span className='text-teal-800'>omonola-christiana</span>
                {/*Desktop Menu */}
        
        <div className='hidden md:flex items-center justify-between gap-100 h-full '>
        <div className='h-full flex items-center justify-between'>
                  <Link to='/' className='text-teal-100/50  border-l-1 border-teal-200/10 border-r h-full p-2 pr-4 pl-4'>_hello</Link>
                  <Link to='/about' className='text-teal-100/50  h-full p-2 pr-4 pl-4 '>_about-me</Link>
                  <Link to='/Projects' className='text-teal-100/50  border-l-1 border-teal-200/10 border-r h-full p-2 pr-4 pl-4'>_projects</Link>
        </div>
        <Link to='/Contact' className='text-teal-800 border-teal-200/10 border-l h-full p-2 pl-4 pr-2'>_contact-me</Link>
        </div>
 {/* Mobile Menu Button */}
          
 <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" md:hidden flex items-center p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 bg-slate-900 text-white p-4">
          <Link to="/" className="block py-2">_hello</Link>
          <Link to="/about" className="block py-2">_about-me</Link>
          <Link to="/projects" className="block py-2">_projects</Link>
          <Link to="/contact" className="block py-2">_contact-me</Link>
        </div>
      )}
        
        </div>  
        
    </nav>
  )
}

export default Nav
