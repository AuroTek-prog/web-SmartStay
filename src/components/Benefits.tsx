import { motion, useScroll, useTransform } from 'motion/react';
import { Building2, Heart, Store, TrendingUp, Users, Shield, Zap, Star } from 'lucide-react';
import { useRef } from 'react';

const gestorBenefits = [
  {
    icon: Building2,
    title: 'Control total de tu alojamiento',
    color: 'blue',
    benefits: [
      'Gestiona accesos, consumos y guías desde un solo panel',
      'Check-in automático 24/7 sin intervención manual',
      'Alertas en tiempo real: fugas, accesos no autorizados, sobretensiones',
      'Reduce incidencias operativas hasta un 40%'
    ]
  },
  {
    icon: Zap,
    title: 'Ahorro y eficiencia garantizados',
    color: 'green',
    benefits: [
      'Monitoreo de consumo de agua y energía en tiempo real',
      'Detección automática de fugas y anomalías',
      'Optimización de tarifas eléctricas con datos históricos',
      'Informes mensuales de ahorro para tu negocio'
    ]
  },
  {
    icon: Star,
    title: 'Mejor experiencia para el huésped',
    color: 'purple',
    benefits: [
      'Guía turística digital personalizada para cada alojamiento',
      'Acceso sin contacto: sin llaves ni tarjetas físicas',
      'Información local siempre actualizada en el móvil',
      'Menos consultas, más satisfacción: ⭐ 4.9 de media'
    ]
  }
];

const clientTypes = [
  {
    icon: Building2,
    title: 'Gestores de Alojamientos',
    color: 'blue',
    benefits: [
      'Propietarios de apartamentos turísticos y vacacionales',
      'Hoteles, hostales y complejos rurales',
      'Control centralizado de múltiples propiedades',
      'Panel de analítica para tomar mejores decisiones'
    ]
  },
  {
    icon: Heart,
    title: 'Huéspedes y Viajeros',
    color: 'indigo',
    benefits: [
      'Acceso a la guía turística digital sin apps ni registro',
      'Check-in y check-out automático desde el móvil',
      'Recomendaciones locales actualizadas al instante',
      'Experiencia premium desde la llegada hasta la salida'
    ]
  },
  {
    icon: Store,
    title: 'Comercios y Negocios Locales',
    color: 'purple',
    benefits: [
      'Visibilidad directa en la red de alojamientos turísticos',
      'Conexión con turistas que buscan servicios locales',
      'Campañas de promoción segmentadas por zona',
      'Estadísticas reales de impacto y alcance'
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
      'Códigos temporales únicos para cada huésped',
      'Compatible con GDPR y normativas de privacidad',
      'Soporte técnico especializado disponible'
    ]
  },
  {
    icon: Users,
    title: 'Fácil para ti, mejor para todos',
    color: 'blue',
    benefits: [
      'Plataforma intuitiva sin conocimientos técnicos',
      'Alta en menos de 24 horas con acompañamiento incluido',
      'Actualizaciones automáticas sin perder configuraciones',
      'Soporte en español con equipo humano real'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Crece con tu negocio',
    color: 'purple',
    benefits: [
      'Planes flexibles desde 4.99€/mes por activo',
      'Añade servicios según las necesidades de tu negocio',
      'Integración con tus herramientas de gestión actuales',
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

export function Benefits({ onOpenSalesForm }: { onOpenSalesForm?: (origen: string) => void }) {
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
            Tecnología que simplifica la gestión, reduce costes y eleva la experiencia de tus huéspedes
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
            ¿Para quién es SmartStay?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diseñado para todos los actores del ecosistema turístico: gestores, viajeros y comercios locales
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
            Alta rápida, soporte en español y planes desde 4.99€/mes. Contacta con nuestro equipo y te preparamos una demo personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenSalesForm?.('Solicitar demo gratuita — Beneficios')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all font-semibold text-lg"
            >
              Solicitar demo gratuita
            </button>
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
