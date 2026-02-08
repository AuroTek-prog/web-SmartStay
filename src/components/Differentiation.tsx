import { motion, useScroll, useTransform } from 'motion/react';
import { X, Check } from 'lucide-react';
import { useRef } from 'react';

const comparison = [
  {
    feature: 'Integración multi-fabricante (Shelly, Milesight, Raixer)',
    others: false,
    smartstay: true
  },
  {
    feature: 'Suscripciones recurrentes con Stripe',
    others: false,
    smartstay: true
  },
  {
    feature: 'Arquitectura MQTT + REST escalable',
    others: false,
    smartstay: true
  },
  {
    feature: 'Onboarding automático de dispositivos',
    others: false,
    smartstay: true
  },
  {
    feature: 'Control seguro sin exposición de credenciales',
    others: false,
    smartstay: true
  },
  {
    feature: 'Cumplimiento GDPR y normativas IoT',
    others: false,
    smartstay: true
  },
  {
    feature: 'Monetización híbrida SaaS + hardware',
    others: false,
    smartstay: true
  }
];

export function Differentiation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
        }}
        className="absolute top-20 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 0.8, 1.2]),
          rotate: useTransform(scrollYProgress, [0, 1], [360, 0]),
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ventaja Competitiva en IoT para Hospitality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SmartStay no es solo una herramienta más, es la plataforma SaaS premium que integra todo el ecosistema IoT
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 border-b border-gray-200">
            <div></div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 mb-1">Soluciones tradicionales</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 mb-1">SmartStay</p>
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium rounded-full">
                Solución completa
              </div>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="divide-y divide-gray-100">
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(249, 250, 251, 1)",
                  transition: { duration: 0.2 }
                }}
                className="grid grid-cols-3 gap-4 p-6 items-center transition-colors"
              >
                <div className="font-medium text-gray-900">{item.feature}</div>
                <div className="flex justify-center">
                  {item.others ? (
                    <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
                      <Check className="w-6 h-6 text-gray-400" />
                    </motion.div>
                  ) : (
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="w-6 h-6 text-red-400" />
                    </motion.div>
                  )}
                </div>
                <div className="flex justify-center">
                  {item.smartstay && (
                    <motion.div 
                      className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 360,
                        boxShadow: "0 10px 40px rgba(59, 130, 246, 0.5)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
            <p className="text-2xl font-bold text-white mb-2">
              Arquitectura Superior. Monetización Recurrente. Mercado Premium.
            </p>
            <p className="text-blue-100 text-lg">
              La única plataforma SaaS completa para IoT en hospitality con integración multi-fabricante
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}