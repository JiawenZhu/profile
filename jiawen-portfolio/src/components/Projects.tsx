'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, BarChart3, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'GitHub Profile Search',
      description: 'A web application built using pure HTML/CSS and JavaScript with GitHub API integration for searching and displaying user profiles.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub API'],
      link: './project_idea/github-profiles/index.html',
      icon: <Github size={32} />,
      gradient: 'from-blue-500 to-purple-500',
      category: 'Web Development'
    },
    {
      title: 'Interactive Quiz App',
      description: 'A dynamic quiz application built with JavaScript and Google Sheets API, using NoCodeAPI as a backend server replacement.',
      technologies: ['JavaScript', 'Google Sheets API', 'NoCodeAPI'],
      link: 'https://jiawenzhu.github.io/profile/project_idea/quiz/quiz',
      icon: <Globe size={32} />,
      gradient: 'from-green-500 to-teal-500',
      category: 'Full Stack'
    },
    {
      title: 'eBay Sales Dashboard',
      description: 'A comprehensive Tableau dashboard showcasing eBay sales data analysis with interactive visualizations and insights.',
      technologies: ['Tableau', 'Data Analysis', 'SQL'],
      link: 'https://public.tableau.com/app/profile/jiawen.zhu/viz/revenue_16912916798840/Dashboard1',
      icon: <BarChart3 size={32} />,
      gradient: 'from-orange-500 to-red-500',
      category: 'Data Analytics'
    },
    {
      title: 'Church Website Development',
      description: 'Maintaining and developing the Church in Urbana website, with Chinese language support built from scratch using WordPress.',
      technologies: ['WordPress', 'PHP', 'CSS', 'Multilingual'],
      link: 'http://churchinurbana.org/',
      icon: <Globe size={32} />,
      gradient: 'from-purple-500 to-pink-500',
      category: 'CMS Development'
    }
  ]

  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="gradient-text font-bold mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: '1.2' }}
          >
            What I&apos;ve Built 🏗️
          </h2>
          <p 
            className="text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(1.125rem, 3vw, 1.75rem)', lineHeight: '1.5' }}
          >
            Here are some of my favorite projects that showcase my skills in web development, data analysis, and problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="card-dark rounded-3xl p-8 h-full hover:transform hover:-translate-y-2 transition-all duration-500 border border-gray-700/50 hover:border-purple-500/50 overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Header */}
                <div className="relative z-10 flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-purple-400 mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed text-lg relative z-10">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-4 py-2 text-sm bg-white/10 text-gray-300 rounded-full border border-white/20 font-medium hover:bg-white/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400 border border-purple-500/30 rounded-xl font-medium hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 hover:text-purple-300 transition-all duration-300 relative z-10 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Project</span>
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 btn-primary text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span>Let&apos;s Work Together</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 