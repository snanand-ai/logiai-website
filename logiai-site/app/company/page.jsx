import Container from "../../components/Container";
import HITLCallout from "../../components/HITLCallout";

export default function Company() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50/30 to-white py-20 md:py-28 border-b border-slate-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-navy/10 rounded-full border border-navy/20 mb-6">
              <span className="text-sm font-semibold text-navy">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Built by operators,<br/>for operators
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              LogiAI was built by people who have run real logistics businesses and understand the decisions that matter.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p className="text-xl font-semibold text-ink">
                  We didn't start with AI. We started with a simple observation:
                </p>
                <p>
                  <span className="font-bold text-ink">The same decisions were being made over and over — and forgotten every time.</span>
                </p>
                <p>
                  Documents were the entry point because that's where intent first appears. But automation was never the destination.
                </p>
                <p>
                  The destination was <span className="font-semibold text-gold">intelligence that remembers, learns, and compounds</span> — and stays inside the company even when people leave.
                </p>
              </div>
              <HITLCallout />
            </div>
          </div>
        </Container>
      </section>

      {/* OM Philosophy */}
      <section className="bg-gradient-to-br from-navy/5 to-teal/5 py-20 md:py-28 border-y border-slate-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 md:p-12">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-gold">OM</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">The Origin of Intelligence</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    <span className="font-bold text-ink">OM</span> stands for Optimization Mesh, and it also represents the origin of intelligence inside logistics:
                    where signals become context, context becomes options, humans choose the decision, execution follows, and outcomes reinforce learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values/Principles */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">Our Principles</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                These beliefs guide everything we build
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-gold/40 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">Intelligence First</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Understanding comes before action. Optimization comes before automation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-navy/40 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy/20 to-navy/5 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">Humans in Control</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Every decision has an approval gate, boundary, or override path. Always.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-teal/40 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal/20 to-teal/5 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">Built for Reality</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  We model how logistics actually works, not how we wish it worked.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-navy to-teal py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join us in building the future of logistics</h2>
            <p className="text-xl text-white/90 mb-10">
              We're working with forward-thinking logistics companies to deploy OM.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl">
              Get in Touch
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
