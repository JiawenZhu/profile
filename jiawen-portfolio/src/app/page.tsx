import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import ParticlesBackground from '@/components/ParticlesBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  )
}
