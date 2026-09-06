"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Terminal } from 'lucide-react';
import { CodeBackground } from '@/components/ui/CodeBackground';

export function Hero() {
  return (
    <section 
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Animated Interactive Technology Background */}
      <div className="absolute inset-0 z-0">
        <CodeBackground />
        
        {/* Subtle grid overlay to enhance the "tech" feel */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
        
        {/* Deep background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pointer-events-none">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 text-primary mb-8 text-sm font-medium pointer-events-auto">
            <Terminal size={16} />
            <span>Engenharia de Software & Consultoria em TI</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 pointer-events-auto">
            Conectando ideias ao <br className="hidden md:block" />
            <span className="text-gradient">futuro</span> do software.
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl pointer-events-auto">
            Desenvolvemos soluções sob medida, consultoria estratégica em TI e produtos proprietários de alta performance para escalar o seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pointer-events-auto">
            <Button size="lg" className="w-full sm:w-auto group">
              Iniciar meu projeto
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto border-surface-border">
              Conhecer nossas soluções
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
