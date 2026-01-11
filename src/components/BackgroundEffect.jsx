import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 60 particles (Reduced count for "less shine")
    const generatedParticles = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.5 + 0.5, // Smaller size (0.5px to 2px)
      duration: Math.random() * 10 + 5, // Faster cycle (5s - 15s) for quick sparks
      delay: Math.random() * 5, // Random start times
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <motion.div 
      // 1. ENTRANCE ANIMATION: Fades in the whole effect over 2 seconds
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            x: p.x, 
            y: p.y, 
            opacity: 0, 
            scale: 0 
          }}
          animate={{
            // 2. SPARK MOVEMENT: Subtle drift, not huge movement
            y: [p.y, p.y - 30], 
            
            // 3. THE SPARK FLASH (The secret sauce)
            // It stays invisible (0), flashes to 1, then instantly back to 0
            opacity: [0, 0, 1, 0, 0],
            
            // Scale "pops" when opacity hits 1
            scale: [0, 0, 1.2, 0, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
            // 4. TIMING CONTROL: 
            // 0% to 40%: Invisible
            // 50%: PEAK FLASH (Spark)
            // 60% to 100%: Invisible again
            times: [0, 0.4, 0.5, 0.6, 1] 
          }}
          style={{
            position: 'absolute',
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: 'white', // Pure white core for the "Spark"
            borderRadius: '50%',
            // 5. REDUCED GLOW: Sharp, tight glow. Not a big blurry mess.
            boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.6)' 
          }}
        />
      ))}
    </motion.div>
  );
};

export default BackgroundEffect;