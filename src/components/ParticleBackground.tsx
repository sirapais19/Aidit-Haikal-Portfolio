
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  element: HTMLDivElement;
}

const ParticleBackground = () => {
  const particlesRef = useRef<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particleCount = window.innerWidth > 768 ? 15 : 8;
    
    // Clear any existing particles
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    particlesRef.current = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 300 + 50;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      const x = Math.random() * (container.offsetWidth - size);
      const y = Math.random() * (container.offsetHeight - size);
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      container.appendChild(particle);
      
      particlesRef.current.push({
        x,
        y,
        size,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        element: particle
      });
    }
    
    // Animation function
    let animationId: number;
    
    const animate = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= container.offsetWidth - particle.size) {
          particle.speedX *= -1;
        }
        
        if (particle.y <= 0 || particle.y >= container.offsetHeight - particle.size) {
          particle.speedY *= -1;
        }
        
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
