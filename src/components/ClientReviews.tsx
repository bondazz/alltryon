"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";

interface Review {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  quote: string;
  verifiedFittings: number;
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Elena Rostova",
    role: "Fashion Director & Stylist",
    city: "Milan",
    avatar: "/assets/user_avatar_editorial.png",
    quote:
      "Before ordering from Zara or Farfetch, I always run the pieces through alltryon. Seeing the shoulder drop, drape, and silhouette on my authentic body shape completely eliminated returns.",
    verifiedFittings: 64,
  },
  {
    id: "2",
    name: "Marcus Vance",
    role: "Creative Product Lead",
    city: "London",
    avatar: "/assets/editorial_avatar.png",
    quote:
      "The Floating Try-On widget on Android is sheer magic. Browsing any catalog, tapping the overlay automatically fits the blazer on my model portrait. Sizing doubts are gone.",
    verifiedFittings: 48,
  },
  {
    id: "3",
    name: "Sophia Chen",
    role: "Haute-Couture Designer",
    city: "Paris",
    avatar: "/assets/model_portrait.png",
    quote:
      "The micro-texture fidelity and seam drape are unbelievable. It doesn't look like an AI sticker; it respects true fabric physics, lighting conditions, and body depth contours.",
    verifiedFittings: 82,
  },
];

export const ClientReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-28 sm:py-36 bg-[#FFFFFF] border-t border-black/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-neutral-500 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]" />
            <span>Client Perspectives</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight leading-[1.08]">
            Our Clients
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-4 font-normal leading-relaxed">
            Leading stylists, designers, and discerning shoppers across global capitals who rely on alltryon for flawless fitting decisions.
          </p>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-[#FAFAF8] p-8 sm:p-9 rounded-[32px] border border-black/8 hover:border-black/20 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-neutral-900 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-300 group-hover:text-neutral-500 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal mb-8">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              {/* Client Info & Verification Tag */}
              <div className="flex items-center justify-between pt-6 border-t border-black/5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-200 relative flex-shrink-0 shadow-xs">
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-serif text-lg font-medium text-[#111111] leading-tight">
                      {r.name}
                    </div>
                    <div className="text-xs text-neutral-500 mt-0.5">
                      {r.role} • {r.city}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{r.verifiedFittings} Fits</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
