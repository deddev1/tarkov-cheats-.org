/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Tarkov Cheats',
	/** Short product label if needed */
	shortName: 'Tarkov',
	/** Canonical origin — no trailing slash */
	url: 'https://tarkovcheats.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@tarkovcheats.org',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov',

	/** Game this template instance targets */
	game: 'Escape from Tarkov',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'BattlEye',

	logo: '/images/tarkov-cheats-logo.webp',
	logoRaster: '/images/tarkov-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Tarkov Cheats logo',
	defaultOgImage: '/images/tarkov-cheats-hero-1024w.webp',
	heroImage: '/images/tarkov-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#C6A15B',
		bg: '#0A0B0A',
		soft: '#D8B86A',
		deep: '#756039',
		hover: '#D8B86A',
		panel: '#121513',
		elevated: '#191D1A',
		ink: '#FFFFFF',
		inkMuted: '#E8EBE8',
		inkFaint: '#C5CBC6',
		line: '#303530',
		input: '#0E110F',
		ok: '#78A66A',
		warn: '#B85C50',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'tarkov cheats',
		list: [
			'tarkov cheats',
			'escape from tarkov cheats',
			'eft cheats',
			'tarkov esp',
			'tarkov aimbot',
			'tarkov wallhack',
			'undetected tarkov cheats',
			'best tarkov cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /tarkov-cheats/ owns the head term. */
		homeTitle: 'Tarkov Cheats | Features, Store & Status',
		homeDescription:
			'Compare Tarkov Cheats features, store plans, and live BattlEye status for Escape from Tarkov on Windows PC. ESP, soft aim, and radar in one license.',
		featuresTitle: 'Tarkov ESP & Aimbot Features | {brand}',
		featuresDescription:
			'See what is in one {game} license on Windows PC: ESP wallhack, soft aim, 2D radar, loot tools, and {antiCheat} patch updates.',
		storeTitle: 'Tarkov Cheats Store | Monthly & Lifetime',
		storeDescription:
			'Buy tarkov cheats plans for Windows PC. Monthly $35 or lifetime $150. Same ESP, aimbot, and radar on both. Digital delivery after checkout.',
		statusTitle: 'Tarkov Cheats Status | {antiCheat} Updates',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check this page before you queue a raid on Windows PC.',
		/** Money page meta — primary target for "tarkov cheats". */
		previewTitle: 'Tarkov Cheats | EFT ESP, Aimbot & Radar',
		previewDescription:
			'Buy undetected tarkov cheats for Escape from Tarkov on Windows PC. ESP, aimbot, radar, and BattlEye rebuilds in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can raid faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Escape from Tarkov — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — map-specific notes on ESP, soft aim, radar, and support on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — raid tips, ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC players who raid.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for Escape from Tarkov on Windows PC.',
		blogLabel: 'Tarkov Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you raid.',
		previewIntro:
			'{brand} for Escape from Tarkov — ESP wallhack, soft aim, 2D radar, and BattlEye rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Recent notes from buyers after PMC raids and Scav runs on Windows PC.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-13',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/tarkov-cheats-esp.webp',
				title: 'ESP overlay in Escape from Tarkov',
				caption: 'Player ESP boxes and distance readouts during a raid',
			},
			{
				src: '/images/tarkov-cheats-wallhack.webp',
				title: 'Wallhack visibility for Tarkov raids',
				caption: 'PMC and Scav outlines through walls and terrain',
			},
			{
				src: '/images/tarkov-cheats-aimbot.webp',
				title: 'Soft aim assist for Tarkov',
				caption: 'Configurable soft aim FOV and bone priority',
			},
			{
				src: '/images/tarkov-cheats-aimbot-view.webp',
				title: 'Aimbot view in Tarkov Cheats',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/tarkov-cheats-radar.webp',
				title: '2D radar threat overlay',
				caption: 'Radar cues for flanks near extracts',
			},
			{
				src: '/images/tarkov-cheats-raid.webp',
				title: 'Tarkov Cheats license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
