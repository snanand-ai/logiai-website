export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-slate-50 to-teal/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(7,99,128,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,197,32,0.06),transparent_50%)]"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="mb-8 transform transition-all hover:scale-105">
              <img src="/logo.png" alt="LogiAI" className="h-40 md:h-48" />
            </div>
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-tight">
              Intelligence before<br/>automation
            </h1>
            {/* Subheading */}
            <p className="mt-8 max-w-3xl text-xl md:text-2xl text-slate-700 leading-relaxed">
              LogiAI is an Optimization Mesh for logistics. It pauses chaos, reasons through complexity, and guides humans to better decisions before any action is taken.
            </p>
            {/* CTAs */}
            <div className="mt-14 flex flex-col sm:flex-row gap-5">
              <a href="#" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold to-[#FFD04D] px-12 py-4 text-base font-bold text-ink shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 transition-all duration-200 hover:scale-105">
                Book a demo
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/product" className="inline-flex items-center justify-center rounded-full border-2 border-navy/20 bg-white/80 backdrop-blur px-12 py-4 text-base font-semibold text-ink hover:border-navy hover:bg-white transition-all duration-200 hover:scale-105 shadow-sm">
                See how it works
              </a>
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
