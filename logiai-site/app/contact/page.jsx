import Container from "../../components/Container";

export default function Contact() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-extrabold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-2xl text-ink/70">
        Share your workflows and systems. We’ll map OM to your pricing, operations and finance decisions.
      </p>

      <form className="mt-10 grid max-w-xl gap-4">
        <input className="rounded-xl border border-ink/15 px-4 py-3 text-sm" placeholder="Name" />
        <input className="rounded-xl border border-ink/15 px-4 py-3 text-sm" placeholder="Work email" />
        <input className="rounded-xl border border-ink/15 px-4 py-3 text-sm" placeholder="Company" />
        <textarea className="rounded-xl border border-ink/15 px-4 py-3 text-sm" rows="5" placeholder="What do you want OM to optimize?" />
        <button className="rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-navy">Send</button>
        <div className="text-xs text-ink/50">
          This form is a placeholder. We can connect it to your email, HubSpot, or another CRM.
        </div>
      </form>
    </Container>
  );
}
