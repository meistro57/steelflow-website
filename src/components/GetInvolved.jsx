import { motion } from 'framer-motion'
import { Github, BookOpen, MessageCircle, Star } from 'lucide-react'

const GetInvolved = () => {
  return (
    <section id="involved" className="section bg-carbon-400">
      <div className="section-content">
        <div className="space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display">
              <span className="text-white">GET </span>
              <span className="text-weld">INVOLVED</span>
            </h2>
            <p className="text-steel-300 text-lg max-w-3xl mx-auto">
              SteelFlow is open source and community-driven. Join us in building better software for
              steel fabrication.
            </p>
          </motion.div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* GitHub */}
            <motion.a
              href="https://github.com/meistro57/SteelFlow-MRP"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-industrial group hover:scale-105 transition-all duration-300 hover:border-forge"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-forge/10 border border-forge/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Github className="text-forge" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-forge transition-colors">
                    Star on GitHub
                  </h3>
                  <p className="text-steel-400 mb-4">
                    View the source code, report issues, and contribute to the project
                  </p>
                  <div className="flex items-center gap-2 text-forge font-mono text-sm">
                    <Star size={16} />
                    <span>Star the repository</span>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Documentation */}
            <motion.a
              href="https://github.com/meistro57/SteelFlow-MRP#readme"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-industrial group hover:scale-105 transition-all duration-300 hover:border-weld"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-weld/10 border border-weld/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BookOpen className="text-weld" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-weld transition-colors">
                    Read the Docs
                  </h3>
                  <p className="text-steel-400 mb-4">
                    Installation guides, API documentation, and usage examples
                  </p>
                  <div className="flex items-center gap-2 text-weld font-mono text-sm">
                    <BookOpen size={16} />
                    <span>View documentation</span>
                  </div>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Contribution CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-forge/10 via-weld/10 to-plasma/10 border border-forge/30 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto"
          >
            <div className="text-center space-y-6">
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-forge/20 border border-forge flex items-center justify-center">
                  <Github className="text-forge" size={24} />
                </div>
                <div className="w-12 h-12 rounded-full bg-weld/20 border border-weld flex items-center justify-center">
                  <BookOpen className="text-weld" size={24} />
                </div>
                <div className="w-12 h-12 rounded-full bg-plasma/20 border border-plasma flex items-center justify-center">
                  <MessageCircle className="text-plasma" size={24} />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white font-display">Help Shape the Future</h3>

              <p className="text-steel-300 text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you&apos;re a developer, fabricator, or just interested in better industrial
                software, your contributions make a difference. Report bugs, suggest features,
                contribute code, or share your experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="https://github.com/meistro57/SteelFlow-MRP/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 justify-center"
                >
                  <MessageCircle size={20} />
                  <span>REPORT AN ISSUE</span>
                </a>
                <a
                  href="https://github.com/meistro57/SteelFlow-MRP/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 justify-center"
                >
                  <Github size={20} />
                  <span>FORK THE REPO</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* License Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-steel-400 text-sm font-mono">
              Released under the MIT License •
              <a
                href="https://github.com/meistro57/SteelFlow-MRP/blob/main/LICENSE"
                className="text-forge hover:text-forge-400 ml-1"
              >
                View License
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
