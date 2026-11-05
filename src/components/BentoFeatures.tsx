"use client";

import React from "react";
import Image from "next/image";
import { Zap, Layers, ShieldCheck, Sparkles, Eye, ArrowRight } from "lucide-react";

export const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <div className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-2">
            İnnovativ Xüsusiyyətlər
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#111111] leading-tight">
            Alış-veriş vərdişinizi dəyişən <br className="hidden sm:inline" />
            <span className="italic font-light">4 əsas üstünlük.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Floating Try-On Widget (Large 7 Cols) */}
          <div
            id="floating-widget"
            className="md:col-span-7 bg-[#FAFAF8] rounded-3xl p-8 sm:p-10 dribbble-border flex flex-col justify-between group hover:border-black/20 transition-all duration-200"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#111111] text-[#C6FF00] flex items-center justify-center mb-6">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Eksklüziv Funksiya
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111111] mb-3">
                Üzən Try-On Düyməsi (Trendyol & Zara)
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal max-w-lg mb-8">
                Tətbiqdən çıxmadan geyinin. Trendyol, Zara və ya Instagram-da bəyəndiyiniz
                məhsulun ekran şəklini çəkdiyinizdə ekrandakı üzən düymə onu avtomatik aşkar edir və
                Sınaq Studiyasında bədəninizə uyğunlaşdırır.
              </p>
            </div>

            {/* Visual mini-preview */}
            <div className="rounded-2xl bg-white p-4 dribbble-border flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#111111] border-2 border-[#C6FF00] p-1.5 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Image
                    src="/assets/logo.png"
                    alt="Floating Bubble"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900">
                    Ekrandakı geyimi anında sına
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    Trendyol və Zara ilə tam inteqrasiya
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 hidden sm:inline-block">
                Aktivdir
              </span>
            </div>
          </div>

          {/* Card 2: Modular 3-Slot Layering (5 Cols) */}
          <div className="md:col-span-5 bg-[#FAFAF8] rounded-3xl p-8 sm:p-10 dribbble-border flex flex-col justify-between group hover:border-black/20 transition-all duration-200">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#111111] text-[#C6FF00] flex items-center justify-center mb-6">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Kombin Azadlığı
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111111] mb-3">
                Modulyar Geyim Slotları
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                Tək geyimlə kifayətlənməyin. Model + Geyim 1 + Geyim 2 + Geyim 3 slotları ilə üst, alt
                və aksessuar kombinlərini eyni vaxtda sınaqdan keçirin.
              </p>
            </div>

            {/* Slots visual preview */}
            <div className="grid grid-cols-4 gap-2 pt-2">
              <div className="aspect-square rounded-xl bg-white dribbble-border p-1 flex flex-col items-center justify-center">
                <Image
                  src="/assets/model_portrait.png"
                  alt="Model"
                  width={36}
                  height={36}
                  className="rounded-lg object-cover"
                />
                <span className="text-[9px] text-neutral-500 mt-1">Model</span>
              </div>
              <div className="aspect-square rounded-xl bg-white dribbble-border p-1 flex flex-col items-center justify-center">
                <Image
                  src="/assets/garment_blazer.png"
                  alt="Garment 1"
                  width={36}
                  height={36}
                  className="object-contain"
                />
                <span className="text-[9px] text-neutral-500 mt-1">Geyim 1</span>
              </div>
              <div className="aspect-square rounded-xl bg-white dribbble-border p-1 flex flex-col items-center justify-center">
                <Image
                  src="/assets/garment_dress.png"
                  alt="Garment 2"
                  width={36}
                  height={36}
                  className="object-contain"
                />
                <span className="text-[9px] text-neutral-500 mt-1">Geyim 2</span>
              </div>
              <div className="aspect-square rounded-xl border border-dashed border-neutral-300 flex flex-col items-center justify-center text-neutral-400 bg-neutral-50">
                <span className="text-sm font-light">+</span>
                <span className="text-[9px]">Geyim 3</span>
              </div>
            </div>
          </div>

          {/* Card 3: Fabric Texture & Weave (5 Cols) */}
          <div className="md:col-span-5 bg-[#FAFAF8] rounded-3xl p-8 sm:p-10 dribbble-border flex flex-col justify-between group hover:border-black/20 transition-all duration-200">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#111111] text-[#C6FF00] flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Optik Dəqiqlik
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111111] mb-3">
                Fotorealistik Parça Toxuması
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                Geyimin parça növü, axıcılığı, yaxa kəsimi və tikiş xətləri bədəninizə təbii
                işıqlandırma ilə uyğunlaşdırılır.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-white p-3 rounded-2xl dribbble-border">
              <Eye className="w-4 h-4 text-neutral-700" />
              <span>Pinch-to-zoom ilə ən incə tikişə qədər baxın</span>
            </div>
          </div>

          {/* Card 4: Cloudflare R2 & Absolute Privacy (7 Cols) */}
          <div className="md:col-span-7 bg-[#FAFAF8] rounded-3xl p-8 sm:p-10 dribbble-border flex flex-col justify-between group hover:border-black/20 transition-all duration-200">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#111111] text-[#C6FF00] flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Təhlükəsizlik Zəmanəti
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111111] mb-3">
                Cloudflare R2 və Tam Məxfilik
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal max-w-lg mb-6">
                Şəkilləriniz heç vaxt açıq internetə sızmır. Bütün portretlər AES-256 şifrələmə ilə
                qorunur. İstənilən an bir toxunuşla həm bazadan, həm də R2 bulud yaddaşından
                birdəfəlik silinir.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-500 pt-2 border-t border-black/5">
              <span>✓ Yalnız sizin profilinizə məxsusdur</span>
              <span>•</span>
              <span>✓ 24 saatlıq avtomatik təmizləmə rejimi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

