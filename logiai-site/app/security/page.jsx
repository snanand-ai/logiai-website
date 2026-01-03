import Container from "../../components/Container";

export default function Security() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-extrabold tracking-tight">Security & Governance</h1>
      <p className="mt-4 max-w-3xl text-ink/70">
        OM is designed for human accountability. Operators are always in control, with governance, auditability and override paths built in.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          ["Role-based approvals", "Define who can approve, execute and override actions by workflow and domain."],
          ["Audit trail", "Track recommended actions, human decisions, execution and outcomes end-to-end."],
          ["Boundaries & thresholds", "Configure policy limits, confidence thresholds and escalation rules."],
          ["Override by design", "Every workflow includes explicit override paths — humans retain authority."]
        ].map(([h, d]) => (
          <div key={h} className="rounded-2xl border border-ink/10 p-6">
            <div className="text-sm font-semibold">{h}</div>
            <div className="mt-2 text-sm text-ink/70">{d}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}
