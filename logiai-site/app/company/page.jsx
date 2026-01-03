import Container from "../../components/Container";
import HITLCallout from "../../components/HITLCallout";

export default function Company() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-extrabold tracking-tight">Company</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
        <div className="max-w-3xl space-y-5 text-ink/80">
          <p>LogiAI was built by operators who have run real logistics businesses.</p>
          <p>
            We didn’t start with AI. We started with a simple observation:
            <span className="font-semibold text-ink"> the same decisions were being made over and over — and forgotten every time.</span>
          </p>
          <p>
            Documents were the entry point because that’s where intent first appears. But automation was never the destination.
            The destination was intelligence that remembers, learns, and compounds — and stays inside the company even when people leave.
          </p>
          <p>
            <span className="font-semibold text-ink">OM</span> stands for Optimization Mesh, and it also represents the origin of intelligence inside logistics:
            where signals become context, context becomes options, humans choose the decision, execution follows, and outcomes reinforce learning.
          </p>
        </div>
        <HITLCallout />
      </div>
    </Container>
  );
}
