import Container from "../../components/Container";
import HITLCallout from "../../components/HITLCallout";
import OMLoop from "../../components/OMLoop";

export default function Product() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50/30 to-white py-20 md:py-28 border-b border-slate-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full border border-gold/20 mb-6">
              <span className="text-sm font-semibold text-gold">The Product</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Optimization Mesh <span className="text-gold">(OM)</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              The intelligence layer that continuously learns how decisions are made and optimizes them across pricing, operations, finance and control towers.
            </p>
          </div>
        </Container>
      </section>

      {/* OM Loop & HITL Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            <OMLoop />
            <HITLCallout />
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gradient-to-br from-navy/5 to-teal/5 py-20 md:py-28 border-y border-slate-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">Optimization, not automation</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Optimization is the value. Automation ensures optimized decisions are executed consistently, under human authority.
                    Every action is human-approved, human-bounded, or human-overrideable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Four Optimization Areas */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">Four Optimization Areas</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              OM optimizes decisions across your entire logistics operation
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Pricing */}
            <div className="group bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-gold/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-3">Pricing Optimization</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Balance win probability and margin. Learn elasticity by customer and lane. Issue quotes within controls.
                  </p>
                </div>
              </div>
            </div>

            {/* Operations */}
            <div className="group bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-teal/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal/20 to-teal/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-3">Operations Optimization</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Reduce exceptions and rework. Propose interventions early. Execute bookings and follow-ups with approvals.
                  </p>
                </div>
              </div>
            </div>

            {/* Finance */}
            <div className="group bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-navy/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy/20 to-navy/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-3">Finance Optimization</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Identify leakage and anomalies. Automate checks and matching. Protect margin without slowing operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Control Tower */}
            <div className="group bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-mist/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-mist/30 to-mist/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-3">Control Tower Optimization</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Shift from reactive visibility to proactive control. Optimize priorities and interventions system-wide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-navy to-teal py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">See OM in action</h2>
            <p className="text-xl text-white/90 mb-10">
              Book a demo to see how the Optimisation Mesh transforms logistics decision-making.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl">
              Book a Demo
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
