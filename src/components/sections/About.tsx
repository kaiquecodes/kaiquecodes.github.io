import React from 'react';
import { brandConfig } from '@/config/brand';
import { Terminal, Zap, LineChart } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-24 relative bg-surface/30 border-y border-surface-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transformando lógica de código em <span className="text-gradient">resultados</span>.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              A <strong>{brandConfig.name}</strong> é mais que uma fábrica de software. Somos parceiros estratégicos de tecnologia. Nascemos com o propósito de criar arquiteturas resilientes e código limpo que realmente escalam o seu negócio.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Atuamos ponta a ponta: desde a concepção e UX/UI, passando pela engenharia de software profunda até a implantação em nuvem, garantindo entregas ágeis e de altíssima qualidade.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Metodologias Ágeis</h4>
                  <p className="text-foreground/60 text-sm">Entregas contínuas e alinhamento transparente com as necessidades reais do cliente.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg h-fit">
                  <LineChart className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Foco no Negócio</h4>
                  <p className="text-foreground/60 text-sm">Não escrevemos apenas código; desenvolvemos soluções para resolver problemas de mercado.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Terminal className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Código Escalável</h4>
                  <p className="text-foreground/60 text-sm">Arquiteturas modernas preparadas para crescer junto com a demanda da sua empresa.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element / Placeholder for Team or Office Image later */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl glass border-surface-border overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-50" />
            <div className="relative z-10 text-center">
               {/* Decorative Tech Elements */}
               <div className="w-full max-w-sm mx-auto opacity-70">
                 <pre className="text-xs sm:text-sm text-left bg-background/80 p-4 rounded-lg border border-surface-border font-mono text-primary/80 overflow-hidden shadow-2xl">
                   <code>
{`// Kaique Systems Core
import { Scalability, Quality } from '@ks/core';

export class Innovation {
  async execute(idea: Idea) {
    const architecture = await build(idea);
    const result = await deploy(architecture);
    return result;
  }
}
`}
                   </code>
                 </pre>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
