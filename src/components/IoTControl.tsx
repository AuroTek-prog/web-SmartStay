import { motion, useScroll, useTransform } from 'motion/react';
import { Users, Droplet, Zap, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const benefits = [
  {
    icon: Users,
    title: 'Ocupación real',
    description: 'Conoce cuántas personas están en tu alojamiento en cada momento'
  },
  {
    icon: Droplet,
    title: 'Control de agua',
    description: 'Monitoriza consumo y detecta fugas o usos anómalos'
  },
  {
    icon: Zap,
    title: 'Control de electricidad',
    description: 'Optimiza costes energéticos con datos en tiempo real'
  },
  {
    icon: Shield,
    title: 'Alertas inteligentes',
    description: 'Notificaciones ante consumos inusuales o situaciones anómalas'
  }
];

export function IoTControl() {
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
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Floating particles */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
        }}
        className="absolute top-40 right-40 w-20 h-20 bg-purple-400/30 rounded-full blur-xl"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -180]),
        }}
        className="absolute bottom-40 left-40 w-32 h-32 bg-blue-400/30 rounded-full blur-xl"
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
                  src="smart home control dashboard monitoring"
                  alt="Control inteligente IoT"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating metrics */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotateZ: [0, 5, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                whileHover={{ scale: 1.15, rotateZ: 0, z: 100 }}
                className="absolute top-8 left-8 bg-white rounded-xl shadow-xl p-4"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-medium text-gray-600">Ocupación</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">4 personas</div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  rotateZ: [0, -5, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                whileHover={{ scale: 1.15, rotateZ: 0, z: 100 }}
                className="absolute bottom-8 right-8 bg-white rounded-xl shadow-xl p-4"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-600" />
                  <span className="text-xs font-medium text-gray-600">Consumo</span>
                </div>
                <div className="text-2xl font-bold text-yellow-600">Normal</div>
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
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
              <span className="text-sm font-medium text-purple-700">Funcionalidad 3</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Control y monitorización inteligente
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Visibilidad completa sobre lo que ocurre en tu alojamiento, sin complicaciones técnicas.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
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
                    className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon className="w-5 h-5 text-purple-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <p className="text-lg font-medium text-purple-900 mb-2">
                Control, ahorro y tranquilidad
              </p>
              <p className="text-purple-700">
                Datos claros para optimizar costes, anticipar problemas y tomar decisiones informadas sobre tu negocio.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}