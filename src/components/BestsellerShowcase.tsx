"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, Camera, Layers, Zap } from "lucide-react";

interface VirtualFittingItem {
  id: string;
  sourceStore: string;
  garmentName: string;
  category: string;
  material: string;
  fidelity: string;
  image: string;
}

const fittingItems: VirtualFittingItem[] = [
  {
    id: "1",
    sourceStore: "Fitted from Zara",
    garmentName: "Double-Breasted Silk Blazer",
    category: "Outerwear Slot",
    material: "100% Silk Crepe Drape",
    fidelity: "99.4% Accurate",
    image: "/assets/garment_blazer.png",
  },
  {
    id: "2",
    sourceStore: "Fitted from Trendyol",
    garmentName: "Structured Leather Tote",
    category: "Accessory Slot",
    material: "Natural Contour Mapping",
    fidelity: "99.1% Accurate",
    image: "/assets/floating_garment_card.png",
  },
  {
    id: "3",
    sourceStore: "Fitted from Farfetch",
    garmentName: "Sculpted Evening Gown",
    category: "Gala Silhouette",
    material: "Fluid Georgette Physics",
    fidelity: "99.6% Accurate",
    image: "/assets/garment_dress.png",
  },
  {
    id: "4",
    sourceStore: "Fitted from Store Photo",
    garmentName: "Minimalist Poplin Shirt",
    category: "Shirting Slot",
    material: "Crisp Collar Structuring",
    fidelity: "99.3% Accurate",
    image: "/assets/garment_shirt.png",
  },
];

const categoryTabs = [
  "ALL VIRTUAL FITTINGS",
  "EVENING & GALA GOWNS",
  "OUTERWEAR & COATS",
  "CASUAL & SHIRTING",
];

