import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import CardContent from "../components/Cardcontent";
import { Link } from "react-router";
import Sidebar from "../components/Sidebar";
import Rating from "../components/Rating";

import { FiGithub, FiLinkedin, FiMail, FiPhone, FiCheck } from "react-icons/fi";
import { FaHtml5, FaReact, FaCss3Alt, FaGitAlt, FaPhp, FaLaravel, FaNodeJs} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiDart } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { SiTypescript, SiFlutter } from "react-icons/si";
const About = () => {
  return (
    <>
      <section className="bg-slate-900 bg-cover w-full min-h-screen text-gray-400/60 ">
        <Nav />
        <div className="h-19 border-b-1 border-b-teal-200/10 flex flex-col md:flex"></div>
        <div className="min-h-screen md:flex">
          <Sidebar />
          {/* Left panel */}

          {/*Middle panel*/}
          <main className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-grow container mx-auto items-center text-sm w-full min-h-screen ">
            <div className=" border-teal-200/20 border border-t-0 border-b-0 min-h-screen p-3">
              <ol className="list-none [counter-reset:custom] ">
                <li  className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7 ">/**</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* About Omonola Christiana */</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7 after:text-teal-800" >* Welcome to my portfolio.</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >*</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* <span className="text-red-300/70 "> [Diploma]</span>{" "}
                Professional Diploma in Education”.</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* <span className="text-red-300/70 ">
                  [Bachelor's degree]
                </span>{" "}
                Computer Engineering</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* <span className="text-red-300/70 "> [Programming]</span> Since
                June 2024, I have been a student in the </li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >{" "} Frontend Stack course.</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* The languages I have learned include:</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* JavaScript, Dart, TypeScript, PHP and SQL</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* <span className="text-red-300/70 "> [Frameworks]</span> ReactJS, Laravel, Node.JS, Flutter</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* <span className="text-red-300/70 "> [Frontend]</span> HTML, CSS, Tailwind, Bootstrap, Chakra UI</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* <span className="text-red-300/70 "> [Backend]</span> RESTful APIs, SOAP.</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >*<span className="text-red-300/70 "> [Architecture]</span> Microservice, Event-Driven, Monolithic, Multitenant.</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >*<span className="text-red-300/70 "> [Cloud & Tools]</span> AWS, Git, Azure DevOps</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* <span className="text-purple-400">[Whoisjohn]</span> I am a
                very <strong>curious</strong> person, I{" "}
                <strong>enjoy working in a team</strong>,
                </li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* and when faced with a challenge, </li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* I always try to find the{" "}
                <strong>most optimal solution</strong>.</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* I would like to deepen my knowledge{" "}</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >* of
                the stack I have studied</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >*</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >*</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >*</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >*</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >*</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >*</li>
                <li className="[counter-increment:custom] before:content-[counter(custom)] before:mr-7" >*</li>
               
          </ol>
             
              <div className="mt-6">
                <h2 className="text-lg text-cyan-400 mb-2">Contacts</h2>
                <p className="flex items-center gap-2">
                  <FiMail size={16} /> christianaomonola99@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <FiPhone size={16} /> +234 816 490 5260
                </p>
                <div className="flex gap-4 mt-2">
                  {" "}
                  <Link
                    to="https://www.linkedin.com/in/omonolachristiana"
                    target="_blank"
                  >
                    <FiLinkedin size={16} />
                  </Link>
                  <Link to="https://github.com/Tiaanaa" target="_blank">
                    <FiGithub size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="border-teal-200/20 border border-t-0 border-b-0  min-h-screen p-6 ">
              <Card className="">
                <p className="text-lg mb-5">
                  // Programming Languages I have learned or am learning
                </p>
                <Rating />
                <CardContent className="p-4 bg-slate-950 border-teal-200/20 border rounded-lg">
                  <h2 className="text-lg text-cyan-400 mb-2"></h2>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                    {[
                      { skill: "HTML", icon: <FaHtml5 /> },{ skill: "CSS", icon: <FaCss3Alt /> },{ skill: "Javascript", icon: <IoLogoJavascript /> },{ skill: "React", icon: <FaReact /> },{ skill: "Git", icon: <FaGitAlt />}, {skill:"Dart", icon:<DiDart />},{ skill: "PHP", icon: <FaPhp /> },{ skill: "SQL", icon: <TbSql /> },{ skill: "TypeScript", icon: <SiTypescript /> },{ skill: "Flutter", icon: <SiFlutter /> },{ skill: "Laravel", icon: <FaLaravel /> },{ skill: "Node.js", icon: <FaNodeJs /> },
                    ].map((skill) => (
                      <div key={skill.skill} className="flex items-center gap-2"><span className='text-green-600'>{skill.icon }</span>
                        {skill.skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="">
                <p className="text-lg mb-5">
                  // Operating Systems & Other Programs
                </p>
                <Rating />
                <CardContent className="p-4 bg-slate-950 border-teal-200/20 border rounded-lg">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                    {["Windows", "Mac OS", "Linux", "Adobe Suite", "Figma"].map(
                      (app) => (
                        <div key={app} className="flex items-center gap-2">
                          <FiCheck size={16} className="text-green-400" /> {app}
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default About;
