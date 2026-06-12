'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "BVM Digital", path: "/bvm-digital" },
    { name: "BVM Technologies", path: "/bvm-technologies" },
    { name: "BVM Academy", path: "/bvm-academy" },
    { name: "Careers", path: "/careers" },
  ];

  const productLinks = [
    { name: "AI Social Media Manager", path: "/products/ai-social-media-manager" },
    { name: "WhatsApp Customer Service Bot", path: "/products/whatsapp-bot" },
    { name: "Business Brain", path: "/products/business-brain" },
    { name: "TrustShield", path: "/products/trustshield" },
    { name: "BVM MCP Server", path: "/bvm-mcp" },
  ];

  const isActive = (path: string) => pathname === path;
  const isCompanyActive = companyLinks.some((link) => isActive(link.path));
  const isProductsActive = productLinks.some((link) => isActive(link.path)) || pathname?.startsWith("/products");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCompanyDropdownOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-gradient-orange">BVM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            <Link
              href="/ascendsme"
              className={`text-sm font-medium transition-colors ${
                isActive("/ascendsme") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              AscendSME
            </Link>

            {/* Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isProductsActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-lg py-2 z-50">
                  {productLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setProductsDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(link.path)
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Our Company Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isCompanyActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Our Company
                <ChevronDown className={`w-4 h-4 transition-transform ${companyDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {companyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-lg py-2 z-50">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setCompanyDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(link.path)
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/partnerships"
              className={`text-sm font-medium transition-colors ${
                isActive("/partnerships") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Partnerships
            </Link>

            <Link
              href="/pulse"
              className={`text-sm font-medium transition-colors ${
                pathname?.startsWith("/pulse") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              The Pulse
            </Link>

            <Link
              href="/knowledgebase"
              className={`text-sm font-medium transition-colors ${
                isActive("/knowledgebase") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Knowledgebase
            </Link>
          </div>

          <div className="hidden md:block">
            <Button variant="default" size="default" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            <Link
              href="/ascendsme"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium transition-colors ${
                isActive("/ascendsme") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              AscendSME
            </Link>

            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className={`flex items-center justify-between w-full text-sm font-medium transition-colors ${
                  isProductsActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileProductsOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {productLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-medium transition-colors ${
                        isActive(link.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className={`flex items-center justify-between w-full text-sm font-medium transition-colors ${
                  isCompanyActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Our Company
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCompanyOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileCompanyOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-medium transition-colors ${
                        isActive(link.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/partnerships"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium transition-colors ${
                isActive("/partnerships") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Partnerships
            </Link>

            <Link
              href="/pulse"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium transition-colors ${
                pathname?.startsWith("/pulse") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              The Pulse
            </Link>

            <Link
              href="/knowledgebase"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium transition-colors ${
                isActive("/knowledgebase") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Knowledgebase
            </Link>

            <Button variant="default" size="default" asChild>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
