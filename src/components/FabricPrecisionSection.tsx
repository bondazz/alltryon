"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Layers, Sliders, CheckCircle2 } from "lucide-react";

export const FabricPrecisionSection: React.FC = () => {
  const fabrics = [
    {
      name: "Təbii İpək Saten",
      spec: "Mulberry Silk • 19 Momme",
      desc: "İşığın düşmə bucağına görə axıcı parıltı və zərif qat dərəcəsi tam ötürülür.",
      tag: "Fluid Drape",
      image: "/assets/garment_dress.png",
    },
    {
      name: "İtalyan Yun & Kaşmir",
      spec: "Virgin Wool Blend • Super 130s",
      desc: "Çiyin xətləri, kəsim strukturu və parça qalınlığı bədən konturuna uyğunlaşır.",
      tag: "Structured Cut",
      image: "/assets/garment_blazer.png",
    },
    {
      name: "Poplin & Kətan",
      spec: "100% Giza Cotton Poplin",
      desc: "Yaxa xətti, manjetlər və düymə sıraları fotorealistik toxuma ilə qorunur.",
      tag: "Crisp Weave",
      image: "/assets/garment_shirt.png",
    },
  ];

  return (
    <section id="precision" className="py-24 sm:py-32 bg-[#F7F7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-black/50 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#121212]" />
            <span>Optik Dəqiqlik Standartı</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#121212] leading-[1.15]">
            Hər tikiş, hər toxuma, <span className="italic font-light">hər qat</span> gerçəkdir.
          </h2>
          <p className="text-base sm:text-lg text-black/60 mt-4 leading-relaxed font-normal">
            ALLTRYON geyimləri sadəcə fotonun üzərinə yapışdırmır. Neyron işıqlandırma mühərriki
            parçanın təbii ağırlığını, dartılma dərəcəsini və kölgəsini bədəninizə uyğun hesablayır.
          </p>
        </div>

        {/* 3 Fabric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fabrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-black/8 hover:border-black/25 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-52 rounded-2xl bg-[#F7F7F2] border border-black/5 p-4 mb-6 relative overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={180}
                    height={180}
                    className="object-contain max-h-44 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#121212] text-[#C6FF00] text-[10px] font-semibold tracking-wider uppercase">
                    {item.tag}
                  </div>
                </div>

                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  {item.spec}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#121212] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-black/70 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-black/5 mt-6 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tekstura İtkisiz Qorunur</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

