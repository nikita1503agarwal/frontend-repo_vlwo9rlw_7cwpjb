import React from 'react';
import { ShieldCheck, Layers, LineChart, FileCode2, Route, Database } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'MRV Outputs',
    desc: 'Change maps, AGB mean & total, and confidence bounds with export options.'
  },
  {
    icon: ShieldCheck,
    title: 'Integrity Score',
    desc: '0–100 scoring with top contributing factors for transparent explainability.'
  },
  {
    icon: Route,
    title: 'Audit Lineage',
    desc: 'Dataset IDs, model versions, parameters, commit hashes, and timestamps.'
  },
  {
    icon: FileCode2,
    title: 'API-first',
    desc: 'Interactive explorer for /mrv and /score with live test requests and code samples.'
  },
  {
    icon: LineChart,
    title: 'System Status',
    desc: 'Latency, uptime, and error rates visualized with smooth micro-interactions.'
  },
  {
    icon: Database,
    title: 'Demo Mode',
    desc: 'Pre-cached golden runs for sub-2 second responses across the UI.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-emerald-900/10 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for trust and speed</h2>
          <p className="mt-3 text-white/70">Minimalistic, premium design with map-first interaction and clear typography.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6">
              <div className="h-12 w-12 rounded-md bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 ring-1 ring-emerald-400/30 flex items-center justify-center">
                <Icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
