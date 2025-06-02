import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";


const Home = () => {
  return (
    <>
      <section className="bg-[url(./assets/photo_2025-05-15_15-53-05.jpg)] bg-cover w-full min-h-screen flex flex-col">
        <Nav />
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8 lg:p-12 container mx-auto mt-20 md:mt-0 items-center min-h-screen">
          <AnimatePresence>
          <motion.div key="typing-box"
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 4, ease: "easeInOut" }}>
            <div className="space-y-4 md:space-y-6 " id="motionText">
              <code className="text-gray-400/60 text-sm md:text-base">Hi all, I am</code>
              <h1 className="text-gray-100/70 text-3xl md:text-4xl"><code>Omonola Christiana</code> </h1>
              <p className="text-blue-900 text-xl md:text-2xl">&gt; Front-end developer</p>
            
              <div className="space-y-3 mt-6">
                <p className="text-gray-400/30 text-sm">// My number</p>
                <p className="text-gray-100 text-sm md:text-base">
                  <span className="text-blue-900">const</span>{" "}
                  <span className="text-teal-800">telephone</span> +234 816 490 5260
                </p>
              
                <p className="text-gray-400/30 text-sm">// My e-mail</p>
                <p className="text-red-300/70 text-sm md:text-base break-words">
                  <span className="text-blue-900">const</span>{" "}
                  <span className="text-teal-800">email</span>{" "}
                  "christianaomonola99@gmail.com";
                </p>

                <p className="text-gray-400/30 text-sm">// you can also see it on my Github page</p>
                <p className="text-red-300/70 text-sm md:text-base break-words">
                  <span className="text-blue-900">const</span>{" "}
                  <span className="text-teal-800">githubLink</span>{" "}
                  <span className="text-gray-100/30">=</span>{" "}
                  <Link to="https://github.com/Tiaanaa" target="_blank" className="hover:text-white">
                    "https://github.com/Tiaanaa";
                  </Link>
                </p>

                <p className="text-gray-400/30 text-sm">// you can check my Instagram Page</p>
                <p className="text-red-300/70 text-sm md:text-base break-words">
                  <span className="text-blue-900">const</span>{" "}
                  <span className="text-teal-800">InstagramLink</span>{" "}
                  <span className="text-gray-100/30">=</span>{" "}
                  <Link to="https://www.instagram.com/christy_adeyemi" target="_blank" className="hover:text-white">
                    "https://www.instagram.com/christy_adeyemi";
                  </Link>
                </p>

                <p className="text-gray-400/30 text-sm">// you can check my Linkedin Page</p>
                <p className="text-red-300/70 text-sm md:text-base break-words">
                  <span className="text-blue-900">const</span>{" "}
                  <span className="text-teal-800">LinkedInLink</span>{" "}
                  <span className="text-gray-100/30">=</span>{" "}
                  <Link to="https://www.linkedin.com/in/omonolachristiana" target="_blank" className="hover:text-white">
                    "https://www.linkedin.com/in/omonolachristiana";
                  </Link>
                </p>
              </div>
            </div>
          </motion.div></AnimatePresence>
          
          <AnimatePresence><motion.div initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 4, ease: "easeInOut" }} className="flex items-center justify-center order-first md:order-last">
            <img
              src="/src/assets/IMG_20210214_130932_054.jpg"
              alt="Me"
              className="rounded-full w-48 md:w-72 lg:w-90 animate-pulse"
            />
            </motion.div></AnimatePresence>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Home;