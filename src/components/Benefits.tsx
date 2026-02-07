import { motion, useScroll, useTransform } from 'motion/react';
import { Building2, Heart, Store } from 'lucide-react';
import { useRef } from 'react';

const userBenefits = [
  {
    icon: Building2,
    title: 'Para gestores',
    color: 'blue',
    benefits: [
      'Más control y menos sorpresas en la operativa diaria',
      'Reducción de costes operativos y energéticos',
      'Mejor toma de decisiones con datos reales',
      'Imagen profesional y moderna que diferencia',
      'Menos tiempo gestionando incidencias'
    ]
  },
  {
    icon: Heart,
    title: 'Para huéspedes',
    color: 'indigo',
    benefits: [
      'Información clara y siempre disponible',
      'Experiencia fluida desde el check-in',
      'Recomendaciones útiles y personalizadas',
      'Sensación de alojamiento premium',
      'Acceso sencillo sin complicaciones'
    ]
  },
  {
    icon: Store,
    title: 'Para negocios locales',
    color: 'purple',
    benefits: [
      'Acceso a clientes potenciales cualificados',
      'Visibilidad directa ante turistas',
      'Canal de promoción efectivo y medible',
      'Presencia dentro de la experiencia turística',
      'Oportunidad de fidelizar nuevos clientes'
    ]
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-600',
    border: 'border-blue-100'
  },
  indigo: {
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
    iconText: 'text-indigo-600',
    border: 'border-indigo-100'
  },
  purple: {
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    iconText: 'text-purple-600',
    border: 'border-purple-100'
  }
};

export function Benefits() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section id="beneficios" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-200, 200]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
        }}
        className="absolute top-1/4 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          x: useTransform(scrollYProgress, [0, 1], [200, -200]),
          rotate: useTransform(scrollYProgress, [0, 1], [180, 0]),
        }}
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"
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
            Beneficios para todos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SmartStay crea valor en cada punto de contacto del ecosistema turístico
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {userBenefits.map((user, index) => {
            const colors = colorClasses[user.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
                className={`${colors.bg} rounded-2xl p-8 border ${colors.border}`}
              >
                <motion.div 
                  className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <user.icon className={`w-7 h-7 ${colors.iconText}`} />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{user.title}</h3>
                
                <ul className="space-y-3">
                  {user.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 ${colors.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className={`w-3 h-3 ${colors.iconText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}