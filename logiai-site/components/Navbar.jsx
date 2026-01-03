import Container from "./Container";
import { Button } from "./Button";

const DEMO_LINK = "https://calendly.com/YOUR_LINK/demo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="LogiAI"
    className="h-33 md:h-25 w-auto"
  />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-ink/75 hover:text-ink" href="/product">Product</a>
          <a className="text-sm text-ink/75 hover:text-ink" href="/use-cases">Use Cases</a>
          <a className="text-sm text-ink/75 hover:text-ink" href="/security">Security</a>
          <a className="text-sm text-ink/75 hover:text-ink" href="/company">Company</a>
        </nav>

        <div className="flex items-center gap-3">
          <a className="hidden text-sm text-ink/75 hover:text-ink md:block" href="/contact">Contact</a>
          <Button href={DEMO_LINK}>Book a demo</Button>
        </div>
      </Container>
    </header>
  );
}
