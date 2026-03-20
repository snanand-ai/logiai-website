import Container from "../../components/Container";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-slate-50/30 to-white">
      <Container className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">Get In Touch</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Share your workflows and systems. We will map OM to your pricing, operations and finance decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-ink mb-6">Send us a message</h2>
              <form className="grid gap-5">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Name</label>
                  <input
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Work Email</label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Company</label>
                  <input
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Message</label>
                  <textarea
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
                    rows="5"
                    placeholder="What do you want OM to optimize?"
                  />
                </div>
                <button className="w-full rounded-xl bg-gold hover:bg-gold/90 px-6 py-4 text-base font-bold text-ink transition-all duration-200 hover:scale-105 shadow-lg">
                  Send Message
                </button>
                <div className="text-xs text-slate-500 text-center">
                  This form connects to our team. We will respond within 24 hours.
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Company Description Card */}
              <div className="bg-gradient-to-br from-navy/5 to-teal/5 rounded-2xl p-8 border border-slate-200">
                <p className="text-base text-slate-700 leading-relaxed">
                  Building the intelligence infrastructure for global trade. The cognitive architecture that understands, learns and optimizes every decision in the supply chain.
                </p>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Office Location</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      115 Airport Cargo Road, #01-33<br />
                      Cargo Agents Building C<br />
                      Changi Air Freight Centre<br />
                      Singapore 819466
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-2">Email</h3>
                      <a href="mailto:info@logiai.co" className="text-navy hover:text-gold transition-colors font-medium">
                        info@logiai.co
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-2">Phone</h3>
                      <a href="tel:+6585053976" className="text-navy hover:text-gold transition-colors font-medium">
                        +65 8505 3976
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Demo Card */}
              <div className="bg-gradient-to-br from-navy to-teal rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Book a Demo</h3>
                <p className="text-white/90 mb-6">
                  See the Optimisation Mesh in action. Schedule a personalized demo with our team.
                </p>
                <a href="#" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105">
                  Schedule Demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
