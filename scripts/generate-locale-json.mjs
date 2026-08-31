#!/usr/bin/env node
/**
 * Generates public/locales/{locale}/translation.json for all 22 locales.
 * Run: node scripts/generate-locale-json.mjs
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES } from './i18n-data/constants.mjs';
import { allUiStrings } from './i18n-data/ui-strings.mjs';
import { PAGE_META_HOME } from './i18n-data/pages-i18n.mjs';
import {
	HOME_CONNECTORS,
	HOME_FEATURES,
	HOME_RESOURCES,
	HOME_SEO_PHRASES,
	REVIEWS_NAV,
} from './i18n-data/chrome-locales.mjs';
import { buildHomeFaq } from './i18n-data/home-faq-locales.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_PATH = path.join(ROOT, 'public', 'locales', 'en', 'translation.json');
const ES_PATH = path.join(ROOT, 'public', 'locales', 'es', 'translation.json');

function deepMerge(base, override) {
	const out = structuredClone(base);
	for (const [key, value] of Object.entries(override)) {
		if (
			value &&
			typeof value === 'object' &&
			!Array.isArray(value) &&
			typeof out[key] === 'object' &&
			out[key] &&
			!Array.isArray(out[key])
		) {
			out[key] = deepMerge(out[key], value);
		} else {
			out[key] = value;
		}
	}
	return out;
}

function phrase(map, locale, fallback = 'en') {
	return map[locale] ?? map[fallback] ?? '';
}

function buildHomeFeatures(locale, enBase) {
	return {
		eyebrow: phrase(HOME_FEATURES.eyebrow, locale),
		title: phrase(HOME_FEATURES.title, locale),
		lede: phrase(HOME_FEATURES.lede, locale),
		badgeWindows: phrase(HOME_FEATURES.badgeWindows, locale),
		badgeCpu: phrase(HOME_FEATURES.badgeCpu, locale),
		badgeBattleye: phrase(HOME_FEATURES.badgeBattleye, locale),
		combatTitle: phrase(HOME_FEATURES.combatTitle, locale),
		combatTag: phrase(HOME_FEATURES.combatTag, locale),
		espTitle: phrase(HOME_FEATURES.espTitle, locale),
		espTag: phrase(HOME_FEATURES.espTag, locale),
		radarTitle: phrase(HOME_FEATURES.radarTitle, locale),
		radarTag: phrase(HOME_FEATURES.radarTag, locale),
		cta: phrase(HOME_FEATURES.cta, locale),
		combat: enBase.homeFeatures.combat,
		esp: enBase.homeFeatures.esp,
		radar: enBase.homeFeatures.radar,
	};
}

function buildHomeResources(locale) {
	return {
		title: phrase(HOME_RESOURCES.title, locale),
		lede: phrase(HOME_RESOURCES.lede, locale),
		officialTitle: phrase(HOME_RESOURCES.officialTitle, locale),
		officialDesc: phrase(HOME_RESOURCES.officialDesc, locale),
		patchTitle: phrase(HOME_RESOURCES.patchTitle, locale),
		patchDesc: phrase(HOME_RESOURCES.patchDesc, locale),
		wikiTitle: phrase(HOME_RESOURCES.wikiTitle, locale),
		wikiDesc: phrase(HOME_RESOURCES.wikiDesc, locale),
		communityTitle: phrase(HOME_RESOURCES.communityTitle, locale),
		communityDesc: phrase(HOME_RESOURCES.communityDesc, locale),
	};
}

function buildForLocale(locale, enBase, esFull) {
	if (locale === 'en') {
		return deepMerge(enBase, {
			home: { ...HOME_CONNECTORS.en, aboutP1: enBase.home.aboutP1 },
			homeResources: buildHomeResources(locale),
			homeFeatures: buildHomeFeatures(locale, enBase),
			homeFaq: buildHomeFaq(locale),
			homeOffer: enBase.homeOffer,
		});
	}
	if (locale === 'es') {
		return deepMerge(esFull, {
			home: { ...HOME_CONNECTORS.es, ...esFull.home },
			homeResources: buildHomeResources(locale),
			homeFeatures: buildHomeFeatures(locale, enBase),
			homeFaq: buildHomeFaq(locale),
			homeOffer: esFull.homeOffer ?? enBase.homeOffer,
		});
	}

	const ui = allUiStrings[locale];
	if (!ui) throw new Error(`Missing UI strings for locale: ${locale}`);

	const homeMeta = PAGE_META_HOME[locale];
	const connectors = HOME_CONNECTORS[locale] ?? HOME_CONNECTORS.en;

	const override = {
		nav: {
			...ui.nav,
			preview: ui.nav.hacks,
			store: ui.nav.pricing,
			status: ui.nav.updates,
			reviews: phrase(REVIEWS_NAV, locale),
			primaryAria: enBase.nav.primaryAria,
			mobileAria: enBase.nav.mobileAria,
			openMenu: enBase.nav.openMenu,
			closeMenu: enBase.nav.closeMenu,
		},
		hero: {
			...ui.hero,
			title: ui.product.title,
			priceFrom: enBase.hero.priceFrom,
			imageAlt: ui.images?.hero ?? enBase.hero.imageAlt,
			chipEsp: enBase.hero.chipEsp,
			chipAim: enBase.hero.chipAim,
			chipRadar: enBase.hero.chipRadar,
			chipUpdates: enBase.hero.chipUpdates,
		},
		cta: {
			buy: ui.hero.buyNow,
			buyShort: ui.nav.buyNow,
		},
		trust: { ...ui.trust },
		product: {
			...ui.product,
			days30: enBase.product.days30,
			oneTime: enBase.product.oneTime,
			plans: enBase.product.plans,
			perMonth: enBase.product.perMonth,
			once: enBase.product.once,
			buyMonthly: enBase.product.buyMonthly,
			buyLifetime: enBase.product.buyLifetime,
		},
		reviews: {
			...ui.reviews,
			eyebrow: phrase(REVIEWS_NAV, locale),
			homeTitle: `${ui.product.title} ${phrase(REVIEWS_NAV, locale).toLowerCase()}`,
			buyerReviews: `{{count}} ${ui.reviews.countLabel}`,
			averageAria: enBase.reviews.averageAria,
			outOfFiveAria: enBase.reviews.outOfFiveAria,
			readAll: ui.reviews.title ? `${ui.reviews.title} →` : enBase.reviews.readAll,
		},
		common: {
			...ui.common,
			selectLanguage: enBase.common.selectLanguage,
			englishOfficial: enBase.common.englishOfficial,
			englishIsOfficial: enBase.common.englishIsOfficial,
			languageSuggestion: enBase.common.languageSuggestion,
			dismiss: enBase.common.dismiss,
			localeVersion: enBase.common.localeVersion,
			localeSuggestLead: enBase.common.localeSuggestLead,
			breadcrumb: enBase.common.breadcrumb,
			gallery: enBase.common.gallery,
			inGameLook: enBase.common.inGameLook,
			allQuestions: enBase.common.allQuestions,
			openAnyQuestion: enBase.common.openAnyQuestion,
			packageStatus: enBase.common.packageStatus,
			productDetails: enBase.common.productDetails,
			browse: enBase.common.browse,
			featured: enBase.common.featured,
			share: enBase.common.share,
			shareX: enBase.common.shareX,
			shareReddit: enBase.common.shareReddit,
			shareFacebook: enBase.common.shareFacebook,
			blog: enBase.common.blog,
			support: ui.nav.setup === 'Setup' ? 'Support' : ui.nav.faq,
			privacy: enBase.common.privacy,
			terms: enBase.common.terms,
			featureList: ui.nav.features,
			pricingPlans: ui.nav.pricing,
			buyerReviewsNav: phrase(REVIEWS_NAV, locale),
			copyright: enBase.common.copyright,
			helpfulFaq: enBase.common.helpfulFaq,
		},
		footer: { ...ui.footer },
		home: {
			aboutTitle: enBase.home.aboutTitle,
			aboutP1: homeMeta?.intro ?? enBase.home.aboutP1,
			...connectors,
		},
		homeSeo: {
			eyebrow: phrase(HOME_SEO_PHRASES.eyebrow, locale),
			title: phrase(HOME_SEO_PHRASES.title, locale),
			lede: phrase(HOME_SEO_PHRASES.lede, locale),
			catFeatures: ui.nav.features,
			catFeaturesHint: phrase(HOME_SEO_PHRASES.catFeaturesHint, locale),
			catStatus: ui.nav.updates,
			catStatusHint: phrase(HOME_SEO_PHRASES.catStatusHint, locale),
			catStore: ui.nav.pricing,
			catStoreHint: phrase(HOME_SEO_PHRASES.catStoreHint, locale),
			catHelp: phrase(HOME_SEO_PHRASES.catHelp, locale),
			catHelpHint: phrase(HOME_SEO_PHRASES.catHelpHint, locale),
			linkAllFeatures: phrase(HOME_SEO_PHRASES.linkAllFeatures, locale),
			linkEsp: ui.nav.esp,
			linkAimbot: ui.nav.aimbot,
			linkRadar: 'Radar',
			linkLiveStatus: phrase(HOME_SEO_PHRASES.linkLiveStatus, locale),
			linkUndetected: phrase(HOME_SEO_PHRASES.linkUndetected, locale),
			linkBattlEye: 'BattlEye',
			linkSetup: ui.nav.setup,
			linkPlans: phrase(HOME_SEO_PHRASES.linkPlans, locale),
			linkReviews: phrase(REVIEWS_NAV, locale),
			linkTarkovCheats: phrase(HOME_SEO_PHRASES.linkTarkovCheats, locale),
			linkFaq: ui.nav.faq,
			linkSupport: phrase(HOME_SEO_PHRASES.catHelp, locale),
			linkSetupGuide: phrase(HOME_SEO_PHRASES.linkSetupGuide, locale),
			linkBlog: enBase.common.blog,
			linkRefunds: phrase(HOME_SEO_PHRASES.linkRefunds, locale),
			faqEyebrow: ui.nav.faq,
			faqTitle: phrase(HOME_SEO_PHRASES.faqTitle, locale),
			faqLede: phrase(HOME_SEO_PHRASES.faqLede, locale),
			allAnswers: phrase(HOME_SEO_PHRASES.allAnswers, locale),
			openFullPage: phrase(HOME_SEO_PHRASES.openFullPage, locale),
		},
		deals: {
			pricing: ui.nav.pricing,
			chooseLicense: enBase.deals.chooseLicense,
			features: ui.nav.features,
			featEsp: enBase.deals.featEsp,
			featAim: enBase.deals.featAim,
			featRadar: enBase.deals.featRadar,
			featUpdates: ui.nav.updates,
		},
		trustStrip: {
			instantDelivery: ui.trust.delivery,
			secureCheckout: enBase.trustStrip.secureCheckout,
			support247: enBase.trustStrip.support247,
		},
		categoryRow: {
			hacks: ui.nav.hacks,
			esp: ui.nav.esp,
			aimbot: ui.nav.aimbot,
			radar: 'Radar',
			wallhack: 'Wallhack',
			undetected: phrase(HOME_SEO_PHRASES.linkUndetected, locale),
			pricing: ui.nav.pricing,
			setup: ui.nav.setup,
			blog: enBase.common.blog,
		},
		images: { ...ui.images },
		blog: {
			...enBase.blog,
			readMore: ui.common.readGuide,
			language: ui.common.language,
			home: `${ui.nav.home} Tarkov Cheats`,
		},
		gallery: enBase.gallery,
		homeResources: buildHomeResources(locale),
		homeFeatures: buildHomeFeatures(locale, enBase),
		homeFaq: buildHomeFaq(locale),
		homeOffer: enBase.homeOffer,
	};

	return deepMerge(enBase, override);
}

async function main() {
	const enBase = JSON.parse(await readFile(EN_PATH, 'utf8'));
	const esFull = JSON.parse(await readFile(ES_PATH, 'utf8'));

	for (const locale of LOCALES) {
		const catalog = buildForLocale(locale, enBase, esFull);
		const dir = path.join(ROOT, 'public', 'locales', locale);
		await mkdir(dir, { recursive: true });
		const outPath = path.join(dir, 'translation.json');
		await writeFile(outPath, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');
		console.log(`Wrote ${outPath}`);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
