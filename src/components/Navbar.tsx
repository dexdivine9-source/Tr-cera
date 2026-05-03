import React from 'react';
import { Menu } from 'lucide-react';

interface NavbarProps {
  onExplore: () => void;
  onSubmit: () => void;
  onOpenMenu: () => void;
  LogoIcon: React.ComponentType<{ className?: string, size?: number }>;
}

export function Navbar({ onExplore, onSubmit, onOpenMenu, LogoIcon }: NavbarProps) {
  return (
    <header className="flex justify-between items-center py-6 mb-12 max-w-6xl mx-auto px-6 w-full">
      <div className="flex items-center cursor-pointer select-none" onClick={onExplore}>
        <LogoIcon className="" size={40} />
      </div>

      {/* Desktop Navigation: Visible only on lg (1024px) and up — aligned with sidebar desktop breakpoint */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
        <button className="hover:text-white transition-colors" onClick={onExplore}>Explore</button>
        <button 
          className="hover:text-white transition-colors" 
          onClick={() => {
            if (window.location.pathname !== '/') onExplore();
            setTimeout(() => document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth' }), 100);
          }}
        >
          Trending
        </button>
        <button className="hover:text-white transition-colors" onClick={onSubmit}>Submit Project</button>
      </nav>

      {/* Mobile/Tablet Menu Trigger: Visible below lg (1024px), hidden on desktop */}
      <div className="flex items-center gap-4">
        <button
          className="sidebar-mobile-trigger flex lg:hidden items-center justify-center"
          onClick={onOpenMenu}
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
