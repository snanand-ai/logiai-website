import Container from "../../components/Container";

const FEATURES = [
  {
    title: "Role-based Approvals",
    description: "Define who can approve, execute and override actions by workflow and domain.",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Audit Trail",
    description: "Track recommended actions, human decisions, execution and outcomes end-to-end.",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Boundaries & Thresholds",
    description: "Configure policy limits, confidence thresholds and escalation rules.",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Override by Design",
    description: "Every workflow includes explicit override paths. Humans retain authority.",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    )
  }
];

export default function Security() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50/30 to-white py-20 md:py-28 border-b border-slate-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-navy/10 rounded-full border border-navy/20 mb-6">
              <span className="text-sm font-semibold text-navy">Security & Governance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Built for accountability
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              OM is designed for human accountability. Operators are always in control, with governance, auditability and override paths built in.
            </p>
          </div>
        </Container>
      </section>

      {/* Security Features Grid */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-navy/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-navy/20 to-navy/5 flex items-center justify-center text-navy group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ink mb-3">{feature.title}</h3>
                      <p className="text-base text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Human in the Loop Emphasis */}
      <section className="bg-gradient-to-br from-navy/5 to-teal/5 py-20 md:py-28 border-y border-slate-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 md:p-12">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">Humans Always in Control</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    OM recommends, humans decide. Every automated action operates within approved boundaries and includes manual override paths.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    This is not just philosophy. It is architecture. Control and accountability are built into every layer of the system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">Enterprise-Grade Security</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Built with the security and compliance standards that enterprise logistics operations require
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal/20 to-teal/5 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">Data Encryption</h3>
                <p className="text-sm text-slate-600">End-to-end encryption in transit and at rest</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy/20 to-navy/5 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">SOC 2 Compliant</h3>
                <p className="text-sm text-slate-600">Enterprise security standards and certifications</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">Data Privacy</h3>
                <p className="text-sm text-slate-600">GDPR and data residency compliance</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-navy to-teal py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have security questions?</h2>
            <p className="text-xl text-white/90 mb-10">
              Our team is happy to discuss our security architecture and compliance in detail.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl">
              Contact Security Team
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
