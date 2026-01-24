export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <img src="/logo.png" alt="LogiAI" className="h-36 md:h-44 mb-6" />
            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">Intelligence before automation</h1>
            {/* Subheading */}
            <p className="mt-6 max-w-3xl text-lg text-slate-600">
              LogiAI is an Optimization Mesh for logistics. It pauses chaos, reasons through complexity, and guides humans to better decisions before any action is taken.
            </p>
            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#FFC520] px-10 py-3 text-sm font-semibold text-slate-900 hover:opacity-90 transition">Book a demo</a>
              <a href="/product" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-10 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition">See how it works</a>
            </div>
          </div>
        </div>
      </section>

      {/* What is OM Section */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What is OM?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              OM (Optimization Mesh) is the intelligence layer that continuously learns, optimizes, and recommends — while humans retain full control.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Continuous Learning</h3>
              <p className="text-sm text-slate-600">
                OM learns from every decision, outcome, and exception — building institutional knowledge that compounds over time.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Trade-off Optimization</h3>
              <p className="text-sm text-slate-600">
                Balances competing objectives across pricing, operations, and finance — providing optimized recommendations, not rigid rules.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Human Authority</h3>
              <p className="text-sm text-slate-600">
                Every action requires human approval, operates within defined boundaries, and includes override paths at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Built for logistics operators</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              From freight forwarders to 3PLs, OM optimizes the decisions that drive your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFC520]/10 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Protect and grow margin</h3>
                <p className="text-sm text-slate-600">
                  Optimize pricing by customer and lane. Detect leakage and anomalies. Balance win probability with profitability.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFC520]/10 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Reduce exceptions and rework</h3>
                <p className="text-sm text-slate-600">
                  Catch issues early. Prioritize by impact. Automate follow-ups within approved boundaries.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFC520]/10 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">System-wide visibility and control</h3>
                <p className="text-sm text-slate-600">
                  Shift from reactive dashboards to proactive interventions. Optimize across pricing, ops, and finance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFC520]/10 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Institutional knowledge that stays</h3>
                <p className="text-sm text-slate-600">
                  Decision logic is captured, optimized, and retained — even when team members move on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to optimize your logistics operations?</h2>
          <p className="mt-4 text-lg text-white/80">
            See how OM can transform pricing, operations, and finance decisions for your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#FFC520] px-10 py-3 text-sm font-semibold text-slate-900 hover:opacity-90 transition">Book a demo</a>
            <a href="/use-cases" className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">Explore use cases</a>
          </div>
        </div>
      </section>
    </>
  );
}
