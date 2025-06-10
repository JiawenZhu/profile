'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl mx-auto text-center w-full">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-12"
        >
          <h1 className="font-bold tracking-tight mb-8">
            <span 
              className="text-white block mb-6" 
              style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', lineHeight: '1.1' }}
            >
              Hey! It&apos;s
            </span>
            <span 
              className="gradient-text block"
              style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', lineHeight: '1.1' }}
            >
              Jiawen Zhu
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-16"
        >
          <p 
            className="text-gray-300 font-medium max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(1.25rem, 4vw, 2.5rem)', lineHeight: '1.4' }}
          >
            🚀 Web Developer | Data Analyst | Cloud Engineer
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={scrollToProjects}
            className="px-10 py-5 rounded-2xl font-semibold btn-primary transform hover:scale-105 transition-all duration-300 shadow-lg text-xl min-w-[200px]"
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            className="px-10 py-5 rounded-2xl font-semibold btn-secondary transform hover:scale-105 transition-all duration-300 text-xl min-w-[200px]"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 