export const BestsellerShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="fittings"
      aria-labelledby="fittings-heading"
      className="relative py-28 sm:py-36 bg-[#FFFFFF] overflow-hidden border-t border-black/8"
    >
      {/* =========================================================================
          BACKGROUND ANIMATED MARQUEE: SMOOTH RIGHT-TO-LEFT HORIZONTAL TICKER
          Positioned strictly in the background (z-0) behind the transparent stage!
         ========================================================================= */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="animate-marquee-rtl flex items-center whitespace-nowrap opacity-60">
          <span className="font-serif text-[15vw] sm:text-[13vw] font-bold text-neutral-100 leading-none tracking-widest px-8">
            VIRTUAL TRY-ON • ALLTRYON AI ATELIER • INSTANT FITTING • DIGITAL COUTURE • REAL SILHOUETTES • ZERO RETURNS •
          </span>
          <span className="font-serif text-[15vw] sm:text-[13vw] font-bold text-neutral-100 leading-none tracking-widest px-8">
            VIRTUAL TRY-ON • ALLTRYON AI ATELIER • INSTANT FITTING • DIGITAL COUTURE • REAL SILHOUETTES • ZERO RETURNS •
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            EDITORIAL SECTION HEADER (HIGH SEO PERFORMANCE)
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-neutral-500 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]" />
            <span>Multi-Brand AI Simulation • Real Silhouettes</span>
          </div>

          <h2
            id="fittings-heading"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight leading-[1.1]"
          >
            Popular Virtual Fittings
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
            From physical boutique mannequins to online catalog lookbooks: see how alltryon instantly captures any garment and computes true volumetric drape on authentic user portraits with sub-millimeter precision.
          </p>

          {/* Fitting Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categoryTabs.map((tab, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                  activeTab === idx
                    ? "bg-[#111111] text-white shadow-xs"
                    : "bg-[#FAFAF8] text-neutral-600 hover:text-black hover:bg-neutral-100 border border-black/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            CENTRAL TRANSPARENT SHOWCASE STAGE
            - Seamlessly blended directly into the background (NO bounding box / NO card / NO border)
            - ZERO zoom on hover (calm, stable editorial presentation)
            - Shows: Phone Capture (Left) -> alltryon Kiosk (Center) -> Emerald Drape (Right)
           ========================================================================= */}
        <div className="relative max-w-5xl mx-auto flex flex-col items-center justify-center my-4 sm:my-8">
          {/* Main Panoramic Image (No wrapper div border or background - completely blended) */}
          <div className="relative w-full aspect-[1024/682] select-none">
            <Image
              src="/assets/virtual_tryon_showcase_stage.webp"
              alt="alltryon AI Virtual Try-On Platform - From in-store boutique kiosk capture to instant neural drape on authentic user silhouette wearing emerald green gala evening gown"
              fill
              priority
              className="object-contain pointer-events-none select-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1024px"
            />
          </div>

          {/* 3 Step Editorial Workflow Markers (Subtly anchored under each stage) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6 px-2 sm:px-4">
            {/* Step 1: In-Store Capture */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAFAF8]/90 backdrop-blur-md border border-black/6">
              <div className="w-9 h-9 rounded-xl bg-[#0F1822] text-white flex items-center justify-center flex-shrink-0">
                <Camera className="w-4 h-4 text-[#C6FF00]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                  Step 01 • Capture
                </div>
                <div className="text-xs font-semibold text-neutral-900 truncate">
                  Snap Boutique or Catalog
                </div>
              </div>
            </div>

            {/* Step 2: Neural Extraction */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAFAF8]/90 backdrop-blur-md border border-black/6">
              <div className="w-9 h-9 rounded-xl bg-[#0F1822] text-white flex items-center justify-center flex-shrink-0">
                <Layers className="w-4 h-4 text-[#C6FF00]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                  Step 02 • Neural Extraction
                </div>
                <div className="text-xs font-semibold text-neutral-900 truncate">
                  alltryon Seam & Texture Engine
                </div>
              </div>
            </div>

            {/* Step 3: Photorealistic Fit */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAFAF8]/90 backdrop-blur-md border border-black/6">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                  Step 03 • Virtual Drape
                </div>
                <div className="text-xs font-semibold text-neutral-900 truncate">
                  99.6% True-to-Life Silk Physics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SUPPORTING MULTI-CATEGORY VIRTUAL FITTING CARDS
            (Demonstrating universal support across outerwear, shirting, and gala gowns)
           ========================================================================= */}
        <div className="mt-14 sm:mt-18 pt-12 border-t border-black/6">
          <div className="text-center mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
              Explore More Multi-Brand Try-On Samples
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {fittingItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAFAF8] p-4 rounded-2xl border border-black/6 flex items-center gap-3.5 transition-colors hover:bg-neutral-100/80"
              >
                <div className="relative w-12 h-12 rounded-xl bg-white overflow-hidden flex-shrink-0 border border-black/5 shadow-2xs">
                  <Image
                    src={item.image}
                    alt={item.garmentName}
                    fill
                    className="object-cover p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-emerald-700">
                    {item.sourceStore}
                  </div>
                  <div className="text-xs font-semibold text-neutral-900 truncate mt-0.5">
                    {item.garmentName}
                  </div>
                  <div className="text-[10px] text-neutral-500 truncate">
                    {item.material}
                  </div>
                  <div className="text-[10px] font-medium text-neutral-800 mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                    <span>{item.fidelity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM CALL TO ACTION & CRAWLER SEO RICH TEXT
           ========================================================================= */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-all shadow-md group"
          >
            <span>Try On Your Own Clothes Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C6FF00]" />
          </a>
        </div>

        {/* Hidden Semantic SEO Microdata for Search Engines */}
        <div className="sr-only">
          <h3>AI Virtual Fitting Room and Clothes Simulation Platform</h3>
          <p>
            alltryon provides instant virtual try-on software for shoppers and retailers.
            Test evening gala gowns, silk blazers, tailored outerwear, denim, and accessories
            from Zara, Trendyol, ASOS, Farfetch, and physical boutiques directly on your authentic portrait.
            Advanced neural vision technology calculates cloth elasticity, light reflections, seam contours,
            and volumetric drape to eliminate sizing mistakes and online shopping returns.
          </p>
        </div>
      </div>
    </section>
  );
};
