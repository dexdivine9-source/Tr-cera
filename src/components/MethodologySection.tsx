import React from "react";
import { 
  BarChart3, 
  ShieldCheck, 
  Activity, 
  Users, 
  TrendingUp, 
  Target, 
  Building2, 
  Wallet, 
  Globe2, 
  Briefcase, 
  Zap, 
  Clock, 
  ArrowUpRight, 
  Flame 
} from "lucide-react";

export function MethodologySection() {
  return (
    <section id="methodology" className="w-full bg-[#0a0a0f] py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-display">How Træcera Works</h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-sans">
            Three intelligence layers powering discovery, analysis, and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1 — Advanced Analytics */}
          <div className="group relative bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#3b82f6] mb-6">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 font-display">Advanced Analytics</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Activity size={16} className="text-[#3b82f6]" />
                </div>
                Transaction volume tracking
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Users size={16} className="text-[#3b82f6]" />
                </div>
                User activity insights
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <TrendingUp size={16} className="text-[#3b82f6]" />
                </div>
                Growth trends over time
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Target size={16} className="text-[#3b82f6]" />
                </div>
                On-chain performance signals
              </li>
            </ul>
          </div>

          {/* CARD 2 — Project Intelligence */}
          <div className="group relative bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#8b5cf6] mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 font-display">Project Intelligence</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Building2 size={16} className="text-[#8b5cf6]" />
                </div>
                Team and builder context
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Wallet size={16} className="text-[#8b5cf6]" />
                </div>
                Funding stage signals
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Globe2 size={16} className="text-[#8b5cf6]" />
                </div>
                Ecosystem positioning
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Briefcase size={16} className="text-[#8b5cf6]" />
                </div>
                Product use case clarity
              </li>
            </ul>
          </div>

          {/* CARD 3 — Tracking & Monitoring */}
          <div className="group relative bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f472b6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-[#f472b6] mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 font-display">Tracking & Monitoring</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[#f472b6]" />
                </div>
                Real-time updates
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <ArrowUpRight size={16} className="text-[#f472b6]" />
                </div>
                Rank movement indicators (↑ ↓)
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <TrendingUp size={16} className="text-[#f472b6]" />
                </div>
                Growth tracking over time
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Flame size={16} className="text-[#f472b6]" />
                </div>
                Trending project highlights
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
