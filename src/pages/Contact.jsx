import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Contact = () => {
 const contacts = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Tiaanaa',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/omonolachristiana',
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:christianaomonola99@gmail.com',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://x.com/Tiana_yemi',
    },
  ];

  return (
    
    <div className="bg-[#0a0f1a] text-[#cdd9e5] min-h-screen font-mono flex flex-col ">
      <Nav/>
      <div className="max-w-2xl mx-auto border border-teal-200/20 rounded-lg p-6 shadow-md self-center my-auto text-gray-400/60">
        <h2 className="text-2xl border-b border-teal-200/20 pb-2 mb-6 text-teal-400">
          // Contact Me
        </h2>
        <p className="mb-6">
          If you'd like to collaborate or just say hi, feel free to reach out:
        </p>
        <ul className="space-y-4">
          {contacts.map((contact, index) => (
            <li key={index}>
              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-white transition-colors duration-200"
              >
                <span className="text-lg">{contact.icon}</span>
                <span>{contact.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-xs  border-t border-teal-200/20 pt-4">
          Built with ❤️ using React + Tailwind CSS
        </div>
      </div>
    
      <Footer />
    </div>
  )
}

export default Contact
