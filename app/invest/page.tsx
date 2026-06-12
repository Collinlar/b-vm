import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-16 text-center container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-muted-foreground mb-8">This page is in development.</p>
        <Link href="/" className="text-primary hover:underline">Back to BVM</Link>
      </main>
      <Footer />
    </div>
  );
}
