import Link from "next/link";
import {
  COMPANY_LINKEDIN_URL,
  BVM_DIGITAL_FACEBOOK_URL,
  BVM_DIGITAL_INSTAGRAM_URL,
  BVM_DIGITAL_URL,
  BVM_TECHNOLOGIES_URL,
} from "@/lib/siteCopy";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-gradient-orange">BVM</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              We build Tools and Intelligence for the African Business.
            </p>
            <p className="text-background/50 text-xs mt-3 leading-relaxed">
              A seven-entity technology group: BVM Digital, BVM Technologies, AscendSME, BVM Academy, TrustShield, BVM MCP Server.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-sm tracking-wide">Company</h3>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className="text-background/70 hover:text-background text-sm transition-colors">About Us</Link>
              <a href={BVM_DIGITAL_URL} target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background text-sm transition-colors">BVM Digital</a>
              <a href={BVM_TECHNOLOGIES_URL} target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background text-sm transition-colors">BVM Technologies</a>
              <Link href="/bvm-academy" className="text-background/70 hover:text-background text-sm transition-colors">BVM Academy</Link>
              <Link href="/partnerships" className="text-background/70 hover:text-background text-sm transition-colors">Partnerships</Link>
              <Link href="/careers" className="text-background/70 hover:text-background text-sm transition-colors">Careers</Link>
              <Link href="/contact" className="text-background/70 hover:text-background text-sm transition-colors">Contact</Link>
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="font-bold mb-4 text-sm tracking-wide">Ecosystem</h3>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://ascendsme.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background text-sm transition-colors"
              >
                AscendSME
              </a>
              <Link href="/products/ai-social-media-manager" className="text-background/70 hover:text-background text-sm transition-colors">AI Social Media Manager</Link>
              <Link href="/products/whatsapp-bot" className="text-background/70 hover:text-background text-sm transition-colors">WhatsApp CS Bot</Link>
              <Link href="/products/business-brain" className="text-background/70 hover:text-background text-sm transition-colors">Business Brain</Link>
              <Link href="/products/trustshield" className="text-background/70 hover:text-background text-sm transition-colors">TrustShield</Link>
              <Link href="/bvm-mcp" className="text-background/70 hover:text-background text-sm transition-colors">BVM MCP Server</Link>
              <Link href="/knowledgebase" className="text-background/70 hover:text-background text-sm transition-colors">Knowledgebase</Link>
            </div>
          </div>

          {/* Legal + Social */}
          <div>
            <h3 className="font-bold mb-4 text-sm tracking-wide">Legal</h3>
            <div className="flex flex-col gap-2.5 mb-6">
              <Link href="/privacy-policy" className="text-background/70 hover:text-background text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-background/70 hover:text-background text-sm transition-colors">Terms of Service</Link>
            </div>
            <div className="flex gap-4">
              <a href={COMPANY_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="Bold Vision MultiTech on LinkedIn">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={BVM_DIGITAL_FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="BVM Digital on Facebook">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={BVM_DIGITAL_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="BVM Digital on Instagram">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-background/50 text-xs">
          <p>&copy; {new Date().getFullYear()} BVM (Bold Vision MultiTech) Ltd. All rights reserved.</p>
          <p>Accra, Ghana · Est. 2016 · b-vm.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
