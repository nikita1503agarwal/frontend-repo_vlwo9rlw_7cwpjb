import React from 'react';
import { PlayCircle, Map as MapIcon, BarChart2, Shield } from 'lucide-react';

export default function DemoPreview() {
  return (
    <section id="demo" className="relative bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">See it in action</h2>
            <p className="mt-3 text-white/70">
              Explore a golden MRV run with change maps, biomass distribution, and confidence
              intervals. Integrity Score includes top contributing factors for explainability.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><MapIcon className="w-4 h-4 text-emerald-400" /> Change map & AOI</li>
              <li className="flex items-center gap-2"><BarChart2 className="w-4 h-4 text-emerald-400" /> AGB mean/total + CI</li>
              <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-400" /> Integrity Score 0–100</li>
            </ul>
            <a
              href="#access"
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium"
            >
              <PlayCircle className="w-5 h-5" />
              Request access to demo
            </a>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl">
              <div className="aspect-video w-full bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-semibold">MRV Golden Run</div>
                  <div className="text-white/70 mt-1 text-sm">Sub-2s response in demo mode</div>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-white/10">
                <div className="p-4">
                  <div className="text-xs text-white/60">AGB Mean</div>
                  <div className="text-lg font-semibold">112.4 t/ha</div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-white/60">AGB Total</div>
                  <div className="text-lg font-semibold">1.42 Mt</div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-white/60">95% CI</div>
                  <div className="text-lg font-semibold">± 6.7%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
