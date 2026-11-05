"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#fittings", label: "Virtual Fittings" },
    { href: "#floating-widget", label: "Floating Widget" },
    { href: "#how-it-works", label: "3-Slot Physics" },
    { href: "#compatibility", label: "Compatibility" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full pt-4 px-4 sm:px-8">
      {/* =========================================================================
          DESKTOP NAVBAR: 3 ARCHITECTURAL BLUEPRINT MODULES WITH PLUS CROSSES
         ========================================================================= */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto gap-4">
        {/* Module 1: Left Menu Card */}
        <div className="relative bg-background/90 backdrop-blur-md border border-border px-5 py-2.5 shadow-2xs flex items-center gap-6">
          <PlusIcon className="absolute -top-2.5 -left-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -top-2.5 -right-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -bottom-2.5 -left-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -bottom-2.5 -right-2.5 size-4 text-foreground/50" />

          <a
            href="#fittings"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Virtual Fittings
          </a>
          <span className="text-border">/</span>
          <a
            href="#floating-widget"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <span>Floating Widget</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </a>
          <span className="text-border">/</span>
          <a
            href="#how-it-works"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            3-Slot Physics
          </a>
        </div>

        {/* Module 2: Center Brand Logo Box (No zoom, absolute architectural stability) */}
        <div className="relative bg-background/95 backdrop-blur-md border border-border px-6 py-2 shadow-2xs flex items-center justify-center">
          <PlusIcon className="absolute -top-2.5 -left-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -top-2.5 -right-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -bottom-2.5 -left-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -bottom-2.5 -right-2.5 size-4 text-foreground/50" />

          <a href="#" className="flex items-center justify-center select-none" aria-label="alltryon home">
            <Image
              src="/assets/alltryon_brand_logo.png"
              alt="alltryon."
              width={160}
              height={40}
              className="h-8 lg:h-9 w-auto object-contain transition-none pointer-events-auto"
              priority
            />
            <span className="sr-only">alltryon.</span>
          </a>
        </div>

        {/* Module 3: Right Menu Card + App Download Action */}
        <div className="relative bg-background/90 backdrop-blur-md border border-border px-5 py-2 shadow-2xs flex items-center gap-5">
          <PlusIcon className="absolute -top-2.5 -left-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -top-2.5 -right-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -bottom-2.5 -left-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -bottom-2.5 -right-2.5 size-4 text-foreground/50" />

          <a
            href="#compatibility"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Stores
          </a>
          <span className="text-border">/</span>
          <a
            href="#pricing"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </a>
          <span className="text-border">/</span>
          <a
            href="#faq"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </a>

          <Button size="sm" className="h-8 px-4 text-xs font-mono uppercase tracking-wider ml-1" asChild>
            <a href="#download" className="flex items-center gap-1.5">
              <span>Get App</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
        </div>
      </div>

      {/* =========================================================================
          MOBILE NAVBAR: COMPACT BLUEPRINT CARD
         ========================================================================= */}
      <div className="lg:hidden relative bg-background/95 backdrop-blur-md border border-border px-4 py-2.5 shadow-sm flex items-center justify-between">
        <PlusIcon className="absolute -top-2 -left-2 size-3.5 text-foreground/40" />
        <PlusIcon className="absolute -top-2 -right-2 size-3.5 text-foreground/40" />
        <PlusIcon className="absolute -bottom-2 -left-2 size-3.5 text-foreground/40" />
        <PlusIcon className="absolute -bottom-2 -right-2 size-3.5 text-foreground/40" />

        <a href="#" className="flex items-center select-none">
          <Image
            src="/assets/alltryon_brand_logo.png"
            alt="alltryon."
            width={130}
            height={32}
            className="h-7 w-auto object-contain transition-none"
            priority
          />
        </a>

        <div className="flex items-center gap-2">
          <Button size="sm" className="h-7 px-3 text-[11px] font-mono uppercase tracking-wider" asChild>
            <a href="#download">Get App</a>
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-foreground hover:bg-muted rounded"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden relative mt-2 bg-background border border-border p-4 shadow-xl space-y-3">
          <PlusIcon className="absolute -top-2 -left-2 size-3.5 text-foreground/40" />
          <PlusIcon className="absolute -top-2 -right-2 size-3.5 text-foreground/40" />
          <PlusIcon className="absolute -bottom-2 -left-2 size-3.5 text-foreground/40" />
          <PlusIcon className="absolute -bottom-2 -right-2 size-3.5 text-foreground/40" />

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-border">
            <Button className="w-full text-xs font-mono uppercase tracking-wider" asChild>
              <a href="#download" onClick={() => setMobileMenuOpen(false)}>
                Download alltryon App
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
