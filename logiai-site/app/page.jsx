export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-white via-slate-50/50 to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy/10 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            {/* Logo with integrated background */}
            <div className="relative mb-12 group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal/30 via-gold/30 to-navy/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl shadow-ink/10">
                <img src="/logo.png" alt="LogiAI" className="h-32 md:h-40 relative z-10" />
              </div>
            </div>

            {/* Headline with better hierarchy */}
            <div className="space-y-6 mb-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-teal/10 to-navy/10 rounded-full border border-teal/20">
                <span className="text-sm md:text-base font-semibold bg-gradient-to-r from-teal to-navy bg-clip-text text-transparent">
                  Optimization Mesh for Logistics
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.1]">
                Intelligence before<br/>automation
              </h1>
            </div>

            {/* Subheading */}
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed">
              LogiAI pauses chaos, reasons through complexity, and guides humans to better decisions before any action is taken.
            </p>

            {/* Key value props */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur rounded-xl px-5 py-3 border border-slate-200/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center">
                  <span className="text-lg">⚡</span>
                </div>
                <span className="text-sm font-semibold text-slate-700">Continuous Learning</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur rounded-xl px-5 py-3 border border-slate-200/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                  <span className="text-lg">🎯</span>
                </div>
                <span className="text-sm font-semibold text-slate-700">Real-time Optimization</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur rounded-xl px-5 py-3 border border-slate-200/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center">
                  <span className="text-lg">👥</span>
                </div>
                <span className="text-sm font-semibold text-slate-700">Human-in-the-Loop</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-14 flex flex-col sm:flex-row gap-4">
              <a href="#" className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold via-[#FFD04D] to-gold bg-size-200 bg-pos-0 hover:bg-pos-100 px-12 py-4 text-base font-bold text-ink shadow-xl shadow-gold/25 hover:shadow-2xl hover:shadow-gold/35 transition-all duration-300">
                <span className="relative z-10">Book a demo</span>
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/product" className="inline-flex items-center justify-center rounded-full border-2 border-navy/30 bg-white/90 backdrop-blur px-12 py-4 text-base font-semibold text-ink hover:border-navy hover:bg-white hover:shadow-lg transition-all duration-300">
                See how it works
              </a>
            </div>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
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
