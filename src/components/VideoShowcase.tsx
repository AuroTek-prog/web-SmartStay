import { Play } from 'lucide-react';

export function VideoShowcase() {
  return (
    <section id="video" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Play className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Nuestra propuesta de valor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Descubre por qué SmartStay es diferente
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En menos de 7 minutos, conoce cómo transformamos la gestión de alojamientos turísticos
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl bg-black" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/Z5Cdi0r3tGI?rel=0"
            title="SmartStay - Descubre cómo funciona"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
