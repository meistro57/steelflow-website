import { useState } from 'react'
import { Github, Menu, X } from 'lucide-react'

const Navigation = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Why', href: '#why' },
    { label: 'Design', href: '#design' },
    { label: 'Features', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Get Involved', href: '#involved' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-carbon-400/95 backdrop-blur-md border-b border-steel-700 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-forge to-forge-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl font-mono">SF</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg font-display tracking-wider">
                STEELFLOW
              </span>
              <span className="text-steel-400 text-xs font-mono tracking-widest -mt-1">
                MRP SYSTEM
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-steel-300 hover:text-forge transition-colors duration-300 font-mono text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/meistro57/SteelFlow-MRP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-steel-700 hover:bg-steel-600 text-white px-4 py-2 rounded transition-all duration-300 border border-steel-600 hover:border-forge"
            >
              <Github size={18} />
              <span className="font-mono text-sm">GITHUB</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-steel-700 bg-carbon-400">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-steel-300 hover:text-forge transition-colors duration-300 font-mono text-sm uppercase tracking-wider px-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/meistro57/SteelFlow-MRP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-steel-700 hover:bg-steel-600 text-white px-4 py-2 rounded transition-all duration-300 border border-steel-600 hover:border-forge w-fit"
              >
                <Github size={18} />
                <span className="font-mono text-sm">GITHUB</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
