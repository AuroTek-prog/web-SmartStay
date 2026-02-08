import { motion, useScroll, useTransform } from 'motion/react';
import { Building2, Heart, Store, TrendingUp, Users, Shield, Zap, DollarSign } from 'lucide-react';
import { useRef } from 'react';

const businessModel = [
  {
    icon: DollarSign,
    title: 'Modelo SaaS con Suscripciones',
    color: 'green',
    benefits: [
      'Suscripciones recurrentes integradas con Stripe',
      'Planes escalables por usuario o local (básico, premium, enterprise)',
      'Límites en dispositivos, sensores y acciones permitidas',
      'Ingresos mensuales/anuales predecibles'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Monetización Híbrida',
    color: 'blue',
    benefits: [
      'Software SaaS + integración hardware IoT',
      'Upsells en dispositivos Shelly, Milesight y Raixer',
      'Soporte premium y servicios adicionales',
      'Partnerships con fabricantes IoT'
    ]
  },
  {
    icon: Zap,
    title: 'Arquitectura Escalable',
    color: 'purple',
    benefits: [
      'Broker MQTT único para transporte de datos',
      'Backend centralizado para lógica de negocio',
      'APIs REST/WebSocket para integraciones',
      'Expansión a nuevos fabricantes sin cambios mayores'
    ]
  }
];

const targetAudience = [
  {
    icon: Building2,
    title: 'Gestores de Propiedades',
    color: 'blue',
    benefits: [
      'Propietarios de apartamentos turísticos',
      'Hoteles, hostales y smart buildings',
      'Optimización de operaciones diarias',
      'Control de accesos y monitoreo de consumos'
    ]
  },
  {
    icon: Heart,
    title: 'Huéspedes y Usuarios Finales',
    color: 'indigo',
    benefits: [
      'Acceso público simplificado',
      'Control de puertas y métricas en tiempo real',
      'Experiencia premium de check-in/check-out',
      'Información clara y siempre disponible'
    ]
  },
  {
    icon: Store,
    title: 'Empresas de Hospitality',
    color: 'purple',
    benefits: [
      'Plataformas de alquiler vacacional (Airbnb)',
      'Desarrolladores de smart homes/buildings',
      'Mercados europeos y emergentes',
      'Crecimiento en IoT para turismo'
    ]
  }
];

const marketStrengths = [
  {
    icon: Shield,
    title: 'Integración Multi-Fabricante',
    color: 'green',
    benefits: [
      'Soporte nativo para Shelly, Milesight y Raixer',
      'Reducción de costos de integración',
      'Mayor compatibilidad vs competidores',
      'Diferenciación técnica significativa'
    ]
  },
  {
    icon: Users,
    title: 'Automatización y Seguridad',
    color: 'blue',
    benefits: [
      'Onboarding automático vía MQTT',
      'Control seguro sin exposición de credenciales',
      'Separación de responsabilidades (backend como "cerebro")',
      'Cumplimiento GDPR y normativas IoT'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Tiempo Real y Escalabilidad',
    color: 'purple',
    benefits: [
      'WebSockets para actualizaciones en vivo',
      'Broker MQTT único para miles de dispositivos',
      'Arquitectura híbrida MQTT + REST',
      'Competencia con Home Assistant y hubs IoT comerciales'
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
  },
  green: {
    bg: 'bg-green-50',
    iconBg: 'bg-green-100',
    iconText: 'text-green-600',
    border: 'border-green-100'
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
        {/* Business Model Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Modelo de Negocio SmartStay
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plataforma SaaS para gestión inteligente de alojamientos turísticos con monetización híbrida y escalabilidad global
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {businessModel.map((item, index) => {
            const colors = colorClasses[item.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  rotateY: 3,
                  z: 50,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
                className={`${colors.bg} rounded-2xl p-8 border ${colors.border}`}
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                >
                  <item.icon className={`w-7 h-7 ${colors.iconText}`} />
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  {item.title}
                </motion.h3>
                
                <motion.ul 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                  className="space-y-3"
                >
                  {item.benefits.map((benefit, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.6 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.15 + 0.7 + idx * 0.1, type: "spring", stiffness: 300 }}
                        className={`w-5 h-5 ${colors.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <svg className={`w-3 h-3 ${colors.iconText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </div>

        {/* Target Audience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿A Quién Va Dedicado?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SmartStay está diseñado para el sector hospitality y empresas que buscan optimizar la gestión de propiedades inteligentes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {targetAudience.map((user, index) => {
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

        {/* Market Strengths Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Puntos Fuertes que Impactan sobre el Mercado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diferenciación técnica y ventajas competitivas en el mercado de IoT para hospitality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {marketStrengths.map((strength, index) => {
            const colors = colorClasses[strength.color as keyof typeof colorClasses];
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
                  <strength.icon className={`w-7 h-7 ${colors.iconText}`} />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{strength.title}</h3>
                
                <ul className="space-y-3">
                  {strength.benefits.map((benefit, idx) => (
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

        {/* Platform Advantages CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-100">
            Ventajas para Crear la Plataforma Web
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Reducción de tiempo y costos de desarrollo, escalabilidad técnica, ventaja competitiva y monetización inmediata. 
            Arquitectura modular con MQTT + REST, integración preconfigurada y compliance incorporado.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-white/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2 text-gray-100">Desarrollo Acelerado</h4>
              <p className="text-gray-200">Prototipado rápido con dispositivos IoT listos, enfocando esfuerzo en backend/frontend</p>
            </div>
            <div className="bg-white/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2 text-gray-100">Escalabilidad Global</h4>
              <p className="text-gray-200">Arquitectura modular facilita agregar fabricantes sin refactorizar</p>
            </div>
            <div className="bg-white/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2 text-gray-100">Monetización Inmediata</h4>
              <p className="text-gray-200">Planes por límites impulsan revenue recurrente desde el lanzamiento</p>
            </div>
            <div className="bg-white/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2 text-gray-100">Seguridad y Compliance</h4>
              <p className="text-gray-200">Proxy backend evita exposiciones, facilitando certificaciones</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}