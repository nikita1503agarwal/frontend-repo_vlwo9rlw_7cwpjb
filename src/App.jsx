import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AccessCTA from './components/AccessCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AccessCTA />
      </main>
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Verdant Vault. All rights reserved.</p>
            <div className="text-xs text-white/50">
              Built with a refined green + white palette, subtle gradients, and clear typography.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
