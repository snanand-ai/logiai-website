import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "LogiAI — OM, The Optimization Mesh for Logistics",
  description:
    "LogiAI is an Optimization Mesh (OM) that continuously optimizes logistics decisions across pricing, operations, finance and control towers — with humans always in control."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
