import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for BVM (Bold Vision MultiTech) Ltd. and all its properties including AscendSME platform and BVM Digital services.",
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
};

export default function TermsOfService() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last Updated: December 16, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction and Acceptance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to BVM (Bold Vision MultiTech) Ltd. ("BVM", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of all BVM properties, platforms, and services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li><strong>BVM Website:</strong> Our corporate website at b-vm.com</li>
                <li><strong>AscendSME Platform:</strong> Our flagship SME growth platform at ascendsme.africa</li>
                <li><strong>BVM Digital:</strong> Our digital services subsidiary providing web development, marketing, and technical solutions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By accessing or using any BVM property, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>"Account"</strong> means any account you create to access BVM services.</li>
                <li><strong>"BVM Properties"</strong> means all websites, platforms, applications, and services owned or operated by BVM.</li>
                <li><strong>"Content"</strong> means any information, data, text, graphics, images, or other materials uploaded, submitted, or displayed on any BVM Property.</li>
                <li><strong>"Digital Services"</strong> means web development, digital marketing, and technical consulting services provided by BVM Digital.</li>
                <li><strong>"Platform Services"</strong> means the AscendSME platform features including diagnostics, guided support, and marketplace access.</li>
                <li><strong>"Services"</strong> means all features, tools, and functionalities provided through any BVM Property.</li>
                <li><strong>"User"</strong> or "you" means any individual or entity accessing or using any BVM Property.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">To use BVM services, you must:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Be at least 18 years of age or the age of legal majority in your jurisdiction.</li>
                <li>Have the legal authority to enter into binding contracts.</li>
                <li>Not be barred from using our services under applicable law.</li>
                <li>Provide accurate, current, and complete information when required.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Account Registration and Security</h2>
              <p className="text-muted-foreground leading-relaxed">To access certain features of our services, you may need to create an Account. You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Provide accurate, truthful, and complete registration information.</li>
                <li>Maintain and promptly update your Account information.</li>
                <li>Keep your login credentials confidential and secure.</li>
                <li>Immediately notify us of any unauthorized access or use of your Account.</li>
                <li>Accept responsibility for all activities that occur under your Account.</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. BVM Digital Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                BVM Digital provides professional digital services including website design and development, digital marketing, social media management, chatbot development, custom solutions, and technical consulting.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.1 Service Agreements</h3>
              <p className="text-muted-foreground leading-relaxed">
                All BVM Digital projects are governed by individual service agreements or statements of work that specify scope, deliverables, timelines, and pricing. These Terms apply in addition to any project-specific agreements.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.2 Deliverables and Ownership</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Upon full payment, clients receive ownership of custom-developed deliverables as specified in the service agreement.</li>
                <li>BVM retains ownership of proprietary tools, frameworks, and methodologies used in service delivery.</li>
                <li>Third-party assets (stock images, fonts, plugins) remain subject to their respective licenses.</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. AscendSME Platform Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                AscendSME is BVM's flagship platform providing a guided ecosystem designed to help African SMEs achieve business sustainability and investment-readiness.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.1 Sustainability Score</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Sustainability Score is a verified credential issued upon successful completion of the sustainability assessment. Holders agree to maintain the standards that led to verification, submit to periodic re-verification as required, and not misrepresent their verification status.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. User Obligations and Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">By using any BVM Property, you agree to comply with all applicable laws, provide accurate information, and not misuse or attempt to deceive any BVM systems. You may not use BVM Properties for any unlawful purpose, impersonate others, interfere with services, or attempt unauthorized access.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Fees and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Certain BVM services require payment. Payment terms for BVM Digital projects are specified in individual service agreements. AscendSME platform fees are as published on the platform. All fees are non-refundable unless otherwise stated or required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                All BVM Properties and their contents are owned by BVM (Bold Vision MultiTech) Ltd. and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                BVM PROPERTIES AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BVM (BOLD VISION MULTITECH) LTD. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. Our total liability for any claims shall not exceed the amount you paid to us in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">16. Governing Law and Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by the laws of the Republic of Ghana. Disputes shall first be attempted to be resolved through good faith negotiation. If negotiation fails, disputes shall be submitted to binding arbitration in Accra, Ghana, in accordance with the Alternative Dispute Resolution Act, 2010 (Act 798).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">17. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Your continued use of any BVM Property after changes become effective constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">20. Contact Information</h2>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-foreground font-semibold">BVM (Bold Vision MultiTech) Ltd.</p>
                <p className="text-muted-foreground">Accra, Ghana</p>
                <p className="text-muted-foreground">Email: business@b-vm.com</p>
                <p className="text-muted-foreground">Website: b-vm.com</p>
                <p className="text-muted-foreground mt-2">AscendSME Platform: ascendsme.africa</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
