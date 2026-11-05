'use client';

import React from 'react';
import Image from 'next/image';
import { PlusIcon, ShieldCheckIcon, CheckCircle2, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BorderTrail } from '@/components/ui/border-trail';
import { cn } from '@/lib/utils';

export function StackedExperience() {
	return (
		<div className="relative w-full max-w-6xl mx-auto px-4 py-20 space-y-36">
			{/* Global Intro Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
				viewport={{ once: true }}
				className="mx-auto max-w-xl space-y-5 text-center"
			>
				<div className="flex justify-center">
					<div className="rounded-lg border px-4 py-1 font-mono text-xs uppercase tracking-wider">
						The alltryon Experience
					</div>
				</div>
				<h2 className="mt-5 text-center text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl text-foreground">
					Digital Haute-Couture on Your Authentic Silhouette
				</h2>
				<p className="text-muted-foreground mt-5 text-center text-sm md:text-base">
					Explore how our neural drape pipeline, cross-app floating widget, and modular layering engine eliminate sizing guesswork forever.
				</p>
			</motion.div>

			{/* =========================================================================
					BLOCK 01: VIRTUAL ATELIER
					LEFT: Title, Narrative & Specs
					RIGHT: Blueprint Visual Showcase Card with BorderTrail
			   ========================================================================= */}
			<section id="fittings" className="relative">
				<div
					className={cn(
						'z--10 pointer-events-none absolute inset-0 size-full',
						'bg-[linear-gradient(to_right,--theme(--color-foreground/.2)_1px,transparent_1px),linear-gradient(to_bottom,--theme(--color-foreground/.2)_1px,transparent_1px)]',
						'bg-[size:32px_32px]',
						'[mask-image:radial-gradient(ellipse_at_center,var(--background)_15%,transparent)]',
					)}
				/>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
					{/* Left Column: Title & Information */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="lg:col-span-5 space-y-6"
					>
						<div className="space-y-4">
							<div className="rounded-lg border px-4 py-1 font-mono text-xs uppercase tracking-wider w-fit">
								01 • Virtual Atelier
							</div>
							<h3 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground leading-tight">
								From Boutique Mannequin to Real Silhouette
							</h3>
							<p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
								Photograph any garment in a physical boutique or import lookbooks from Zara, Trendyol, and ASOS. Zero silhouette warping or cartoon avatars.
							</p>
						</div>

						{/* Architectural Bullet Points */}
						<div className="space-y-3 pt-2">
							<div className="flex items-start gap-2.5 text-xs text-foreground">
								<CheckCircle2 className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
								<span>Sub-millimeter stitch, seam, and lapel curvature calculation</span>
							</div>
							<div className="flex items-start gap-2.5 text-xs text-foreground">
								<CheckCircle2 className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
								<span>True body depth mapping without silhouette warping</span>
							</div>
							<div className="flex items-start gap-2.5 text-xs text-foreground">
								<CheckCircle2 className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
								<span>Ultra-high definition 4K pinch-to-zoom textile inspection</span>
							</div>
						</div>

						{/* Action & Metric */}
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
							<Button className="w-full sm:w-auto font-mono text-xs uppercase tracking-wider" asChild>
								<a href="#download" className="flex items-center gap-2">
									<span>Try On Your Silhouette</span>
									<ArrowRight className="size-3.5" />
								</a>
							</Button>
							<div className="text-muted-foreground text-xs font-mono">
								<span className="text-foreground font-bold">99.6%</span> drape accuracy
							</div>
						</div>
					</motion.div>

					{/* Right Column: Blueprint Card with BorderTrail */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="lg:col-span-7"
					>
						<div className="relative bg-background border p-5 shadow-sm space-y-4">
							<PlusIcon className="absolute -top-3 -left-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -top-3 -right-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -bottom-3 -left-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -right-3 -bottom-3 size-5.5 text-foreground/50" />

							{/* Inner Featured Box with BorderTrail */}
							<div className="relative w-full rounded-lg border px-4 pt-5 pb-4 flex flex-col justify-between">
								<BorderTrail
									style={{
										boxShadow:
											'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
									}}
									size={100}
								/>

								<div className="flex items-center justify-between">
									<div>
										<h4 className="leading-none font-semibold text-foreground">Boutique Capture Stage</h4>
										<p className="text-muted-foreground text-xs mt-1">Real-time neural silk georgette physics.</p>
									</div>
									<Badge>99.6% Drape</Badge>
								</div>

								{/* Showcase Image */}
								<div className="relative aspect-[16/10] w-full my-5 rounded-md overflow-hidden border bg-muted/20">
									<Image
										src="/assets/virtual_tryon_showcase_stage.webp"
										alt="alltryon Virtual Try-On Stage"
										fill
										className="object-contain"
										priority
									/>
								</div>

								<div className="flex items-center justify-between pt-2 border-t border-border">
									<div className="text-muted-foreground flex items-end gap-0.5 text-lg font-mono">
										<span>Synthesis:</span>
										<span className="text-foreground font-extrabold text-2xl ml-1">0.8s</span>
									</div>
									<Badge variant="secondary" className="font-mono text-xs">Zero Sizing Returns</Badge>
								</div>
							</div>

							<div className="text-muted-foreground flex items-center justify-center gap-x-2 text-xs pt-1">
								<ShieldCheckIcon className="size-3.5 text-emerald-600" />
								<span>Zero sizing guesswork • Real human portraits preserved</span>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* =========================================================================
					BLOCK 02: FLOATING UTILITY
					LEFT: Blueprint Visual Showcase Card with BorderTrail (Phone Mockup)
					RIGHT: Title, Narrative & Specs
			   ========================================================================= */}
			<section id="floating-widget" className="relative">
				<div
					className={cn(
						'z--10 pointer-events-none absolute inset-0 size-full',
						'bg-[linear-gradient(to_right,--theme(--color-foreground/.2)_1px,transparent_1px),linear-gradient(to_bottom,--theme(--color-foreground/.2)_1px,transparent_1px)]',
						'bg-[size:32px_32px]',
						'[mask-image:radial-gradient(ellipse_at_center,var(--background)_15%,transparent)]',
					)}
				/>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
					{/* Left Column: Blueprint Card with BorderTrail (Phone Mockup) */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="lg:col-span-7 order-2 lg:order-1"
					>
						<div className="relative bg-background border p-5 shadow-sm space-y-4">
							<PlusIcon className="absolute -top-3 -left-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -top-3 -right-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -bottom-3 -left-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -right-3 -bottom-3 size-5.5 text-foreground/50" />

							{/* Inner Featured Box with BorderTrail */}
							<div className="relative w-full rounded-lg border px-4 pt-5 pb-4 flex flex-col justify-between items-center">
								<BorderTrail
									style={{
										boxShadow:
											'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
									}}
									size={100}
								/>

								<div className="w-full flex items-center justify-between">
									<div>
										<h4 className="leading-none font-semibold text-foreground">Live App Demonstration</h4>
										<p className="text-muted-foreground text-xs mt-1">Zara lookbook extracted in real time.</p>
									</div>
									<Badge>Active Widget</Badge>
								</div>

								{/* Mobile Mockup */}
								<div className="relative w-[180px] sm:w-[220px] aspect-[9/16] my-5 rounded-xl overflow-hidden border shadow-lg bg-neutral-900">
									<Image
										src="/assets/app_mockup.png"
										alt="alltryon Floating Widget Demonstration"
										fill
										className="object-cover object-top"
									/>
								</div>

								<div className="w-full flex items-center justify-between pt-2 border-t border-border">
									<div className="text-muted-foreground flex items-end gap-0.5 text-lg font-mono">
										<span>⚡ Speed:</span>
										<span className="text-foreground font-extrabold text-2xl ml-1">0.8s</span>
									</div>
									<Badge variant="secondary" className="font-mono text-xs">1-Tap Fit</Badge>
								</div>
							</div>

							<div className="text-muted-foreground flex items-center justify-center gap-x-2 text-xs pt-1">
								<ShieldCheckIcon className="size-3.5 text-emerald-600" />
								<span>Private AES-256 Cloudflare R2 vault • Zero public model training</span>
							</div>
						</div>
					</motion.div>

					{/* Right Column: Title & Information */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="lg:col-span-5 space-y-6 order-1 lg:order-2"
					>
						<div className="space-y-4">
							<div className="rounded-lg border px-4 py-1 font-mono text-xs uppercase tracking-wider w-fit">
								02 • Floating Utility
							</div>
							<h3 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground leading-tight">
								Browse Zara or Trendyol. Fit with One Single Tap.
							</h3>
							<p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
								No screenshots or switching apps. The alltryon Floating Overlay sits quietly while you browse shopping catalogs, capturing lookbooks on the fly.
							</p>
						</div>

						{/* Architectural Bullet Points */}
						<div className="space-y-3 pt-2">
							<div className="flex items-start gap-2.5 text-xs text-foreground">
								<CheckCircle2 className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
								<span>Runs seamlessly over any shopping app or mobile browser</span>
							</div>
							<div className="flex items-start gap-2.5 text-xs text-foreground">
								<CheckCircle2 className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
								<span>Automatic background and mannequin removal</span>
							</div>
							<div className="flex items-start gap-2.5 text-xs text-foreground">
								<CheckCircle2 className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
								<span>Multi-garment layering (e.g. blazer + pants simultaneously)</span>
							</div>
						</div>

						{/* Action & Metric */}
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
							<Button className="w-full sm:w-auto font-mono text-xs uppercase tracking-wider" asChild>
								<a href="#download" className="flex items-center gap-2">
									<span>Download for iOS & Android</span>
									<ArrowRight className="size-3.5" />
								</a>
							</Button>
							<div className="text-muted-foreground text-xs font-mono">
								<span className="text-foreground font-bold">100%</span> private vault
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* =========================================================================
					BLOCK 03: MODULAR PHYSICS
					LEFT: Title, Narrative & Specs
					RIGHT: Blueprint Visual Showcase Card with BorderTrail (3-Slot Stack)
			   ========================================================================= */}
			<section id="how-it-works" className="relative">
				<div
					className={cn(
						'z--10 pointer-events-none absolute inset-0 size-full',
						'bg-[linear-gradient(to_right,--theme(--color-foreground/.2)_1px,transparent_1px),linear-gradient(to_bottom,--theme(--color-foreground/.2)_1px,transparent_1px)]',
						'bg-[size:32px_32px]',
						'[mask-image:radial-gradient(ellipse_at_center,var(--background)_15%,transparent)]',
					)}
				/>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
					{/* Left Column: Title & Information */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="lg:col-span-5 space-y-6"
					>
						<div className="space-y-4">
							<div className="rounded-lg border px-4 py-1 font-mono text-xs uppercase tracking-wider w-fit">
								03 • Modular Physics
							</div>
							<h3 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground leading-tight">
								Style Complete Outfits with Volumetric Seam Physics
							</h3>
							<p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
								Combine outerwear from Zara with trousers from Mango and your favorite base layer seamlessly. Our engine detects seam collisions and nests collars accurately.
							</p>
						</div>

						{/* Architectural Bullet Points */}
						<div className="space-y-3 pt-2">
							<div className="flex items-start gap-2.5 text-xs text-foreground">
								<CheckCircle2 className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
								<span>Biometric height, shoulder, and posture preservation</span>
							</div>
							<div className="flex items-start gap-2.5 text-xs text-foreground">
								<CheckCircle2 className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
								<span>Collars rest naturally over lapels; hemlines fall over belts</span>
							</div>
							<div className="flex items-start gap-2.5 text-xs text-foreground">
								<CheckCircle2 className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
								<span>Ambient studio lighting coherence matches authentic photography</span>
							</div>
						</div>

						{/* Action & Metric */}
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
							<Button className="w-full sm:w-auto font-mono text-xs uppercase tracking-wider" asChild>
								<a href="#download" className="flex items-center gap-2">
									<span>Explore 3-Slot Engine</span>
									<ArrowRight className="size-3.5" />
								</a>
							</Button>
							<div className="text-muted-foreground text-xs font-mono">
								<span className="text-foreground font-bold">100%</span> physical drape
							</div>
						</div>
					</motion.div>

					{/* Right Column: Blueprint Card with BorderTrail (3-Slot Stack) */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="lg:col-span-7"
					>
						<div className="relative bg-background border p-5 shadow-sm space-y-4">
							<PlusIcon className="absolute -top-3 -left-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -top-3 -right-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -bottom-3 -left-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -right-3 -bottom-3 size-5.5 text-foreground/50" />

							{/* Inner Featured Box with BorderTrail */}
							<div className="relative w-full rounded-lg border px-4 pt-5 pb-4 flex flex-col justify-between">
								<BorderTrail
									style={{
										boxShadow:
											'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
									}}
									size={100}
								/>

								<div className="flex items-center justify-between">
									<div>
										<h4 className="leading-none font-semibold text-foreground">3-Slot Layering Engine</h4>
										<p className="text-muted-foreground text-xs mt-1">Smart collision detection and nesting.</p>
									</div>
									<Badge>Physics Engine</Badge>
								</div>

								{/* 3 Slots Visual Stack */}
								<div className="space-y-2.5 my-5">
									<div className="p-3 rounded-lg border bg-background flex items-center justify-between text-xs">
										<div>
											<span className="font-mono text-muted-foreground block text-[10px]">SLOT 03</span>
											<span className="font-semibold text-foreground">Outerwear & Blazers</span>
										</div>
										<Badge variant="outline" className="font-mono text-[10px]">Lapel Nesting</Badge>
									</div>
									<div className="p-3 rounded-lg border bg-background flex items-center justify-between text-xs">
										<div>
											<span className="font-mono text-muted-foreground block text-[10px]">SLOT 02</span>
											<span className="font-semibold text-foreground">Trousers & Denim</span>
										</div>
										<Badge variant="outline" className="font-mono text-[10px]">Waist Drape</Badge>
									</div>
									<div className="p-3 rounded-lg border bg-background flex items-center justify-between text-xs">
										<div>
											<span className="font-mono text-muted-foreground block text-[10px]">SLOT 01</span>
											<span className="font-semibold text-foreground">Silk Shirts & Base</span>
										</div>
										<Badge variant="outline" className="font-mono text-[10px]">Silhouette Anchor</Badge>
									</div>
								</div>

								<div className="flex items-center justify-between pt-2 border-t border-border">
									<div className="text-muted-foreground flex items-end gap-0.5 text-lg font-mono">
										<span>Slots:</span>
										<span className="text-foreground font-extrabold text-2xl ml-1">3 Layers</span>
									</div>
									<Badge variant="secondary" className="font-mono text-xs">Full Outfit Fit</Badge>
								</div>
							</div>

							<div className="text-muted-foreground flex items-center justify-center gap-x-2 text-xs pt-1">
								<ShieldCheckIcon className="size-3.5 text-emerald-600" />
								<span>Zero body distortion • Authentic skin undertone retention</span>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* =========================================================================
					BLOCK 04: GLOBAL COMPATIBILITY & REVIEWS
					LEFT: Blueprint Visual Showcase Card with BorderTrail (Garment Matrix)
					RIGHT: Title, Narrative, Stylist Quote & Specs
			   ========================================================================= */}
			<section id="compatibility" className="relative">
				<div
					className={cn(
						'z--10 pointer-events-none absolute inset-0 size-full',
						'bg-[linear-gradient(to_right,--theme(--color-foreground/.2)_1px,transparent_1px),linear-gradient(to_bottom,--theme(--color-foreground/.2)_1px,transparent_1px)]',
						'bg-[size:32px_32px]',
						'[mask-image:radial-gradient(ellipse_at_center,var(--background)_15%,transparent)]',
					)}
				/>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
					{/* Left Column: Blueprint Card with BorderTrail (Garment Matrix & Metrics) */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="lg:col-span-7 order-2 lg:order-1"
					>
						<div className="relative bg-background border p-5 shadow-sm space-y-4">
							<PlusIcon className="absolute -top-3 -left-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -top-3 -right-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -bottom-3 -left-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -right-3 -bottom-3 size-5.5 text-foreground/50" />

							{/* Inner Featured Box with BorderTrail */}
							<div className="relative w-full rounded-lg border px-4 pt-5 pb-4 flex flex-col justify-between">
								<BorderTrail
									style={{
										boxShadow:
											'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
									}}
									size={100}
								/>

								<div className="flex items-center justify-between">
									<div>
										<h4 className="leading-none font-semibold text-foreground">Supported Garments</h4>
										<p className="text-muted-foreground text-xs mt-1">Import from online stores or dressing room photos.</p>
									</div>
									<Badge>100% Support</Badge>
								</div>

								{/* Category Matrix */}
								<div className="grid grid-cols-2 gap-2.5 my-5">
									<div className="p-2.5 rounded-lg border bg-background text-xs">
										<span className="font-mono text-[9px] text-muted-foreground block">CAT 01</span>
										<span className="font-semibold text-foreground block truncate">Tailored Blazers</span>
										<span className="text-[10px] text-muted-foreground">Zara • Mango</span>
									</div>
									<div className="p-2.5 rounded-lg border bg-background text-xs">
										<span className="font-mono text-[9px] text-muted-foreground block">CAT 02</span>
										<span className="font-semibold text-foreground block truncate">Gala Gowns</span>
										<span className="text-[10px] text-muted-foreground">Farfetch • ASOS</span>
									</div>
									<div className="p-2.5 rounded-lg border bg-background text-xs">
										<span className="font-mono text-[9px] text-muted-foreground block">CAT 03</span>
										<span className="font-semibold text-foreground block truncate">Denim & Shirting</span>
										<span className="text-[10px] text-muted-foreground">Trendyol • Levi&apos;s</span>
									</div>
									<div className="p-2.5 rounded-lg border bg-background text-xs">
										<span className="font-mono text-[9px] text-muted-foreground block">CAT 04</span>
										<span className="font-semibold text-foreground block truncate">Sculpted Knits</span>
										<span className="text-[10px] text-muted-foreground">Boutique Snaps</span>
									</div>
								</div>

								<div className="flex items-center justify-between pt-2 border-t border-border">
									<div className="text-muted-foreground flex items-end gap-0.5 text-lg font-mono">
										<span>Volume:</span>
										<span className="text-foreground font-extrabold text-2xl ml-1">50k+</span>
									</div>
									<Badge variant="secondary" className="font-mono text-xs">Fitted Looks</Badge>
								</div>
							</div>

							<div className="text-muted-foreground flex items-center justify-center gap-x-2 text-xs pt-1">
								<ShieldCheckIcon className="size-3.5 text-emerald-600" />
								<span>Compatible with Zara, Trendyol, ASOS, Farfetch & Global Boutiques</span>
							</div>
						</div>
					</motion.div>

					{/* Right Column: Title, Stylist Quote & Information */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="lg:col-span-5 space-y-6 order-1 lg:order-2"
					>
						<div className="space-y-4">
							<div className="rounded-lg border px-4 py-1 font-mono text-xs uppercase tracking-wider w-fit">
								04 • Global Compatibility
							</div>
							<h3 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground leading-tight">
								Works with Every Store. Trusted by Leading Stylists.
							</h3>
							<p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
								See how fashion directors in Milan, London, and Paris eliminate sizing returns with alltryon.
							</p>
						</div>

						{/* Stylist Quote Box */}
						<div className="p-4 rounded-lg border bg-muted/20 space-y-2">
							<p className="text-xs sm:text-sm text-foreground italic leading-relaxed">
								&ldquo;Before purchasing from Zara or Farfetch, our stylists run every look through alltryon. Seeing authentic drape completely eliminated returns.&rdquo;
							</p>
							<div className="flex items-center justify-between pt-2 border-t border-border/50 text-xs">
								<span className="font-semibold text-foreground">Elena Rostova</span>
								<span className="text-muted-foreground font-mono text-[11px]">Fashion Director, Milan</span>
							</div>
						</div>

						{/* Action & Metric */}
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
							<Button className="w-full sm:w-auto font-mono text-xs uppercase tracking-wider" asChild>
								<a href="#download" className="flex items-center gap-2">
									<span>Get Started Free</span>
									<ArrowRight className="size-3.5" />
								</a>
							</Button>
							<div className="text-muted-foreground text-xs font-mono">
								<span className="text-foreground font-bold">94%</span> return reduction
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
