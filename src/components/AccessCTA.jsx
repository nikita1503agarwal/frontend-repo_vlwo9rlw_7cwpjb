import React from 'react';
import { KeyRound, Mail } from 'lucide-react';

export default function AccessCTA() {
  return (
    <section id="access" className="relative bg-gradient-to-b from-black to-emerald-950/40 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Request early access</h3>
            <p className="mt-2 text-white/70 max-w-xl">Be among the first to explore MRV, Integrity, and Lineage in a single platform. We’ll get back to you with API keys and a guided demo.</p>
          </div>
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <label className="sr-only" htmlFor="email">Email</label>
            <div className="relative flex-1 min-w-[240px]">
              <Mail className="w-4 h-4 text-white/50 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="w-full pl-9 pr-3 py-3 rounded-md bg-black/40 border border-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
              />
            </div>
            <button
              type="button"
              onClick={() => alert('Thanks! We\'ll reach out with access soon.')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium shadow-lg shadow-emerald-500/20"
            >
              <KeyRound className="w-4 h-4" /> Get Access
            </button>
          </form>
        </div>
        <p className="mt-6 text-xs text-white/50">By requesting access, you agree to receive emails about Verdant Vault. You can unsubscribe at any time.</p>
      </div>
    </section>
  );
}
