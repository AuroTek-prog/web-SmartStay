import { motion, useScroll, useTransform } from 'motion/react';
import { Wifi, Router, Shield, Settings } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const benefits = [
  {
    icon: Wifi,
    title: 'Cobertura WiFi 6',
    description: 'Red de alta velocidad con puntos de acceso de última generación'
  },
  {
    icon: Router,
    title: 'Gestión centralizada',
    description: 'Control unificado de toda la infraestructura de red desde un panel'
  },
  {
    icon: Shield,
    title: 'Seguridad avanzada',
    description: 'VLANs, segmentación y protección contra amenazas cibernéticas'
  },
  {
    icon: Settings,
    title: 'Configuración profesional',
    description: 'Estudio de cobertura y optimización para tu espacio específico'
  }
];

export function WiFiNetwork() {
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
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden">
      {/* Floating particles */}
      <motion.div
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-indigo-200 rounded-full opacity-20"
      />
      <motion.div
        style={{
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          y: useTransform(scrollYProgress, [0, 1], [50, -50]),
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            ref={imageRef}
            style={{ rotateY, scale }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3840&q=80"
                alt="Redes WiFi empresariales"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                fallbackSrc="/api/placeholder/600/400"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-blue-600/20 rounded-3xl"></div>

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
                <Wifi className="w-6 h-6 text-indigo-600" />
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
                <Router className="w-6 h-6 text-blue-600" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Estructura de redes con{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  puntos de acceso WiFi
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Diseño e instalación de redes WiFi empresariales con cobertura total
                y gestión centralizada para hoteles y comercios.
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
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
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
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Consultar proyecto
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}