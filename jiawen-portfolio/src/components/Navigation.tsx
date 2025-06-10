'use client'

import { useState, useEffect, useMemo } from 'react'
import { Menu, X, Linkedin, Download, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  const navItems = useMemo(() => [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100
      
      // Update scrolled state for navbar background
      setScrolled(window.scrollY > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#hero')}
          >
            <span className="text-2xl font-bold">
              <span className="text-white">Jiawen</span>
              <span className="gradient-text">.</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-white bg-purple-600/20 border border-purple-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/jiawenzhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-blue-600/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            
            <motion.a
              href="/Jiawen-Resume-2025.docx"
              download
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 hover:bg-purple-600/30 hover:text-purple-300 transition-all duration-300 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 bg-black/95 backdrop-blur-xl border-t border-purple-500/20">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'text-white bg-purple-600/20 border border-purple-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile Actions */}
                <div className="pt-4 border-t border-purple-500/20 space-y-3">
                  <motion.a
                    href="https://www.linkedin.com/in/jiawenzhu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-blue-400 bg-blue-600/10 border border-blue-500/30 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn Profile</span>
                    <ExternalLink size={16} />
                  </motion.a>
                  
                  <motion.a
                    href="/Jiawen-Resume-2025.docx"
                    download
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-purple-400 bg-purple-600/10 border border-purple-500/30 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={20} />
                    <span>Download Resume</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation 