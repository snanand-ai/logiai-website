import Container from "../../components/Container";

export default function Privacy() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>
      <div className="mt-8 max-w-3xl space-y-6 text-ink/70">
        <p className="text-sm text-ink/50">Last updated: January 2026</p>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">Overview</h2>
          <p>
            LogiAI is committed to protecting your privacy and ensuring the security of your data.
            This Privacy Policy explains how we collect, use and protect information when you use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">Data Collection</h2>
          <p className="mb-2">We collect data to provide and improve our Optimization Mesh (OM) services:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Business data you provide (RFQs, bookings, documents, operational metrics)</li>
            <li>Usage data (how you interact with OM, decisions made, outcomes)</li>
            <li>Account information (name, email, company details, user roles)</li>
            <li>Technical data (logs, IP addresses, browser type)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">How We Use Your Data</h2>
          <p className="mb-2">Your data is used to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Provide and optimize OM services for your logistics operations</li>
            <li>Learn and improve recommendations over time</li>
            <li>Provide analytics and insights to your team</li>
            <li>Ensure security, prevent fraud and comply with legal obligations</li>
            <li>Communicate with you about services, updates and support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data, including encryption
            in transit and at rest, access controls and regular security audits. Your data is isolated
            and accessible only to authorized personnel within your organization.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">Data Sharing</h2>
          <p className="mb-2">We do not sell your data. We may share data only in these limited circumstances:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>With your explicit consent</li>
            <li>With service providers who help us operate (under strict confidentiality agreements)</li>
            <li>When required by law or to protect our legal rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">Your Rights</h2>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Access, correct, or delete your personal data</li>
            <li>Export your data in a portable format</li>
            <li>Restrict or object to certain processing activities</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">Data Retention</h2>
          <p>
            We retain your data for as long as necessary to provide services and comply with legal obligations.
            You may request deletion of your data at any time, subject to legal retention requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">Contact Us</h2>
          <p>
            For questions about this Privacy Policy or to exercise your rights, please contact us at{" "}
            <a href="/contact" className="text-ink font-semibold hover:underline">our contact page</a>.
          </p>
        </section>
      </div>
    </Container>
  );
}
