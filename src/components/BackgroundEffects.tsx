import { useEffect, useRef, useState } from 'react';

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationGroupId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Helper to extract RGB from any hex
    const hexToRgb = (hex: string): string => {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
      return result 
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : '140, 238, 46';
    };

    // Particle class for drifting background nodes
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = (Math.random() - 0.5) * 0.25;
        this.opacity = Math.random() * 0.25 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D, rgb: string) {
        context.fillStyle = `rgba(${rgb}, ${this.opacity})`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: 30 }, () => new Particle());

    const drawGrid = (offsetX: number, offsetY: number, rgb: string) => {
      ctx.clearRect(0, 0, width, height);
      
      const spacing = 45;
      const dotRadius = 1;

      const startX = -spacing + (offsetX % spacing);
      const startY = -spacing + (offsetY % spacing);

      for (let x = startX; x < width + spacing; x += spacing) {
        for (let y = startY; y < height + spacing; y += spacing) {
          // Dynamic opacity based on distance to center
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.sqrt((width * width) / 4 + (height * height) / 4);
          const gridAlpha = Math.max(0.01, 0.12 * (1 - dist / maxDist));

          ctx.fillStyle = `rgba(${rgb}, ${gridAlpha})`;
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    let frame = 0;
    const tick = () => {
      frame += 0.02;
      // Drift grid over time combined with mouse coordinate offset
      const waveX = Math.sin(frame * 0.5) * 15 + mousePosition.x;
      const waveY = Math.cos(frame * 0.5) * 15 + mousePosition.y;

      // Extract current active accent color dynamically
      const activeHex = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim() || '#8CEE2E';
      const activeRgb = hexToRgb(activeHex);

      drawGrid(waveX, waveY, activeRgb);

      // Render and update drifting particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx, activeRgb);
      });

      animationGroupId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationGroupId);
    };
  }, [mousePosition]);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="bg-canvas"
        className="fixed inset-0 pointer-events-none z-0"
      />
      {/* Soft Glow Ambient Orbs (Radial Blur Elements drifting in background) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1] select-none opacity-50">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[140px] bg-gradient-to-tr from-[var(--accent-color-dim)] to-transparent"
          style={{
            top: '15%',
            left: '-10%',
            animation: 'orbitLeft 24s infinite ease-in-out',
          }}
        />
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[180px] bg-gradient-to-br from-[rgba(125,183,195,0.06)] to-transparent"
          style={{
            bottom: '10%',
            right: '-15%',
            animation: 'orbitRight 30s infinite ease-in-out',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] bg-gradient-to-tr from-[var(--accent-color-dim)] to-transparent opacity-70"
          style={{
            bottom: '40%',
            left: '30%',
            animation: 'orbitCenter 20s infinite ease-in-out',
          }}
        />
      </div>

      <style>{`
        @keyframes orbitLeft {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, 40px) scale(1.1); }
        }
        @keyframes orbitRight {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-80px, -50px) scale(1.15); }
        }
        @keyframes orbitCenter {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -60px) scale(0.9); }
        }
      `}</style>
    </>
  );
}
