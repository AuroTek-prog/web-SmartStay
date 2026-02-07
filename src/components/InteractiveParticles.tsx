import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  color: string;
  speed: number;
  angle: number;
  isAttracted: boolean; // Track if particle is being attracted by mouse
  trail: { x: number; y: number }[]; // Trail effect
}

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle colors - single tone matching the title gradient, less visible
    const colors = [
      'rgba(37, 99, 235, 0.2)',   // Blue-600 with lower opacity
      'rgba(79, 70, 229, 0.15)',  // Indigo-600 with lower opacity
      'rgba(59, 130, 246, 0.1)',  // Lighter blue with lower opacity
    ];

// Create particles - nodes for network effect
    const createParticles = () => {
      particlesRef.current = [];
      const numberOfParticles = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000)); // Fewer nodes for network effect
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 2; // Smaller, more consistent node size
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          density: Math.random() * 10 + 3, // Reduced density for subtler movement
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.01 + 0.002, // Much slower movement
          angle: Math.random() * Math.PI * 2,
          isAttracted: false,
          trail: [],
        });
      }
    };

    createParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nearby nodes first
      particlesRef.current.forEach((particleA, indexA) => {
        particlesRef.current.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Draw connection line if particles are close enough
          const maxConnectionDistance = 120;
          if (distance < maxConnectionDistance) {
            const opacity = (1 - distance / maxConnectionDistance) * 0.3; // More visible connections
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = 1.0; // Thicker lines
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });

      particlesRef.current.forEach((particle, index) => {
        // Calculate distance from mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse attraction force - stronger magnetism effect
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 150; // Increased range for stronger effect
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
          particle.isAttracted = true;
          const directionX = forceDirectionX * force * particle.density * 1.2; // Much stronger force
          const directionY = forceDirectionY * force * particle.density * 1.2;

          // Add to trail for effect
          particle.trail.push({ x: particle.x, y: particle.y });
          if (particle.trail.length > 5) {
            particle.trail.shift(); // Keep only last 5 positions
          }

          particle.x -= directionX;
          particle.y -= directionY;
        } else {
          particle.isAttracted = false;
          particle.trail = []; // Clear trail when not attracted
          // Return to base position with very slow, organic movement
          if (particle.x !== particle.baseX) {
            particle.x += (particle.baseX - particle.x) * 0.002; // Much slower return
          }
          if (particle.y !== particle.baseY) {
            particle.y += (particle.baseY - particle.y) * 0.002;
          }

          // Add very subtle floating motion for network nodes
          particle.angle += particle.speed;
          particle.x += Math.cos(particle.angle) * 0.1; // Much more subtle movement
          particle.y += Math.sin(particle.angle * 0.5) * 0.08; // Slower, more organic movement
        }

        // Draw trail effect for attracted particles
        if (particle.isAttracted && particle.trail.length > 1) {
          ctx.strokeStyle = particle.color.replace(/0\.\d+\)$/, '0.1)');
          ctx.lineWidth = particle.size * 0.5;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
          for (let i = 1; i < particle.trail.length; i++) {
            ctx.lineTo(particle.trail[i].x, particle.trail[i].y);
          }
          ctx.stroke();
        }

        // Draw node with subtle glow
        const glowSize = particle.isAttracted ? particle.size * 2 : particle.size * 1.5;
        const nodeOpacity = particle.isAttracted ? '0.6' : '0.4';

        // Draw glow effect
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, particle.color.replace(/[\d\.]+\)$/g, '0)'));

        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw core node - solid circle
        ctx.beginPath();
        ctx.fillStyle = particle.color.replace(/0\.\d+\)$/, nodeOpacity + ')');
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle border for node definition
        ctx.strokeStyle = particle.color.replace(/0\.\d+\)$/, '0.8)');
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mouse]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
      }}
    />
  );
}