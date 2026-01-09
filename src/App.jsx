import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import WhyItMatters from './components/WhyItMatters'
import DesignSystem from './components/DesignSystem'
import Features from './components/Features'
import Architecture from './components/Architecture'
import GetInvolved from './components/GetInvolved'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative bg-carbon min-h-screen">
      {/* Background grid */}
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
      
      {/* Navigation */}
      <Navigation scrolled={scrolled} />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <WhyItMatters />
        <DesignSystem />
        <Features />
        <Architecture />
        <GetInvolved />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-steel-700 bg-carbon-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-steel-300 text-sm">
              <span className="font-mono">© 2025 SteelFlow MRP</span>
              <span className="mx-2">•</span>
              <span>Open Source Industrial Software</span>
            </div>
            <div className="flex gap-6">
              <a 
                href="https://github.com/meistro57/SteelFlow-MRP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-steel-300 hover:text-forge transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://github.com/meistro57/SteelFlow-MRP#readme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-steel-300 hover:text-weld transition-colors"
              >
                Documentation
              </a>
              <a 
                href="https://github.com/meistro57/SteelFlow-MRP/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-steel-300 hover:text-plasma transition-colors"
              >
                Issues
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
