"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShoppingBag, ArrowRight, Share2, Eye, Zap } from "lucide-react";

export const FloatingWidgetFeature: React.FC = () => {
  return (
    <section id="floating-widget" className="py-24 sm:py-32 relative overflow-hidden bg-[#121212] text-white">
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#C6FF00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#C6FF00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider uppercase text-[#C6FF00]">
              <Zap className="w-3.5 h-3.5" />
              <span>Dünyada İlk • Üzən Alış-Veriş Vidceti</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1]">
              Trendyol və Zara-da gəzin.{" "}
              <span className="italic font-light text-[#C6FF00]">1 toxunuşla</span> geyinin.
            </h2>

            <p className="text-base sm:text-lg text-white/75 font-normal leading-relaxed">
              Tətbiqlər arasında şəkil yükləmək, kəsmək və yorucu addımlara son. ALLTRYON-un
              innovativ <strong>Üzən Try-On Düyməsi</strong> digər alış-veriş tətbiqlərində
              ekranınızda görünür.
            </p>

            {/* 3 Step Interactive Workflow Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#C6FF00]/15 text-[#C6FF00] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  01
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Trendyol və ya Zara-da geyim bəyənin</h3>
                  <p className="text-sm text-white/60 mt-0.5">
                    Məhsul səhifəsində ekran şəkli çəkin və ya sadəcə &ldquo;Paylaş &rarr; ALLTRYON&rdquo; seçin.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C6FF00]/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#C6FF00] text-[#121212] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  02
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base flex items-center gap-2">
                    <span>Ekranda Üzən Try-On Düyməsinə toxunun</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#C6FF00]/20 text-[#C6FF00] text-[10px] font-bold uppercase">
                      Instant Grab
                    </span>
                  </h3>
                  <p className="text-sm text-white/60 mt-0.5">
                    Düymə ekrandakı məhsul şəklini dərhal aşkarlayır və birbaşa Sınaq Studiyasına ötürür.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#C6FF00]/15 text-[#C6FF00] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  03
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Real modelinizdə anında görünüşü qiymətləndirin</h3>
                  <p className="text-sm text-white/60 mt-0.5">
                    Geyimin boyunuza, bədən xətlərinizə və parçasına uyğunluğunu sifariş etmədən əvvəl tam dəqiqliklə görün.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#download"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C6FF00] hover:underline"
              >
                <span>Vidceti Android və iOS-da necə aktiv etməli?</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Smartphone Floating Demo Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/18.5] bg-neutral-900 rounded-[44px] p-3.5 border-4 border-neutral-700 shadow-2xl overflow-hidden">
              {/* Phone Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30" />

              {/* Inside Screen Content (Simulating Trendyol Product Screen) */}
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-white text-neutral-900 flex flex-col justify-between">
                {/* Store Header Bar */}
                <div className="pt-8 px-4 pb-3 border-b border-neutral-200 flex items-center justify-between bg-white/90 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm tracking-tight text-orange-600">trendyol</span>
                    <span className="text-[10px] text-neutral-400">/ Məhsul Səhifəsi</span>
                  </div>
                  <Share2 className="w-4 h-4 text-neutral-600" />
                </div>

                {/* Simulated Product Card */}
                <div className="flex-1 p-4 flex flex-col justify-center items-center relative">
                  <div className="w-full h-64 relative rounded-2xl overflow-hidden bg-[#F7F7F2] border border-neutral-200 shadow-inner">
                    <Image
                      src="/assets/garment_blazer.png"
                      alt="Product in Trendyol"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="w-full mt-3">
                    <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      Premium Collection
                    </div>
                    <div className="text-sm font-bold text-neutral-900 line-clamp-1">
                      Krem Rəngli İtalyan Yun Kostyum Pencəyi
                    </div>
                    <div className="text-base font-bold text-neutral-950 mt-1">189.90 AZN</div>
                  </div>

                  {/* =========================================================================
                      THE FLOATING ALLTRYON WIDGET (OVERLAY BUBBLE)
                     ========================================================================= */}
                  <div className="absolute right-3 top-1/3 z-40 flex items-center gap-2">
                    {/* Pulsing Hint Tooltip */}
                    <div className="bg-[#121212] text-white text-[10px] font-medium py-1.5 px-3 rounded-full shadow-xl border border-white/20 whitespace-nowrap hidden sm:flex items-center gap-1.5 animate-bounce">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]" />
                      <span>Geyimi Sına ✦</span>
                    </div>

                    {/* Floating Bubble Icon */}
                    <div className="w-14 h-14 rounded-full bg-[#121212] border-2 border-[#C6FF00] p-2 shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Image
                        src="/assets/logo.png"
                        alt="ALLTRYON Floating Button"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Store Buy Bar */}
                <div className="p-4 border-t border-neutral-200 bg-white flex items-center gap-2">
                  <button className="flex-1 py-3 rounded-xl bg-orange-600 text-white font-semibold text-xs tracking-wide">
                    Səbətə Əlavə Et
                  </button>
                  <button className="p-3 rounded-xl border border-neutral-200 bg-neutral-100">
                    <Eye className="w-4 h-4 text-neutral-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

