'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  BookOpen,
  Building2,
  Layers,
  Globe,
  TrendingUp,
  Cpu,
  Rocket,
  Boxes,
  Handshake,
  HelpCircle,
  ChevronRight,
  Quote,
  MessageCircle,
} from "lucide-react";
import data from "@/data/faqKnowledgebase.json";

type Entry = {
  id: string;
  category_id: string;
  category_label: string;
  featured: boolean;
  question: string;
  answer: string;
};

type Category = {
  id: string;
  label: string;
  count: number;
};

const categoryIcons: Record<string, typeof Building2> = {
  bvm: Building2,
  digital: Layers,
  web: Globe,
  seo: TrendingUp,
  ai: Cpu,
  ascend: Rocket,
  products: Boxes,
  partner: Handshake,
  general: HelpCircle,
};

export default function Knowledgebase() {
  const meta = data.meta as { title: string; description: string; categories: Category[]; total_entries: number };
  const entries = data.entries as Entry[];

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, string[]>>({});

  const qRaw = query.trim();
  const qLower = qRaw.toLowerCase();

  const filtered = useMemo(() => {
    return entries.filter((e) => {
      const matchesCat =
        qLower.length > 0 ? true : activeCategory === "all" || e.category_id === activeCategory;
      const matchesQ =
        !qLower.length ||
        e.question.toLowerCase().includes(qLower) ||
        e.answer.toLowerCase().includes(qLower);
      return matchesCat && matchesQ;
    });
  }, [entries, activeCategory, qLower]);

  const featured = useMemo(() => entries.filter((e) => e.featured), [entries]);

  const grouped = useMemo(() => {
    const map = new Map<string, Entry[]>();
    filtered.forEach((e) => {
      if (!map.has(e.category_id)) map.set(e.category_id, []);
      map.get(e.category_id)!.push(e);
    });
    return map;
  }, [filtered]);

  const openAnswer = (entry: Entry) => {
    setQuery("");
    setActiveCategory((prev) => (prev === "all" || prev === entry.category_id ? prev : entry.category_id));
    setOpenItems((prev) => {
      const current = prev[entry.category_id] ?? [];
      if (current.includes(entry.id)) return prev;
      return { ...prev, [entry.category_id]: [...current, entry.id] };
    });
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(entry.id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">Knowledgebase</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold tracking-wide uppercase">The BVM Knowledgebase</span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                How can we help{" "}
                <span className="text-gradient-orange">you?</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                Find answers about BVM Digital services, AscendSME, our products, partnerships, and how we work. A structured
                source of truth covering Bold Vision MultiTech and every part of the BVM ecosystem: written for business owners
                and structured for AI assistants.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-2xl text-foreground">{meta.total_entries}</span>
                  <span className="text-muted-foreground">structured answers</span>
                </div>
                <div className="w-px h-6 bg-border" />
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-2xl text-foreground">{meta.categories.length}</span>
                  <span className="text-muted-foreground">topic areas</span>
                </div>
                <div className="w-px h-6 bg-border" />
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Indexed for AI assistants</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-foreground/10">
                <Image
                  src="/assets/knowledgebase-hero.jpg"
                  alt="A glowing knowledge graph representing the BVM knowledgebase, structured for AI discoverability"
                  width={1600}
                  height={1024}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-2 border-foreground/10 rounded-3xl p-2 shadow-xl shadow-foreground/[0.04]">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground pointer-events-none" />
                <Input
                  type="search"
                  placeholder="Can't find your answer? Try PEO, AscendSME, or Sustainability Score..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-16 pr-6 h-16 md:h-20 text-base md:text-lg rounded-2xl border-0 bg-transparent shadow-none focus-visible:ring-0"
                  aria-label="Search the knowledgebase"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              <span className="text-xs text-muted-foreground mr-1">Popular:</span>
              {["PEO", "AscendSME", "Sustainability", "SEO", "WhatsApp Bot", "Pricing"].map((t) => (
                <button
                  key={t}
                  onClick={() => setQuery(t)}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-foreground/5 hover:bg-primary hover:text-primary-foreground border border-foreground/10 transition-colors"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {!qRaw && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Start here</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Most asked questions</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">
                  Answers to the questions we receive most often. Tap a card to jump to the full answer below.
                </p>
              </div>
              <Badge variant="outline" className="text-xs">{featured.length} featured</Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {featured.map((e, idx) => (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => openAnswer(e)}
                  className="group text-left relative bg-card border border-border rounded-3xl p-7 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-3 text-[10px] font-medium tracking-wider uppercase">
                        {e.category_label}
                      </Badge>
                      <h3 className="font-heading text-lg font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
                        {e.question}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-3">
                        {e.answer.replace(/\s+/g, " ").trim()}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                        Read full answer
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY FILTER + RESULTS */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                  Browse by topic
                </div>
                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                      activeCategory === "all"
                        ? "bg-foreground text-background shadow-md"
                        : "bg-background hover:bg-card text-foreground border border-border"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4" />
                      All topics
                    </span>
                    <span className={`text-xs ${activeCategory === "all" ? "opacity-70" : "text-muted-foreground"}`}>
                      {entries.length}
                    </span>
                  </button>
                  {meta.categories.map((c) => {
                    const Icon = categoryIcons[c.id] ?? HelpCircle;
                    const active = activeCategory === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setActiveCategory(c.id)}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                          active
                            ? "bg-foreground text-background shadow-md"
                            : "bg-background hover:bg-card text-foreground border border-border"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4" />
                          {c.label}
                        </span>
                        <span className={`text-xs ${active ? "opacity-70" : "text-muted-foreground"}`}>
                          {c.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
                <h2 className="font-heading text-2xl md:text-3xl font-bold">
                  {qRaw
                    ? "Search results"
                    : activeCategory === "all"
                      ? "The full knowledgebase"
                      : meta.categories.find((c) => c.id === activeCategory)?.label}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filtered.length} {filtered.length === 1 ? "answer" : "answers"}
                  {qRaw && <> for &ldquo;{qRaw}&rdquo;</>}
                </span>
              </div>

              {filtered.length === 0 ? (
                <div className="bg-background rounded-3xl border border-border p-12 text-center">
                  <Search className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">No matches yet</h3>
                  <p className="text-muted-foreground mb-6">Try a different search, or browse the full knowledgebase.</p>
                  <Button variant="outline" onClick={() => { setQuery(""); setActiveCategory("all"); }}>
                    Reset filters
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {Array.from(grouped.entries()).map(([catId, items]) => {
                    const cat = meta.categories.find((c) => c.id === catId);
                    const Icon = categoryIcons[catId] ?? HelpCircle;
                    return (
                      <div key={catId} className="bg-background rounded-3xl border border-border overflow-hidden">
                        <div className="flex items-center gap-3 px-6 py-5 bg-gradient-to-r from-foreground/[0.03] to-transparent border-b border-border">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-lg leading-none">{cat?.label}</h3>
                            <p className="text-xs text-muted-foreground mt-1">{items.length} answers</p>
                          </div>
                        </div>

                        <Accordion
                          type="multiple"
                          className="px-6"
                          value={openItems[catId] ?? []}
                          onValueChange={(val) => setOpenItems((prev) => ({ ...prev, [catId]: val as string[] }))}
                        >
                          {items.map((e) => (
                            <AccordionItem key={e.id} value={e.id} id={e.id} className="border-border scroll-mt-24">
                              <AccordionTrigger className="text-left font-heading font-semibold text-base hover:no-underline py-5">
                                <span className="pr-4">{e.question}</span>
                              </AccordionTrigger>
                              <AccordionContent className="pb-6">
                                <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                                  {e.answer}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-10 flex flex-col sm:flex-row gap-6 items-start">
            <div className="shrink-0 w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center">
              <MessageCircle className="w-7 h-7" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold mb-2">Still can&apos;t find your answer?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team is ready to help. Visit{" "}
                <a href="https://b-vm.com" className="text-primary font-medium underline-offset-4 hover:underline">
                  b-vm.com
                </a>{" "}
                to get in touch, or reach out on LinkedIn, Instagram, or WhatsApp. We respond to all enquiries within 5
                business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-10 h-10 text-primary mx-auto mb-6" />
            <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              Prompt Engine Optimization
            </div>
            <p className="font-heading text-2xl md:text-4xl font-bold leading-tight mb-6">
              The brands that show up in AI answers will own the next decade.
              We are making sure BVM is one of them, and we can do the same for you.
            </p>
            <p className="text-muted-foreground">
              Every entry on this page is structured for human readers and AI assistants alike. This is the same
              system AI models like ChatGPT, Gemini, Claude, and Perplexity read when someone asks about BVM.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground text-background relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">Build your own</div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Want a knowledgebase like this for your brand?
            </h2>
            <p className="text-lg text-background/80 mb-10 leading-relaxed">
              The BVM FAQs and Knowledgebase Builder generates a fully branded, AI-ready knowledgebase for your
              business. Get cited by AI assistants. Ranked by search engines. Trusted by customers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/products/faqs-knowledgebase">Explore the Builder</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent border-background text-background hover:bg-background hover:text-foreground">
                <Link href="/contact">Talk to BVM</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
