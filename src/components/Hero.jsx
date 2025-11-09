import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-2xl">
          <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight">
            Verdant Vault
            <span className="block text-emerald-400">Carbon MRV. Integrity. Lineage.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80">
            A geospatial intelligence platform delivering MRV results, Integrity Scores,
            Uncertainty, and full Audit Lineage for nature-based carbon projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition-colors"
            >
              View Demo
            </a>
            <a
              href="#access"
              className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium backdrop-blur"
            >
              Request Access
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div>
              <dt className="text-white/60">p95 Latency</dt>
              <dd className="text-white font-semibold"><span className="text-emerald-400">1.8s</span> demo mode</dd>
            </div>
            <div>
              <dt className="text-white/60">Integrity Score</dt>
              <dd className="text-white font-semibold">0–100 + explainability</dd>
            </div>
            <div>
              <dt className="text-white/60">Exports</dt>
              <dd className="text-white font-semibold">CSV, GeoJSON, JSON bundle</dd>
            </div>
            <div>
              <dt className="text-white/60">Map Engine</dt>
              <dd className="text-white font-semibold">MapLibre / Mapbox</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
