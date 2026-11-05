"use client";

import React from "react";
import { Check, X, Shield, Sparkles } from "lucide-react";

export const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      feature: "Geyimin bədəninizdə necə duracağını görmək",
      traditional: "Mümkün deyil — yalnız kənar maniken və ya model şəkilləri",
      alltryon: "100% Sizin real fotonuz, boy-buxununuz və dəri tonunuz",
    },
    {
      feature: "Trendyol, Zara və Instagram inteqrasiyası",
      traditional: "Yoxdur — hər dəfə əllə skrinşot, yükləmə və kəsmə",
      alltryon: "Üzən Try-On Düyməsi ilə ekrandan birbaşa 1-toxunuşla",
    },
    {
      feature: "Ölçü cədvəli və sifarişdən sonra geri qaytarma",
      traditional: "35%-dən çox geri qaytarma və ölçü uyğunsuzluğu riski",
      alltryon: "Sıfır təxmin — sifariş etməzdən əvvəl dəqiq görünüş",
    },
    {
      feature: "Kombin etmə azadlığı (Üst + Alt + Aksessuar)",
      traditional: "Tək-tək baxmaq məcburiyyəti, uyğunluğu təsəvvür etmək çətindir",
      alltryon: "Modulyar 3 Slot (Geyim 1, 2, 3) ilə bütöv dəst sınağı",
    },
    {
      feature: "Məxfilik və Şəkillərin Təhlükəsizliyi",
      traditional: "Şəkillər açıq serverlərdə saxlanılır və ya üçüncü tərəfə ötürülür",
      alltryon: "AES-256 + Cloudflare R2: İstənilən an birdəfəlik silinmə hüququ",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-y border-black/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-xs font-semibold uppercase tracking-wider text-black/60 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Fərqi Hiss Edin</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#121212]">
            Köhnə onlayn alış-veriş vs. <span className="italic font-light">ALLTRYON</span>
          </h2>
          <p className="text-base sm:text-lg text-black/60 mt-3 font-normal">
            Niyə minlərlə istifadəçi geyim almazdan əvvəl ALLTRYON-da sınaqdan keçirir?
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-black/10 overflow-hidden shadow-xl bg-[#F7F7F2]">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black/10 bg-white p-5 sm:p-6 text-sm font-semibold tracking-wide">
            <div className="md:col-span-5 text-black/60 uppercase text-xs">Meyar</div>
            <div className="md:col-span-3 text-red-600/80 uppercase text-xs hidden md:block">
              Ənənəvi Alış-Veriş
            </div>
            <div className="md:col-span-4 text-emerald-800 uppercase text-xs font-bold flex items-center gap-1.5 hidden md:flex">
              <span className="w-2 h-2 rounded-full bg-[#C6FF00]" />
              <span>ALLTRYON Haute-Couture</span>
            </div>
          </div>

          <div className="divide-y divide-black/8">
            {comparisons.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-4 items-center hover:bg-white/60 transition-colors"
              >
                <div className="md:col-span-5 font-semibold text-sm text-[#121212]">
                  {row.feature}
                </div>

                <div className="md:col-span-3 flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="md:hidden font-bold text-red-700 block mb-0.5">
                      Ənənəvi:
                    </span>
                    {row.traditional}
                  </div>
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-neutral-900 font-medium bg-emerald-500/10 p-3 rounded-2xl md:bg-transparent md:p-0">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="md:hidden font-bold text-emerald-800 block mb-0.5">
                      ALLTRYON:
                    </span>
                    {row.alltryon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

