export default function Page() {
  return (
    <>
      {/* Hero Section - Clean Design */}
      <section className="relative bg-gradient-to-b from-slate-50/30 to-white py-20 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center">
            {/* Logo - Large and Centered */}
            <div className="mb-12">
              <img src="/logo.png" alt="LogiAI" className="h-48 md:h-56" />
            </div>

            {/* Tagline */}
            <div className="mb-10">
              <span className="text-sm md:text-base font-medium text-slate-600">Building Intelligence From The Ground Up</span>
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
            <a href="/product" className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-ink font-semibold px-10 py-4 rounded-xl border-2 border-slate-300 transition-all duration-200 hover:scale-105 shadow-sm">
              Learn More
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Stats Section */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-4xl">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-gold mb-4">25</div>
                <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-gold mb-4">6</div>
                <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest">Layer Architecture</div>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-gold mb-4">1</div>
                <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest">Mission</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Gap Section */}
      <section className="bg-white py-24 md:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <div className="text-gold text-sm font-bold uppercase tracking-wider mb-6">The Intelligence Gap</div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-8">
              The World Is Building AI For Automation.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Global trade runs on human interpretation—not systems.
            </p>
          </div>

          {/* Data -> Intelligence -> Action Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
            <div className="flex flex-col items-center">
              <div className="w-48 h-32 rounded-2xl border-2 border-navy bg-slate-50 flex flex-col items-center justify-center p-6">
                <div className="text-lg font-bold text-navy mb-2">Data</div>
                <div className="text-sm text-slate-600 text-center">Unstructured inputs</div>
              </div>
            </div>
            <svg className="w-8 h-8 text-gold hidden md:block" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <div className="flex flex-col items-center">
              <div className="w-48 h-32 rounded-2xl border-2 border-gold bg-gold/5 flex flex-col items-center justify-center p-6">
                <div className="text-lg font-bold text-gold mb-2">Intelligence</div>
                <div className="text-sm text-slate-600 text-center">Pattern recognition</div>
              </div>
            </div>
            <svg className="w-8 h-8 text-gold hidden md:block" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <div className="flex flex-col items-center">
              <div className="w-48 h-32 rounded-2xl border-2 border-navy bg-slate-50 flex flex-col items-center justify-center p-6">
                <div className="text-lg font-bold text-navy mb-2">Action</div>
                <div className="text-sm text-slate-600 text-center">Optimal decisions</div>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-slate-500 mb-20">Continuous learning loop</div>

          {/* Traditional Automation vs LogiAI */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Traditional Automation */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-1">Traditional Automation</h3>
                  <p className="text-sm text-slate-600">What exists today</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span className="text-slate-700">Reactive workflows dependent on human intervention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span className="text-slate-700">Fragmented tools across disconnected systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span className="text-slate-700">Slow extraction processes with manual data entry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span className="text-slate-700">Zero memory between transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span className="text-slate-700">Zero learning from historical outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span className="text-slate-700">Operator dependent outcomes with high variability</span>
                </li>
              </ul>
            </div>

            {/* LogiAI Intelligence */}
            <div className="bg-gradient-to-br from-gold/5 to-teal/5 rounded-2xl p-8 border border-gold/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-1">LogiAI Intelligence</h3>
                  <p className="text-sm text-slate-600">What LogiAI delivers</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-slate-700">Instant semantic understanding of all communications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-slate-700">Vector memory spanning entire operational history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-slate-700">Optimisation engine running continuous analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-slate-700">Agent execution handling routine decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-slate-700">Continuous learning from every interaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-slate-700">Compound intelligence building competitive moats</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 text-lg">This is not a faster workflow. <span className="mx-4">→</span> <span className="font-bold text-ink">This is a smarter organisation.</span></p>
          </div>
        </div>
      </section>

      {/* OM Architecture Section */}
      <section className="relative bg-gradient-to-b from-slate-50/30 to-white py-24 md:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-20">
            <div className="text-gold text-sm font-bold uppercase tracking-wider mb-6">The Neural Operating System</div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-6">
              The LogiAI Optimisation Mesh<span className="text-gold">(OM)</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              A complete cognitive architecture for the global supply chain.
            </p>
          </div>

          {/* OM Diagram - Simplified representation */}
          <div className="mb-20 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-teal/10 rounded-full blur-3xl"></div>
              <div className="relative bg-white rounded-full p-8 border-2 border-gold/30 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold mb-2">Optimisation</div>
                  <div className="text-lg font-semibold text-navy">Mesh</div>
                  <div className="mt-4 text-sm text-slate-600">6-Layer Architecture</div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Layers List */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Layer 1 */}
            <div className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-200 hover:border-navy/30 hover:shadow-lg transition-all duration-200">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-ink mb-2">Understand <span className="text-sm font-normal text-slate-500 uppercase tracking-wider">Input Layer</span></h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Deep semantic analysis of all inputs. Multi-modal ingestion of emails, documents, messages and operational data.
                </p>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal/30 hover:shadow-lg transition-all duration-200">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-ink mb-2">Learn <span className="text-sm font-normal text-slate-500 uppercase tracking-wider">Understanding Layer</span></h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Pattern recognition across operations. Semantic processing and entity extraction from unstructured content.
                </p>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-200 hover:border-mist/50 hover:shadow-lg transition-all duration-200">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mist/20 flex items-center justify-center text-navy font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-ink mb-2">Retrieve <span className="text-sm font-normal text-slate-500 uppercase tracking-wider">Memory Layer</span></h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Instant access to relevant context. Vector embeddings storing complete operational context and history.
                </p>
              </div>
            </div>

            {/* Layer 4 */}
            <div className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-200 hover:border-navy/30 hover:shadow-lg transition-all duration-200">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold">4</div>
              <div>
                <h3 className="text-xl font-bold text-ink mb-2">Reason <span className="text-sm font-normal text-slate-500 uppercase tracking-wider">Intelligence Graph</span></h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Multi-factor decision analysis. Relationship mapping between entities, behaviours and outcomes.
                </p>
              </div>
            </div>

            {/* Layer 5 */}
            <div className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-200 hover:border-gold/30 hover:shadow-lg transition-all duration-200">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">5</div>
              <div>
                <h3 className="text-xl font-bold text-ink mb-2">Optimise <span className="text-sm font-normal text-slate-500 uppercase tracking-wider">Decision Layer</span></h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Maximum value path selection. Multi-objective decision making across competing constraints.
                </p>
              </div>
            </div>

            {/* Layer 6 */}
            <div className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-200 hover:border-gold/30 hover:shadow-lg transition-all duration-200">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">6</div>
              <div>
                <h3 className="text-xl font-bold text-ink mb-2">Execute <span className="text-sm font-normal text-slate-500 uppercase tracking-wider">Execution Layer</span></h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Autonomous agent action. Orchestrating actions across pricing, operations and finance workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Built from first principles. Built by operators. <span className="font-bold text-ink">Built to model how logistics actually works.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Hidden Behaviour Section */}
      <section className="bg-white py-24 md:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <div className="text-gold text-sm font-bold uppercase tracking-wider mb-6">Hidden Intelligence</div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-8">
              The Hidden Behaviour System
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Real signals live inside daily communication—invisible to traditional systems.
            </p>
          </div>

          {/* Network Visualization - Simple representation */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-md h-64">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Connection lines */}
                <line x1="200" y1="80" x2="140" y2="150" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="200" y1="80" x2="200" y2="150" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="200" y1="80" x2="260" y2="150" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="200" y1="150" x2="100" y2="220" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="200" y1="150" x2="200" y2="220" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="200" y1="150" x2="300" y2="220" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="140" y1="150" x2="100" y2="220" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="260" y1="150" x2="300" y2="220" stroke="#CBD5E1" strokeWidth="2" />

                {/* Nodes - Navy */}
                <circle cx="140" cy="150" r="16" fill="#013B5F" />
                <circle cx="100" cy="220" r="16" fill="#013B5F" />
                <circle cx="260" cy="150" r="16" fill="#013B5F" />
                <circle cx="300" cy="220" r="16" fill="#013B5F" />

                {/* Nodes - Gold (highlighted) */}
                <circle cx="200" cy="80" r="18" fill="#FFC520" />
                <circle cx="200" cy="150" r="24" fill="#FFC520" />
                <circle cx="200" cy="220" r="18" fill="#FFC520" />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <a href="/product" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-ink font-semibold px-10 py-4 rounded-xl border-2 border-slate-300 transition-all duration-200 hover:scale-105 shadow-sm">
              Discover How It Works
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-navy to-teal py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to build intelligence into your operations?
          </h2>
          <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
            See how the Optimisation Mesh can transform decision-making across your logistics business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg">
              Get Started
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/use-cases" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-xl border-2 border-white/30 transition-all duration-200 hover:scale-105 backdrop-blur">
              Explore Use Cases
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
