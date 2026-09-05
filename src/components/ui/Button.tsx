import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-[0_0_15px_rgba(147,51,234,0.3)]",
      secondary: "bg-surface text-foreground border border-surface-border hover-glow",
      outline: "border border-primary text-primary hover:bg-primary/10",
      ghost: "hover:bg-surface-border text-foreground/80 hover:text-foreground",
    };
    
    const sizes = {
      sm: "h-9 px-3",
      md: "h-11 px-6 py-2",
      lg: "h-14 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
