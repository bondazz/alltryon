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
    <header className="absolute top-0 left-0 right-0 z-50 w-full pt-5 px-4 sm:px-8">
      {/* =========================================================================
          DESKTOP NAVBAR:
          - Logo is pinned DEAD CENTER (left-1/2 -translate-x-1/2) exactly on the 50% split!
          - Left Menu and Right Menu sit on the exact same horizontal height & baseline!
          - Right Menu features bright white corner Plus crosses for the dark background!
         ========================================================================= */}
      <div className="hidden lg:block relative w-full max-w-7xl mx-auto h-11">
        {/* Module 1: Left Menu Card (on Ivory side) */}
        <div className="absolute left-0 top-0 h-11 bg-background/95 backdrop-blur-md border border-border px-5 shadow-2xs flex items-center gap-6">
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

        {/* Module 2: Center Brand Logo Box (DEAD CENTER ON 50% SPLIT LINE) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-11 bg-background/95 backdrop-blur-md border border-border px-4 shadow-2xs flex items-center justify-center z-20">
          <PlusIcon className="absolute -top-2.5 -left-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -top-2.5 -right-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -bottom-2.5 -left-2.5 size-4 text-foreground/50" />
          <PlusIcon className="absolute -bottom-2.5 -right-2.5 size-4 text-foreground/50" />

          <a href="#" className="flex items-center justify-center h-full select-none" aria-label="alltryon home">
            <Image
              src="/assets/alltryon_brand_logo.png"
              alt="alltryon."
              width={180}
              height={45}
              className="h-8 w-auto object-contain transition-none pointer-events-auto"
              priority
            />
            <span className="sr-only">alltryon.</span>
          </a>
        </div>

        {/* Module 3: Right Menu Card (on Dark Midnight side - WHITE PLUS CROSSES) */}
        <div className="absolute right-0 top-0 h-11 bg-background/95 backdrop-blur-md border border-border px-5 shadow-2xs flex items-center gap-5">
          {/* White Plus Crosses for crisp visibility against dark background */}
          <PlusIcon className="absolute -top-2.5 -left-2.5 size-4 text-white drop-shadow" />
          <PlusIcon className="absolute -top-2.5 -right-2.5 size-4 text-white drop-shadow" />
          <PlusIcon className="absolute -bottom-2.5 -left-2.5 size-4 text-white drop-shadow" />
          <PlusIcon className="absolute -bottom-2.5 -right-2.5 size-4 text-white drop-shadow" />

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

          <Button size="sm" className="h-7 px-3.5 text-xs font-mono uppercase tracking-wider ml-1" asChild>
            <a href="#pricing" className="flex items-center gap-1.5">
              <span>Plans</span>
              <ArrowUpRight className="size-3" />
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
            <a href="#pricing">Plans</a>
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
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                View Pricing Plans
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
