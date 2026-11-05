"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "./StoreBadges";
import { ArrowRight, Sparkles, Zap, Smartphone, CheckCircle2 } from "lucide-react";

export const DealOfTheMonth: React.FC = () => {
  // Live ticking countdown timer for early adopter beta access
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 21,
    minutes: 30,
    seconds: 29,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section id="floating-widget" className="py-24 sm:py-32 bg-[#FAFAF8] relative overflow-hidden border-t border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Feature Highlights & Floating Widget Explanation */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/8 text-[11px] font-semibold text-neutral-800 uppercase tracking-widest mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C6FF00]" />
              <span>Instant Cross-App Try-On • Android & iOS</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#111111] tracking-tight leading-[1.08] mb-6">
              Shop on Zara or Trendyol. <br />
              <span className="italic font-light">Fit with one tap.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mb-8">
              We don&apos;t sell clothes — we help you fit everything. When browsing any product on Trendyol, Zara, or Instagram, tap the <strong className="text-neutral-900 font-semibold">alltryon Floating Widget</strong> to instantly extract the garment and simulate it on your own silhouette.
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-700 leading-snug">Works over any shopping app without leaving the page</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-700 leading-snug">Automatic background removal & fabric texture extraction</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-700 leading-snug">Multi-garment layering (combine pants + coat simultaneously)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-700 leading-snug">50 complimentary virtual try-ons on initial install</span>
              </div>
            </div>

            {/* Countdown Timer for Early Adopter Batch */}
            <div className="mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#C6FF00]" />
                <span>Next Free Beta Credits Allocation Closes In:</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                {[
                  { label: "DAYS", value: formatNumber(timeLeft.days) },
                  { label: "HOURS", value: formatNumber(timeLeft.hours) },
                  { label: "MINS", value: formatNumber(timeLeft.minutes) },
                  { label: "SECS", value: formatNumber(timeLeft.seconds) },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-16 sm:w-20 py-3 rounded-2xl bg-white border border-black/8 shadow-sm text-center flex flex-col items-center justify-center"
                  >
                    <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#111111] leading-none mb-1">
                      {item.value}
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Store Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>

          {/* Right Column: Visual Device Simulation with Floating Overlay Button */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[360px] aspect-[9/18] rounded-[44px] overflow-hidden shadow-2xl bg-[#111111] p-3 border-4 border-neutral-800 group">
              {/* Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30" />

              {/* App Screen Showcase */}
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-white">
                <Image
                  src="/assets/app_mockup.png"
                  alt="alltryon Mobile Fitting Studio & Floating Overlay"
                  fill
                  className="object-cover object-top"
                />

                {/* Simulated Floating Widget Pill (The Iconic Try-On Button) */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 px-3 py-2 rounded-full bg-[#111111]/90 backdrop-blur-md border border-[#C6FF00]/50 shadow-2xl animate-bounce">
                  <span className="w-2 h-2 rounded-full bg-[#C6FF00]" />
                  <span className="text-[10px] font-bold text-white tracking-wider uppercase">Try On</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
