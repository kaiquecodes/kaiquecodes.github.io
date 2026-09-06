"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { brandConfig } from '@/config/brand';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "bg-[var(--surface)] backdrop-blur-md border-b border-[var(--surface-border)]" : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="relative w-32 h-10 md:w-40 md:h-12">
            <Image 
              src={brandConfig.logoUrl} 
              alt={`${brandConfig.name} Logo`}
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {brandConfig.navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button>Fale com um Especialista</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {brandConfig.navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="mt-4" onClick={() => setMobileMenuOpen(false)}>
            Fale com um Especialista
          </Button>
        </div>
      </div>
    </header>
  );
}
