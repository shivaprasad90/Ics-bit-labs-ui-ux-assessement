import React, { useEffect, useRef } from 'react';

/**
 * Animated Canvas AI Background:
 * - Floating neural nodes
 * - Distance-based dynamic connecting network lines
 * - Subtle digital grid and circuit simulation
 * - Data pulse travel effect along connections
 * - Lightweight on mobile and respects prefers-reduced-motion
 */
const AIBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    // Adjust particle count for mobile performance
    const isMobile = width < 768;
    const particleCount = prefersReducedMotion ? 15 : (isMobile ? 28 : 55);
    const maxDistance = isMobile ? 95 : 140;

    const particles = [];
    const colors = ['#06b6d4', '#3b82f6', '#8b5cf6', '#38bdf8'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.08 : 0.65),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.08 : 0.65),
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }

    // Interactive mouse tether
    let mouse = { x: null, y: null, maxDist: 180 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Render subtle circuit lines / neural connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;
        p1.pulse += p1.pulseSpeed;

        // Bounce off edges smoothly
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.28;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Data pulse effect traveling between nodes
            if (!prefersReducedMotion && (i + j) % 3 === 0) {
              const pulsePos = (Math.sin(time * 2 + i) + 1) / 2;
              const pulseX = p1.x + (p2.x - p1.x) * pulsePos;
              const pulseY = p1.y + (p2.y - p1.y) * pulsePos;
              ctx.fillStyle = 'rgba(6, 182, 212, 0.7)';
              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 1.4, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        // Mouse connection tether
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < mouse.maxDist) {
            const mAlpha = (1 - mdist / mouse.maxDist) * 0.45;
            ctx.strokeStyle = `rgba(6, 182, 212, ${mAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Draw particle node
        const glowRadius = p1.radius + Math.sin(p1.pulse) * 0.8;
        ctx.fillStyle = p1.color;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(1, glowRadius), 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-brand-purple/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-40 left-1/4 w-[28rem] h-[28rem] bg-brand-blue/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '4s' }} />
      
      {/* Cyber grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-30 pointer-events-none" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};

export default AIBackground;

