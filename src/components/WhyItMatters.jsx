import { motion } from 'framer-motion'
import { AlertTriangle, Zap, Shield, Users } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Legacy Systems',
    description: 'Outdated interfaces built for Windows 95, not modern tablets',
    color: 'forge',
  },
  {
    icon: Zap,
    title: 'Poor UX',
    description: 'Shop floor workers struggle with complicated, unintuitive software',
    color: 'weld',
  },
  {
    icon: Shield,
    title: 'Vendor Lock-in',
    description: 'Expensive proprietary systems with limited customization',
    color: 'plasma',
  },
  {
    icon: Users,
    title: 'No Community',
    description: 'Closed-source means no shared improvements or integrations',
    color: 'forge',
  },
]

const WhyItMatters = () => {
  return (
    <section id="why" className="section bg-carbon-400">
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
              <span className="text-white">WHY </span>
              <span className="text-forge">STEELFLOW</span>
              <span className="text-white"> MATTERS</span>
            </h2>
            <p className="text-steel-300 text-lg max-w-3xl mx-auto">
              The steel fabrication industry deserves better than outdated, expensive software that
              doesn&apos;t work the way modern shops operate.
            </p>
          </motion.div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-industrial group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-${problem.color}/10 border border-${problem.color}/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <problem.icon className={`text-${problem.color}`} size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">{problem.title}</h3>
                <p className="text-steel-400">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Solution Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-forge/10 to-plasma/10 border border-forge/30 rounded-2xl p-8 lg:p-12"
          >
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-white font-display">
                Built by fabricators, for fabricators
              </h3>
              <p className="text-steel-300 text-lg leading-relaxed">
                SteelFlow MRP combines industrial design principles with modern technology to create
                an MRP system that actually works on the shop floor. High contrast for bright
                environments, touch-optimized for tablets, and straightforward workflows that match
                how steel shops actually operate.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <span className="px-4 py-2 bg-forge/20 border border-forge/40 rounded-full text-forge font-mono text-sm">
                  100% Open Source
                </span>
                <span className="px-4 py-2 bg-weld/20 border border-weld/40 rounded-full text-weld font-mono text-sm">
                  No Vendor Lock-in
                </span>
                <span className="px-4 py-2 bg-plasma/20 border border-plasma/40 rounded-full text-plasma font-mono text-sm">
                  Community Driven
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyItMatters
