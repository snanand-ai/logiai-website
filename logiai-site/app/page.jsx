// app/page.jsx
// IMPORTANT:
// 1) Do NOT import the logo (no: import logo from "...").
// 2) Put the logo file here: logiai-site/public/logo.png
// 3) This version uses plain <img> (best for Vercel static export) and avoids next/image entirely.

export default function Page() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.container}>
          {/* CENTERED, PROMINENT LOGO */}
          <img
            src="/logiai-logo.png"
            alt="LogiAI"
            style={styles.logo}
          />

          {/* HEADLINE UNDER LOGO */}
          <h1 style={styles.h1}>Intelligence before automation</h1>

          <p style={styles.sub}>
            LogiAI is an Optimization Mesh for logistics. It pauses chaos, reasons through complexity,
            and guides humans to better decisions. The human stays in control, always.
          </p>

          <div style={styles.ctaRow}>
            <a href="/contact" style={styles.ctaPrimary}>Book a demo</a>
            <a href="/product" style={styles.ctaSecondary}>See how it works</a>
          </div>

          <div style={styles.badges}>
            <div style={styles.badge}>Warm yellow means optimism, momentum, forward motion</div>
            <div style={styles.badge}>Flowing nodes mean signals, decisions, intelligence</div>
            <div style={styles.badge}>The arrow means progress, direction, outcome</div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Four outcome areas, one Optimization Mesh</h2>
          <p style={styles.p}>
            Automation exists, but it is not the story. The story is better decisions, margin, control, and speed.
          </p>

          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.h3}>Pricing</h3>
              <p style={styles.cardP}>
                Quote faster with disciplined margin logic. Recommend sell rates, identify leakage,
                and standardize pricing behavior across the team.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.h3}>Operations optimization and automation</h3>
              <p style={styles.cardP}>
                Reduce exceptions and rework. Suggest next best actions, validate documents,
                and assist operators while keeping humans in control.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.h3}>Finance optimization</h3>
              <p style={styles.cardP}>
                Spot billing gaps, recover profit, and keep costs aligned to jobs. Improve accuracy of accruals,
                payables, and revenue capture.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.h3}>Control tower and supply chain optimization</h3>
              <p style={styles.cardP}>
                Monitor performance, exceptions, and risk across lanes, customers, and vendors.
                Turn noisy operations into clean, explainable decisions.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a href="/use-cases" style={styles.ctaDark}>Explore use cases</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#ffffff",
    color: "#0f172a",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  hero: {
    paddingTop: 80,
    paddingBottom: 64,
  },
  container: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 24px",
    textAlign: "center",
  },
  logo: {
    display: "block",
    margin: "0 auto 24px",
    width: "min(560px, 86vw)",
    height: "auto",
  },
  h1: {
    margin: "0 auto",
    maxWidth: 920,
    fontSize: 54,
    lineHeight: 1.05,
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  sub: {
    margin: "18px auto 0",
    maxWidth: 860,
    fontSize: 20,
    lineHeight: 1.6,
    color: "#475569",
  },
  ctaRow: {
    marginTop: 28,
    display: "flex",
    justifyContent: "center",
    gap: 14,
    flexWrap: "wrap",
  },
  ctaPrimary: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 22px",
    borderRadius: 999,
    background: "#F5C84C",
    color: "#0f172a",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
  },
  ctaSecondary: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 22px",
    borderRadius: 999,
    border: "1px solid #cbd5e1",
    background: "#ffffff",
    color: "#0f172a",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
  },
  badges: {
    margin: "26px auto 0",
    maxWidth: 980,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 10,
  },
  badge: {
    border: "1px solid #e2e8f0",
    borderRadius: 18,
    padding: "12px 14px",
    fontSize: 13,
    color: "#334155",
    background: "#ffffff",
  },
  section: {
    paddingTop: 24,
    paddingBottom: 80,
  },
  h2: {
    margin: "0 auto",
    fontSize: 30,
    fontWeight: 700,
    letterSpacing: "-0.01em",
  },
  p: {
    margin: "10px auto 0",
    maxWidth: 860,
    fontSize: 16,
    lineHeight: 1.7,
    color: "#475569",
    textAlign: "center",
  },
  grid: {
    marginTop: 26,
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
  },
  card: {
    border: "1px solid #e2e8f0",
    borderRadius: 22,
    padding: 22,
    background: "#ffffff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    textAlign: "left",
  },
  h3: {
    margin: 0,
    fontSize: 18,
    fontWeight: 700,
  },
  cardP: {
    margin: "10px 0 0",
    fontSize: 15,
    lineHeight: 1.7,
    color: "#475569",
  },
  ctaDark: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 22px",
    borderRadius: 999,
    background: "#0f172a",
    color: "#ffffff",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
  },
};
