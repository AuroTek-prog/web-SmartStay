import { motion, useScroll, useTransform } from 'motion/react';
import { Store, MapPin, TrendingUp, Handshake } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const benefits = [
  {
    icon: MapPin,
    title: 'Visibilidad directa',
    description: 'Negocios locales dentro de la experiencia del huésped'
  },
  {
    icon: Store,
    title: 'Recomendaciones contextuales',
    description: 'Sugerencias relevantes en el momento adecuado'
  },
  {
    icon: Handshake,
    title: 'Alianzas beneficiosas',
    description: 'Relaciones win-win con el comercio local'
  },
  {
    icon: TrendingUp,
    title: 'Nueva fuente de valor',
    description: 'Oportunidades comerciales para tu negocio'
  }
];

export function LocalBusiness() {
  const ref = useRef(null);
  const imageRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(imageScrollProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(imageScrollProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated 3D shapes */}
      <motion.div
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          rotateZ: useTransform(scrollYProgress, [0, 1], [0, 360]),
        }}
        className="absolute top-1/4 left-10 w-48 h-48 bg-indigo-300/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-4">
              <span className="text-sm font-medium text-indigo-700">Funcionalidad 2</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Impulso comercial y negocios locales
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Conecta a tus huéspedes con los mejores negocios locales en el momento adecuado.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    x: 10,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon className="w-5 h-5 text-indigo-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
              <p className="text-lg font-medium text-indigo-900 mb-2">
                Un canal de valor para todos
              </p>
              <p className="text-indigo-700">
                Beneficia al huésped con recomendaciones útiles, al comercio con clientes reales, y a ti con nuevas alianzas estratégicas.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              style={{ 
                rotateY,
                scale,
                transformStyle: "preserve-3d"
              }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="local business restaurant cafe storefront"
                  alt="Negocios locales"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating cards */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotateX: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                whileHover={{ scale: 1.1, z: 100 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🍽️</div>
                  <div>
                    <div className="text-xs text-gray-600">Conversiones</div>
                    <div className="text-lg font-bold text-indigo-600">+45%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.2, rotate: 0 }}
                className="absolute top-8 right-8 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Store className="w-8 h-8 text-indigo-600" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}