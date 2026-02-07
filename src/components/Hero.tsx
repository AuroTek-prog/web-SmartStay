import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -z-10" 
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]) }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), scale }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Plataforma inteligente</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              La plataforma inteligente que{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                transforma
              </span>{' '}
              la gestión de apartamentos turísticos
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Mejora la experiencia de tus huéspedes, impulsa negocios locales y controla tu alojamiento en tiempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-medium text-lg group">
                Solicitar demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-medium text-lg">
                Descubrir SmartStay
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8 text-sm text-gray-600">
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div>Alojamientos activos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div>Satisfacción</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div>Soporte</div>
              </div>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="modern luxury apartment building technology"
                alt="SmartStay Platform"
                className="w-full h-auto"
              />
              
              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white rounded-lg shadow-xl p-4 backdrop-blur-sm bg-white/95"
              >
                <div className="text-sm text-gray-600">Control en tiempo real</div>
                <div className="text-2xl font-bold text-blue-600 mt-1">100%</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-8 left-8 bg-white rounded-lg shadow-xl p-4 backdrop-blur-sm bg-white/95"
              >
                <div className="text-sm text-gray-600">Experiencia mejorada</div>
                <div className="text-2xl font-bold text-indigo-600 mt-1">⭐ 4.9</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}