import { motion, useScroll, useTransform } from 'motion/react';
import { Home, Lightbulb, Thermometer, Smartphone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const benefits = [
  {
    icon: Home,
    title: 'Edificio inteligente',
    description: 'Control centralizado de todas las funciones del edificio desde una app'
  },
  {
    icon: Lightbulb,
    title: 'Iluminación automática',
    description: 'Gestión inteligente de luces con sensores de presencia y programador'
  },
  {
    icon: Thermometer,
    title: 'Climatización eficiente',
    description: 'Control de temperatura y ventilación para máximo confort y ahorro'
  },
  {
    icon: Smartphone,
    title: 'Control remoto',
    description: 'Acceso completo desde cualquier dispositivo móvil o asistente de voz'
  }
];

export function DomoticsControl() {
  const ref = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(imageScrollProgress, [0, 0.5, 1], [-15, 0, 15]);
  const scale = useTransform(imageScrollProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Floating particles */}
      <motion.div
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20"
      />
      <motion.div
        style={{
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          y: useTransform(scrollYProgress, [0, 1], [50, -50]),
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-20"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Domótica y control{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  inteligente
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Transforma tu propiedad en un edificio inteligente con sistemas de automatización
                avanzados que optimizan el confort, la seguridad y el consumo energético.
              </motion.p>
            </div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Descubrir soluciones
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            ref={imageRef}
            style={{ rotateY, scale }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <ImageWithFallback
                src="https://www.ambientum.com/wp-content/uploads/2025/10/edificios-inteligentes-freepik.jpg"
                alt="Domótica y control inteligente"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                fallbackSrc="/api/placeholder/600/400"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-teal-600/20 rounded-3xl"></div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
              >
                <Home className="w-6 h-6 text-emerald-600" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
              >
                <Smartphone className="w-6 h-6 text-teal-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}