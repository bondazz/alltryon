"use client";

import React, { useState } from "react";
import { PlusIcon, MinusIcon, ShieldCheckIcon, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderTrail } from "@/components/ui/border-trail";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "01",
    question: "How does alltryon simulate garments from external shopping apps?",
    answer:
      "alltryon includes a Floating Overlay widget for iOS and Android. While browsing Zara, Trendyol, ASOS, or Instagram boutiques, tapping the widget captures the garment silhouette and generates a 99.6% accurate drape on your photo in under 0.8 seconds.",
  },
  {
    id: "02",
    question: "How is biometric portrait privacy protected?",
    answer:
      "All silhouette photography is strictly confidential. We never sell user data or train public AI models on your private portraits. When you delete a photo, it is permanently removed immediately.",
  },
  {
    id: "03",
    question: "Can I combine multiple apparel items simultaneously?",
    answer:
      "Yes. Our 3-slot physics engine lets you style Slot 1 (Base/Tops), Slot 2 (Trousers/Skirts), and Slot 3 (Tailored Outerwear) together with automatic collar and lapel nesting.",
  },
  {
    id: "04",
    question: "Can I inspect the textile weave and seam details up close?",
    answer:
      "Every look renders at ultra-high definition. You can pinch-to-zoom to inspect stitch density, fabric mass, weave texture, and hemline curvature with zero blur.",
  },
  {
    id: "05",
    question: "Which platforms and operating systems are supported?",
    answer:
      "alltryon is fully optimized for native iOS (iPhone & iPad via App Store), native Android (Google Play Store), and modern desktop browsers via our Web Atelier.",
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>("01");

  const toggle = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section id="faq" className="relative min-h-screen overflow-hidden py-24">
      <div className="mx-auto w-full max-w-6xl space-y-5 px-4">
        {/* Header matching single-pricing-card-1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl space-y-5"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border px-4 py-1 font-mono text-xs uppercase tracking-wider">
              FAQ & Support
            </div>
          </div>
          <h2 className="mt-5 text-center text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-5 text-center text-sm md:text-base">
            Essential knowledge regarding neural drape fidelity, biometric vault privacy, and universal store compatibility.
          </p>
        </motion.div>

        {/* Blueprint Card Container */}
        <div className="relative">
          <div
            className={cn(
              "z--10 pointer-events-none absolute inset-0 size-full",
              "bg-[linear-gradient(to_right,--theme(--color-foreground/.2)_1px,transparent_1px),linear-gradient(to_bottom,--theme(--color-foreground/.2)_1px,transparent_1px)]",
              "bg-[size:32px_32px]",
              "[mask-image:radial-gradient(ellipse_at_center,var(--background)_10%,transparent)]",
            )}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-3xl space-y-2"
          >
            <div className="grid md:grid-cols-2 bg-background relative border p-4 shadow-sm">
              <PlusIcon className="absolute -top-3 -left-3 size-5.5" />
              <PlusIcon className="absolute -top-3 -right-3 size-5.5" />
              <PlusIcon className="absolute -bottom-3 -left-3 size-5.5" />
              <PlusIcon className="absolute -right-3 -bottom-3 size-5.5" />

              {/* Left Column: Client Care Spotlight with BorderTrail */}
              <div className="relative w-full rounded-lg border px-4 pt-5 pb-4 flex flex-col justify-between">
                <BorderTrail
                  style={{
                    boxShadow:
                      "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
                  }}
                  size={100}
                />
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="leading-none font-semibold text-foreground">Atelier Care</h3>
                    <Badge variant="secondary">24/7 Response</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">Need help configuring external shopping apps?</p>
                </div>

                <div className="my-6 space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg border bg-muted/20 space-y-1">
                    <div className="text-muted-foreground uppercase text-[10px]">Response Protocol</div>
                    <div className="font-semibold text-foreground">&lt; 15 Minute Dedicated Concierge</div>
                  </div>
                  <div className="p-3 rounded-lg border bg-muted/20 space-y-1">
                    <div className="text-muted-foreground uppercase text-[10px]">Data Guarantee</div>
                    <div className="font-semibold text-foreground">Immediate 1-Click Biometric Erasure</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-muted-foreground flex items-end gap-0.5 text-xl">
                    <span className="text-foreground -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl">
                      100%
                    </span>
                    <span>&nbsp;private vault</span>
                  </div>
                  <Button className="w-full" asChild>
                    <a href="mailto:support@alltryon.com">
                      <span>Contact Atelier Care</span>
                      <ArrowRight className="size-3.5 ml-1.5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column: FAQ Accordion List */}
              <div className="w-full px-4 pt-5 pb-4 flex flex-col justify-between">
                <div className="space-y-1 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="leading-none font-semibold text-foreground">Direct Answers</h3>
                    <Badge>5 Core Topics</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">Tap any question to view technical specifications.</p>
                </div>

                <div className="divide-y divide-border flex-1">
                  {FAQ_DATA.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                      <div key={item.id} className="py-3 first:pt-0 last:pb-0">
                        <button
                          onClick={() => toggle(item.id)}
                          className="w-full flex items-center justify-between gap-3 text-left py-1 text-xs font-semibold text-foreground hover:text-foreground/80 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-muted-foreground">[{item.id}]</span>
                            <span>{item.question}</span>
                          </span>
                          <span className="text-muted-foreground flex-shrink-0">
                            {isOpen ? <MinusIcon className="size-3.5" /> : <PlusIcon className="size-3.5" />}
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="pt-2 pb-1 text-xs text-muted-foreground leading-relaxed">
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 mt-2 border-t border-border">
                  <Button className="w-full" variant="outline" asChild>
                    <a href="#how-it-works">Learn How It Works</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-muted-foreground flex items-center justify-center gap-x-2 text-sm pt-2">
              <ShieldCheckIcon className="size-4" />
              <span>Zero public model training • 1-Click silhouette erasure</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
