import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StackedExperience } from "@/components/StackedExperience";
import { Pricing } from "@/components/ui/single-pricing-card-1";
import { FaqSection } from "@/components/FaqSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8]">
      {/* 1. Minimalist Luxury Floating Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section with Before / After Interactive Slide */}
        <HeroSection />

        {/* 3. Stacking Cards Editorial Experience (Scroll Deck Layering Effect)
            - Card 01: Popular Virtual Fittings (Left: Panoramic Stage & Marquee, Right: Narrative)
            - Card 02: Cross-App Floating Widget (Left: Narrative & Store Info, Right: Phone Mockup)
            - Card 03: Modular 3-Slot Layering & Textile Physics (Left: Visual Slots, Right: Methodology)
            - Card 04: Universal Brand Compatibility & Return Elimination (Left: Stylist Reviews, Right: Category Matrix)
        */}
        <StackedExperience />

        {/* 4. Atelier Membership & Pricing (single-pricing-card-1 with BorderTrail) */}
        <Pricing />

        {/* 5. Frequently Asked Questions (Atelier Client Care) */}
        <FaqSection />

        {/* 6. VIP Atelier Circle Newsletter */}
        <NewsletterSection />
      </main>

      {/* 7. Luxury Conversion Footer with Halftone Wordmark "ALLTRYON." */}
      <Footer />
    </div>
  );
}
