"use client";

import React from "react";
import { Camera, Layers, Sparkles, CheckCircle2 } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Establish Your Real Silhouette",
      subtitle: "Biometric Preservation & Studio Guidance",
      desc: "Capture a photo with our intelligent posture guide, import from your gallery, or select a calibrated studio silhouette. Facial proportions, skin undertones, and hair structure remain 100% untouched.",
      icon: Camera,
      spec: "AES-256 Vault Storage",
      detail: "Zero warping • True proportions",
    },
    {
      num: "02",
      title: "Drop Into Modular Styling Slots",
      subtitle: "Multi-Garment Layering Physics",
      desc: "Effortlessly assign apparel pieces into Slot 1 (Tops & Gowns), Slot 2 (Pants & Skirts), and Slot 3 (Tailored Outerwear). Test layered combinations directly from Zara, Trendyol, or boutique snapshots.",
      icon: Layers,
      spec: "3-Slot Combinatorial Engine",
      detail: "Smart collar & lapel nesting",
    },
    {
      num: "03",
      title: "Sub-Millimeter Neural Drape",
      subtitle: "Volumetric Seam & Textile Synthesis",
      desc: "alltryon calculates fabric elasticity, weave tension, seam drape, and ambient studio light reflections. Inspect the fit with fluid pinch-to-zoom in full 4K ultra-definition.",
      icon: Sparkles,
      spec: "Neural Vision 2.5 Inference",
      detail: "0.8s real-time synthesis",
    },
  ];

  return (
    <section id="how-it-works" className="py-28 sm:py-36 bg-[#FAFAF8] relative border-t border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-neutral-500 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span>Atelier Methodology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#111111] leading-[1.1]">
            Simple, refined and <span className="italic font-light">flawlessly accurate</span> in 3 steps.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed font-normal">
            No cartoonish filters or awkward 3D avatars. Studio-grade virtual fitting room powered by cutting-edge neural synthesis, right in your pocket.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-[32px] p-8 sm:p-9 border border-black/8 hover:border-black/20 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Number and Spec Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-neutral-300 group-hover:text-[#111111] transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600 px-3 py-1 rounded-full bg-[#FAFAF8] border border-black/5">
                      {step.spec}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-2xl bg-[#0F1822] text-white flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-5 h-5 text-[#C6FF00]" />
                  </div>

                  {/* Titles */}
                  <h3 className="font-serif text-2xl font-medium text-[#111111] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C6FF00] bg-[#0F1822] inline-block px-2.5 py-0.5 rounded-md mb-4">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Verification Footer */}
                <div className="pt-6 border-t border-black/5 mt-8 flex items-center justify-between text-xs text-neutral-500 font-medium">
                  <div className="flex items-center gap-1.5 text-neutral-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{step.detail}</span>
                  </div>
                  <span className="text-[11px] text-neutral-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
