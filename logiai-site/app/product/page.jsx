import Container from "../../components/Container";
import HITLCallout from "../../components/HITLCallout";
import OMLoop from "../../components/OMLoop";

export default function Product() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-extrabold tracking-tight">Product</h1>
      <p className="mt-4 max-w-3xl text-ink/70">
        LogiAI is an <span className="font-semibold text-ink">Optimization Mesh (OM)</span> — and a symbol of the origin of intelligence inside logistics.
        OM continuously learns how decisions are made and optimizes them across pricing, operations, finance and control towers.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <OMLoop />
        <HITLCallout />
      </div>

      <div className="mt-10 rounded-2xl border border-ink/10 p-6">
        <div className="text-sm font-semibold">Automation is reinforced — but it is not the product</div>
        <p className="mt-2 text-sm text-ink/70">
          Optimization is the value. Automation ensures optimized decisions are executed consistently, under human authority.
          Every action is human-approved, human-bounded, or human-overrideable.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          ["Pricing optimization", "Balance win probability and margin. Learn elasticity by customer and lane. Issue quotes within controls."],
          ["Operations optimization", "Reduce exceptions and rework. Propose interventions early. Execute bookings and follow-ups with approvals."],
          ["Finance optimization", "Identify leakage and anomalies. Automate checks and matching. Protect margin without slowing operations."],
          ["Control tower optimization", "Shift from reactive visibility to proactive control. Optimize priorities and interventions system-wide."]
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
