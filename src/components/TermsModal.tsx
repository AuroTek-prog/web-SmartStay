import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      scrollContainerRef.current?.scrollTo({ top: 0 });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Términos, Política y Cookies</h2>
            <p className="text-sm text-gray-500 mt-0.5">SmartStay — AuroTek Solutions S.L.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable content */}
        <div
          ref={scrollContainerRef}
          className="overflow-y-auto flex-1 px-8 py-6 text-gray-700 text-sm leading-relaxed space-y-10"
        >

          {/* Section 1 — Resumen ejecutivo */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Resumen ejecutivo</h3>
            <p>
              SmartStay es una plataforma SaaS de gestión turística operada por <strong>AuroTek Solutions S.L.</strong>.
              Al utilizar cualquiera de nuestros servicios, el usuario acepta los presentes términos.
              Los datos personales se tratan conforme al <strong>RGPD (UE) 2016/679</strong> y la <strong>LOPDGDD (Ley Orgánica 3/2018)</strong>.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-600">
              <li>Empresa: AuroTek Solutions S.L. — Calle Ana María Matute 18, 28521 Rivas-Vaciamadrid, Madrid.</li>
              <li>Contacto general: <a href="mailto:info@smartstaycloud.com" className="text-blue-600 hover:underline">info@smartstaycloud.com</a></li>
              <li>Delegado de Protección de Datos (DPO): <a href="mailto:dpo@smartstaycloud.com" className="text-blue-600 hover:underline">dpo@smartstaycloud.com</a></li>
            </ul>
          </section>

          {/* Section 2 — Términos y Condiciones */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Términos y Condiciones de Uso</h3>

            <h4 className="font-semibold text-gray-800 mb-1">1. Aceptación</h4>
            <p className="mb-3">
              El acceso y uso de los servicios de SmartStay implica la aceptación plena y sin reservas de las presentes condiciones.
              Si no estás de acuerdo, debes abstenerte de utilizar la plataforma.
            </p>

            <h4 className="font-semibold text-gray-800 mb-1">2. Descripción del servicio</h4>
            <p className="mb-3">
              SmartStay ofrece herramientas digitales para alojamientos turísticos: guías interactivas, control de acceso,
              panel de comercio local, monitorización IoT y conectividad. El servicio se presta como SaaS (Software as a Service).
            </p>

            <h4 className="font-semibold text-gray-800 mb-1">3. Precios y facturación</h4>
            <p className="mb-2">Los planes se facturan mensualmente según la modalidad elegida:</p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 font-medium">
                  <tr>
                    <th className="text-left px-4 py-2">Plan</th>
                    <th className="text-left px-4 py-2">Precio/mes</th>
                    <th className="text-left px-4 py-2">Descripción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2 font-medium">Básico</td>
                    <td className="px-4 py-2">Desde 4,99 €</td>
                    <td className="px-4 py-2">Guía digital + panel básico</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">Estándar</td>
                    <td className="px-4 py-2">Desde 14,99 €</td>
                    <td className="px-4 py-2">Guía + comercio local + acceso</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">Premium</td>
                    <td className="px-4 py-2">Desde 29,99 €</td>
                    <td className="px-4 py-2">Plataforma completa + IoT</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">Enterprise</td>
                    <td className="px-4 py-2">Personalizado</td>
                    <td className="px-4 py-2">Solución a medida + SLA dedicado</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500">* Los precios no incluyen IVA aplicable. La cancelación es posible en cualquier momento antes del siguiente periodo de facturación.</p>

            <h4 className="font-semibold text-gray-800 mb-1 mt-3">4. Propiedad intelectual</h4>
            <p className="mb-3">
              Todos los contenidos, software, marcas y logotipos asociados a SmartStay son propiedad de AuroTek Solutions S.L.
              Queda prohibida la reproducción total o parcial sin autorización escrita previa.
            </p>

            <h4 className="font-semibold text-gray-800 mb-1">5. Responsabilidades y exclusiones</h4>
            <p className="mb-3">
              AuroTek Solutions S.L. no se responsabiliza de interrupciones del servicio causadas por terceros,
              fallos en la conectividad del cliente, ni por daños indirectos derivados del uso o imposibilidad de uso de la plataforma.
            </p>

            <h4 className="font-semibold text-gray-800 mb-1">6. Legislación aplicable</h4>
            <p>
              Estos términos se rigen por la legislación española. Cualquier controversia se someterá a los juzgados y
              tribunales de Madrid, con renuncia expresa a cualquier otro fuero.
            </p>
          </section>

          {/* Section 3 — Política de Privacidad */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Política de Privacidad</h3>
            <p className="mb-3">
              En cumplimiento del RGPD y la LOPDGDD, informamos sobre el tratamiento de datos personales.
            </p>

            <h4 className="font-semibold text-gray-800 mb-2">Datos que recogemos</h4>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 font-medium">
                  <tr>
                    <th className="text-left px-4 py-2">Categoría</th>
                    <th className="text-left px-4 py-2">Finalidad</th>
                    <th className="text-left px-4 py-2">Legitimación</th>
                    <th className="text-left px-4 py-2">Conservación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2">Identificación (nombre, email)</td>
                    <td className="px-4 py-2">Prestación del servicio</td>
                    <td className="px-4 py-2">Ejecución contractual</td>
                    <td className="px-4 py-2">Duración del contrato + 5 años</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Datos de facturación</td>
                    <td className="px-4 py-2">Gestión de pagos</td>
                    <td className="px-4 py-2">Obligación legal</td>
                    <td className="px-4 py-2">10 años (Ley Tributaria)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Datos de uso (logs, analítica)</td>
                    <td className="px-4 py-2">Mejora del servicio</td>
                    <td className="px-4 py-2">Interés legítimo</td>
                    <td className="px-4 py-2">12 meses</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Datos IoT (sensores, accesos)</td>
                    <td className="px-4 py-2">Control y monitorización</td>
                    <td className="px-4 py-2">Ejecución contractual</td>
                    <td className="px-4 py-2">90 días (configurable)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-semibold text-gray-800 mb-1">Transferencias internacionales</h4>
            <p className="mb-3">
              Los datos se alojan en servidores de Google Cloud (UE). Cualquier transferencia fuera del EEE se realiza
              bajo cláusulas contractuales tipo aprobadas por la Comisión Europea (art. 46 RGPD).
            </p>

            <h4 className="font-semibold text-gray-800 mb-1">Medidas de seguridad</h4>
            <p className="mb-3">
              Aplicamos cifrado en tránsito (TLS 1.3) y en reposo (AES-256), control de acceso basado en roles,
              autenticación multifactor y auditorías periódicas de seguridad.
            </p>

            <h4 className="font-semibold text-gray-800 mb-1">Derechos ARCO-POL</h4>
            <p className="mb-2">Tienes derecho a:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
              <li><strong>Acceso:</strong> obtener confirmación de si tratamos tus datos.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Cancelación / Supresión:</strong> solicitar la eliminación de tus datos.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado y legible por máquina.</li>
              <li><strong>Limitación:</strong> solicitar la restricción del tratamiento.</li>
            </ul>
            <p>
              Para ejercer tus derechos, escribe a{' '}
              <a href="mailto:dpo@smartstaycloud.com" className="text-blue-600 hover:underline">dpo@smartstaycloud.com</a>
              {' '}indicando tu nombre, DNI/NIE y el derecho que deseas ejercer. Tienes además derecho a reclamar ante la{' '}
              <strong>Agencia Española de Protección de Datos (aepd.es)</strong>.
            </p>
          </section>

          {/* Section 4 — Política de Cookies */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Política de Cookies</h3>
            <p className="mb-3">
              Una cookie es un pequeño fichero de texto que se almacena en tu dispositivo. Utilizamos cookies propias y
              de terceros para el correcto funcionamiento de la plataforma y para mejorar tu experiencia.
            </p>

            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 font-medium">
                  <tr>
                    <th className="text-left px-4 py-2">Nombre</th>
                    <th className="text-left px-4 py-2">Tipo</th>
                    <th className="text-left px-4 py-2">Finalidad</th>
                    <th className="text-left px-4 py-2">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">cookieConsent</td>
                    <td className="px-4 py-2">Técnica esencial</td>
                    <td className="px-4 py-2">Guardar preferencias de cookies</td>
                    <td className="px-4 py-2">1 año</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">session_token</td>
                    <td className="px-4 py-2">Técnica esencial</td>
                    <td className="px-4 py-2">Autenticación de usuario</td>
                    <td className="px-4 py-2">Sesión</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">_ga, _gid</td>
                    <td className="px-4 py-2">Analítica</td>
                    <td className="px-4 py-2">Google Analytics — estadísticas de uso</td>
                    <td className="px-4 py-2">2 años / 24h</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">firebase_*</td>
                    <td className="px-4 py-2">Técnica esencial</td>
                    <td className="px-4 py-2">Autenticación Firebase</td>
                    <td className="px-4 py-2">Variable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-3">
              Las cookies de analítica solo se activan si aceptas expresamente su uso. Puedes revocar
              tu consentimiento en cualquier momento eliminando las cookies del navegador o contactando con nosotros.
            </p>
            <p className="text-xs text-gray-500">
              Para más información, consulta: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Política de privacidad de Google</a>.
            </p>
          </section>

          {/* Section 5 — Última actualización */}
          <section className="border-t border-gray-100 pt-6">
            <p className="text-xs text-gray-400">
              Última actualización: enero de 2026. AuroTek Solutions S.L. se reserva el derecho a modificar
              estas condiciones notificando al usuario con al menos 15 días de antelación por los medios habituales.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-gray-100 bg-gray-50 rounded-b-2xl shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
}
