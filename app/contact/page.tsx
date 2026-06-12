'use client';

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, MessageCircle, MapPin, CheckCircle2, Mail } from "lucide-react";

// Inline SVGs — lucide-react v1 removed social brand icons
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
import { toast } from "sonner";
import { z } from "zod";
import {
  BVM_DIGITAL_FACEBOOK_URL,
  BVM_DIGITAL_INSTAGRAM_URL,
  ASCENDSME_EMAIL,
  BVM_EMAIL,
  BVM_PHONE_E164,
  BVM_PHONE_DISPLAY,
  COMPANY_LINKEDIN_URL,
  ORG_ADDRESS_FULL,
} from "@/lib/siteCopy";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  organisation: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  reason: z.string().min(1, "Please choose a reason"),
  message: z.string().trim().min(10, "Tell us a little more (10+ chars)").max(2000),
});

const reasons = [
  "Website design and development",
  "SEO and Prompt Engine Optimization (PEO)",
  "AI consulting and automation",
  "AscendSME, business management platform",
  "Partnership enquiry",
  "Digital literacy programme",
  "General enquiry",
  "Something else",
];

const channels = [
  {
    name: "LinkedIn",
    handle: "Bold Vision MultiTech (BVM)",
    Icon: LinkedinIcon,
    tint: "bg-secondary/15 text-secondary",
    href: COMPANY_LINKEDIN_URL,
  },
  {
    name: "Instagram",
    handle: "@bvmdigital",
    Icon: InstagramIcon,
    tint: "bg-primary/15 text-primary",
    href: BVM_DIGITAL_INSTAGRAM_URL,
  },
  {
    name: "Facebook",
    handle: "BVM Digital",
    Icon: FacebookIcon,
    tint: "bg-secondary/15 text-secondary",
    href: BVM_DIGITAL_FACEBOOK_URL,
  },
  {
    name: "WhatsApp",
    handle: "Direct message for urgent enquiries",
    Icon: MessageCircle,
    tint: "bg-primary/15 text-primary",
    href: `https://wa.me/${BVM_PHONE_E164.replace("+", "")}`,
  },
];

