import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SITE_URL, BVM_EMAIL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for BVM (Bold Vision MultiTech) and AscendSME platform. Learn how we collect, use, and protect your personal and business data.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last Updated: December 16, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                BVM (Bold Vision MultiTech) Ltd. ("BVM", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our services, including the BVM website at b-vm.com and the AscendSME platform at ascendsme.africa.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This policy complies with the Ghana Data Protection Act, 2012 (Act 843). By using our services, you consent to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Contact details: name, email address, phone number, and organisation name submitted via our contact forms or service enquiries</li>
                <li>Business information provided for AscendSME registration, diagnostics, or Sustainability Score assessments</li>
                <li>Payment information processed through our payment processors (we do not store card details)</li>
                <li>Communications with the BVM team including enquiries and service correspondence</li>
              </ul>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">2.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Usage data: pages visited, time spent, referral sources, and interactions with our platforms</li>
                <li>Device information: browser type, operating system, and IP address</li>
                <li>Analytics data via Mixpanel — no personally identifiable information is sent to Mixpanel</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your enquiries and provide support</li>
                <li>To send service-related communications (not marketing without consent)</li>
                <li>To process payments and manage subscriptions</li>
                <li>To generate the Sustainability Score and related assessments on AscendSME</li>
                <li>To comply with legal obligations under Ghanaian law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. WhatsApp and Phone Number Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Phone numbers collected via our AI wrapper tools or WhatsApp-based services are stored encrypted in our database. We use phone numbers solely to deliver the service you requested and to follow up on your enquiry. Phone numbers are never shared with third parties for marketing purposes.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can delete your data at any time by replying DELETE to any WhatsApp message you receive from us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Sharing and Third Parties</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal data. We share data with third-party service providers only to operate our services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Supabase (database hosting and authentication)</li>
                <li>Paystack (payment processing)</li>
                <li>Vercel (website hosting)</li>
                <li>Anthropic (AI processing for BVM AI products)</li>
                <li>Africa's Talking or Twilio (WhatsApp OTP verification)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All service providers are contractually bound to protect your data and use it only for the purposes we specify.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organisational measures to protect your data, including encrypted storage of sensitive data, HTTPS across all our properties, and access controls limiting who can view your information. No internet transmission is completely secure, but we follow industry-standard practices to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights Under Ghana Data Protection Act</h2>
              <p className="text-muted-foreground leading-relaxed">Under the Ghana Data Protection Act, 2012, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data where there is no legitimate reason to continue processing</li>
                <li>Object to processing of your data for marketing purposes</li>
                <li>Receive your data in a portable format</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, contact us at{" "}
                <a href={`mailto:${BVM_EMAIL}`} className="text-primary hover:underline">{BVM_EMAIL}</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses essential cookies required for the site to function and analytics cookies to understand how visitors use our site. You can control cookie settings through your browser. Disabling analytics cookies will not affect your ability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your data for as long as necessary to provide our services and comply with legal obligations. Contact form submissions are retained for 24 months. AscendSME account data is retained for the duration of your subscription plus 12 months unless you request deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on our website. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-foreground font-semibold">BVM (Bold Vision MultiTech) Ltd.</p>
                <p className="text-muted-foreground">Accra, Ghana</p>
                <p className="text-muted-foreground">Email: business@b-vm.com</p>
                <p className="text-muted-foreground">Website: b-vm.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
