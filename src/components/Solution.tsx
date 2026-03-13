import { motion, useScroll, useTransform } from 'motion/react';
import { BookOpen, Store, Activity, BarChart3 } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: BookOpen,
    title: 'Guía Turística Digital',
    description: 'Tu alojamiento con una guía digital personalizada: recomendaciones locales, normas de la casa, check-in y toda la información que tu huésped necesita, siempre actualizada y accesible desde el móvil'
  },
  {
    icon: Store,
    title: 'Impulso a Comercios Locales',
    description: 'Conecta tu alojamiento con restaurantes, tiendas y actividades locales. Los huéspedes descubren los mejores sitios y los comercios ganan visibilidad real y clientes cualificados'
  },
  {
    icon: Activity,
    title: 'Control Inteligente de Accesos',
    description: 'Check-in automático 24/7 con códigos temporales únicos. Sin llaves, sin tarjetas: tus huéspedes acceden de forma segura y tú tienes el registro completo en tiempo real'
  },
  {
    icon: BarChart3,
    title: 'Monitoreo IoT de Consumos',
    description: 'Controla el consumo de agua y energía en tiempo real. Detecta anomalías al instante, recibe alertas y reduce costes operativos con datos claros y accionables'
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4"
          >
            <span className="text-sm font-medium text-blue-700">Nuestros productos</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Todo lo que necesita tu alojamiento, en una sola plataforma
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Desde la guía turística digital hasta el control de accesos y el monitoreo inteligente: soluciones reales para gestores modernos
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.03,
                rotateX: 5,
                rotateY: index % 2 === 0 ? -3 : 3,
                z: 50,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                className="text-xl font-semibold text-gray-900 mb-3"
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                className="text-gray-700"
              >
                {feature.description}
              </motion.p>
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
            La guía turística digital: el producto estrella de SmartStay
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Crea en minutos una guía personalizada para tu alojamiento: recomendaciones locales, normas, check-in digital y mucho más. Sin apps, sin complicaciones.
          </p>
          <a
            href="https://app.smartstaycloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all font-semibold text-lg"
          >
            Probar ahora gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}