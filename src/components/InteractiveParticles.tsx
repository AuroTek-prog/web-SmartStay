import { useEffect, useRef, useState } from 'react';

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  speedX: number;
  speedY: number;
  color: string;
}

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
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

    // Sparkle colors - bright and vibrant
    const colors = [
      'rgba(37, 99, 235, 0.8)',   // Bright blue
      'rgba(79, 70, 229, 0.8)',  // Bright indigo
      'rgba(59, 130, 246, 0.8)', // Bright light blue
      'rgba(147, 51, 234, 0.8)', // Bright purple
      'rgba(16, 185, 129, 0.8)', // Bright emerald
    ];

    // Create sparkles
    const createSparkle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3 + 1;
      const life = Math.random() * 60 + 30; // 30-90 frames life
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;

      return {
        x,
        y,
        size,
        opacity: 1,
        life,
        maxLife: life,
        speedX,
        speedY,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    // Initialize sparkles
    const initSparkles = () => {
      sparklesRef.current = [];
      for (let i = 0; i < 25; i++) {
        sparklesRef.current.push(createSparkle());
      }
    };

    initSparkles();

    // Animation loop for sparkles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparklesRef.current.forEach((sparkle, index) => {
        // Update sparkle position
        sparkle.x += sparkle.speedX;
        sparkle.y += sparkle.speedY;

        // Update life and opacity
        sparkle.life--;
        sparkle.opacity = sparkle.life / sparkle.maxLife;

        // Draw sparkle
        ctx.save();
        ctx.globalAlpha = sparkle.opacity;

        // Create sparkle effect with multiple points
        ctx.fillStyle = sparkle.color;
        ctx.shadowColor = sparkle.color;
        ctx.shadowBlur = sparkle.size * 2;

        // Draw main sparkle
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw sparkle rays
        const rays = 6;
        for (let i = 0; i < rays; i++) {
          const angle = (i / rays) * Math.PI * 2;
          const rayLength = sparkle.size * 3;
          const rayX = sparkle.x + Math.cos(angle) * rayLength;
          const rayY = sparkle.y + Math.sin(angle) * rayLength;

          ctx.beginPath();
          ctx.moveTo(sparkle.x, sparkle.y);
          ctx.lineTo(rayX, rayY);
          ctx.strokeStyle = sparkle.color;
          ctx.lineWidth = sparkle.size * 0.5;
          ctx.stroke();
        }

        ctx.restore();

        // Remove dead sparkles and create new ones
        if (sparkle.life <= 0) {
          sparklesRef.current[index] = createSparkle();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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