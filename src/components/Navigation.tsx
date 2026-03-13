import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const NAV_SECTIONS = ['solucion', 'funcionalidades', 'beneficios'] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.95)", "rgba(255, 255, 255, 1)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 20px rgba(0, 0, 0, 0.1)"]
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.nav 
      style={{ backgroundColor, boxShadow }}
      className="fixed top-0 w-full backdrop-blur-sm z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="https://raw.githubusercontent.com/AuroTek-prog/smartstay-storage/refs/heads/main/images/icono%201.jpg" 
              alt="SmartStay Logo" 
              className="w-8 h-8 mr-3 rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SmartStay
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#solucion" 
              className={`transition-colors font-medium relative pb-0.5 ${activeSection === 'solucion' ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full' : 'text-gray-700 hover:text-blue-600'}`}
              whileHover={{ y: -2 }}
            >
              Solución
            </motion.a>
            <motion.a 
              href="#funcionalidades" 
              className={`transition-colors font-medium relative pb-0.5 ${activeSection === 'funcionalidades' ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full' : 'text-gray-700 hover:text-blue-600'}`}
              whileHover={{ y: -2 }}
            >
              Funcionalidades
            </motion.a>
            <motion.a 
              href="#beneficios" 
              className={`transition-colors font-medium relative pb-0.5 ${activeSection === 'beneficios' ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full' : 'text-gray-700 hover:text-blue-600'}`}
              whileHover={{ y: -2 }}
            >
              Beneficios
            </motion.a>
            <motion.a 
              href="https://smartstaycloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              whileHover={{ y: -2 }}
            >
              Acceder
            </motion.a>
            <motion.a 
              href="https://smartstaycloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              whileHover={{ y: -2 }}
            >
              Registrarse
            </motion.a>
            <motion.a 
              href="mailto:sales@smartstaycloud.com"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar demo
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#solucion" onClick={() => setIsOpen(false)} className={`block transition-colors font-medium ${activeSection === 'solucion' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              Solución
            </a>
            <a href="#funcionalidades" onClick={() => setIsOpen(false)} className={`block transition-colors font-medium ${activeSection === 'funcionalidades' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              Funcionalidades
            </a>
            <a href="#beneficios" onClick={() => setIsOpen(false)} className={`block transition-colors font-medium ${activeSection === 'beneficios' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              Beneficios
            </a>
            <a href="https://smartstaycloud.com/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Acceder
            </a>
            <a href="https://smartstaycloud.com/" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Registrarse
            </a>
            <a href="mailto:sales@smartstaycloud.com" className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
              Solicitar demo
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}