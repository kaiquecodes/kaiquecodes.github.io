"use client";

import React, { useEffect, useRef } from 'react';

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Caracteres relacionados a código e tecnologia
    const characters = '01<>/{}[]^~=+-*&|?!KAIQUESYSTEMS';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Array para rastrear a posição Y (gota) de cada coluna
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * canvas.height; // Começar em posições aleatórias
    }

    // Cores (buscando das variáveis CSS ou fallback)
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#22d3ee';
    
    // Mouse interaction
    let mouse = { x: -1000, y: -1000 };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    function draw() {
      if (!ctx || !canvas) return;

      // Fundo semi-transparente para o efeito de "rastro"
      ctx.fillStyle = 'rgba(11, 17, 32, 0.1)'; // Cor base escura
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = primaryColor;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Escolhe um caractere aleatório
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Efeito de brilho/interação com o mouse
        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.fillStyle = '#ffffff'; // Fica branco perto do mouse
          ctx.shadowBlur = 10;
          ctx.shadowColor = primaryColor;
        } else {
          // Opacidade variada baseada na posição para dar profundidade
          ctx.fillStyle = primaryColor;
          ctx.globalAlpha = Math.random() * 0.5 + 0.1;
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, x, y);
        ctx.globalAlpha = 1.0; // Reset opacity

        // Resetar a gota pro topo aleatoriamente para manter um fluxo constante
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Mover a gota
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 40); // ~25 FPS para o efeito Matrix

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', () => {});
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-40"
      style={{ zIndex: 0 }}
    />
  );
}
