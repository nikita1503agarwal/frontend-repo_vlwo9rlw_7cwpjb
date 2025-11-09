import React from 'react';
import { Leaf, Home, LineChart, Map, KeyRound } from 'lucide-react';

const NavItem = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
  >
    <Icon className="w-4 h-4" />
    <span>{label}</span>
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 group">
          <div className="p-2 rounded-md bg-gradient-to-br from-emerald-400/20 to-emerald-600/30 ring-1 ring-emerald-400/30">
            <Leaf className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold">Verdant Vault</div>
            <div className="text-white/50 text-xs">Geospatial Carbon Intelligence</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <NavItem href="#home" icon={Home} label="Home" />
          <NavItem href="#features" icon={LineChart} label="Features" />
          <NavItem href="#demo" icon={Map} label="Demo" />
          <NavItem href="#access" icon={KeyRound} label="Request Access" />
        </nav>
        <a
          href="#access"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-500 text-white text-sm font-medium shadow-lg shadow-emerald-500/20"
        >
          <KeyRound className="w-4 h-4" />
          Access
        </a>
      </div>
    </header>
  );
}
