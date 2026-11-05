"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Check, ZoomIn, RefreshCw, Layers, ShieldCheck } from "lucide-react";

interface GarmentOption {
  id: string;
  name: string;
  category: string;
  brand: string;
  fabric: string;
  thumbnail: string;
  resultImage: string;
}

const DEMO_GARMENTS: GarmentOption[] = [
  {
    id: "g1",
    name: "İtalyan Yunundan İki Parçalı Krem Kostyum",
    category: "Soft Tailoring",
    brand: "ATELIER COUTURE",
    fabric: "100% Virgin Wool • Hand-Stitched Lapel",
    thumbnail: "/assets/garment_blazer.png",
    resultImage: "/assets/app_mockup.png", // Or tryon_result.png
  },
  {
    id: "g2",
    name: "İpək Saten Ziyafət Geyimi",
    category: "After Dark",
    brand: "NOCTURNE STUDIO",
    fabric: "100% Mulberry Silk • Bias Cut Drape",
    thumbnail: "/assets/garment_dress.png",
    resultImage: "/assets/tryon_result.png",
  },
  {
    id: "g3",
    name: "Minimalist Poplin Qarderob Köynəyi",
    category: "Modern Classics",
    brand: "ESSENTIAL ARCHIVE",
    fabric: "Egyptian Cotton Poplin • Crisp Weave",
    thumbnail: "/assets/garment_shirt.png",
    resultImage: "/assets/hero_editorial.png",
  },
];

export const InteractiveStudioDemo: React.FC = () => {
  const [activeGarmentIndex, setActiveGarmentIndex] = useState(0);
  const [showOriginal, setShowOriginal] = useState(false);
  const [isGeneratingMock, setIsGeneratingMock] = useState(false);

  const selectedGarment = DEMO_GARMENTS[activeGarmentIndex];

  const handleGarmentClick = (index: number) => {
    if (index === activeGarmentIndex) return;
    setIsGeneratingMock(true);
    setTimeout(() => {
      setActiveGarmentIndex(index);
      setIsGeneratingMock(false);
    }, 450);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl border border-black/10 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
      {/* Decorative Atelier Corner Accents */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#C6FF00]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Studio Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-black/8 mb-6">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF00] animate-ping" />
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#121212]/80 font-sans">
            Canlı Sınaq Studiyası • İnteraktiv Demo
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-black/60 bg-black/5 px-3 py-1.5 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>AES-256 Şifrələnmiş Məxfilik</span>
        </div>
      </div>

      {/* TOP ROW: SIGNATURE SMALL SQUARES (Model + Garments) */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-black/50">
            Sınaq Kartları (Geyimləri dəyişmək üçün toxunun)
          </span>
          <span className="text-[11px] text-emerald-700 font-medium hidden sm:inline">
            ✓ 1-toxunuşla anında dəyişir
          </span>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {/* Slot 0: Model Slot */}
          <div className="relative group cursor-pointer flex-shrink-0">
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-black/20 group-hover:border-black transition-all bg-[#121212] relative shadow-sm">
              <Image
                src="/assets/model_portrait.png"
                alt="Model Portrait"
                width={88}
                height={88}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent py-1 text-center">
                <span className="text-[10px] font-semibold text-white tracking-wide">Model</span>
              </div>
            </div>
          </div>

          {/* Slots 1, 2, 3: Garments */}
          {DEMO_GARMENTS.map((garment, idx) => {
            const isSelected = idx === activeGarmentIndex;
            return (
              <button
                key={garment.id}
                onClick={() => handleGarmentClick(idx)}
                className="relative group cursor-pointer flex-shrink-0 text-left focus:outline-none"
              >
                <div
                  className={`w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden p-1 transition-all duration-300 relative shadow-sm ${
                    isSelected
                      ? "border-2 border-[#121212] ring-2 ring-[#C6FF00] scale-[1.03] bg-white"
                      : "border border-black/10 hover:border-black/30 bg-[#F7F7F2]"
                  }`}
                >
                  <Image
                    src={garment.thumbnail}
                    alt={garment.name}
                    width={88}
                    height={88}
                    className="w-full h-full object-contain p-1"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent py-1 text-center">
                    <span className="text-[10px] font-semibold text-white tracking-wide">
                      Geyim {idx + 1}
                    </span>
                  </div>
                  {isSelected && (
                    <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#C6FF00] text-[#121212] rounded-full flex items-center justify-center text-[10px] font-bold shadow-xs">
                      ✓
                    </span>
                  )}
                </div>
              </button>
            );
          })}

          {/* Plus Add Slot */}
          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl border-2 border-dashed border-black/20 flex flex-col items-center justify-center text-black/40 hover:text-black hover:border-black/40 transition-colors cursor-pointer flex-shrink-0 bg-black/2">
            <span className="text-xl font-light leading-none mb-1">+</span>
            <span className="text-[10px] font-medium">Əlavə et</span>
          </div>
        </div>
      </div>

      {/* BIG CANVAS / RESULT PRESENTATION DIV */}
      <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[530px] rounded-2xl overflow-hidden border border-black/10 bg-[#121212] group">
        {/* Main Display Image */}
        <div className="relative w-full h-full">
          <Image
            src={showOriginal ? "/assets/model_portrait.png" : selectedGarment.resultImage}
            alt={selectedGarment.name}
            fill
            className={`object-cover object-center transition-all duration-500 ${
              isGeneratingMock ? "scale-98 blur-sm opacity-60" : "scale-100 blur-0 opacity-100"
            }`}
            priority
          />
        </div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-full bg-[#121212]/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]" />
            <span>{showOriginal ? "ORİJİNAL MODEL" : "✦ ALLTRYON NƏTİCƏ"}</span>
          </div>
          <div className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-medium text-black">
            99.4% Tekstura Dəqiqliyi
          </div>
        </div>

        {/* Top-Right Toggle: Original vs Result */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <button
            onClick={() => setShowOriginal(!showOriginal)}
            className="px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-black text-xs font-medium shadow-lg backdrop-blur-md transition-all active:scale-95 flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{showOriginal ? "Nəticəni Göstər" : "Müqayisə (Before)"}</span>
          </button>
        </div>

        {/* Bottom Editorial Caption Card */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
          <div>
            <div className="text-[10px] tracking-widest uppercase font-semibold text-[#C6FF00] mb-1">
              {selectedGarment.brand} • {selectedGarment.category}
            </div>
            <div className="font-serif text-lg sm:text-2xl font-semibold tracking-tight leading-snug">
              {selectedGarment.name}
            </div>
            <div className="text-xs text-white/70 mt-1 flex items-center gap-2">
              <span>{selectedGarment.fabric}</span>
              <span>•</span>
              <span className="text-emerald-400">100% Fotorealistik AI Örtük</span>
            </div>
          </div>

          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#C6FF00] hover:bg-[#b8f000] text-[#121212] font-semibold text-xs tracking-wide transition-transform hover:scale-105 active:scale-95 shadow-md flex-shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Öz Şəklində Sına</span>
          </a>
        </div>

        {/* Simulation Generating Loader */}
        {isGeneratingMock && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center gap-3 text-white z-20">
            <div className="w-8 h-8 border-2 border-[#C6FF00] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-medium tracking-wide">Tekstura Uyğunlaşdırılır...</span>
          </div>
        )}
      </div>
    </div>
  );
};

