import React from 'react';
import { Code2, Settings, Cpu, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <Code2 className="text-primary w-8 h-8 mb-4" />,
    title: "Desenvolvimento Sob Encomenda",
    description: "Criação de plataformas customizadas, aplicações web e mobile focadas nos objetivos exclusivos do seu negócio."
  },
  {
    icon: <Layers className="text-secondary w-8 h-8 mb-4" />,
    title: "Produtos Proprietários (SaaS)",
    description: "Sistemas plug and play de alta disponibilidade para nichos específicos, prontos para uso e escaláveis."
  },
  {
    icon: <Settings className="text-primary w-8 h-8 mb-4" />,
    title: "Consultoria em TI e Arquitetura",
    description: "Revisão de infraestrutura, liderança técnica, modernização de sistemas legados e otimização de performance."
  },
  {
    icon: <Cpu className="text-secondary w-8 h-8 mb-4" />,
    title: "Web Design e Experiência",
    description: "UI/UX focado em usabilidade, performance e alta conversão, entregando experiências memoráveis."
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engenharia de Software de Ponta a Ponta</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Combinamos excelência técnica e visão estratégica para entregar tecnologia que gera valor real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "glass p-8 rounded-2xl hover-glow transition-all duration-300",
                "flex flex-col items-start text-left"
              )}
            >
              <div className="p-3 bg-background/50 rounded-lg inline-block mb-2">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
