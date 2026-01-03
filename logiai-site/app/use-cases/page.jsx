import Container from "../../components/Container";

const USE_CASES = [
  { title: "Optimized quoting", optimize: "Price ranges, win probability, margin protection by customer/lane", human: "Approve thresholds, override recommendations, enforce pricing policy", automate: "Generate and send quotes, follow-ups, documentation packets" },
  { title: "Optimized bookings", optimize: "Carrier choice, routing trade-offs, risk vs reliability", human: "Approve carrier/routing constraints and escalation rules", automate: "Create bookings, confirm milestones, stakeholder notifications" },
  { title: "Exception desk", optimize: "Prioritize by risk, SLA impact and margin exposure", human: "Approve escalation paths and intervention playbooks", automate: "Request missing data, trigger escalations, update customers" },
  { title: "Finance controls", optimize: "Detect leakage, anomalies, and recoverable disputes", human: "Approve write-offs, dispute actions and policy limits", automate: "Match charges, flag variances, create evidence packs" },
  { title: "Control tower intervention", optimize: "System-level bottlenecks, leading risk indicators, prioritization", human: "Set KPIs, thresholds and governance", automate: "Alerts, routing of work, recommended interventions" }
];

export default function UseCases() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-extrabold tracking-tight">Use Cases</h1>
      <p className="mt-4 max-w-3xl text-ink/70">
        Use cases are framed consistently: OM optimizes decisions, humans stay in control, automation executes within boundaries.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {USE_CASES.map((u) => (
          <div key={u.title} className="rounded-2xl border border-ink/10 p-6">
            <div className="text-sm font-semibold">{u.title}</div>
            <div className="mt-4 space-y-2 text-sm text-ink/70">
              <div><span className="font-semibold text-ink">OM optimizes:</span> {u.optimize}</div>
              <div><span className="font-semibold text-ink">Humans control:</span> {u.human}</div>
              <div><span className="font-semibold text-ink">Automation executes:</span> {u.automate}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
