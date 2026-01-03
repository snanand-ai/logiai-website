"use client";
<section className="bg-white">
  <div className="mx-auto max-w-6xl px-6 py-28">
    <div className="flex flex-col items-center text-center">

      {/* Big centered logo */}
      <img
        src="/logo.png"
        alt="LogiAI"
        className="mx-auto block h-48 md:h-60 w-auto mb-10"
      />

      {/* Headline directly under logo */}
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
        Intelligence before automation
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-slate-600">
        LogiAI is an Optimization Mesh for logistics. It pauses chaos, reasons through
        complexity, and guides humans to better decisions.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[#FFC520] px-10 py-3 text-sm font-semibold text-slate-900 hover:opacity-90 transition"
        >
          Book a demo
        </a>

        <a
          href="/product"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-10 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
        >
          See how it works
        </a>
      </div>

    </div>
  </div>
</section>
