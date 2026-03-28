import { motion, useScroll, useTransform } from 'motion/react';
import { Headset, TicketCheck, HelpCircle, BookOpenText, Wrench, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const supportFeatures = [
  {
    icon: Headset,
    title: 'Resolución de Incidencias',
    description: 'Reporta y gestiona incidencias técnicas con seguimiento en tiempo real hasta su resolución completa.',
    color: 'blue',
  },
  {
    icon: TicketCheck,
    title: 'Estado de Solicitudes',
    description: 'Consulta el estado de tus tickets y solicitudes en cualquier momento desde el portal.',
    color: 'indigo',
  },
  {
    icon: HelpCircle,
    title: 'Preguntas Frecuentes',
    description: 'Accede a nuestra base de conocimiento con respuestas rápidas a las dudas más comunes.',
    color: 'purple',
  },
  {
    icon: BookOpenText,
    title: 'Manuales y Documentación',
    description: 'Guías paso a paso, manuales técnicos y documentación completa de todos nuestros productos.',
    color: 'violet',
  },
];

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', ring: 'ring-blue-200' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', ring: 'ring-indigo-200' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', ring: 'ring-purple-200' },
  violet: { bg: 'bg-violet-100', text: 'text-violet-600', ring: 'ring-violet-200' },
};

export function SupportPortal() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]),
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 0.8, 1.2]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.2]),
        }}
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-4"
          >
            <span className="text-sm font-medium text-indigo-700">Canal de Soporte</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Portal de Soporte SmartStay
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Tu centro de ayuda integral: resuelve incidencias, consulta el estado de tus solicitudes, 
            accede a las FAQ y descarga manuales técnicos. También disponible como servicio independiente 
            para empresas que necesiten soporte técnico en campo.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportFeatures.map((feature, index) => {
            const colors = colorMap[feature.color];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 ring-4 ${colors.ring}`}>
                  <feature.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Service for companies banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Particle dots */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-white/90" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Servicio técnico para empresas
              </h3>
            </div>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              ¿Necesitas soporte técnico en campo, gestión de incidencias o servicios relacionados con SmartStay? 
              Contrata nuestro canal de soporte como servicio independiente para tu empresa.
            </p>
            <motion.a
              href="https://support.smartstaycloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-lg"
            >
              Acceder al Portal de Soporte
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
