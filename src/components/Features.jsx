import { motion } from 'framer-motion'
import { Package, ClipboardList, Boxes, LineChart, Wrench, FileText } from 'lucide-react'

const features = [
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Track materials, steel stock, and consumables in real-time',
    color: 'forge',
  },
  {
    icon: ClipboardList,
    title: 'Job Tracking',
    description: 'Manage jobs, assemblies, and parts through the entire lifecycle',
    color: 'weld',
  },
  {
    icon: Boxes,
    title: 'Assembly Hierarchy',
    description: 'Nested job → assembly → part relationships with full traceability',
    color: 'plasma',
  },
  {
    icon: Wrench,
    title: 'Production Scanner',
    description: 'Tablet-optimized interface for shop floor data entry',
    color: 'forge',
  },
  {
    icon: LineChart,
    title: 'Analytics Dashboard',
    description: 'Real-time visibility into production metrics and efficiency',
    color: 'weld',
  },
  {
    icon: FileText,
    title: 'Material Optimization',
    description: 'Intelligent nesting and cutting optimization to reduce waste',
    color: 'plasma',
  },
]

const Features = () => {
  return (
    <section id="features" className="section bg-carbon-400">
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
              <span className="text-white">POWERFUL </span>
              <span className="text-plasma">FEATURES</span>
            </h2>
            <p className="text-steel-300 text-lg max-w-3xl mx-auto">
              Everything you need to run a modern steel fabrication shop
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-industrial group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-14 h-14 rounded-lg bg-${feature.color}/10 border border-${feature.color}/30 flex items-center justify-center mb-4`}>
                  <feature.icon className={`text-${feature.color}`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  {feature.title}
                </h3>
                <p className="text-steel-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://github.com/meistro57/SteelFlow-MRP#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>EXPLORE DOCUMENTATION</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Features
