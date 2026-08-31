import type { PageId } from './i18n/content.generated';
import { seoFaqs, siteConfig, type FaqItem } from './site';
import { crawlPhotoMeta } from './page-images';

export const faqBasePath = '/faq/';

export function getFaqPath(slug: string): string {
	return `${faqBasePath}${slug}/`;
}

export function absoluteFaqUrl(slug?: string): string {
	return new URL(slug ? getFaqPath(slug) : faqBasePath, siteConfig.url).href;
}

export function getFaqBySlug(slug: string): FaqItem | undefined {
	return seoFaqs.find((item) => item.slug === slug);
}

const PAGE_FAQ_SLUGS: Partial<Record<PageId, readonly string[]>> = {
	features: [
		'esp-wallhack-radar-or-aimbot',
		'pmc-raids-and-scav-runs',
		'are-tarkov-cheats-undetected-in-2026',
	],
	pricing: [
		'how-are-licenses-delivered',
		'buy-undetected-tarkov-cheats-windows-pc',
		'what-are-tarkov-cheats',
	],
	hacks: [
		'what-are-tarkov-cheats',
		'esp-wallhack-radar-or-aimbot',
		'are-tarkov-cheats-undetected-in-2026',
	],
	'tarkov-esp': ['what-is-a-tarkov-wallhack', 'esp-wallhack-radar-or-aimbot', 'pmc-raids-and-scav-runs'],
	'tarkov-aimbot': ['esp-wallhack-radar-or-aimbot', 'pmc-raids-and-scav-runs', 'are-tarkov-cheats-undetected-in-2026'],
	radar: ['does-tarkov-cheats-include-radar-hack', 'esp-wallhack-radar-or-aimbot', 'pmc-raids-and-scav-runs'],
	updates: [
		'where-to-check-updates',
		'battleye-anti-cheat-and-tarkov-cheats',
		'are-tarkov-cheats-undetected-in-2026',
	],
	setup: ['how-are-licenses-delivered', 'how-to-contact-support', 'where-to-check-updates'],
	undetected: [
		'are-tarkov-cheats-undetected-in-2026',
		'battleye-anti-cheat-and-tarkov-cheats',
		'where-to-check-updates',
	],
	wallhack: ['what-is-a-tarkov-wallhack', 'esp-wallhack-radar-or-aimbot', 'pmc-raids-and-scav-runs'],
	battleye: [
		'battleye-anti-cheat-and-tarkov-cheats',
		'where-to-check-updates',
		'are-tarkov-cheats-undetected-in-2026',
	],
};

export function getFaqsForPage(pageId: PageId): FaqItem[] {
	const slugs = PAGE_FAQ_SLUGS[pageId];
	if (!slugs) return [];
	return slugs.map((slug) => getFaqBySlug(slug)).filter((item): item is FaqItem => Boolean(item));
}

/** Neighbouring FAQ items for internal linking on answer pages. */
export function getRelatedFaqs(slug: string, count = 4): FaqItem[] {
	const index = seoFaqs.findIndex((item) => item.slug === slug);
	if (index < 0) return seoFaqs.slice(0, count);

	const related: FaqItem[] = [];
	for (let offset = 1; related.length < count && offset < seoFaqs.length; offset += 1) {
		related.push(seoFaqs[(index + offset) % seoFaqs.length]);
	}
	return related;
}

export function getFaqCrawlImage(item: FaqItem) {
	return crawlPhotoMeta(item.slug, item.question, item.seoDescription);
}

/** English FAQ answer routes for sitemap-en.xml — every URL includes a crawl photo. */
export function getFaqSitemapEntries() {
	const lastmod = '2026-08-11';

	return seoFaqs.map((item) => {
		const photo = getFaqCrawlImage(item);
		return {
			path: getFaqPath(item.slug),
			lastmod,
			priority: 0.72,
			changefreq: 'monthly' as const,
			images: [
				{
					url: photo.url,
					title: photo.title,
					caption: photo.caption,
				},
			],
		};
	});
}
