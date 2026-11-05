"use client";

import React, { useState } from "react";
import { Check, ArrowRight, PlusIcon, ShieldCheckIcon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderTrail } from "@/components/ui/border-trail";
import { cn } from "@/lib/utils";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <section id="subscribe" className="relative min-h-screen overflow-hidden py-24">
      <div className="mx-auto w-full max-w-6xl space-y-5 px-4">
        {/* Monospace Eyebrow & Title matching single-pricing-card-1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl space-y-5"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border px-4 py-1 font-mono text-xs uppercase tracking-wider">
              Atelier VIP Circle
            </div>
          </div>
          <h2 className="mt-5 text-center text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
            Subscribe to Private Atelier Releases
          </h2>
          <p className="text-muted-foreground mt-5 text-center text-sm md:text-base">
            Join the inner circle of luxury stylists and digital couture enthusiasts. Receive seasonal algorithm updates and beta releases.
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
            className="mx-auto w-full max-w-2xl space-y-2"
          >
            <div className="grid md:grid-cols-2 bg-background relative border p-4 shadow-sm">
              <PlusIcon className="absolute -top-3 -left-3 size-5.5" />
              <PlusIcon className="absolute -top-3 -right-3 size-5.5" />
              <PlusIcon className="absolute -bottom-3 -left-3 size-5.5" />
              <PlusIcon className="absolute -right-3 -bottom-3 size-5.5" />

              {/* Left Column: Member Privileges */}
              <div className="w-full px-4 pt-5 pb-4 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="leading-none font-semibold text-foreground">VIP Dispatch</h3>
                    <div className="flex items-center gap-x-1">
                      <span className="text-muted-foreground text-sm line-through">Public</span>
                      <Badge variant="secondary">Early Access</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">Curated digital couture intelligence.</p>
                </div>

                <div className="space-y-3 my-6 font-mono text-xs">
                  <div className="flex items-start gap-2 text-foreground">
                    <Sparkles className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Seasonal virtual capsule drop previews</span>
                  </div>
                  <div className="flex items-start gap-2 text-foreground">
                    <Sparkles className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Neural drape physics engine beta access</span>
                  </div>
                  <div className="flex items-start gap-2 text-foreground">
                    <Sparkles className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Priority concierge invitation codes</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-muted-foreground flex items-end gap-0.5 text-xl">
                    <span className="text-foreground -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl">
                      Free
                    </span>
                    <span>/lifetime</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Subscription with BorderTrail */}
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
                    <h3 className="leading-none font-semibold text-foreground">Direct Delivery</h3>
                    <Badge>Zero Spam</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">Delivered twice a month to your inbox.</p>
                </div>

                <div className="my-6">
                  {isSubscribed ? (
                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-mono flex items-center gap-2">
                      <Check className="size-4 flex-shrink-0" />
                      <span>Invitation verified. Welcome to the Atelier Circle.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="curator@atelier.com"
                        required
                        className="w-full px-3.5 py-2.5 rounded-md bg-muted/30 border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground font-mono transition-colors"
                      />
                      <Button type="submit" className="w-full font-mono text-xs uppercase tracking-wider">
                        <span>Subscribe</span>
                        <ArrowRight className="size-3.5 ml-1.5" />
                      </Button>
                    </form>
                  )}
                </div>

                <div className="text-[11px] font-mono text-muted-foreground">
                  Unsubscribe with 1-click anytime. No advertising cookies.
                </div>
              </div>
            </div>

            <div className="text-muted-foreground flex items-center justify-center gap-x-2 text-sm pt-2">
              <ShieldCheckIcon className="size-4" />
              <span>Strict zero-spam protocol • 100% private subscriber list</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
