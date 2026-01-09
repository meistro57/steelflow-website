import { motion } from 'framer-motion'
import { Palette, Type, Sparkles, Tablet } from 'lucide-react'

const DesignSystem = () => {
  return (
    <section id="design" className="section">
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
              <span className="text-white">INDUSTRIAL </span>
              <span className="text-weld">DESIGN SYSTEM</span>
            </h2>
            <p className="text-steel-300 text-lg max-w-3xl mx-auto">
              Every element designed for the harsh realities of a steel fabrication shop floor
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Color Palette */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-forge/20 border border-forge flex items-center justify-center">
                  <Palette className="text-forge" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Color Palette</h3>
              </div>

              <div className="space-y-4">
                {/* Forge Orange */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-forge shadow-lg shadow-forge/50 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                  </div>
                  <div>
                    <div className="text-white font-bold font-mono">FORGE ORANGE</div>
                    <div className="text-steel-400 text-sm font-mono">#FF6B35</div>
                    <div className="text-steel-500 text-xs">Primary actions, hot state</div>
                  </div>
                </div>

                {/* Weld Blue */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-weld shadow-lg shadow-weld/50" />
                  <div>
                    <div className="text-white font-bold font-mono">WELD BLUE</div>
                    <div className="text-steel-400 text-sm font-mono">#4A90E2</div>
                    <div className="text-steel-500 text-xs">Info, links, active state</div>
                  </div>
                </div>

                {/* Plasma Purple */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-plasma shadow-lg shadow-plasma/50" />
                  <div>
                    <div className="text-white font-bold font-mono">PLASMA PURPLE</div>
                    <div className="text-steel-400 text-sm font-mono">#9B59B6</div>
                    <div className="text-steel-500 text-xs">Accents, special states</div>
                  </div>
                </div>

                {/* Steel Gray */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-steel-500 border border-steel-600" />
                  <div>
                    <div className="text-white font-bold font-mono">STEEL GRAY</div>
                    <div className="text-steel-400 text-sm font-mono">#2C3E50</div>
                    <div className="text-steel-500 text-xs">Structural elements, surfaces</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Typography & Components */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Typography */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded bg-weld/20 border border-weld flex items-center justify-center">
                    <Type className="text-weld" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Typography</h3>
                </div>
                <div className="card-industrial space-y-4">
                  <div>
                    <div className="text-steel-400 text-xs font-mono mb-1">DISPLAY / RAJDHANI</div>
                    <div className="text-3xl font-display font-bold text-white">STEELFLOW MRP</div>
                  </div>
                  <div>
                    <div className="text-steel-400 text-xs font-mono mb-1">
                      TECHNICAL / JETBRAINS MONO
                    </div>
                    <div className="text-lg font-mono text-forge">JOB-2025-001-A</div>
                  </div>
                  <div>
                    <div className="text-steel-400 text-xs font-mono mb-1">BODY / INTER</div>
                    <div className="text-steel-300">Clean, readable text for long-form content</div>
                  </div>
                </div>
              </div>

              {/* Design Principles */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded bg-plasma/20 border border-plasma flex items-center justify-center">
                    <Sparkles className="text-plasma" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Design Principles</h3>
                </div>
                <div className="space-y-3">
                  <div className="card-industrial bg-steel-800/60">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-forge rounded-full" />
                      <div>
                        <div className="text-white font-bold text-sm">High Contrast</div>
                        <div className="text-steel-400 text-xs">
                          Readable in bright, dusty environments
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-industrial bg-steel-800/60">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-weld rounded-full" />
                      <div>
                        <div className="text-white font-bold text-sm">Touch Optimized</div>
                        <div className="text-steel-400 text-xs">
                          Large tap targets for gloved hands
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-industrial bg-steel-800/60">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-plasma rounded-full" />
                      <div>
                        <div className="text-white font-bold text-sm">Industrial Aesthetic</div>
                        <div className="text-steel-400 text-xs">
                          Authentic steel fabrication feel
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-steel-800 to-steel-900 border border-steel-600 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-forge/20 border border-forge flex items-center justify-center">
                <Tablet className="text-forge" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">Shop Floor Ready</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <button className="btn-primary w-full justify-center">PRIMARY ACTION</button>
              <button className="btn-secondary w-full justify-center">SECONDARY ACTION</button>
              <button className="bg-plasma hover:bg-plasma-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-plasma/50 hover:scale-105 uppercase tracking-wider text-sm w-full">
                SPECIAL ACTION
              </button>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="card-industrial">
                <div className="font-mono text-xs text-forge uppercase mb-2">INVENTORY</div>
                <div className="text-3xl font-bold text-white">2,847</div>
                <div className="text-steel-400 text-sm">Active Items</div>
              </div>
              <div className="card-industrial">
                <div className="font-mono text-xs text-weld uppercase mb-2">PRODUCTION</div>
                <div className="text-3xl font-bold text-white">94.2%</div>
                <div className="text-steel-400 text-sm">Efficiency Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DesignSystem
