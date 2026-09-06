import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 text-primary mb-8 text-sm font-medium">
            <Terminal size={16} />
            <span>Engenharia de Software & Consultoria em TI</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Conectando ideias ao <br className="hidden md:block" />
            <span className="text-gradient">futuro</span> do software.
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl">
            Desenvolvemos soluções sob medida, consultoria estratégica em TI e produtos proprietários de alta performance para escalar o seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto group">
              Iniciar meu projeto
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Conhecer nossas soluções
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
