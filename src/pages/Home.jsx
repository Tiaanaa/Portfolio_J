import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Link } from 'react-router';

const Home = () => {
  return (
    <>
      <section className='bg-[url(./assets/photo_2025-05-15_15-53-05.jpg)] bg-cover w-full'>
        <Nav />
        <div className='pt-50 pb-18 grid grid-cols-2 p-30'>
<div ><code className='text-gray-400/60'>Hi all, I am</code>
            <h1 className='text-gray-100/70 text-4xl ' >Omonola Christiana</h1>
            <p className='text-blue-900 text-2xl'>&gt; Front-end developer</p><br/>
            <p className='text-gray-400/30'>// My number</p>
            <p className='text-gray-100'><span className='text-blue-900'>const</span> <span className='text-teal-800'>telephone</span> +234 816 490 5260</p>
            <p className='text-gray-400/30'>// My e-mail</p>
            <p className='text-red-300/70'><span className='text-blue-900'>const</span> <span className='text-teal-800'>email</span> "christianaomonola99@gmail.com";</p>
            
            <p className='text-gray-400/30'>// you can also see it on my Github page</p>
            <p className='text-red-300/70'><span className='text-blue-900'>const</span> <span className='text-teal-800'>githubLink</span> <span className='text-gray-100/30'>=</span> <Link to='https://github.com/Tiaanaa' target='_blank'>"https://github.com/Tiaanaa";</Link></p>

            <p className='text-gray-400/30'>// you can check my Instagram Page</p>
            <p className='text-red-300/70'><span className='text-blue-900'>const</span> <span className='text-teal-800'>InstagramLink</span> <span className='text-gray-100/30'>=</span> <Link to='https://www.instagram.com/christy_adeyemi' target='_blank'>"https://www.instagram.com/christy_adeyemi";</Link></p>

             <p className='text-gray-400/30'>// you can check my Linkedin Page</p>
            <p className='text-red-300/70'><span className='text-blue-900'>const</span> <span className='text-teal-800'>LinkedInLink</span> <span className='text-gray-100/30'>=</span> <Link to='https://www.linkedin.com/in/omonolachristiana' target='_blank'>"https://www.linkedin.com/in/omonolachristiana";</Link></p>

            
            
          </div>
          <img src='/src/assets/IMG_20210214_130932_054.jpg' alt='Me' className='rounded-full w-90 ml-30 animate-pulse '/>
        </div>

        <Footer/>
        </section>
    </>
  
    
      

    
  )
}

export default Home
