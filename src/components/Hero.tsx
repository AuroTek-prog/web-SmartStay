import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef, useState, useEffect } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const dynamicTexts = [
    "mejoras significativas",
    "tecnología IoT",
    "una sola plataforma", 
    "automatizaciones",
    "expansión global",
    "eficiencia operativa"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        (prevIndex + 1) % dynamicTexts.length
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [dynamicTexts.length]);

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
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), scale }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-sm font-medium text-blue-700"
              >
                Plataforma SaaS IoT
              </motion.span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight"
            >
              Transformamos la gestión turística y el comercio local con{' '}
              <motion.span 
                key={currentTextIndex}
                initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
                animate={{ opacity: 1, backgroundPosition: "100% 50%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_200%]"
              >
                {dynamicTexts[currentTextIndex]}
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Gestiona accesos inteligentes, monitorea consumos y potencia negocios locales. 
              Integración multi-fabricante con Shelly, Milesight y Raixer. Suscripciones recurrentes con Stripe.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-medium text-lg group"
              >
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
                Solicitar demo
              </motion.button>
              <motion.button 
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(37, 99, 235, 0.1)",
                  borderColor: "#2563eb"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-medium text-lg"
              >
                Descubrir SmartStay
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-12 flex items-center gap-8 text-sm text-gray-600"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
                  className="text-2xl font-bold text-gray-900"
                >
                  500+
                </motion.div>
                <div>Alojamientos activos</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1, type: "spring", stiffness: 200 }}
                  className="text-2xl font-bold text-gray-900"
                >
                  €50B+
                </motion.div>
                <div>Mercado IoT buildings</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2, type: "spring", stiffness: 200 }}
                  className="text-2xl font-bold text-gray-900"
                >
                  25%+
                </motion.div>
                <div>CAGR crecimiento</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <motion.div 
              initial={{ rotateY: 15, scale: 0.95 }}
              animate={{ rotateY: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://raw.githubusercontent.com/AuroTek-prog/smartstay-storage/refs/heads/main/images/fondo-login.jpg"
                alt="SmartStay Platform"
                className="w-full h-auto"
              />
              
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="absolute top-8 right-8 bg-white rounded-lg shadow-xl p-4 backdrop-blur-sm bg-white/95"
              >
                <div className="text-sm text-gray-600">Control en tiempo real</div>
                <div className="text-2xl font-bold text-blue-600 mt-1">100%</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: -2 }}
                className="absolute bottom-8 left-8 bg-white rounded-lg shadow-xl p-4 backdrop-blur-sm bg-white/95"
              >
                <div className="text-sm text-gray-600">Experiencia mejorada</div>
                <div className="text-2xl font-bold text-indigo-600 mt-1">⭐ 4.9</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}