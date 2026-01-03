import Container from "../components/Container";
import { Button } from "../components/Button";
import HITLCallout from "../components/HITLCallout";

const DEMO_LINK = "https://calendly.com/YOUR_LINK/demo";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/80">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <div className="text-xs font-semibold tracking-widest text-ink/60">{eyebrow}</div>}
      <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {desc && <p className="mt-3 text-sm text-ink/70 md:text-base">{desc}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink/[0.03] to-white">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-2">
                <Pill>OM — Optimization Mesh</Pill>
                <Pill>Origin of Intelligence</Pill>
                <Pill>Humans in control</Pill>
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
                OM — The Optimization Mesh for Logistics
              </h1>

              <p className="mt-4 text-base text-ink/75 md:text-lg">
                Where logistics intelligence begins. LogiAI continuously optimizes decisions across pricing, operations,
                finance and control towers — and executes within human controls, with traceability and learning built in.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={DEMO_LINK}>Book a demo</Button>
                <Button href="/product" variant="secondary">Explore OM</Button>
              </div>

              <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-6">
                <div className="text-sm font-semibold">OM represents the origin of intelligence inside logistics</div>
                <p className="mt-2 text-sm text-ink/70">
                  It is the point where signals become context, context becomes options, humans choose the decision, execution follows,
                  and outcomes reinforce learning. In LogiAI, this loop never stops — intelligence compounds.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-ink/70 sm:grid-cols-3">
                <div className="rounded-xl border border-ink/10 p-4">
                  <div className="font-semibold text-ink">Optimization first</div>
                  <div className="mt-1">Decisions improve continuously, not just tasks.</div>
                </div>
                <div className="rounded-xl border border-ink/10 p-4">
                  <div className="font-semibold text-ink">Human authority</div>
                  <div className="mt-1">Approve, adjust, or override every step.</div>
                </div>
                <div className="rounded-xl border border-ink/10 p-4">
                  <div className="font-semibold text-ink">Auditable execution</div>
                  <div className="mt-1">Traceable actions and a learning loop.</div>
                </div>
              </div>
            </div>

            <div className="w-full md:max-w-md">
              <HITLCallout />
              <div className="mt-4 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold tracking-widest text-ink/60">THE INSIGHT</div>
                <p className="mt-3 text-sm text-ink/80">
                  <span className="font-semibold text-ink">Logistics is not a workflow problem. It is an optimization problem.</span>
                </p>
                <p className="mt-2 text-sm text-ink/70">
                  Software has digitised tracking and documentation. It has not optimised decision-making. OM is built to do exactly that.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <SectionTitle
            eyebrow="ONE OPTIMIZATION MESH"
            title="Four domains where OM operates"
            desc="Optimization is the value. Automation enforces optimized decisions consistently — under human authority."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["Pricing optimization", "OM optimizes commercial decisions (win probability, margin, elasticity) and issues quotes within controls."],
              ["Operations optimization", "OM optimizes routing, reliability and exception handling, executing bookings and interventions with approvals."],
              ["Finance optimization", "OM optimizes margin and cost decisions, automating checks, matching and corrective actions with auditability."],
              ["Control tower optimization", "OM optimizes system-level priorities, enabling proactive interventions rather than reactive reporting."]
            ].map(([h, d]) => (
              <div key={h} className="rounded-2xl border border-ink/10 p-6">
                <div className="text-sm font-semibold">{h}</div>
                <div className="mt-2 text-sm text-ink/70">{d}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink/[0.02]">
        <Container className="py-14">
          <SectionTitle
            eyebrow="ENTERPRISE TRUST"
            title="Control, accountability and governance by design"
            desc="Every automated action is human-approved, human-bounded, or human-overrideable — with role-based permissions and full audit trails."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Role-based approvals", "Define who can approve, execute and override actions by domain and workflow."],
              ["Decision logs", "Store recommended actions, human decisions, and outcomes for traceability and learning."],
              ["Audit trail", "Track what changed, when, by whom, and why — end to end."]
            ].map(([h, d]) => (
              <div key={h} className="rounded-2xl border border-ink/10 bg-white p-6">
                <div className="text-sm font-semibold">{h}</div>
                <div className="mt-2 text-sm text-ink/70">{d}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <div className="rounded-3xl bg-ink p-10 text-white">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold md:text-3xl">See OM on your workflows</h2>
              <p className="mt-3 text-white/80">
                In one demo, we map a real process across pricing, operations and finance, show the OM loop, and identify measurable cycle-time and margin wins.
              </p>
              <div className="mt-6">
                <a
                  href={DEMO_LINK}
                  className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-ink hover:opacity-95"
                >
                  Book a demo
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
