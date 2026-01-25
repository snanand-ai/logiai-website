export default function Page() {
  return (
    <>
      {/* Hero Section - Clean Design */}
      <section className="relative bg-gradient-to-b from-slate-50/30 to-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center">
            {/* Logo - Large and Centered */}
            <div className="mb-10">
              <img src="/logo.png" alt="LogiAI" className="h-48 md:h-56" />
            </div>

            {/* Tagline Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-gold"></div>
              <span className="text-sm md:text-base font-medium text-slate-700">Building Intelligence From The Ground Up</span>
            </div>

            {/* Main Headline - Two-Tone */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              The <span className="text-navy">Intelligence Layer</span><br />
              For <span className="text-gold">Global Logistics</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-12">
              The first cognitive architecture that understands, learns and optimizes every decision in the supply chain. This is the beginning of the intelligence era for global trade.
            </p>

            {/* CTA Button */}
            <a href="/product" className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-10 py-4 rounded-xl border-2 border-ink/10 transition-all duration-200 hover:scale-105 shadow-lg">
              Learn More
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full max-w-4xl">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gold mb-3">25</div>
                <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gold mb-3">6</div>
                <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wider">Layer Architecture</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gold mb-3">1</div>
                <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wider">Mission</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is OM Section */}
      <section className="relative bg-white border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-teal/10 text-teal rounded-full text-sm font-semibold mb-6">
              The Optimization Mesh
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-6">What is OM?</h2>
            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              OM (Optimization Mesh) is the intelligence layer that continuously learns, optimizes, and recommends — while humans retain full control.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-teal/30 hover:shadow-xl hover:shadow-teal/5 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal/10 to-navy/10 mb-6 group-hover:scale-110 transition-transform">
                <div className="text-4xl">🧠</div>
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">Continuous Learning</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                OM learns from every decision, outcome, and exception — building institutional knowledge that compounds over time.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-teal/10 mb-6 group-hover:scale-110 transition-transform">
                <div className="text-4xl">⚖️</div>
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">Trade-off Optimization</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Balances competing objectives across pricing, operations, and finance — providing optimized recommendations, not rigid rules.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-navy/30 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-navy/10 to-mist/20 mb-6 group-hover:scale-110 transition-transform">
                <div className="text-4xl">👥</div>
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">Human Authority</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Every action requires human approval, operates within defined boundaries, and includes override paths at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-6">Built for logistics operators</h2>
            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From freight forwarders to 3PLs, OM optimizes the decisions that drive your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group flex gap-5 bg-white rounded-2xl p-6 border border-slate-200 hover:border-gold/30 hover:shadow-lg transition-all duration-200">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink mb-3">Protect and grow margin</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Optimize pricing by customer and lane. Detect leakage and anomalies. Balance win probability with profitability.
                </p>
              </div>
            </div>

            <div className="group flex gap-5 bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal/30 hover:shadow-lg transition-all duration-200">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-teal/20 to-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink mb-3">Reduce exceptions and rework</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Catch issues early. Prioritize by impact. Automate follow-ups within approved boundaries.
                </p>
              </div>
            </div>

            <div className="group flex gap-5 bg-white rounded-2xl p-6 border border-slate-200 hover:border-navy/30 hover:shadow-lg transition-all duration-200">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-navy/20 to-navy/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink mb-3">System-wide visibility and control</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Shift from reactive dashboards to proactive interventions. Optimize across pricing, ops, and finance.
                </p>
              </div>
            </div>

            <div className="group flex gap-5 bg-white rounded-2xl p-6 border border-slate-200 hover:border-mist/50 hover:shadow-lg transition-all duration-200">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-mist/30 to-mist/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl">🔒</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink mb-3">Institutional knowledge that stays</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Decision logic is captured, optimized, and retained — even when team members move on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-ink via-navy to-teal overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,197,32,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(130,170,186,0.1),transparent_50%)]"></div>
        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to optimize your logistics operations?
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            See how OM can transform pricing, operations, and finance decisions for your business.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold to-[#FFD04D] px-12 py-4 text-base font-bold text-ink shadow-xl shadow-gold/20 hover:shadow-2xl hover:shadow-gold/30 transition-all duration-200 hover:scale-105">
              Book a demo
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/use-cases" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-12 py-4 text-base font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all duration-200 hover:scale-105">
              Explore use cases
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
