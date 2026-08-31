import type { PageId } from './i18n/content.generated';

import type { LocaleCode } from './i18n/locales';

import { localizeInternalHref } from './i18n/routing';

import { getT } from '../i18n/server';



export type InternalLink = {

	label: string;

	href: string;

};



const PILLAR_KEYS = {

	cheats: { labelKey: 'homeSeo.linkTarkovCheats', href: '/tarkov-cheats/' },

	features: { labelKey: 'nav.features', href: '/features/' },

	store: { labelKey: 'nav.store', href: '/pricing/' },

	status: { labelKey: 'nav.status', href: '/updates/' },

	esp: { labelKey: 'nav.esp', href: '/tarkov-esp/' },

	aimbot: { labelKey: 'nav.aimbot', href: '/tarkov-aimbot/' },

	radar: { labelKey: 'homeSeo.linkRadar', href: '/tarkov-radar-hack/' },

	setup: { labelKey: 'nav.setup', href: '/setup/' },

	faq: { labelKey: 'nav.faq', href: '/faq/' },

	reviews: { labelKey: 'nav.reviews', href: '/reviews/' },

	support: { labelKey: 'homeSeo.linkSupport', href: '/support/' },

	blog: { labelKey: 'common.blog', href: '/blog/' },

} as const;



type PillarKey = keyof typeof PILLAR_KEYS;



function link(key: PillarKey, locale: LocaleCode): InternalLink {

	const t = getT(locale);

	const meta = PILLAR_KEYS[key];

	return {

		label: t(meta.labelKey),

		href: localizeInternalHref(meta.href, locale),

	};

}



/** Curated pillar links per page — localized labels and hrefs. */

const RELATED_BY_PAGE: Partial<Record<PageId, PillarKey[]>> = {

	features: ['cheats', 'esp', 'aimbot', 'radar', 'store', 'faq'],

	pricing: ['features', 'cheats', 'setup', 'faq', 'reviews'],

	updates: ['cheats', 'setup', 'features', 'faq', 'store'],

	hacks: ['esp', 'aimbot', 'radar', 'store', 'status', 'faq'],

	'tarkov-esp': ['aimbot', 'radar', 'cheats', 'features', 'status', 'store'],

	'tarkov-aimbot': ['esp', 'radar', 'cheats', 'features', 'status', 'store'],

	radar: ['esp', 'aimbot', 'cheats', 'features', 'store'],

	setup: ['store', 'cheats', 'status', 'faq', 'support'],

	support: ['faq', 'setup', 'status', 'store', 'cheats'],

	faq: ['store', 'cheats', 'features', 'setup', 'status'],

};



const DEFAULT_RELATED: PillarKey[] = ['cheats', 'features', 'store', 'status', 'setup'];



export function getRelatedPillarLinks(pageId: PageId, locale: LocaleCode = 'en'): InternalLink[] {

	const keys = RELATED_BY_PAGE[pageId] ?? DEFAULT_RELATED;

	return keys.map((key) => link(key, locale));

}



/** Contextual pillar links for individual FAQ answer pages. */

export function getFaqPillarLinks(slug: string, locale: LocaleCode = 'en'): InternalLink[] {

	if (

		slug.includes('undetected') ||

		slug.includes('battleye') ||

		slug.includes('updates') ||

		slug.includes('wallhack')

	) {

		return ['status', 'cheats', 'setup', 'features'].map((k) => link(k as PillarKey, locale));

	}

	if (slug.includes('esp') || slug.includes('radar') || slug.includes('included') || slug.includes('pmc')) {

		return ['features', 'esp', 'aimbot', 'radar', 'store'].map((k) => link(k as PillarKey, locale));

	}

	if (slug.includes('deliver') || slug.includes('buy') || slug.includes('license')) {

		return ['store', 'setup', 'faq', 'support'].map((k) => link(k as PillarKey, locale));

	}

	if (slug.includes('support') || slug.includes('contact')) {

		return ['support', 'setup', 'faq', 'status'].map((k) => link(k as PillarKey, locale));

	}

	return ['cheats', 'features', 'store', 'faq'].map((k) => link(k as PillarKey, locale));

}



/** Homepage browse chips — canonical pillars only (no redirect URLs). */

export function getHomeBrowseLinks(locale: LocaleCode): InternalLink[] {

	return (

		['cheats', 'features', 'esp', 'aimbot', 'radar', 'status', 'store', 'setup', 'faq', 'reviews', 'blog'] as PillarKey[]

	).map((key) => link(key, locale));

}



/** @deprecated Use getHomeBrowseLinks(locale) */

export const homeBrowseLinks = getHomeBrowseLinks('en');


