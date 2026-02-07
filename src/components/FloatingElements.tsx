import { motion } from 'motion/react';

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating cubes */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 backdrop-blur-sm rounded-lg transform rotate-45" 
          style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/4"
        animate={{
          y: [0, 40, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-500/20 backdrop-blur-sm rounded-lg transform rotate-12"
          style={{ transform: 'rotateX(-45deg) rotateY(-45deg)' }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3"
        animate={{
          y: [0, -50, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-blue-500/20 backdrop-blur-sm rounded-2xl transform"
          style={{ transform: 'rotateX(30deg) rotateZ(30deg)' }}
        />
      </motion.div>

      {/* Floating rings */}
      <motion.div
        className="absolute top-1/3 right-1/3"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-32 h-32 border-4 border-blue-300/30 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-40 h-40 border-4 border-purple-300/30 rounded-full" />
      </motion.div>
    </div>
  );
}
