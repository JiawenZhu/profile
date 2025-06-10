'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 
            className="gradient-text font-bold mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: '1.2' }}
          >
            Code, Coffee & Me ☕💻
          </h2>
          <p 
            className="text-gray-300 max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1.125rem, 3vw, 1.75rem)', lineHeight: '1.5' }}
          >
            Building digital experiences with passion and precision
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 mb-8">
              <span style={{ fontSize: '3rem' }}>🚀</span>
              <h3 
                className="font-bold text-white"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
              >
                Hey, I&apos;m Jiawen Zhu!
              </h3>
            </div>
            
            <div className="space-y-6">
              <p 
                className="text-gray-300 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.6' }}
              >
                A <span className="gradient-text font-semibold">Web Developer</span> 🧙‍♂️ and <span className="gradient-text font-semibold">Data Analyst</span> 💻, turning <span className="text-purple-400">lines of code into digital magic!</span> Whether it&apos;s smart contracts, data visualizations, or cloud architecture, I love pushing technology to the next level.
              </p>
              
              <p 
                className="text-gray-300 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.6' }}
              >
                I spend my days hacking away in <span className="text-purple-400">JavaScript, Python, and R</span>—and my nights wondering why deployment issues still exist. 😅 When I&apos;m not coding, I&apos;m probably deep-diving into <span className="text-purple-400">AWS cloud solutions</span>, contributing to <span className="text-purple-400">open-source projects</span>, or evangelizing technology to anyone who&apos;ll listen (or can&apos;t escape).
              </p>
              
              <p 
                className="text-gray-300 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.6' }}
              >
                Let&apos;s <span className="gradient-text font-semibold">connect, build, and break things</span>—because the <span className="text-purple-400">future is data-driven</span>, and I refuse to be left behind! 🎯🔥
              </p>
            </div>

            <div className="pt-6">
              <h4 
                className="font-semibold text-white mb-4"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
              >
                🛠️ Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'Python', 'R', 'AWS', 'MySQL', 'Tableau', 'Next.js', 'Node.js'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/30 font-medium"
                    style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <Image
                  src="/images/profile.svg"
                  alt="Jiawen Zhu"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-20 -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Personal Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 
            className="font-bold text-center mb-8"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
          >
            <span className="gradient-text">The Road So Far</span> 🗺️
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-dark rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h4 
                className="font-semibold text-white mb-2"
                style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
              >
                Education
              </h4>
              <p className="text-gray-400" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                Computer Science & Engineering
              </p>
              <p className="text-purple-400 text-sm">San Francisco State University</p>
            </div>
            
            <div className="card-dark rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h4 
                className="font-semibold text-white mb-2"
                style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
              >
                Experience
              </h4>
              <p className="text-gray-400" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                Web Developer & Data Analyst
              </p>
              <p className="text-purple-400 text-sm">Full-Stack + Cloud Engineering</p>
            </div>
            
            <div className="card-dark rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h4 
                className="font-semibold text-white mb-2"
                style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
              >
                Goal
              </h4>
              <p className="text-gray-400" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                Software Engineer / Cloud Architect
              </p>
              <p className="text-purple-400 text-sm">Building the future with code</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 