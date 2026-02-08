import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

export function BrandHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;

        setScrollProgress(progress);
        if (progress > 0.05) setIsVisible(true);
        setIsActive(progress > 0.02);

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sidePosition = useMemo(() => {
    const segment = Math.floor(scrollProgress * 4); // 0-3
    return segment % 2 === 0 ? "left" : "right";
  }, [scrollProgress]);

  const isHidden = useMemo(() => {
    const segment = Math.floor(scrollProgress * 8); // 0-7
    const nearEnd = scrollProgress > 0.85;
    return segment === 2 || segment === 5 || nearEnd;
  }, [scrollProgress]);

  const entranceEffect = useMemo(() => {
    const segment = Math.floor(scrollProgress * 8);
    if (segment === 1 || segment === 4) return "slide-in";
    if (segment === 3 || segment === 6) return "bounce-in";
    return "normal";
  }, [scrollProgress]);

  // === MOVIMIENTO HORIZONTAL EXTREMO ===
  const xTravel = useMemo(() => {
    if (isHidden) {
      if (scrollProgress > 0.85) return sidePosition === "left" ? -120 : 120;
      return sidePosition === "left" ? -150 : 150;
    }

    // Cubrir toda la pantalla horizontal
    const amplitude = window.innerWidth / 2 - 80; // margen de 80px
    return Math.sin(scrollProgress * Math.PI * 2) * amplitude;
  }, [scrollProgress, sidePosition, isHidden]);

  // === MOVIMIENTO VERTICAL MÁS FLUIDO ===
  const yTravel = useMemo(() => {
    if (isHidden) {
      if (scrollProgress > 0.85) return -80;
      return 60;
    }

    const floatAmplitude = 30;
    const waveAmplitude = 20;
    const microAmplitude = 10;
    return (
      Math.sin(scrollProgress * Math.PI * 2) * floatAmplitude +
      Math.cos(scrollProgress * Math.PI * 4) * waveAmplitude +
      Math.sin(scrollProgress * Math.PI * 6) * microAmplitude
    );
  }, [scrollProgress, isHidden]);

  // === ROTACIÓN MÁS DINÁMICA ===
  const rotation = useMemo(() => {
    const baseRotation = Math.sin(scrollProgress * Math.PI * 2.5) * 12;
    const microRotation = Math.cos(scrollProgress * Math.PI * 7) * 6;
    return baseRotation + microRotation;
  }, [scrollProgress]);

  // === OPACIDAD ===
  const opacity = useMemo(() => {
    if (isHidden) return 0;
    const segment = Math.floor(scrollProgress * 8);
    const subProgress = (scrollProgress * 8) % 1;

    if (segment === 1 || segment === 4) return Math.min(subProgress * 3, 1);
    if (segment === 2 || segment === 5) return Math.max(1 - subProgress * 3, 0);
    return 1;
  }, [scrollProgress, isHidden]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed z-10 pointer-events-none"
      style={{
        bottom: "8%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative"
        animate={{ x: xTravel, y: yTravel }}
        transition={{
          x: {
            duration: entranceEffect === "slide-in" ? 1.5 : 2.5,
            ease: entranceEffect === "bounce-in" ? "backOut" : "easeInOut",
          },
          y: { duration: 1.2, ease: "easeOut" },
        }}
      >
        {/* === ROBOT === */}
        <motion.img
          src="https://raw.githubusercontent.com/AuroTek-prog/smartstay-storage/refs/heads/main/images/robot.png"
          alt="SmartStay Assistant"
          className="w-24 md:w-28 lg:w-32 h-auto select-none drop-shadow-[0_30px_45px_rgba(0,0,0,0.45)]"
          draggable={false}
          animate={{
            rotate: rotation,
            scale: isActive && !isHidden ? [1, 1.1, 1] : 1,
            opacity: opacity,
            y: isVisible ? [0, -8, 0] : 0,
          }}
          transition={{
            rotate: { duration: 1.5, ease: "easeOut" },
            scale: {
              duration: 2.5,
              repeat: isActive && !isHidden ? Infinity : 0,
              ease: "easeInOut",
            },
            opacity: { duration: 0.8, ease: "easeInOut" },
            y: {
              duration: 3,
              repeat: isVisible ? Infinity : 0,
              ease: "easeInOut",
            },
          }}
        />

        {/* === SHADOW UNDER ROBOT === */}
        <motion.div
          className="absolute -bottom-7 left-1/2 w-28 h-4 bg-black/45 rounded-full blur-2xl -translate-x-1/2"
          animate={{
            scaleX: [0.8, 1.3, 0.8],
            opacity: isHidden ? 0 : [0.2, 0.6, 0.2],
            scaleY: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: isActive && !isHidden ? Infinity : 0,
            ease: "easeInOut",
            opacity: { duration: 0.5 },
          }}
        />

        {/* === PROPULSION GLOW === */}
        {isActive && !isHidden && (
          <motion.div
            className="absolute -bottom-5 left-1/2 w-12 h-4 bg-cyan-400/70 rounded-full blur-xl -translate-x-1/2"
            animate={{
              scale: [0.7, 1.4, 0.7],
              opacity: [0.2, 0.9, 0.2],
              scaleY: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* === ENERGY TRAILS === */}
        {isActive && !isHidden &&
          [...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-6 bg-gradient-to-t from-cyan-400/60 to-transparent rounded-full blur-sm"
              style={{
                bottom: `${-20 - i * 8}px`,
                left: `${45 + Math.sin(scrollProgress * Math.PI * 2 + i) * 12}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [-12, -40, -12],
                scaleY: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
      </motion.div>
    </motion.div>
  );
}
