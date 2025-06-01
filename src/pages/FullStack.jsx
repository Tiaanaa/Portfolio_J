import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from "framer-motion";


const FullStack = () => {
  return (
    <section className="bg-slate-900 bg-cover w-full min-h-screen text-gray-400/60 flex flex-col ">
      <Nav />

      <div className="h-19 border-b-1 border-b-teal-200/10 flex flex-col md:flex"></div>
      <h1 className="text-2xl text-center text-teal-400/70 mt-10 mb-6">
        Full Stack Software Engineer
      </h1>
      <ol className="list-none [counter-reset:custom] p-6 max-w-2xl mx-auto border border-teal-200/20 rounded-lg shadow-md self-center my-auto text-gray-400/60">
        <AnimatePresence>
        <motion.li key="typing-box"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 4, ease: "easeInOut" }}>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">/**</li>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">* My Interests in Software Engineering</li>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">* Experienced Software Engineer with </li>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">* over 5 years of expertise in designing</li>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">* and delivering innovative,</li>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">* user-focused software solutions.</li>
            <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">* Adept at building robust systems using</li>
          </motion.li></AnimatePresence>
          <AnimatePresence>
        <motion.li key="typing-box"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 4, ease: "easeInOut" }}>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">* MERN and LAMP stacks,</li>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">* leading cross-functional teams, and driving efficiency through automation.</li>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">* Passionate about problem-solving, continuous learning,</li>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">* and staying at the forefront of emerging technologies.</li>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">*/</li>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">*/</li>
        <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7">*/</li></motion.li></AnimatePresence>
      </ol>
      
      <Footer />
    </section>
    
  )
}

export default FullStack
