import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const portfolioItems = [
  {
    title: "Medisens",
    category: "HealthTech",
    description: "SaaS para clínicas. Plataforma Web e Cloud-native para gestão completa.",
    color: "from-blue-500/20 to-cyan-500/5",
    borderGlow: "group-hover:border-blue-500/50"
  },
  {
    title: "Trimvi",
    category: "Beauty & Wellness",
    description: "Agendamento online inteligente para salões. App Multiplataforma.",
    color: "from-pink-500/20 to-rose-500/5",
    borderGlow: "group-hover:border-pink-500/50"
  },
  {
    title: "santa_tef",
    category: "FinTech & Varejo",
    description: "Integração robusta de transações para PDVs desenvolvida em Flutter.",
    color: "from-emerald-500/20 to-teal-500/5",
    borderGlow: "group-hover:border-emerald-500/50"
  },
  {
    title: "12patinhas",
    category: "Social & IA",
    description: "Plataforma de adoção de animais utilizando Machine Learning para match fotográfico.",
    color: "from-purple-500/20 to-violet-500/5",
    borderGlow: "group-hover:border-purple-500/50"
  }
];

export function Portfolio() {
  return (
    <section id="solucoes" className="py-24 relative bg-background border-t border-surface-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossas Soluções em Ação</h2>
            <p className="text-foreground/70 text-lg">
              Conheça alguns dos produtos proprietários e cases que desenvolvemos para transformar diferentes setores.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-2xl glass p-8 transition-all duration-300",
                item.borderGlow
              )}
            >
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity group-hover:opacity-100",
                item.color
              )} />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                <div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-foreground/50 mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/80 max-w-md">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  Ver detalhes do case <ArrowUpRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
