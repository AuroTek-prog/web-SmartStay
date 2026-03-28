import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';

interface SalesFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  origen?: string;
}

export function SalesFormModal({ isOpen, onClose, origen = 'Web SmartStay' }: SalesFormModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/sales-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, origen }),
      });

      const json = await res.json();

      if (json.success) {
        setStatus('success');
        setFormData({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' });
      } else {
        setStatus('error');
        setErrorMsg(json.error || 'Error al enviar la solicitud.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Error de conexión. Inténtalo de nuevo.');
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus('idle');
      setErrorMsg('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6 sm:p-10"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[370px] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-5">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">Contactar con ventas</h2>
                  <p className="text-blue-200 text-xs mt-1">{origen}</p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white/60 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-5">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
                    className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-7 h-7 text-green-500" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">¡Solicitud enviada!</h3>
                  <p className="text-green-600 text-sm font-medium mb-1">
                    Tu solicitud ha sido enviada correctamente.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Nuestro equipo de ventas se pondrá en contacto contigo pronto.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-5 bg-gray-900 text-white text-sm px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Cerrar
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="sf-nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="sf-nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="sf-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="sf-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Teléfono y Empresa */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="sf-telefono" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        id="sf-telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+34 600..."
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="sf-empresa" className="block text-sm font-medium text-gray-700 mb-1">
                        Empresa
                      </label>
                      <input
                        id="sf-empresa"
                        name="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Tu empresa"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="sf-mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="sf-mensaje"
                      name="mensaje"
                      required
                      rows={3}
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos qué necesitas..."
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all resize-none text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-100 text-red-600 px-3 py-2.5 rounded-lg text-xs font-medium"
                    >
                      {errorMsg}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar solicitud
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-300 text-center">
                    Tu información está protegida y no será compartida.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
