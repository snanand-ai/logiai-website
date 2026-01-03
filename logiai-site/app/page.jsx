"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
          {/* Centered logo in hero */}
          <div className="mx-auto mb-8 flex justify-center">
            {/* IMPORTANT:
               Put your logo file in: /logiai-site/public/logiai-logo.png
               If your filename is different, change the src below to match exactly.
            */}
            <Image
              src="/logiai-logo.png"
              alt="LogiAI"
              width={520}
              height={160}
              priority
              className="h-auto w-[320px] sm:w-[420px] md:w-[520px]"
            />
          </div>

          {/* Headline UNDER the logo */}
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Intelligence before automation
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            LogiAI is an Optimization Mesh for logistics. It pauses chaos, reasons through complexity,
            and guides humans to better decisions. The human stays in control, always.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#F5C84C] px-8 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:brightness-95"
            >
              Book a demo
            </Link>

            <Link
              href="/product"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              See how it works
            </Link>
          </div>

          {/* Small value badges */}
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700">
              Warm yellow means optimism, momentum, forward motion
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700">
              Flowing nodes mean signals, decisions, intelligence
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700">
              The arrow means progress, direction, outcome
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Four outcome areas, one Optimization Mesh
          </h2>
          <p className="mt-3 text-slate-600">
            Automation exists, but it is not the story. The story is better decisions, margin, control, and speed.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">1) Pricing</h3>
            <p className="mt-3 text-slate-600">
              Quote faster with disciplined margin logic. Recommend sell rates, identify leakage, and standardize
              pricing behavior across the team.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">2) Operations optimization and automation</h3>
            <p className="mt-3 text-slate-600">
              Reduce exceptions and rework. Suggest next best actions, validate documents, and assist operators while
              keeping humans in control.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">3) Finance optimization</h3>
            <p className="mt-3 text-slate-600">
              Spot billing gaps, recover profit, and keep costs aligned to jobs. Improve accuracy of accruals,
              payables, and revenue capture.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">4) Control tower and supply chain optimization</h3>
            <p className="mt-3 text-slate-600">
              Monitor performance, exceptions, and risk across lanes, customers, and vendors. Turn noisy operations
              into clean, explainable decisions.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/use-cases"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Explore use cases
          </Link>
        </div>
      </section>
    </main>
  );
}
