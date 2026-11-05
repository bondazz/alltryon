"use client";

import React from "react";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";
import { ShieldCheckIcon, PlusIcon, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderTrail } from "@/components/ui/border-trail";
import { cn } from "@/lib/utils";

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#0c0c0b] text-white overflow-hidden">
      {/* =========================================================================
          CONVERSION BLUEPRINT SECTION: "LOOKS BETTER, CHOSEN SMARTER."
          Clean Atelier Call To Action without duplicate store badges or technical jargon
         ========================================================================= */}
      <div className="relative py-24 sm:py-32 px-4 border-b border-white/10">
        {/* Background 32px grid mask */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 size-full z-0 opacity-20",
            "bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]",
            "bg-[size:32px_32px]",
            "[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent)]",
          )}
        />

        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center space-y-4 max-w-xl mx-auto"
          >
            <div className="flex justify-center">
              <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-1 font-mono text-xs uppercase tracking-wider text-neutral-300">
                Virtual Fitting Atelier
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
              Looks better, <br />
              <span className="text-neutral-400 font-normal">chosen smarter.</span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Experience next-generation neural fashion drape on your authentic silhouette. Zero guesswork, zero returns.
            </p>
          </motion.div>

          {/* Blueprint Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-3xl space-y-2"
          >
            <div className="grid md:grid-cols-2 bg-[#141413] relative border border-white/15 p-4 shadow-xl">
              <PlusIcon className="absolute -top-3 -left-3 size-5.5 text-neutral-400" />
              <PlusIcon className="absolute -top-3 -right-3 size-5.5 text-neutral-400" />
              <PlusIcon className="absolute -bottom-3 -left-3 size-5.5 text-neutral-400" />
              <PlusIcon className="absolute -right-3 -bottom-3 size-5.5 text-neutral-400" />

              {/* Left Column: Platform Guarantees */}
              <div className="w-full px-4 pt-5 pb-4 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="leading-none font-semibold text-white">Zero Sizing Returns</h3>
                    <Badge variant="secondary" className="bg-white/10 text-neutral-200">100% Free Start</Badge>
                  </div>
                  <p className="text-neutral-400 text-sm">Authentic digital draping in high fidelity.</p>
                </div>

                <div className="space-y-3 my-6 font-mono text-xs">
                  <div className="flex items-start gap-2.5 text-neutral-200">
                    <CheckCircle2 className="size-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Works over Zara, Trendyol, ASOS & Instagram</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-neutral-200">
                    <CheckCircle2 className="size-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Private silhouette processing & instant deletion</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-neutral-200">
                    <CheckCircle2 className="size-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Modular 3-slot outfit layering system</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-neutral-400 flex items-end gap-0.5 text-xl font-mono">
                    <span className="text-white -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl">
                      50
                    </span>
                    <span>&nbsp;free fittings included</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Atelier Action Card with BorderTrail */}
              <div className="relative w-full rounded-lg border border-white/15 bg-black/40 px-4 pt-5 pb-4 flex flex-col justify-between">
                <BorderTrail
                  style={{
                    boxShadow:
                      "0px 0px 60px 30px rgb(255 255 255 / 40%), 0 0 100px 60px rgb(255 255 255 / 20%)",
                  }}
                  size={100}
                />

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="leading-none font-semibold text-white">Atelier Studio</h3>
                    <Badge className="bg-white text-black font-mono">Instant Fit</Badge>
                  </div>
                  <p className="text-neutral-400 text-sm">Start generating realistic virtual fittings.</p>
                </div>

                <div className="my-6 space-y-2">
                  <div className="text-neutral-400 text-xs font-mono">
                    <span>Synthesis speed:</span>
                    <span className="text-white font-bold ml-1.5">&lt; 0.8 seconds</span>
                  </div>
                  <div className="text-neutral-400 text-xs font-mono">
                    <span>Fidelity accuracy:</span>
                    <span className="text-emerald-400 font-bold ml-1.5">99.6% drape</span>
                  </div>
                </div>

                <Button className="w-full bg-white hover:bg-neutral-100 text-black font-mono text-xs uppercase tracking-wider" asChild>
                  <a href="#pricing" className="flex items-center justify-center gap-1.5">
                    <span>View Atelier Plans</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-neutral-400 flex items-center justify-center gap-x-2 text-sm pt-2">
              <ShieldCheckIcon className="size-4 text-emerald-400" />
              <span>100% Private Silhouette Security • No public model training</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE HALFTONE CANVAS WORDMARK FOOTER: ALLTRYON.
         ========================================================================= */}
      <HalftoneWordmarkFooter
        wordmark="ALLTRYON."
        label="ALLTRYON ATELIER"
        meta="©2026 · AI Virtual Fitting Platform"
        preset="night"
        height="560px"
        crop={0.16}
        dotGap={5}
        radius={90}
        grain={0.35}
        columns={[
          {
            title: "Atelier",
            links: [
              { label: "Virtual Fittings", href: "#fittings" },
              { label: "Floating Widget", href: "#floating-widget" },
              { label: "Modular Layering", href: "#how-it-works" },
              { label: "Pricing & Plans", href: "#pricing" },
            ],
          },
          {
            title: "Stores",
            links: [
              { label: "Zara Lookbooks", href: "#compatibility" },
              { label: "Trendyol Catalog", href: "#compatibility" },
              { label: "Farfetch & ASOS", href: "#compatibility" },
              { label: "Boutique Snaps", href: "#compatibility" },
            ],
          },
          {
            title: "Security & Legal",
            links: [
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Security Architecture", href: "#" },
              { label: "Atelier Concierge", href: "mailto:support@alltryon.com" },
            ],
          },
        ]}
      />
    </footer>
  );
};
