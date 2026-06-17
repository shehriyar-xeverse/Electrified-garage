import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect mobile touch environments safely to avoid overlaying cursor followers on mobile/tablet previews
    const touchCheck = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouchDevice(touchCheck);
    if (touchCheck) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeaveWindow = () => {
      setIsHidden(true);
    };

    const handleMouseEnterWindow = () => {
      setIsHidden(false);
    };

    // Track when hovering over active user interactives
    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const isInteractive = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('.interactive-card') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousemove', updateHoverState, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', updateHoverState);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice || isHidden) return;

    let animFrame: number;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          // Linear interpolation for reactive mechanical trail
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16,
        };
      });
      animFrame = requestAnimationFrame(updateTrail);
    };

    animFrame = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animFrame);
  }, [position, isTouchDevice, isHidden]);

  if (isTouchDevice || isHidden) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 mix-blend-screen"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isClicking ? 0.70 : 1})`,
        }}
      />
      {/* Smooth outer follower ring */}
      <div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 transition-all duration-350 ease-out flex items-center justify-center mix-blend-screen"
        style={{
          transform: `translate3d(${trail.x}px, ${trail.y}px, 0)`,
          width: isHovering ? '38px' : '20px',
          height: isHovering ? '38px' : '20px',
          backgroundColor: isHovering ? 'var(--accent-color-dim)' : 'transparent',
          borderColor: isHovering ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.22)',
          boxShadow: isHovering ? '0 0 16px var(--accent-color-glow)' : 'none',
        }}
      />
    </>
  );
}
