import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
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
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -2 }}
            >
              Solución
            </motion.a>
            <motion.a 
              href="#funcionalidades" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -2 }}
            >
              Funcionalidades
            </motion.a>
            <motion.a 
              href="#beneficios" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -2 }}
            >
              Beneficios
            </motion.a>
            <motion.button 
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              whileHover={{ y: -2 }}
            >
              Sign up
            </motion.button>
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar demo
            </motion.button>
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
            <a href="#solucion" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Solución
            </a>
            <a href="#funcionalidades" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Funcionalidades
            </a>
            <a href="#beneficios" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Beneficios
            </a>
            <button className="block text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Sign up
            </button>
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
              Solicitar demo
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}