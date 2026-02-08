import { motion, useScroll, useTransform } from 'motion/react';
import { TrendingUp, Users, Target, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Mayor visibilidad',
    description: 'Aparece en nuestra red de alojamientos turísticos y aumenta tu alcance'
  },
  {
    icon: Users,
    title: 'Clientes cualificados',
    description: 'Conecta con turistas que buscan servicios locales como el tuyo'
  },
  {
    icon: Target,
    title: 'Campañas segmentadas',
    description: 'Promociones dirigidas por sectores y zonas geográficas específicas'
  },
  {
    icon: BarChart3,
    title: 'Análisis detallado',
    description: 'Métricas completas de clics, conversiones y retorno de inversión'
  }
];

export function BusinessPromotion() {
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
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      {/* Floating particles */}
      <motion.div
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-slate-100 rounded-full opacity-10"
      />
      <motion.div
        style={{
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          y: useTransform(scrollYProgress, [0, 1], [50, -50]),
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-slate-100 rounded-full opacity-10"
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
                src="https://raw.githubusercontent.com/AuroTek-prog/smartstay-storage/refs/heads/main/images/Hospitality.jpg"
                alt="Impulso a comercios"
                className="w-full h-96 object-contain rounded-3xl shadow-2xl"
                fallbackSrc="/api/placeholder/600/400"
              />
              <div className="absolute inset-0 bg-slate-100/20 rounded-3xl"></div>

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
                <TrendingUp className="w-6 h-6 text-indigo-500" />
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
                <Users className="w-6 h-6 text-indigo-500" />
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
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                Impulso a comercios
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-slate-500 leading-relaxed"
              >
                Promociona tu comercio en nuestra red de alojamientos turísticos.
                Accede a campañas de marketing sectorizadas y aumenta tus ventas.
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
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    rotateX: 5,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(99,102,241,0.15)] hover:shadow-[0_15px_50px_-10px_rgba(99,102,241,0.25)] border border-slate-100 hover:-translate-y-1 transition-all duration-300"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 flex items-center justify-center mb-4"
                  >
                    <benefit.icon className="w-6 h-6 text-violet-500" />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg font-semibold text-slate-900 mb-2"
                  >
                    {benefit.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-slate-500 text-sm"
                  >
                    {benefit.description}
                  </motion.p>
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
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Empezar promoción
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}