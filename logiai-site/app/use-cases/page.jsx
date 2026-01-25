import Container from "../../components/Container";

const USE_CASES = [
  {
    title: "Optimized Quoting",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    optimize: "Price ranges, win probability, margin protection by customer/lane",
    human: "Approve thresholds, override recommendations, enforce pricing policy",
    automate: "Generate and send quotes, follow-ups, documentation packets"
  },
  {
    title: "Optimized Bookings",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    optimize: "Carrier choice, routing trade-offs, risk vs reliability",
    human: "Approve carrier/routing constraints and escalation rules",
    automate: "Create bookings, confirm milestones, stakeholder notifications"
  },
  {
    title: "Exception Desk",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    optimize: "Prioritize by risk, SLA impact and margin exposure",
    human: "Approve escalation paths and intervention playbooks",
    automate: "Request missing data, trigger escalations, update customers"
  },
  {
    title: "Finance Controls",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    optimize: "Detect leakage, anomalies, and recoverable disputes",
    human: "Approve write-offs, dispute actions and policy limits",
    automate: "Match charges, flag variances, create evidence packs"
  },
  {
    title: "Control Tower Intervention",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    optimize: "System-level bottlenecks, leading risk indicators, prioritization",
    human: "Set KPIs, thresholds and governance",
    automate: "Alerts, routing of work, recommended interventions"
  }
];

export default function UseCases() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50/30 to-white py-20 md:py-28 border-b border-slate-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-teal/10 rounded-full border border-teal/20 mb-6">
              <span className="text-sm font-semibold text-teal">Use Cases</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Real-World Applications
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              OM optimizes decisions, humans stay in control, automation executes within boundaries.
            </p>
          </div>
        </Container>
      </section>

      {/* Framework Explanation */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">OM Optimizes</h3>
                <p className="text-sm text-slate-600">Continuous learning and decision optimization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy/20 to-navy/5 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">Humans Control</h3>
                <p className="text-sm text-slate-600">Approval gates and override authority</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal/20 to-teal/5 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">Automation Executes</h3>
                <p className="text-sm text-slate-600">Consistent execution within boundaries</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-7xl mx-auto space-y-8">
            {USE_CASES.map((useCase, index) => (
              <div
                key={useCase.title}
                className="bg-white rounded-3xl border-2 border-slate-200 p-8 md:p-10 hover:border-gold/40 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon & Title */}
                  <div className="flex-shrink-0 md:w-64">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold">
                        {useCase.icon}
                      </div>
                      <div className="text-3xl font-bold text-slate-300">{String(index + 1).padStart(2, '0')}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-ink">{useCase.title}</h3>
                  </div>

                  {/* Three Columns */}
                  <div className="flex-1 grid md:grid-cols-3 gap-6">
                    {/* OM Optimizes */}
                    <div className="bg-gradient-to-br from-gold/5 to-transparent rounded-2xl p-5 border border-gold/20">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                        <span className="text-xs font-bold text-gold uppercase tracking-wider">OM Optimizes</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{useCase.optimize}</p>
                    </div>

                    {/* Humans Control */}
                    <div className="bg-gradient-to-br from-navy/5 to-transparent rounded-2xl p-5 border border-navy/20">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-navy"></div>
                        <span className="text-xs font-bold text-navy uppercase tracking-wider">Humans Control</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{useCase.human}</p>
                    </div>

                    {/* Automation Executes */}
                    <div className="bg-gradient-to-br from-teal/5 to-transparent rounded-2xl p-5 border border-teal/20">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-teal"></div>
                        <span className="text-xs font-bold text-teal uppercase tracking-wider">Automation Executes</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{useCase.automate}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-navy to-teal py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to see your use case?</h2>
            <p className="text-xl text-white/90 mb-10">
              Every logistics operation is unique. Let's discuss how OM applies to your specific workflows.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl">
              Schedule a Conversation
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
