export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/tarkov-cheats/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/tarkov-cheats/' },
	{ label: fillBrandTokens('{game} esp'), href: '/tarkov-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/tarkov-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/tarkov-cheats/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/tarkov-esp/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/tarkov-radar-hack/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/tarkov-cheats/' },
	{ label: 'Aimbot', href: '/tarkov-aimbot/' },
	{ label: 'ESP', href: '/tarkov-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Home', href: '/' },
	{ label: fillBrandTokens('{brand} cheats'), href: '/tarkov-cheats/' },
	{ label: 'Status', href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP'), href: '/tarkov-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/tarkov-aimbot/' },
	{ label: 'Radar', href: '/tarkov-radar-hack/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Store', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'FAQ', href: '/faq/' },
	{ label: 'Reviews', href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel'), href: '/blog/' },
	{ label: 'Support', href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'One license for ESP, radar, and aimbot on Windows PC, with {antiCheat} rebuilds after patches.',
		slug: 'what-are-tarkov-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, radar, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-tarkov-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in PMC raids and Scav runs?',
		answer:
			'Yes. ESP, radar, and aimbot are built for {game} raid flow — reading PMCs and Scavs, spotting loot, and staying aware near extracts.',
		slug: 'pmc-raids-and-scav-runs',
		seoTitle: 'PMC Raid and Scav Support | FAQ',
		seoDescription:
			'{brand} works in PMC raids and Scav runs — ESP, radar, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after an Escape from Tarkov or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when an Escape from Tarkov or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows PMCs, Scavs, and loot through walls. {brand} includes distance readouts, extract cues, and toggleable categories.',
		slug: 'what-is-a-tarkov-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals PMCs, Scavs, and loot through walls — with distance, extracts, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a radar hack?',
		answer:
			'Yes. {brand} includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and extract holds.',
		slug: 'does-tarkov-cheats-include-radar-hack',
		seoTitle: 'Does {brand} Include a Radar Hack? | FAQ',
		seoDescription:
			'Yes — {brand} includes 2D radar overlays for nearby threats outside your FOV.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you raid.',
		slug: 'battleye-anti-cheat-and-tarkov-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-tarkov-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0',
		rating: 5,
		text: 'Running soft aim on Customs for two weeks now. Took maybe ten minutes to dial smoothing so it does not look robotic in kill cams. No flags this wipe and my KD actually moved up a bit.',
		short: 'Soft aim on Customs took ten minutes to tune. Clean so far this wipe.',
		slug: 'tarkov-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0 — 5/5 | {brand}',
		seoDescription: '@xKrypt0 shares a 5/5 soft aim review after Customs raids on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'ESP is solid on Shoreline Scav runs — I peek Resort hallways way less blind now. Knocked one star because loot filters took a session to sort out, but once set up it saves time.',
		short: 'ESP helps on Shoreline Scavs. Loot filters were fiddly at first.',
		slug: 'tarkov-esp-scav-run-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates ESP 4/5 for Shoreline Scav runs on Windows PC.',
		date: '2026-07-19',
		tag: 'Scav run',
	}),
	reviewMeta({
		handle: 'WipeKing47',
		rating: 5,
		text: 'Switched mid-wipe after my old sub died on patch day. Loader tripped Defender once; support replied on Discord in under an hour with the exclusion steps. Still running after the last BattlEye bump — lifetime felt fair.',
		short: 'Switched mid-wipe. Still up after the last BE update.',
		slug: 'tarkov-cloud-dma-review-dma-wizard',
		seoTitle: 'Setup Review by @WipeKing47 — 5/5 | {brand}',
		seoDescription: '@WipeKing47 left a 5/5 review after setup help and a {antiCheat} rebuild on Windows PC.',
		date: '2026-06-27',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'FOV ring is adjustable which matters on 1440p. I drop smoothing in Dorms and bump it for Woods bolt work. Menu is crowded but you learn where everything lives after one raid.',
		short: 'FOV and smoothing are easy to tune per map.',
		slug: 'tarkov-soft-aim-review-ctrl-player99',
		seoTitle: 'Soft Aim Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates soft aim tuning 4/5 for Dorms and Woods on Windows PC.',
		date: '2026-07-11',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'Works fine now but night one was annoying — Windows kept quarantining the loader. Ticket answered in about two hours with a clean walkthrough. ESP on Woods is worth it once you are actually in raid.',
		short: 'Rough first launch, solid ESP on Woods after support helped.',
		slug: 'tarkov-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates setup 3/5; ESP on Woods improved after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'Bought it mostly for loot filters on Lighthouse. Seeing ledx and gpu spawns without tabbing out is huge. Extract timer overlay is a small thing but it stopped me timing extracts wrong.',
		short: 'Loot filters on Lighthouse paid for the month.',
		slug: 'tarkov-loot-esp-review-lootgoblinx',
		seoTitle: 'Loot ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription: '@lootGoblinx rates loot ESP 5/5 for Lighthouse farming on Windows PC.',
		date: '2026-08-01',
		tag: 'Loot ESP',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'Per-weapon profiles are clutch when you swap SMG to DMR mid-raid. Status page was vague during the last patch but the rebuild landed within 24 hours. Would have liked a clearer ETA, hence 4 stars.',
		short: 'Weapon profiles help in Dorms. Back online within a day after patch.',
		slug: 'tarkov-soft-aim-raid-review-rankedgrind42',
		seoTitle: 'Raid Review by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates raid tools 4/5 after a {antiCheat} patch on Windows PC.',
		date: '2026-07-07',
		tag: 'Raid',
	}),
	reviewMeta({
		handle: 'vanLifeEFT',
		rating: 5,
		text: 'Duos on Streets near extract — radar tagged a third party I never heard footsteps for. Pair that with player boxes and we stopped donating kits at the last minute.',
		short: 'Radar caught a third party at extract on Streets.',
		slug: 'tarkov-radar-hack-review-vanlifeeft',
		seoTitle: 'Radar Review by @vanLifeEFT — 5/5 | {brand}',
		seoDescription: '@vanLifeEFT rates radar 5/5 for Streets duos near extract on Windows PC.',
		date: '2026-07-28',
		tag: 'Radar',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'I raid on weird hours so patch timing matters. Status post went up the same evening and I was back in the next morning. Last provider left me waiting almost a week after 0.16 dropped.',
		short: 'Back online next morning after patch. Better than my old sub.',
		slug: 'tarkov-battleye-update-review-patchdaymike',
		seoTitle: 'Patch Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates post-patch status updates 4/5 on Windows PC.',
		date: '2026-06-09',
		tag: 'Patch day',
	}),
	reviewMeta({
		handle: 'snipezOnly',
		rating: 5,
		text: 'Bolty on Woods with light soft aim — takes the jitter off without looking like a laser. I keep ESP minimal (scav lines + distance) so the screen stays readable in bushes.',
		short: 'Bolty soft aim on Woods feels natural. Light ESP setup.',
		slug: 'tarkov-sniper-soft-aim-review-snipezonly',
		seoTitle: 'Sniper Review by @snipezOnly — 5/5 | {brand}',
		seoDescription: '@snipezOnly rates bolty soft aim 5/5 with light ESP on Woods.',
		date: '2026-07-31',
		tag: 'Sniper',
	}),
] as const satisfies readonly CustomerReview[];

const reviewRatingSum = customerReviews.reduce((sum, review) => sum + review.rating, 0);

export const customerReviewStats = {
	averageRating: Math.round((reviewRatingSum / customerReviews.length) * 10) / 10,
	totalCount: customerReviews.length,
} as const;
