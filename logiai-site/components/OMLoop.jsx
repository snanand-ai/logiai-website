export default function OMLoop() {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6">
      <div className="text-xs font-semibold tracking-widest text-ink/60">HOW OM WORKS</div>
      <div className="mt-4 space-y-3 text-sm">
        <div className="rounded-xl bg-ink/[0.03] p-3"><span className="font-semibold">Signals</span> — RFQs, emails, documents, bookings, exceptions, outcomes</div>
        <div className="rounded-xl bg-ink/[0.03] p-3"><span className="font-semibold">Optimization Mesh (OM)</span> — models trade-offs and proposes optimized actions</div>
        <div className="rounded-xl bg-ink/[0.03] p-3"><span className="font-semibold">Human decision</span> — approve, modify, or override (roles & thresholds configurable)</div>
        <div className="rounded-xl bg-ink/[0.03] p-3"><span className="font-semibold">Automated execution</span> — quotes, bookings, interventions carried out within controls</div>
        <div className="rounded-xl bg-ink/[0.03] p-3"><span className="font-semibold">Learning</span> — outcomes reinforce future optimization</div>
      </div>
    </div>
  );
}
