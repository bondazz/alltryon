"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const instagramShots = [
  { id: "1", tag: "RUNWAY 01", title: "Eveningwear Column", image: "/assets/style_eveningwear.png" },
  { id: "2", tag: "ATELIER 02", title: "Sculpted Suiting", image: "/assets/style_tailoring.png" },
  { id: "3", tag: "LOOKBOOK 03", title: "Fluid Gala Silhouette", image: "/assets/cat_after_dark.png" },
  { id: "4", tag: "BACKSTAGE 04", title: "Virgin Wool Bouclé", image: "/assets/style_knitwear.png" },
  { id: "5", tag: "FITTING 05", title: "Tailored Linen Blazer", image: "/assets/cat_soft_tailoring.png" },
];

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAFAF8] border-t border-black/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-neutral-500 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]" />
              <span>Backstage & Runways</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight leading-[1.08]">
              Check Our Instagram
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/10 text-xs font-semibold tracking-wider uppercase text-neutral-900 hover:bg-[#111111] hover:text-white transition-all shadow-xs group"
          >
            <InstagramIcon className="w-4 h-4 text-neutral-900 group-hover:text-white transition-colors" />
            <span>@alltryon.official</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* 5-Column Editorial Runway Filmstrip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6 max-w-7xl mx-auto">
        {instagramShots.map((shot) => (
          <div
            key={shot.id}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100 group cursor-pointer border border-black/8 shadow-sm"
          >
            <Image
              src={shot.image}
              alt={shot.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
              <div className="self-end w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <InstagramIcon className="w-4 h-4 text-white" />
              </div>

              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#C6FF00]">
                  {shot.tag}
                </div>
                <div className="font-serif text-base font-medium mt-0.5">
                  {shot.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
