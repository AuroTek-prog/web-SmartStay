import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function VideoShowcase() {
  return (
    <section id="video" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4"
          >
            <Play className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Nuestra propuesta de valor</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Descubre por qué SmartStay es diferente
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            En menos de 2 minutos, conoce cómo transformamos la gestión de alojamientos turísticos
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Z5Cdi0r3tGI?rel=0"
            title="SmartStay - Descubre cómo funciona"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
