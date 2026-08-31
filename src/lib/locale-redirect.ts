import { defaultLocale, isLocaleCode, type LocaleCode } from '../data/i18n/locales';
import {
	getPageLocaleSwitchHref,
	localeFromAcceptLanguage,
	resolvePageContextFromPath,
} from '../data/i18n/routing';

const BOT_RE =
	/bot|crawl|spider|google|bing|yandex|baidu|slurp|duckduck|facebookexternalhit|linkedinbot|semrush|ahrefs|gptbot|claudebot/i;

const EN_ONLY_PREFIXES = ['/reviews', '/faq', '/blog'];

export function isCrawler(userAgent: string | null | undefined): boolean {
	return BOT_RE.test(userAgent ?? '');
}

export function parseCookieLocale(cookieHeader: string | null | undefined): LocaleCode | null {
	const match = cookieHeader?.match(/(?:^|;\s*)fc_locale=([^;]+)/);
	const value = match?.[1]?.trim();
	if (value && isLocaleCode(value)) return value;
	return null;
}

/** Preferred locale from cookie (explicit choice) or Accept-Language. */
export function preferredLocale(
	acceptLanguage: string | null | undefined,
	cookieHeader: string | null | undefined,
): LocaleCode {
	const cookie = parseCookieLocale(cookieHeader);
	if (cookie) return cookie;
	return localeFromAcceptLanguage(acceptLanguage ?? null);
}

function isEnOnlyPath(pathname: string): boolean {
	const path = pathname.replace(/\/+$/, '') || '/';
	return EN_ONLY_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

/**
 * Returns a localized URL when the visitor prefers a non-English locale
 * and the current page has a translated equivalent. Skips bots and EN-only sections.
 */
export function localeRedirectTarget(
	pathname: string,
	acceptLanguage: string | null | undefined,
	cookieHeader: string | null | undefined,
): string | null {
	if (isEnOnlyPath(pathname)) return null;

	const preferred = preferredLocale(acceptLanguage, cookieHeader);
	if (preferred === defaultLocale) return null;

	const context = resolvePageContextFromPath(pathname);
	if (context.locale !== defaultLocale) return null;
	if (context.blogSlug) return null;
	if (!context.pageId) return null;

	const target = getPageLocaleSwitchHref(context, preferred);
	const normalizedCurrent = pathname.endsWith('/') ? pathname : `${pathname}/`;
	const normalizedTarget = target.endsWith('/') ? target : `${target}/`;
	if (normalizedTarget === normalizedCurrent) return null;

	return normalizedTarget;
}
