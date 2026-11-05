"use client";

import React from "react";
import Image from "next/image";

interface StoreBadgesProps {
  className?: string;
}

export const AppStoreBadge: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <a
      href="#download"
      aria-label="Download alltryon on the Apple App Store"
      className={`inline-flex items-center gap-2.5 px-3.5 py-2 bg-background hover:bg-muted text-foreground border border-border transition-colors shadow-2xs ${className}`}
    >
      <div className="w-5 h-5 relative flex-shrink-0">
        <Image
          src="/assets/icon_appstore.webp"
          alt="Apple App Store"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground">App Store</span>
        <span className="text-xs font-bold tracking-tight text-foreground mt-0.5">iOS Download</span>
      </div>
    </a>
  );
};

export const GooglePlayBadge: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <a
      href="#download"
      aria-label="Get alltryon on Google Play"
      className={`inline-flex items-center gap-2.5 px-3.5 py-2 bg-background hover:bg-muted text-foreground border border-border transition-colors shadow-2xs ${className}`}
    >
      <div className="w-5 h-5 relative flex-shrink-0">
        <Image
          src="/assets/icon_playstore.png"
          alt="Google Play Store"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground">Google Play</span>
        <span className="text-xs font-bold tracking-tight text-foreground mt-0.5">Android APK</span>
      </div>
    </a>
  );
};

export const StoreBadgesGroup: React.FC<StoreBadgesProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <AppStoreBadge />
      <GooglePlayBadge />
    </div>
  );
};
