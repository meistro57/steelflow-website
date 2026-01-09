import { motion } from 'framer-motion'
import { Database, Server, Layout, Code } from 'lucide-react'

const techStack = [
  { name: 'Docker', description: 'Containerized deployment', icon: Server, color: 'weld' },
  { name: 'Laravel', description: 'PHP backend framework', icon: Code, color: 'forge' },
  { name: 'Vue.js', description: 'Reactive frontend', icon: Layout, color: 'plasma' },
  { name: 'PostgreSQL', description: 'Relational database', icon: Database, color: 'weld' },
]

const Architecture = () => {
  return (
    <section id="architecture" className="section">
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
              <span className="text-white">MODERN </span>
              <span className="text-forge">ARCHITECTURE</span>
            </h2>
            <p className="text-steel-300 text-lg max-w-3xl mx-auto">
              Built with proven, industry-standard technologies
            </p>
          </motion.div>

          {/* Tech Stack */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-industrial text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-lg bg-${tech.color}/10 border border-${tech.color}/30 flex items-center justify-center mb-4`}
                >
                  <tech.icon className={`text-${tech.color}`} size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">{tech.name}</h3>
                <p className="text-steel-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-steel-800 to-steel-900 border border-steel-600 rounded-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl font-bold text-white font-display mb-8 text-center">
              System Architecture
            </h3>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Frontend */}
              <div className="space-y-3">
                <div className="text-plasma font-mono text-sm uppercase text-center">Frontend</div>
                <div className="card-industrial bg-steel-800/60 text-center">
                  <div className="font-bold text-white mb-2">Vue.js Components</div>
                  <div className="text-steel-400 text-sm space-y-1">
                    <div>• Dashboard</div>
                    <div>• Inventory UI</div>
                    <div>• Production Scanner</div>
                    <div>• Reports</div>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-3">
                <div className="text-forge font-mono text-sm uppercase text-center">Backend</div>
                <div className="card-industrial bg-steel-800/60 text-center">
                  <div className="font-bold text-white mb-2">Laravel API</div>
                  <div className="text-steel-400 text-sm space-y-1">
                    <div>• Business Logic</div>
                    <div>• Authentication</div>
                    <div>• Data Processing</div>
                    <div>• File Generation</div>
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="space-y-3">
                <div className="text-weld font-mono text-sm uppercase text-center">Database</div>
                <div className="card-industrial bg-steel-800/60 text-center">
                  <div className="font-bold text-white mb-2">PostgreSQL</div>
                  <div className="text-steel-400 text-sm space-y-1">
                    <div>• Jobs & Projects</div>
                    <div>• Inventory Data</div>
                    <div>• Production Logs</div>
                    <div>• User Management</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-steel-700 border border-steel-600 rounded-lg">
                <Server className="text-forge" size={20} />
                <span className="text-white font-mono text-sm">Dockerized for easy deployment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Architecture
