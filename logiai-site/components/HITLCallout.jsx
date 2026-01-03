export default function HITLCallout() {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold">Humans are always in control</div>
      <p className="mt-2 text-sm text-ink/70">
        OM optimizes decisions. Operators approve, adjust, or override. Automation executes only within defined boundaries, with full traceability.
      </p>
      <p className="mt-3 text-xs text-ink/55">
        Canonical principle: <span className="font-semibold text-ink/70">Optimize → Human Decision → Automated Execution → Learning</span>
      </p>
    </div>
  );
}
