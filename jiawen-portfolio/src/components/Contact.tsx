'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'zhujiawen519@gmail.com',
      link: 'mailto:zhujiawen519@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '1(408)599-4164',
      link: 'tel:14085994164'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'United States',
      link: null
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" className="py-20 px-8">
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
            Let&apos;s Build Something Amazing 🚀
          </h2>
          <p 
            className="text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(1.125rem, 3vw, 1.75rem)', lineHeight: '1.5' }}
          >
            I&apos;m currently looking for challenging positions as a software engineer or AWS cloud support/associate cloud architect. If you have exciting opportunities or projects, I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 
              className="font-bold text-white mb-8"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
            >
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center space-x-4">
                  <div className="p-4 rounded-2xl bg-purple-900/30 text-purple-400 border border-purple-500/30">
                    {info.icon}
                  </div>
                  <div>
                    <h4 
                      className="text-white font-semibold"
                      style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
                    >
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                        style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p 
                        className="text-gray-300"
                        style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <h4 
                className="font-semibold text-white mb-4"
                style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
              >
                Connect With Me
              </h4>
              <a
                href="https://www.linkedin.com/in/jiawen-zhu-394849192/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-6 py-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30 hover:bg-blue-600/30 hover:text-blue-300 transition-all font-medium"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
              >
                <Linkedin size={24} />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <div className="pt-6">
              <h4 
                className="font-semibold text-white mb-4"
                style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
              >
                Resume
              </h4>
              <div className="flex flex-col space-y-3">
                <a
                  href="/Jiawen-Resume-2024.docx"
                  download
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
                >
                  <Download size={18} />
                  <span>Download Resume 2024</span>
                </a>
                <a
                  href="/Jiawen-Resume-2022.docx"
                  download
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
                >
                  <Download size={18} />
                  <span>Download Resume 2022</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="card-dark rounded-3xl p-8 text-center">
              <div style={{ fontSize: '4rem' }} className="mb-6">🤝</div>
              <h3 
                className="font-bold text-white mb-6"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
              >
                Let&apos;s Work Together
              </h3>
              <p 
                className="text-gray-300 mb-8 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
              >
                Ready to turn ideas into reality? Whether it&apos;s building the next big thing, solving complex problems, or just geeking out about tech, I&apos;m your guy!
              </p>
              
              <div className="mb-8">
                <blockquote 
                  className="text-purple-400 italic border-l-4 border-purple-400 pl-6 text-left"
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
                >
                  &ldquo;What makes life dreary is the want of motive.&rdquo;
                  <br />
                  <span 
                    className="text-gray-400 not-italic"
                    style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                  >
                    - George Eliot
                  </span>
                  <br />
                  <span 
                    className="text-gray-400 not-italic"
                    style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                  >
                    沒有了目的，生活便郁闷无光。（乔治·埃略特）
                  </span>
                </blockquote>
              </div>

              <a
                href="mailto:zhujiawen519@gmail.com"
                className="inline-flex items-center space-x-3 px-8 py-4 btn-primary font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
              >
                <Mail size={24} />
                <span>Send me an email</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-6 py-3 text-purple-400 hover:text-purple-300 transition-colors font-medium"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
          >
            <span>Back to Top</span>
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 