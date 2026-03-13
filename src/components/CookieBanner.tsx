import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Cookie, X, Check, Settings } from 'lucide-react';

const CONSENT_KEY = 'cookieConsent';
const CONSENT_VERSION = '1.0.0';

function hasGivenConsent(): boolean {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return false;
    const parsed = JSON.parse(stored);
    return parsed?.version === CONSENT_VERSION && parsed?.decided === true;
  } catch {
    return false;
  }
}

function saveConsent(analytics: boolean): void {
  const consent = {
    version: CONSENT_VERSION,
    decided: true,
    analytics,
    essential: true,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: consent }));
}

interface CookieBannerProps {
  onOpenTerms: () => void;
}

export function CookieBanner({ onOpenTerms }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasGivenConsent()) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    saveConsent(true);
    setVisible(false);
  };

  const handleReject = () => {
    saveConsent(false);
    setVisible(false);
  };

  const handleCustomize = () => {
    onOpenTerms();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div
      key="cookie-banner"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 80 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
      className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
            <Cookie className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Usamos cookies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Utilizamos cookies esenciales para el funcionamiento de la plataforma y, con tu permiso, cookies de
                  analítica para mejorar el servicio. Consulta nuestra{' '}
                  <button
                    onClick={onOpenTerms}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    política de cookies
                  </button>{' '}
                  para más información.
                </p>
              </div>
              <button
                onClick={handleReject}
                className="shrink-0 p-1 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Rechazar y cerrar"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAcceptAll}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all"
              >
                <Check className="w-4 h-4" />
                Aceptar todo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCustomize}
                className="flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-all"
              >
                <Settings className="w-4 h-4" />
                Personalizar
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleReject}
                className="text-gray-500 px-5 py-2 rounded-lg text-sm hover:text-gray-700 hover:bg-gray-50 transition-all"
              >
                Solo esenciales
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
