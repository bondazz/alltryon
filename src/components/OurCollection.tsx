"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

interface CategorySupportItem {
  id: string;
  categoryCode: string;
  title: string;
  storesSupported: string;
  compatiblePieces: string;
  image: string;
}

const categories: CategorySupportItem[] = [
  {
    id: "1",
    categoryCode: "CATEGORY 01",
    title: "Tailored Outerwear & Blazers",
    storesSupported: "Zara • Mango • Massimo Dutti",
    compatiblePieces: "Overcoats, trench coats & suit jackets",
    image: "/assets/cat_soft_tailoring.png",
  },
  {
    id: "2",
    categoryCode: "CATEGORY 02",
    title: "Eveningwear & Gala Gowns",
    storesSupported: "Farfetch • ASOS • Net-a-Porter",
    compatiblePieces: "Column gowns, slip dresses & cocktail wear",
    image: "/assets/cat_after_dark.png",
  },
  {
    id: "3",
    categoryCode: "CATEGORY 03",
    title: "Modern Shirting & Denim",
    storesSupported: "Trendyol • H&M • Levi's",
    compatiblePieces: "Poplin shirts, denim jackets & trousers",
    image: "/assets/cat_modern_classics.png",
  },
  {
    id: "4",
    categoryCode: "CATEGORY 04",
    title: "Sculpted Knitwear & Textures",
    storesSupported: "Boutiques • In-Store Photos",
    compatiblePieces: "Brushed cashmere, wool bouclé & cardigans",
    image: "/assets/style_knitwear.png",
  },
];

export const OurCollection: React.FC = () => {
  return (
    <section id="compatibility" className="py-28 sm:py-36 bg-white border-t border-black/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-neutral-500 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]" />
              <span>Universal Garment Compatibility</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight leading-[1.08]">
              Fit Any Category From Any Store
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md font-normal leading-relaxed">
            We don&apos;t sell apparel. alltryon is your personal digital fitting room: import looks from any online catalog or snap photos in physical dressing rooms.
          </p>
        </div>

        {/* 4-Column Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#F7F7F4] border border-black/8 shadow-sm mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Top Badge: Category Code */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold tracking-wider uppercase text-white border border-white/10">
                  {item.categoryCode}
                </div>

                {/* Top Right: Compatibility Status */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-emerald-700 border border-black/5 shadow-2xs flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>100% Compatible</span>
                </div>

                {/* Hover Reveal Try-On Button */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#download"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/95 backdrop-blur-md text-[#111111] text-xs font-semibold uppercase tracking-wider shadow-lg border border-black/10 hover:bg-[#111111] hover:text-white transition-colors"
                  >
                    <span>Simulate on Your Photo</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#C6FF00]" />
                  </a>
                </div>
              </div>

              {/* Title & Textile Info */}
              <div className="flex items-start justify-between pt-1">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#111111] group-hover:text-neutral-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-emerald-700 mt-1">
                    {item.storesSupported}
                  </div>
                  <p className="text-xs text-neutral-500 mt-0.5 font-normal">
                    {item.compatiblePieces}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-neutral-700 group-hover:bg-[#111111] group-hover:text-white transition-colors flex-shrink-0 ml-2 shadow-2xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
