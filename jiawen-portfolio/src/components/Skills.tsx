'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, BarChart3, Wrench, Globe } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: <Database size={32} />,
      title: 'Backend & Database',
      skills: ['MySQL', 'DynamoDB', 'Node.js', 'Python', 'R', 'ETL'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-600/10',
      borderColor: 'border-green-500/30'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & DevOps',
      skills: ['AWS EC2', 'S3', 'IAM', 'VPC', 'Route 53', 'Azure Data Factory'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-600/10',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Data & Analytics',
      skills: ['Tableau', 'Jupyter Notebook', 'Google Analytics', 'DBT'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-600/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Tools & Platforms',
      skills: ['Visual Studio Code', 'GitHub/GitLab', 'Unix/Linux', 'Docker'],
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gray-600/10',
      borderColor: 'border-gray-500/30'
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Technologies',
      skills: ['HTTP/HTTPS', 'DNS', 'Web Servers', 'Security', 'REST APIs'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-600/10',
      borderColor: 'border-indigo-500/30'
    }
  ]

  const proficiencyLevels = [
    { skill: 'HTML5', level: 99, color: 'from-orange-500 to-red-500' },
    { skill: 'CSS3', level: 95, color: 'from-blue-500 to-cyan-500' },
    { skill: 'JavaScript', level: 95, color: 'from-yellow-500 to-orange-500' },
    { skill: 'MySQL', level: 99, color: 'from-blue-600 to-indigo-600' },
    { skill: 'R', level: 90, color: 'from-blue-400 to-blue-600' },
    { skill: 'Python', level: 80, color: 'from-green-500 to-blue-500' },
    { skill: 'Tableau', level: 90, color: 'from-orange-500 to-red-500' },
    { skill: 'GitHub', level: 99, color: 'from-gray-600 to-gray-800' }
  ]

  return (
    <section id="skills" className="py-20 px-8">
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
            Technical Skills 🛠️
          </h2>
          <p 
            className="text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(1.125rem, 3vw, 1.75rem)', lineHeight: '1.5' }}
          >
            I constantly learn new technologies and apply them to solve real-world problems
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card-dark rounded-2xl p-6 ${category.bgColor} border ${category.borderColor} hover:scale-105 transition-all duration-300`}
            >
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              
              <h3 
                className="font-bold text-white mb-4"
                style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
              >
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full border border-white/20 font-medium"
                    style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 
            className="text-center mb-8"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
          >
            <span className="gradient-text font-bold">Technical Proficiency</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {proficiencyLevels.map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span 
                    className="font-semibold text-white"
                    style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
                  >
                    {item.skill}
                  </span>
                  <span 
                    className="text-purple-400 font-medium"
                    style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                  >
                    {item.level}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 
            className="font-bold mb-6"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
          >
            <span className="gradient-text">Currently Learning</span> 📚
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['TypeScript', 'GraphQL', 'Kubernetes', 'Machine Learning', 'Blockchain'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-full border border-purple-500/30 font-medium hover:scale-105 transition-all duration-300"
                style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 