"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "./StoreBadges";
import { ArrowRight, CheckCircle2, PlusIcon, ShieldCheckIcon } from "lucide-react";
import { BorderTrail } from "@/components/ui/border-trail";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroSection: React.FC = () => {
  // Slider position (percentage 0 to 100). Starts at exactly 50% center
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const stageRef = useRef<HTMLDivElement>(null);

  // Update slider position based on clientX
  const updatePosition = useCallback((clientX: number) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  // Global window mouse & touch listeners for silky-smooth drag
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.clientX);
    };

    const handleWindowMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    const handleWindowTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length === 0) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleWindowTouchEnd = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleWindowMouseMove);
      window.addEventListener("mouseup", handleWindowMouseUp);
      window.addEventListener("touchmove", handleWindowTouchMove, { passive: false });
      window.addEventListener("touchend", handleWindowTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
      window.removeEventListener("touchmove", handleWindowTouchMove);
      window.removeEventListener("touchend", handleWindowTouchEnd);
    };
  }, [isDragging, updatePosition]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    if ("clientX" in e) {
      updatePosition(e.clientX);
    } else if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  return (
    <section className="relative w-full h-[94vh] lg:h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* =========================================================================
          1. EXACT 50/50 SCREEN SPLIT BACKGROUND WITH ARCHITECTURAL GRID
          Left: Pure luxury ivory canvas (#FAFAF8) + 32px blueprint grid
          Right: Deep Couture Midnight Slate (#1B2B3A)
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-1 lg:grid-cols-2 z-0">
        <div className="bg-[#FAFAF8] relative">
          <div
            className={cn(
              "pointer-events-none absolute inset-0 size-full opacity-45",
              "bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]",
              "bg-[size:32px_32px]",
              "[mask-image:radial-gradient(ellipse_at_center,white_20%,transparent)]",
            )}
          />
        </div>
        <div className="bg-[#1B2B3A] relative hidden lg:block">
          <div
            className={cn(
              "pointer-events-none absolute inset-0 size-full opacity-15",
              "bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]",
              "bg-[size:32px_32px]",
              "[mask-image:radial-gradient(ellipse_at_center,white_20%,transparent)]",
            )}
          />
          {/* Subtle vertical center divider line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/10 via-white/30 to-transparent" />
        </div>
      </div>

      {/* =========================================================================
          2. GIANT BACKGROUND WATERMARK: "ALLTRYON." ONLY IN THE RIGHT HEMISPHERE!
         ========================================================================= */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none select-none hidden lg:flex items-center justify-center z-0 overflow-hidden pr-6">
        <span className="font-serif text-[14vw] font-bold text-white/[0.14] tracking-tight leading-none whitespace-nowrap">
          ALLTRYON.
        </span>
      </div>

      {/* =========================================================================
          3. DEAD CENTER: FULL-HEIGHT BEFORE / AFTER SLIDER WITH ARCHITECTURAL CROSSES
         ========================================================================= */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[560px] lg:max-w-[640px] xl:max-w-[700px] h-[82vh] lg:h-[88vh] z-20 flex justify-center items-end pointer-events-none">
        <div
          ref={stageRef}
          className={`relative w-full h-full pointer-events-auto select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {/* =====================================================================
              AFTER LAYER (Right Side of Slider)
              Mutually exclusively clipped to [sliderPosition% to 100%]
             ===================================================================== */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none select-none transition-none"
            style={{
              clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`,
              WebkitClipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`,
            }}
          >
            <Image
              src="/assets/hero_model_transparent_after.webp"
              alt="alltryon Virtual Try-On Simulation - Tailored Linen Blazer"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* =====================================================================
              BEFORE LAYER (Left Side of Slider)
              Mutually exclusively clipped to [0% to sliderPosition%]
             ===================================================================== */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none select-none transition-none"
            style={{
              clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
              WebkitClipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
            }}
          >
            <Image
              src="/assets/hero_model_transparent_before.webp"
              alt="alltryon Original User Silhouette"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* =====================================================================
              VERTICAL DRAGGABLE DIVIDER (ONLY MOVES ON ACTIVE DRAG)
             ===================================================================== */}
          <div
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            className="absolute top-0 bottom-0 z-40 flex items-center justify-center cursor-ew-resize touch-none select-none"
            style={{
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)",
              width: "56px",
            }}
          >
            {/* Crisp Continuous Hairline with Soft Outer Glow */}
            <div className="w-[2px] h-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]" />

            {/* Circular Draggable Button */}
            <div
              className={`absolute w-12 h-12 rounded-full bg-white shadow-xl border-2 border-neutral-900 flex items-center justify-center text-neutral-900 transition-transform ${
                isDragging ? "scale-110 ring-4 ring-neutral-400/30" : "hover:scale-105"
              }`}
            >
              <div className="flex items-center gap-0.5 text-xs font-bold tracking-tighter">
                <span>◂</span>
                <span>▸</span>
              </div>
            </div>
          </div>

          {/* =====================================================================
              REFINED BLUEPRINT CALLOUT PINS (MATCHING SINGLE-PRICING-CARD-1)
             ===================================================================== */}
          {/* Pin 1: Top-Left (Tailored Linen Blazer with 4 Plus Crosses & BorderTrail) */}
          <div className="hidden sm:flex absolute -left-4 lg:-left-10 top-20 z-50 items-center gap-3 bg-background/95 backdrop-blur-xl p-3 border border-border min-w-[220px] pointer-events-auto shadow-sm">
            <PlusIcon className="absolute -top-2.5 -left-2.5 size-4 text-foreground/50" />
            <PlusIcon className="absolute -top-2.5 -right-2.5 size-4 text-foreground/50" />
            <PlusIcon className="absolute -bottom-2.5 -left-2.5 size-4 text-foreground/50" />
            <PlusIcon className="absolute -bottom-2.5 -right-2.5 size-4 text-foreground/50" />

            <BorderTrail
              style={{
                boxShadow: "0px 0px 20px 10px rgb(0 0 0 / 15%)",
              }}
              size={60}
            />

            <div className="relative w-11 h-11 bg-muted/40 overflow-hidden flex-shrink-0 border border-border">
              <Image
                src="/assets/garment_blazer.png"
                alt="Tailored Linen Blazer"
                fill
                className="object-cover p-1"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  Layer 03
                </span>
                <Badge variant="secondary" className="text-[9px] px-1.5 py-0 font-mono">Outerwear</Badge>
              </div>
              <div className="text-xs font-semibold text-foreground leading-tight mt-0.5">
                Tailored Linen Blazer
              </div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium font-mono mt-0.5">
                <CheckCircle2 className="size-3 text-emerald-600" />
                <span>99.4% Drape Fidelity</span>
              </div>
            </div>
          </div>

          {/* Pin 2: Top-Right (Ribbed Knit Tank with 4 Plus Crosses - WHITE on dark background) */}
          <div className="hidden sm:flex absolute -right-4 lg:-right-8 top-32 z-50 items-center gap-3 bg-background/95 backdrop-blur-xl p-3 border border-border min-w-[200px] pointer-events-auto shadow-sm">
            <PlusIcon className="absolute -top-2.5 -left-2.5 size-4 text-white drop-shadow" />
            <PlusIcon className="absolute -top-2.5 -right-2.5 size-4 text-white drop-shadow" />
            <PlusIcon className="absolute -bottom-2.5 -left-2.5 size-4 text-white drop-shadow" />
            <PlusIcon className="absolute -bottom-2.5 -right-2.5 size-4 text-white drop-shadow" />

            <div className="relative w-11 h-11 bg-muted/40 overflow-hidden flex-shrink-0 border border-border">
              <Image
                src="/assets/garment_shirt.png"
                alt="Ribbed Tank Top"
                fill
                className="object-cover p-1"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  Base Layer 01
                </span>
                <Badge variant="outline" className="text-[9px] px-1 py-0 font-mono">Base</Badge>
              </div>
              <div className="text-xs font-semibold text-foreground leading-tight mt-0.5">
                Ribbed Knit Tank
              </div>
              <div className="text-[10px] font-mono text-muted-foreground mt-0.5">
                Authentic User Portrait
              </div>
            </div>
          </div>

          {/* Pin 3: Bottom-Left (Classic Denim Shorts with 4 Plus Crosses) */}
          <div className="hidden sm:flex absolute -left-2 lg:-left-8 bottom-24 z-50 items-center gap-3 bg-background/95 backdrop-blur-xl p-3 border border-border min-w-[210px] pointer-events-auto shadow-sm">
            <PlusIcon className="absolute -top-2.5 -left-2.5 size-4 text-foreground/50" />
            <PlusIcon className="absolute -top-2.5 -right-2.5 size-4 text-foreground/50" />
            <PlusIcon className="absolute -bottom-2.5 -left-2.5 size-4 text-foreground/50" />
            <PlusIcon className="absolute -bottom-2.5 -right-2.5 size-4 text-foreground/50" />

            <div className="relative w-11 h-11 bg-muted/40 overflow-hidden flex-shrink-0 border border-border">
              <Image
                src="/assets/cat_modern_classics.png"
                alt="Classic Denim Shorts"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  Layer 02
                </span>
                <Badge variant="outline" className="text-[9px] px-1 py-0 font-mono">Bottoms</Badge>
              </div>
              <div className="text-xs font-semibold text-foreground leading-tight mt-0.5">
                Classic Denim Shorts
              </div>
              <div className="text-[10px] font-mono text-muted-foreground mt-0.5">
                Multi-Garment Physics
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. LEFT SIDE CONTENT: BLUEPRINT HERO CARD WITH 4 CORNER PLUS CROSSES
         ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-6 sm:left-10 lg:left-16 bottom-8 lg:bottom-12 z-30 max-w-md pointer-events-auto"
      >
        <div className="relative bg-background/95 backdrop-blur-md border border-border p-5 sm:p-6 shadow-md space-y-4">
          <PlusIcon className="absolute -top-3 -left-3 size-5 text-foreground/50" />
          <PlusIcon className="absolute -top-3 -right-3 size-5 text-foreground/50" />
          <PlusIcon className="absolute -bottom-3 -left-3 size-5 text-foreground/50" />
          <PlusIcon className="absolute -right-3 -bottom-3 size-5 text-foreground/50" />

          {/* Monospace Eyebrow Pill */}
          <div className="flex items-center justify-between">
            <div className="rounded-lg border px-3 py-0.5 font-mono text-[11px] uppercase tracking-wider text-foreground">
              Virtual Fitting Room
            </div>
            <Badge variant="secondary" className="font-mono text-[10px]">Zero Guesswork</Badge>
          </div>

          {/* Refined Headline */}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter text-foreground leading-tight">
            Virtual fitting room, <br />
            <span className="text-muted-foreground font-normal">on your authentic body.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Fit clothes from Zara, Trendyol, ASOS and physical boutiques onto your own photo before you buy.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex items-center gap-2.5 pt-1">
            <Button
              className="text-xs font-mono uppercase tracking-wider flex-1"
              asChild
            >
              <a href="#download" className="flex items-center justify-center gap-1.5">
                <span>Start Fitting</span>
                <ArrowRight className="size-3.5" />
              </a>
            </Button>

            <Button
              variant="outline"
              className="text-xs font-mono uppercase tracking-wider"
              asChild
            >
              <a href="#how-it-works">How It Works</a>
            </Button>
          </div>

          {/* Store Badges Dock */}
          <div className="pt-2 border-t border-border flex items-center justify-between gap-2">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>

          {/* Quality Trust Marker */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-muted-foreground pt-1">
            <ShieldCheckIcon className="size-3.5 text-emerald-600" />
            <span>100% Authentic Human Drape Guarantee</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
