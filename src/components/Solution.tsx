import { motion, useScroll, useTransform } from 'motion/react';
import { BookOpen, Store, Activity, BarChart3 } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: BookOpen,
    title: 'Guías digitales inteligentes',
    description: 'Información clara, actualizada y accesible para tus huéspedes desde cualquier dispositivo'
  },
  {
    icon: Store,
    title: 'Canal directo con negocios locales',
    description: 'Conecta a tus huéspedes con comercios relevantes y genera nuevas oportunidades'
  },
  {
    icon: Activity,
    title: 'Monitorización inteligente',
    description: 'Control en tiempo real de ocupación, agua y electricidad sin complicaciones'
  },
  {
    icon: BarChart3,
    title: 'Datos para decidir mejor',
    description: 'Información clara y accionable para optimizar tu gestión día a día'
  }
];

export function Solution() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section id="solucion" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]),
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-indigo-300/40 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 0.8, 1.2]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]),
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm font-medium text-blue-700">Solución integral</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SmartStay: Todo en una sola plataforma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una solución completa que unifica experiencia, control y oportunidades comerciales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: index % 2 === 0 ? -5 : 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Todo lo que necesitas para gestionar mejor, desde un solo lugar
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Sin complejidad técnica. Solo resultados claros y valor inmediato para tu negocio.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all font-medium text-lg">
            Ver cómo funciona
          </button>
        </motion.div>
      </div>
    </section>
  );
}