import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Star } from 'lucide-react'

// 3D Steel I-Beam Component
const SteelBeam = () => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Main vertical web */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.3, 4, 0.05]} />
          <meshStandardMaterial 
            color="#34495e" 
            metalness={0.9} 
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
        
        {/* Top flange */}
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[1.2, 0.15, 0.6]} />
          <meshStandardMaterial 
            color="#2c3e50" 
            metalness={0.9} 
            roughness={0.2}
          />
        </mesh>
        
        {/* Bottom flange */}
        <mesh position={[0, -2, 0]}>
          <boxGeometry args={[1.2, 0.15, 0.6]} />
          <meshStandardMaterial 
            color="#2c3e50" 
            metalness={0.9} 
            roughness={0.2}
          />
        </mesh>
        
        {/* Edge glow effect */}
        <pointLight position={[0, 2, 0]} color="#FF6B35" intensity={2} distance={3} />
        <pointLight position={[0, -2, 0]} color="#4A90E2" intensity={2} distance={3} />
      </group>
    </Float>
  )
}

// Floating UI Card Component
const FloatingCard = ({ children, delay = 0, position }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      className={`absolute ${position} hidden lg:block`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="backdrop-blur-md bg-steel-800/40 border border-steel-600 rounded-lg p-4 shadow-2xl"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

const Hero = () => {
  const [githubStars, setGithubStars] = useState(null)

  useEffect(() => {
    // Fetch GitHub stars (optional, will fail gracefully)
    fetch('https://api.github.com/repos/meistro57/SteelFlow-MRP')
      .then(res => res.json())
      .then(data => setGithubStars(data.stargazers_count))
      .catch((error) => console.warn('Failed to fetch GitHub stars:', error))
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-forge rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="section-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-forge/10 border border-forge/30 rounded-full px-4 py-2"
            >
              <div className="w-2 h-2 bg-forge rounded-full animate-pulse" />
              <span className="text-forge font-mono text-sm uppercase tracking-wider">
                Open Source MRP
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold font-display leading-tight"
              >
                <span className="text-white">STEEL</span>
                <span className="text-forge">FLOW</span>
                <br />
                <span className="text-steel-300 text-3xl lg:text-5xl">
                  Material Requirements Planning
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-steel-300 text-lg lg:text-xl max-w-xl leading-relaxed"
              >
                Modern, open-source MRP system built for steel fabrication shops. 
                Industrial design meets powerful functionality.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/meistro57/SteelFlow-MRP"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                <Github size={20} />
                <span>VIEW ON GITHUB</span>
                {githubStars && (
                  <span className="flex items-center gap-1 ml-2 px-2 py-1 bg-forge-700 rounded">
                    <Star size={14} />
                    <span className="text-xs">{githubStars}</span>
                  </span>
                )}
              </a>
              
              <a
                href="#features"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <span>EXPLORE FEATURES</span>
              </a>
            </motion.div>

            {/* Tech stack badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-3"
            >
              {['Docker', 'Laravel', 'Vue.js', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-steel-800/50 border border-steel-700 rounded text-steel-300 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Steel Beam */}
          <div className="relative h-[600px] lg:h-[700px]">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 50 }}
              className="cursor-grab active:cursor-grabbing"
            >
              <ambientLight intensity={0.3} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
              <SteelBeam />
              <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={0.5}
                enablePan={false}
              />
            </Canvas>

            {/* Floating UI Cards around the beam */}
            <FloatingCard delay={1.0} position="top-10 left-10">
              <div className="space-y-1">
                <div className="text-forge font-mono text-xs uppercase">Inventory</div>
                <div className="text-white font-bold text-xl">2,847</div>
                <div className="text-steel-400 text-xs">Active Items</div>
              </div>
            </FloatingCard>

            <FloatingCard delay={1.2} position="top-20 right-10">
              <div className="space-y-1">
                <div className="text-weld font-mono text-xs uppercase">Production</div>
                <div className="text-white font-bold text-xl">94.2%</div>
                <div className="text-steel-400 text-xs">Efficiency</div>
              </div>
            </FloatingCard>

            <FloatingCard delay={1.4} position="bottom-32 left-20">
              <div className="space-y-1">
                <div className="text-plasma font-mono text-xs uppercase">Jobs</div>
                <div className="text-white font-bold text-xl">18</div>
                <div className="text-steel-400 text-xs">In Progress</div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#why"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-steel-400 hover:text-forge transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  )
}

export default Hero
