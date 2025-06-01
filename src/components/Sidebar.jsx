import { FaFolder } from "react-icons/fa";
import { Link } from 'react-router';
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaImage } from "react-icons/fa";
import HighSchool from "../pages/HighSchool";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [isInterestsOpen, setInterestsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className= "md:hidden p-2 fixed top-9  left-4 "
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={` left-0 w-64 transform shadow-md transition-transform duration-200 md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          
        } ${isSidebarOpen ? "h-48" : "h-0"} `}
      >


        <nav className="px-4 py-0  space-y-2 h-0 flex flex-col">
          <Link to="/About" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700">
            <span className="material-icons-outlined text-xl">Bio</span></Link>
          
          {/*Intrest dropdown*/}
          <button
            type="button"
            onClick={() => setInterestsOpen(!isInterestsOpen)}
            className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          ><span className="flex items-center gap-3">
          <span className="material-icons-outlined text-xl"><FaFolder/></span>
          Interests
        </span><FiChevronDown
              className={`w-4 h-4 transition-transform ${
                isProjectsOpen ? "rotate-180" : ""
              }`}
            /></button>
          {isInterestsOpen && (
            <div className="pl-9 pr-3 space-y-1">
              {[
                {icon: <FaImage />,  label: "Soft Engineering", href: "/FullStack" },
                
              ].map((link) => (
                
               
                <Link to={link.href} className=" px-3 py-1.5 rounded text-gray-600 hover:bg-gray-100 flex items-center gap-3">
                  {link.icon}{link.label}
                </Link>
              ))}
            </div>
          )}
          {/* Projects dropdown */}
          <button
            type="button"
            onClick={() => setProjectsOpen(!isProjectsOpen)}
            className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <span className="flex items-center gap-3">
              <span className="material-icons-outlined text-xl"><FaFolder/></span>
              Education
            </span>
            <FiChevronDown
              className={`w-4 h-4 transition-transform ${
                isProjectsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProjectsOpen && (
            <div className="pl-9 pr-3 space-y-1">
              {[
                {icon: <FaImage />,  label: "High School", href: "/HighSchool" },
                { label: "Tertiary", href: "#" },
              ].map((link) => (
                
               
                <Link to={link.href} className=" px-3 py-1.5 rounded text-gray-600 hover:bg-gray-100 flex items-center gap-3">
                  {link.icon}{link.label}
                </Link>
              ))}
            </div>
          )}

        </nav>
      </aside>



    </>
  )
}

export default Sidebar
