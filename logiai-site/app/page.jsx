export default function Home() {
  return (
    <section className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
        <img
  src="/logo.png"
  alt="LogiAI"
  className="h-24 md:h-28 mb-6"
/>
<h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Intelligence before automation
        </h1>

        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          LogiAI is an Optimization Mesh for logistics.  
          It pauses chaos, reasons through complexity,  
          and guides humans to better decisions.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-[#FFC520] text-slate-900 font-medium hover:opacity-90"
          >
            Book a demo
          </a>
          <a
            href="/product"
            className="px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50"
          >
            See how it works
          </a>
        </div>
      </div>

      {/* Value pillars */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-semibold">Pricing intelligence</h3>
            <p className="mt-3 text-slate-600">
              Structured thinking across lanes, customers, margins, and volatility.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Operations optimization</h3>
            <p className="mt-3 text-slate-600">
              Clear recommendations before any workflow is executed.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Finance clarity</h3>
            <p className="mt-3 text-slate-600">
              Decisions aligned to profitability, not spreadsheets.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Control towers</h3>
            <p className="mt-3 text-slate-600">
              One intelligence layer across your entire supply chain.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold">
          Automation is not the hero
        </h2>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          LogiAI does automate quotes, bookings, and execution.  
          But automation is only enforcement.  
          Intelligence always comes first.
        </p>
        <p className="mt-4 text-lg text-slate-600">
          Humans stay in control.  
          Decisions stay explainable.  
          Outcomes stay intentional.
        </p>
      </div>
    </section>
  );
}
