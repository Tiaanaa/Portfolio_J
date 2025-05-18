import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Card from "../components/Card";
import CardContent from "../components/Cardcontent";
import { Link } from 'react-router';
import Sidebar from '../components/Sidebar';
import Rating from '../components/Rating';

import { FiGithub, FiLinkedin, FiMail, FiPhone, FiCheck } from 'react-icons/fi';
const About = () => {
  return (
    <>
    <section className="bg-slate-900 bg-cover w-full min-h-screen ">
        <Nav />
        <div className='h-19 border-b-1 border-b-teal-200/10 flex flex-col md:flex'></div>
        <div className='min-h-screen md:flex'>
          <Sidebar />
          {/* Left panel */}
          
          {/*Middle panel*/}
          <main className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-400/60 flex-grow container mx-auto items-center text-sm w-full h-full ">
        <div className=' border-teal-200/20 border border-t-0 border-b-0 h-full p-3'>
          <h1><span className='  pr-7'>1</span>/** <br/><span className='  pr-7'>2</span> * About Omonola Christiana */</h1>
          <p className="text-teal-800"><span className='  pr-7 text-gray-400/60 '>3</span> <span className='text-sm font-thin text-gray-400/60'>*</span> Welcome to my portfolio.</p>
          <p><span className='  pr-7 text-gray-400/60 '>4</span> <span className='text-sm font-thin text-gray-400/60'>*</span></p>
            <p><span className='  pr-7 text-gray-400/60 '>5</span> <span className='text-sm font-thin text-gray-400/60'>*</span> <span className="text-red-300/70 "> [Diploma]</span> Professional Diploma in Education”.</p>
            <p><span className='  pr-7 text-gray-400/60 '>6</span> <span className='text-sm font-thin text-gray-400/60'>*</span><span className="text-red-300/70 "> [Bachelor's degree]</span> Computer Engineering</p>
            <p><span className='  pr-7 text-gray-400/60 '>7</span> <span className='text-sm font-thin text-gray-400/60'>*</span><span className="text-red-300/70 "> [Programming]</span>Since June 2024, I have been a student in the <br/> <span className='  pr-7 text-gray-400/60 '>8</span> <span className='text-sm font-thin text-gray-400/60'>*</span> Frontend Stack course.</p>
            <p> <span className='  pr-7 text-gray-400/60 '>9</span> <span className='text-sm font-thin text-gray-400/60'>* </span>The languages I have learned include: HTML, CSS, JAVASCRIPT, <br/><span className='  pr-7 text-gray-400/60 '>10</span> <span className='text-sm font-thin text-gray-400/60'>*</span>                REACT (jsx) with basic knowledge of Tailwindcss and Vite.js.</p>
            <p><span className='  pr-7 text-gray-400/60 '>10</span> <span className='text-sm font-thin text-gray-400/60'>*</span><span className="text-purple-400">[Whoistiana]</span> I am a very <strong>curious</strong> person, I <strong>enjoy working in a team</strong>, <br/><span className='  pr-7 text-gray-400/60 '>11</span> <span className='text-sm font-thin text-gray-400/60'>*</span>and when faced with a challenge, I always try to find the <strong>most optimal solution</strong>.</p>
            <p><span className='  pr-7 text-gray-400/60 '>12</span> <span className='text-sm font-thin text-gray-400/60'>*</span>Once I complete the course, I would like to deepen my knowledge <br /> <span className='  pr-7 text-gray-400/60 '>13</span> <span className='text-sm font-thin text-gray-400/60'>*</span> of the stack I have studied, especially <strong>React</strong>, <br/> <span className='  pr-7 text-gray-400/60 '>14</span> <span className='text-sm font-thin text-gray-400/60'>*</span> considering its growing use in web development.</p>
            <p><span className='  pr-7 text-gray-400/60 '>15</span> <span className='text-sm font-thin text-gray-400/60'>*</span></p>
            <p><span className='  pr-7 text-gray-400/60 '>16</span> <span className='text-sm font-thin text-gray-400/60'>*</span></p>
            <p><span className='  pr-7 text-gray-400/60 '>17</span> <span className='text-sm font-thin text-gray-400/60'>*</span></p>
            <p><span className='  pr-7 text-gray-400/60 '>18</span> <span className='text-sm font-thin text-gray-400/60'>*</span></p>
            <p><span className='  pr-7 text-gray-400/60 '>19</span> <span className='text-sm font-thin text-gray-400/60'>*/</span></p>
          <div className="mt-6">
            <h2 className="text-lg text-cyan-400 mb-2">Contacts</h2>
            <p className="flex items-center gap-2"><FiMail size={16}/> christianaomonola99@gmail.com</p>
            <p className="flex items-center gap-2"><FiPhone size={16}/> +234 816 490 5260</p>
            <div className="flex gap-4 mt-2"> <Link to='https://www.linkedin.com/in/omonolachristiana'  target='_blank'><FiLinkedin size={16} /></Link>
              <Link to='https://github.com/Tiaanaa' target='_blank'><FiGithub size={16} /></Link>
                </div>
                
              </div>
              
        </div>

        {/* Right panel */}
        <div className="border-teal-200/20 border border-t-0 border-b-0  h-full p-6 ">
            <Card className="">
              <p className="text-gray-400/30 text-lg mb-5">// Programming Languages I have learned or am learning</p>
              <Rating />
            <CardContent className="p-4 bg-slate-950 border-teal-200/20 border rounded-lg">
              <h2 className="text-lg text-cyan-400 mb-2"></h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {["HTML", "CSS", "Javascript", "React", "Tailwindcss", "Git", "Bootstrap"].map(skill => (
                  <div key={skill} className="flex items-center gap-2">
                    <FiCheck size={16} className="text-green-400" /> {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

            <Card className="">
              <p className="text-gray-400/30 text-lg mb-5">// Operating Systems & Other Programs</p>
              <Rating />
              <CardContent className="p-4 bg-slate-950 border-teal-200/20 border rounded-lg">
                
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {["Windows", "Mac OS", "Linux", "Adobe Suite", "Figma"].map(app => (
                  <div key={app} className="flex items-center gap-2">
                    <FiCheck size={16} className="text-green-400" /> {app}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
            </div>
            </main>
            </div>

      <Footer/>
      </section>
      </>
  )
}

export default About
