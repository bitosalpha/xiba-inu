import React, { useRef, useEffect } from 'react';

function Particles() {
  const canvasRef = useRef(null);
  const context = useRef(null);
  const particles = useRef([]);

  const createParticle = () => {
    const particle = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 2,
      color: 'white',
      speedX: Math.random() * 2.5 - 1.5,
      speedY: Math.random() * 2.5 - 1.5,
    };
    particles.current.push(particle);
  };

  const animateParticles = () => {
    context.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.current.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      context.current.fillStyle = particle.color;
      context.current.beginPath();
      context.current.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.current.closePath();
      context.current.fill();

      if (particle.size > 0.2) particle.size -= 0.1;
    });

    requestAnimationFrame(animateParticles);
  };

  useEffect(() => {
    context.current = canvasRef.current.getContext('2d');
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
      createParticle();
    }

    animateParticles();


  }, []);

  const canvasStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <canvas
      ref={canvasRef}
      style={canvasStyle}
    />
  );
}

export default Particles;
