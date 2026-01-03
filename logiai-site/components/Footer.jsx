import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-bold">LogiAI</div>
            <div className="mt-1 text-sm text-ink/60">OM — The Optimization Mesh for Logistics (Humans always in control).</div>
          </div>
          <div className="flex gap-6 text-sm text-ink/70">
            <a href="/privacy" className="hover:text-ink">Privacy</a>
            <a href="/security" className="hover:text-ink">Security</a>
            <a href="/contact" className="hover:text-ink">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-ink/50">© {new Date().getFullYear()} LogiAI. All rights reserved.</div>
      </Container>
    </footer>
  );
}
