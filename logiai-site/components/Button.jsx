export function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-gold/50";
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:bg-navy"
      : "bg-white text-ink ring-1 ring-ink/15 hover:ring-ink/30";
  return <a className={`${base} ${styles}`} href={href}>{children}</a>;
}
