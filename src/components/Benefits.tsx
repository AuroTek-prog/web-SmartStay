import { motion, useScroll, useTransform } from 'motion/react';
import { Building2, Heart, Store, TrendingUp, Users, Shield, Zap, Star } from 'lucide-react';
import { useRef } from 'react';

const gestorBenefits = [
  {
    icon: Building2,
    title: 'Control total de tu alojamiento',
    color: 'blue',
    benefits: [
      'Gestiona accesos, consumos y guÃ­as desde un solo panel',
      'Check-in automÃ¡tico 24/7 sin intervenciÃ³n manual',
      'Alertas en tiempo real: fugas, accesos no autorizados, sobretensiones',
      'Reduce incidencias operativas hasta un 40%'
    ]
  },
  {
    icon: Zap,
    title: 'Ahorro y eficiencia garantizados',
    color: 'green',
    benefits: [
      'Monitoreo de consumo de agua y energÃ­a en tiempo real',
      'DetecciÃ³n automÃ¡tica de fugas y anomalÃ­as',
      'OptimizaciÃ³n de tarifas elÃ©ctricas con datos histÃ³ricos',
      'Informes mensuales de ahorro para tu negocio'
    ]
  },
  {
    icon: Star,
    title: 'Mejor experiencia para el huÃ©sped',
    color: 'purple',
    benefits: [
      'GuÃ­a turÃ­stica digital personalizada para cada alojamiento',
      'Acceso sin contacto: sin llaves ni tarjetas fÃ­sicas',
      'InformaciÃ³n local siempre actualizada en el mÃ³vil',
      'Menos consultas, mÃ¡s satisfacciÃ³n: â­ 4.9 de media'
    ]
  }
];

const clientTypes = [
  {
    icon: Building2,
    title: 'Gestores de Alojamientos',
    color: 'blue',
    benefits: [
      'Propietarios de apartamentos turÃ­sticos y vacacionales',
      'Hoteles, hostales y complejos rurales',
      'Control centralizado de mÃºltiples propiedades',
      'Panel de analÃ­tica para tomar mejores decisiones'
    ]
  },
  {
    icon: Heart,
    title: 'HuÃ©spedes y Viajeros',
    color: 'indigo',
    benefits: [
      'Acceso a la guÃ­a turÃ­stica digital sin apps ni registro',
      'Check-in y check-out automÃ¡tico desde el mÃ³vil',
      'Recomendaciones locales actualizadas al instante',
      'Experiencia premium desde la llegada hasta la salida'
    ]
  },
  {
    icon: Store,
    title: 'Comercios y Negocios Locales',
    color: 'purple',
    benefits: [
      'Visibilidad directa en la red de alojamientos turÃ­sticos',
      'ConexiÃ³n con turistas que buscan servicios locales',
      'CampaÃ±as de promociÃ³n segmentadas por zona',
      'EstadÃ­sticas reales de impacto y alcance'
    ]
  }
];

const productHighlights = [
  {
    icon: Shield,
    title: 'Seguridad y tranquilidad',
    color: 'green',
    benefits: [
      'Accesos certificados y trazables en todo momento',
      'CÃ³digos temporales Ãºnicos para cada huÃ©sped',
      'Compatible con GDPR y normativas de privacidad',
      'Soporte tÃ©cnico especializado disponible'
    ]
  },
  {
    icon: Users,
    title: 'FÃ¡cil para ti, mejor para todos',
    color: 'blue',
    benefits: [
      'Plataforma intuitiva sin conocimientos tÃ©cnicos',
      'Alta en menos de 24 horas con acompaÃ±amiento incluido',
      'Actualizaciones automÃ¡ticas sin perder configuraciones',
      'Soporte en espaÃ±ol con equipo humano real'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Crece con tu negocio',
    color: 'purple',
    benefits: [
      'Planes flexibles desde 4.99â‚¬/mes por activo',
      'AÃ±ade servicios segÃºn las necesidades de tu negocio',
      'IntegraciÃ³n con tus herramientas de gestiÃ³n actuales',
      'Escala desde 1 alojamiento hasta cientos de propiedades'
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

  const renderCards = (items: typeof gestorBenefits) =>
    items.map((item, index) => {
      const colors = colorClasses[item.color as keyof typeof colorClasses];
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
          whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.3 } }}
          className={`${colors.bg} rounded-2xl p-8 border ${colors.border}`}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
            className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-6`}
            whileHover={{ rotate: 360, scale: 1.1 }}
          >
            <item.icon className={`w-7 h-7 ${colors.iconText}`} />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.title}</h3>
          <ul className="space-y-3">
            {item.benefits.map((benefit, idx) => (
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

        {/* Section 1: What you get */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que SmartStay hace por ti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TecnologÃ­a que simplifica la gestiÃ³n, reduce costes y eleva la experiencia de tus huÃ©spedes
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {renderCards(gestorBenefits)}
        </div>

        {/* Section 2: Who is it for */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Â¿Para quiÃ©n es SmartStay?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DiseÃ±ado para todos los actores del ecosistema turÃ­stico: gestores, viajeros y comercios locales
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {renderCards(clientTypes)}
        </div>

        {/* Section 3: Product highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sencillo, fiable y a tu medida
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seguridad, facilidad de uso y planes flexibles para todo tipo de alojamiento
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {renderCards(productHighlights)}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            Empieza hoy, sin compromiso
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Alta rÃ¡pida, soporte en espaÃ±ol y planes desde 4.99â‚¬/mes. Contacta con nuestro equipo y te preparamos una demo personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@smartstaycloud.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all font-semibold text-lg"
            >
              Solicitar demo gratuita
            </a>
            <a
              href="mailto:info@smartstaycloud.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
            >
              info@smartstaycloud.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
