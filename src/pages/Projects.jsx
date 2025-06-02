import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Projects = () => {
  const projects = [
    {
      name: 'Security & Compliance Agency Website',
      link: 'https://regtech365global-client-staging.gentlemeadow-8588bc06.eastus.azurecontainerapps.io/',
      description: 'Regtech365 is your all-in-onestandard compliance package',
    },
    {
      name: 'Travel Agency Website',
      link: 'https://www.gopaddi.com/',
      description: 'A platform for all your travel needs.',
    },
  ];
  return (
    <section className="bg-slate-900 font-mono min-h-screen  flex flex-col text-gray-400/60 ">
      <Nav />
      <div className="h-19 border-b-1 border-b-teal-200/10 "></div>
      <div className=' flex min-h-screen '>
        {/* Left sidebar */}
      <aside className="w-1/4 border-r border-gray-800 px-4 py-6 text-sm hidden md:block">
        <h2 className="mb-4 text-teal-400">// projects</h2>
        <ul className="space-y-2 text-gray-400">
          {projects.map((project, idx) => (
            <li key={idx} className="hover:text-white cursor-pointer">
              {project.name.replace(/\s+/g, '-').toLowerCase()}
            </li>
          ))}
        </ul>
      </aside>

      {/* Right content area */}
      <main className="px-6 py-6 space-y-6 flex-grow">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-gray-700 rounded-md p-4 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl text-teal-400">{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:underline"
              >
                View ↗
              </a>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
              
            </div>
          </div>
        ))}
      </main>

</div>
          
      <Footer />
      
    </section>
  )
}

export default Projects
