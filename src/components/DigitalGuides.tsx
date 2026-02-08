import { motion, useScroll, useTransform } from 'motion/react';
import { Smartphone, RefreshCw, Star, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const benefits = [
  {
    icon: Smartphone,
    title: 'Acceso instantáneo',
    description: 'Desde cualquier dispositivo, sin apps ni registros complicados'
  },
  {
    icon: RefreshCw,
    title: 'Siempre actualizado',
    description: 'Modifica contenido al instante y llega a todos tus huéspedes'
  },
  {
    icon: Star,
    title: 'Imagen profesional',
    description: 'Experiencia moderna que diferencia tu alojamiento'
  },
  {
    icon: MessageCircle,
    title: 'Menos consultas',
    description: 'Respuestas anticipadas que reducen interrupciones'
  }
];

export function DigitalGuides() {
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

  const rotateY = useTransform(imageScrollProgress, [0, 0.5, 1], [-15, 0, 15]);
  const scale = useTransform(imageScrollProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section id="funcionalidades" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* 3D Background elements */}
      <motion.div
        style={{
          rotateZ: useTransform(scrollYProgress, [0, 1], [0, 180]),
          x: useTransform(scrollYProgress, [0, 1], [-50, 50]),
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-blue-300/20 rounded-3xl blur-2xl"
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
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
                  src="https://raw.githubusercontent.com/AuroTek-prog/smartstay-storage/refs/heads/main/images/viajeros2.jpg"
                  alt="Guías digitales SmartStay"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotateZ: [-5, 5, -5]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                whileHover={{ scale: 1.1, rotateZ: 0 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-3xl">📱</div>
                  <div>
                    <div className="text-xs text-gray-600">Satisfacción</div>
                    <div className="text-lg font-bold text-blue-600">4.8/5</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-sm font-medium text-blue-700">Funcionalidad 1</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Guías digitales inteligentes
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Ofrece a tus huéspedes toda la información que necesitan de forma clara, organizada y siempre accesible.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <p className="text-lg font-medium text-blue-900">
                Mejor experiencia del huésped con menos esfuerzo del gestor
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}