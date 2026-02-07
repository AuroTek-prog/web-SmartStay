import { motion, useScroll, useTransform } from 'motion/react';
import { AlertCircle, MessagesSquare, TrendingDown, Search, AlertTriangle, Shield } from 'lucide-react';
import { useRef } from 'react';

const problems = [
  {
    icon: MessagesSquare,
    title: 'Información dispersa',
    description: 'Huéspedes perdidos con múltiples fuentes de información desactualizadas'
  },
  {
    icon: AlertCircle,
    title: 'Sin control real',
    description: 'Consumos y ocupación son una caja negra hasta que llega la factura'
  },
  {
    icon: TrendingDown,
    title: 'Oportunidades perdidas',
    description: 'Conexiones comerciales locales desaprovechadas por falta de canal'
  },
  {
    icon: Search,
    title: 'Medición limitada',
    description: 'Imposible saber ocupación real y patrones de uso del alojamiento'
  },
  {
    icon: AlertTriangle,
    title: 'Gestión reactiva',
    description: 'Siempre apagando fuegos en lugar de anticipar problemas'
  },
  {
    icon: Shield,
    title: 'Riesgos de seguridad',
    description: 'Compartir información de acceso temporal supone riesgos de seguridad mientras dure la reserva'
  }
];

export function Problems() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* 3D floating elements */}
      <motion.div
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-red-200/30 rounded-3xl blur-2xl"
      />
      <motion.div
        style={{
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -360]),
        }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-2xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Los desafíos actuales de la gestión turística
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El sector enfrenta retos diarios que limitan la rentabilidad y la experiencia del huésped
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
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
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 border border-gray-200 hover:border-gray-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 font-medium">
            ¿Te resulta familiar? Es momento de cambiar el enfoque
          </p>
        </motion.div>
      </div>
    </section>
  );
}