function RouteCard({
  tag,
  tagColor,
  borderColor,
  title,
  description,
  link,
  linkText,
  linkColor,
  external,
}: {
  tag: string;
  tagColor: string;
  borderColor: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  linkColor: string;
  external?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl bg-card border border-border border-t-2 ${borderColor} p-6 flex flex-col gap-3 hover:shadow-medium transition-shadow`}
    >
      <span className={`text-[11px] font-semibold tracking-[0.15em] uppercase ${tagColor}`}>{tag}</span>
      <h3 className="font-heading text-base font-semibold text-foreground leading-snug">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
      <a
        href={link}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`text-sm font-medium ${linkColor} hover:underline inline-flex items-center gap-1.5 mt-1`}
      >
        {linkText} <ArrowRight size={14} />
      </a>
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`BVM Enquiry: ${form.reason}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganisation: ${form.organisation}\nEmail: ${form.email}\nPhone: ${form.phone}\nReason: ${form.reason}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${BVM_EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
              <div className="max-w-2xl">
                <div className="w-10 h-1 bg-secondary rounded-full mb-6" />
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-secondary mb-4">
                  Talk to the BVM team
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground mb-6">
                  Let's start a real <span className="text-gradient-orange">conversation.</span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-7">
                  Whether you're looking to grow your digital presence, explore AscendSME, discuss a partnership, or
                  simply want to understand where to start, we're here and we respond.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="secondary" size="lg">
                    <a href="#message-form">
                      Send a message <ArrowRight size={16} />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={`mailto:${BVM_EMAIL}`}>
                      <Mail size={16} /> {BVM_EMAIL}
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-60" />
                <Image
                  src="/assets/contact-hero.jpg"
                  alt="BVM team in conversation with a client in Accra, Ghana"
                  width={1024}
                  height={1024}
                  className="relative rounded-3xl shadow-large w-full h-auto object-cover aspect-[5/4]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MAIN */}
        <section className="container mx-auto px-4 py-14 md:py-20 max-w-6xl">
          {/* Promise bar */}
          <div className="rounded-2xl bg-card border border-border p-5 md:p-6 flex items-start gap-4 mb-10">
            <div className="relative flex-shrink-0 mt-1">
              <span className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-secondary animate-ping opacity-60" />
              <span className="relative block w-2.5 h-2.5 rounded-full bg-secondary" />
            </div>
            <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">We respond to every enquiry within 1 business day.</span>{" "}
              No automated holding replies. A real person from the BVM team will read your message and respond with a
              clear next step.
            </p>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-6 lg:gap-8">
            {/* FORM */}
            <div id="message-form" className="rounded-2xl bg-card border border-border p-6 md:p-8 scroll-mt-24">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-secondary mb-2">
                Send us a message
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
                Tell us about your business
              </h2>
              <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
                No lengthy forms. Just enough for us to understand who you are and how we can help.
              </p>

              {submitted ? (
                <div className="rounded-xl bg-secondary/10 border border-secondary/40 p-6 flex items-start gap-3">
                  <CheckCircle2 className="text-secondary flex-shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="font-heading font-semibold text-foreground mb-1">Message on its way.</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Thank you. A member of the BVM team will review your enquiry and respond within 1 business day.
                      We look forward to the conversation.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">Your name</Label>
                      <Input
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="e.g. Ama Boateng"
                        required
                        maxLength={100}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">Organisation</Label>
                      <Input
                        value={form.organisation}
                        onChange={(e) => update("organisation", e.target.value)}
                        placeholder="Company or business name"
                        maxLength={150}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">Email address</Label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@yourbusiness.com"
                        required
                        maxLength={255}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">Phone (optional)</Label>
                      <Input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+233 ..."
                        maxLength={40}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">What are you reaching out about?</Label>
                    <Select value={form.reason} onValueChange={(v) => update("reason", v)}>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        {reasons.map((r) => (
                          <SelectItem key={r} value={r}>
                            {r}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Your message</Label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us about your business and what you're hoping to achieve. The more specific you are, the better we can help."
                      rows={5}
                      maxLength={2000}
                      required
                    />
                  </div>

                  <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? "Sending your message..." : "Send message"}
                    <ArrowRight size={16} />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center pt-1">
                    Your information is kept strictly confidential and used only to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>

            {/* INFO COLUMN */}
            <div className="space-y-4">
              <div className="rounded-2xl bg-card border border-border border-l-2 border-l-secondary p-6">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Direct contact
                </p>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1.5">BVM Digital, Services</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For website design, SEO and PEO, and AI consulting enquiries, email us directly at{" "}
                  <a href={`mailto:${BVM_EMAIL}`} className="text-secondary font-medium hover:underline">
                    {BVM_EMAIL}
                  </a>{" "}
                  or use the form.
                </p>
              </div>

              <div className="rounded-2xl bg-card border border-border border-l-2 border-l-secondary p-6">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Flagship product
                </p>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1.5">
                  AscendSME, Platform Support
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For AscendSME sign-up, platform support, or a product demonstration, visit{" "}
                  <a
                    href="https://ascendsme.africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-medium hover:underline"
                  >
                    ascendsme.africa
                  </a>{" "}
                  or email{" "}
                  <a href={`mailto:${ASCENDSME_EMAIL}`} className="text-secondary font-medium hover:underline">
                    {ASCENDSME_EMAIL}
                  </a>
                  .
                </p>
              </div>

              <div className="rounded-2xl bg-card border border-border border-l-2 border-l-primary p-6">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2 flex items-center gap-1.5">
                  <MapPin size={12} /> Location
                </p>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1.5">{ORG_ADDRESS_FULL}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bold Vision MultiTech is headquartered here. We serve clients across Ghana and the broader African
                  continent. Phone:{" "}
                  <a href={`tel:${BVM_PHONE_E164}`} className="text-secondary font-medium hover:underline">
                    {BVM_PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </div>

              <div className="rounded-2xl bg-card border border-border p-6">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Find us on social media
                </p>
                <div className="space-y-2.5">
                  {channels.map(({ name, handle, Icon, tint, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group rounded-lg p-1.5 -mx-1.5 hover:bg-muted/40 transition-colors"
                    >
                      <div className={`w-9 h-9 rounded-lg ${tint} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={16} />
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {name}
                        </span>
                        <span className="text-xs text-muted-foreground">{handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border my-16" />

          <div className="mb-8">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
              Other ways to connect
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 tracking-tight">
              Not sure which route is right? Start here.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <RouteCard
              tag="BVM Digital services"
              tagColor="text-secondary"
              borderColor="border-t-secondary"
              title="Website, SEO, PEO, or AI consulting"
              description="Ready to grow your digital presence or integrate AI into your business? Let's scope your project together."
              link="/bvm-digital"
              linkText="Start the conversation"
              linkColor="text-secondary"
            />
            <RouteCard
              tag="AscendSME"
              tagColor="text-primary"
              borderColor="border-t-primary"
              title="Business management platform for SMEs"
              description="Manage your entire business from one place. Invoicing, inventory, CRM, finance, HRM, and your Sustainability Score."
              link="https://ascendsme.africa"
              linkText="Visit AscendSME"
              linkColor="text-primary"
              external
            />
            <RouteCard
              tag="Partnerships"
              tagColor="text-secondary"
              borderColor="border-t-secondary"
              title="Technology, referral, or institutional partners"
              description="Building something significant alongside BVM? We're selective, and the right partnerships are worth every conversation."
              link="/partnerships"
              linkText="Explore partnerships"
              linkColor="text-secondary"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
