'use client';
import React from 'react';
import { PlusIcon, ShieldCheckIcon, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './badge';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { BorderTrail } from './border-trail';

export function Pricing() {
	return (
		<section className="relative min-h-screen overflow-hidden py-24">
			<div id="pricing" className="mx-auto w-full max-w-6xl space-y-6 px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true }}
					className="mx-auto max-w-xl space-y-4 text-center"
				>
					<div className="flex justify-center">
						<div className="rounded-lg border px-4 py-1 font-mono text-xs uppercase tracking-wider">
							Pricing & Atelier Plans
						</div>
					</div>
					<h2 className="mt-4 text-center text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl text-foreground">
						Pricing Based on Your Success
					</h2>
					<p className="text-muted-foreground mt-3 text-center text-sm md:text-base">
						Select the ideal tier for your styling workflow. High-definition neural garment synthesis on your authentic silhouette.
					</p>
				</motion.div>

				<div className="relative">
					<div
						className={cn(
							'z--10 pointer-events-none absolute inset-0 size-full',
							'bg-[linear-gradient(to_right,--theme(--color-foreground/.2)_1px,transparent_1px),linear-gradient(to_bottom,--theme(--color-foreground/.2)_1px,transparent_1px)]',
							'bg-[size:32px_32px]',
							'[mask-image:radial-gradient(ellipse_at_center,var(--background)_10%,transparent)]',
						)}
					/>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="mx-auto w-full max-w-5xl space-y-3"
					>	
						<div className="grid md:grid-cols-3 bg-background relative border p-4 shadow-sm gap-4 md:gap-3">
							<PlusIcon className="absolute -top-3 -left-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -top-3 -right-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -bottom-3 -left-3 size-5.5 text-foreground/50" />
							<PlusIcon className="absolute -right-3 -bottom-3 size-5.5 text-foreground/50" />

							{/* =========================================================
									PLAN 01: WEEKLY PASS ($3.99 / 50 GENERATIONS)
							   ========================================================= */}
							<div className="w-full rounded-lg border border-border/80 px-4 pt-5 pb-5 flex flex-col justify-between bg-card/40">
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<h3 className="leading-none font-semibold text-foreground">Weekly Pass</h3>
										<div className="flex items-center gap-x-1">
											<span className="text-muted-foreground text-xs line-through">$5.99</span>
											<Badge variant="secondary" className="font-mono text-[10px]">33% off</Badge>
										</div>
									</div>
									<p className="text-muted-foreground text-xs pt-1">50 virtual fittings for quick event styling.</p>
								</div>

								{/* Price */}
								<div className="my-6">
									<div className="text-muted-foreground flex items-end gap-0.5 text-lg font-mono">
										<span>$</span>
										<span className="text-foreground -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl">
											3.99
										</span>
										<span>/week</span>
									</div>
									<div className="text-emerald-600 font-mono text-xs font-semibold mt-1">
										50 generations included
									</div>
								</div>

								{/* Features */}
								<div className="space-y-2.5 my-4 font-mono text-xs border-t border-border pt-4">
									<div className="flex items-center gap-2 text-foreground">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>50 Neural Try-On fits</span>
									</div>
									<div className="flex items-center gap-2 text-foreground">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>0.8s drape synthesis</span>
									</div>
									<div className="flex items-center gap-2 text-foreground">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>3-Slot outfit layering</span>
									</div>
									<div className="flex items-center gap-2 text-foreground">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>Standard email support</span>
									</div>
								</div>

								<Button className="w-full font-mono text-xs uppercase tracking-wider" variant="outline" asChild>
									<a href="#">Select Weekly Pass</a>
								</Button>
							</div>

							{/* =========================================================
									PLAN 02: MONTHLY ATELIER ($13.99 / 250 GENERATIONS) - FEATURED
							   ========================================================= */}
							<div className="relative w-full rounded-lg border-2 border-foreground/30 px-4 pt-5 pb-5 flex flex-col justify-between bg-muted/20 shadow-md">
								<BorderTrail
									style={{
										boxShadow:
											'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
									}}
									size={100}
								/>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<h3 className="leading-none font-semibold text-foreground">Monthly Atelier</h3>
										<div className="flex items-center gap-x-1">
											<span className="text-muted-foreground text-xs line-through">$19.99</span>
											<Badge className="font-mono text-[10px]">30% off</Badge>
										</div>
									</div>
									<p className="text-muted-foreground text-xs pt-1">250 virtual fittings for active shoppers.</p>
								</div>

								{/* Price */}
								<div className="my-6">
									<div className="text-muted-foreground flex items-end gap-0.5 text-lg font-mono">
										<span>$</span>
										<span className="text-foreground -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl">
											13.99
										</span>
										<span>/month</span>
									</div>
									<div className="text-emerald-600 font-mono text-xs font-semibold mt-1">
										250 generations included
									</div>
								</div>

								{/* Features */}
								<div className="space-y-2.5 my-4 font-mono text-xs border-t border-border pt-4">
									<div className="flex items-center gap-2 text-foreground font-semibold">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>250 Neural Try-On fits</span>
									</div>
									<div className="flex items-center gap-2 text-foreground">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>Floating overlay on Zara/ASOS</span>
									</div>
									<div className="flex items-center gap-2 text-foreground">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>Full 3-slot physics & 4K zoom</span>
									</div>
									<div className="flex items-center gap-2 text-foreground">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>Priority queue (&lt;0.5s synthesis)</span>
									</div>
								</div>

								<Button className="w-full font-mono text-xs uppercase tracking-wider" asChild>
									<a href="#">Start Monthly Atelier</a>
								</Button>
							</div>

							{/* =========================================================
									PLAN 03: ANNUAL ATELIER ($139.99 / 3,500 GENERATIONS)
							   ========================================================= */}
							<div className="w-full rounded-lg border border-border/80 px-4 pt-5 pb-5 flex flex-col justify-between bg-card/40">
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<h3 className="leading-none font-semibold text-foreground">Annual Atelier</h3>
										<div className="flex items-center gap-x-1">
											<span className="text-muted-foreground text-xs line-through">$239.99</span>
											<Badge variant="secondary" className="font-mono text-[10px]">42% off</Badge>
										</div>
									</div>
									<p className="text-muted-foreground text-xs pt-1">3,500 fittings for creators & stylists.</p>
								</div>

								{/* Price */}
								<div className="my-6">
									<div className="text-muted-foreground flex items-end gap-0.5 text-lg font-mono">
										<span>$</span>
										<span className="text-foreground -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl">
											139.99
										</span>
										<span>/year</span>
									</div>
									<div className="text-emerald-600 font-mono text-xs font-semibold mt-1">
										3,500 generations ($11.66/mo)
									</div>
								</div>

								{/* Features */}
								<div className="space-y-2.5 my-4 font-mono text-xs border-t border-border pt-4">
									<div className="flex items-center gap-2 text-foreground">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>3,500 Neural Try-On fits</span>
									</div>
									<div className="flex items-center gap-2 text-foreground">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>All Monthly features included</span>
									</div>
									<div className="flex items-center gap-2 text-foreground">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>VIP Concierge support</span>
									</div>
									<div className="flex items-center gap-2 text-foreground">
										<CheckCircle2 className="size-3.5 text-emerald-600 flex-shrink-0" />
										<span>Early beta AI model access</span>
									</div>
								</div>

								<Button className="w-full font-mono text-xs uppercase tracking-wider" variant="outline" asChild>
									<a href="#">Select Annual Atelier</a>
								</Button>
							</div>
						</div>

						<div className="text-muted-foreground flex items-center justify-center gap-x-2 text-sm pt-1">
							<ShieldCheckIcon className="size-4" />
							<span>Instant account activation • 100% money-back guarantee • No hidden fees</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
