import { motion, useScroll, useTransform } from 'motion/react';
import { Rocket, TrendingUp, Layers, Compass } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: Rocket,
    title: 'Evolución constante',
    description: 'Actualizaciones y nuevas funcionalidades que se adaptan al sector'
  },
  {
    icon: TrendingUp,
    title: 'Crece contigo',
    description: 'Desde un apartamento hasta grandes carteras de alojamientos'
  },
  {
    icon: Layers,
    title: 'Preparada para más',
    description: 'Infraestructura lista para integrar futuras innovaciones'
  },
  {
    icon: Compass,
    title: 'Visión a largo plazo',
    description: 'Acompañamos el crecimiento y transformación de tu negocio'
  }
];

export function Innovation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* 3D floating tech elements */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [100, -100]),
          rotateZ: useTransform(scrollYProgress, [0, 1], [0, 360]),
        }}
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl blur-xl"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
          rotateZ: useTransform(scrollYProgress, [0, 1], [360, 0]),
        }}
        className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Innovación continua
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Una plataforma que evoluciona contigo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SmartStay no es solo una herramienta para hoy, es tu aliado para el futuro del turismo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all"
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2
                }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Confianza y profesionalidad en cada detalle
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Una plataforma construida para durar, con la solidez y el soporte que tu negocio necesita
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-400">Disponibilidad</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-400">Soporte técnico</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-400">Gestores confían en nosotros</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}