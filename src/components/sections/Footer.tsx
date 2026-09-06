import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { brandConfig } from '@/config/brand';
import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-background border-t border-surface-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6 relative w-48 h-14 md:w-64 md:h-16">
              <Image 
                src={brandConfig.logoUrl} 
                alt={`${brandConfig.name} Logo`}
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-foreground/70 max-w-sm mb-6">
              Transformando lógica de código em soluções escaláveis para negócios de alto impacto.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground/80 text-sm">
                <Mail size={16} className="text-primary" />
                <a href={`mailto:${brandConfig.contact.email}`} className="hover:text-primary transition-colors">
                  {brandConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3 text-foreground/80 text-sm">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>{brandConfig.contact.address}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navegação</h4>
            <ul className="space-y-2">
              {brandConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-foreground/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40 text-center md:text-left">
            © {currentYear} {brandConfig.name}. Todos os direitos reservados. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Razão Social: Kaique Gomes Machado Tecnologia da Informacao LTDA
          </p>
        </div>
      </div>
    </footer>
  );
}
