import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className=' border-t-1 border-teal-200/10 text-teal-800 flex justify-between items-center h-12 pl-7 pr-7 bottom-0'>
      <div className='flex items-center h-full'>
        
      <p className='p-3 border-r-1 border-teal-200/10 h-full'>Find me in:</p>
        <Link to='https://x.com/Tiana_yemi' className="p-3  border-r-1 border-teal-200/10 h-full" target='_blank'><FiTwitter className="w-6 h-6" /></Link>
        <Link to='https://www.linkedin.com/in/omonolachristiana' className="p-3  border-r-1 border-teal-200/10 h-full" target='_blank'><FiLinkedin className="w-6 h-6" /></Link>
      </div>
      <Link to='https://github.com/Tiaanaa' className="p-3  border-l-1 border-teal-200/10 h-full flex" target='_blank'>Tiaanaa<FiGithub className="w-6 h-6 p-1 bg-teal-200/10 rounded-full" /></Link>
      
      
                
    </footer>
   
  )
}

export default Footer
