export default function Page() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img src="/logo.png" alt="LogiAI" className="h-36 md:h-44 mb-6" />
          {/* Tagline */}
          <p className="text-sm tracking-wide text-slate-500 mb-10">Flow Forward</p>
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
  );
}
