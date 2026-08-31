/** Eager-loaded translation catalogs for all locales (generated JSON). */
const localeModules = import.meta.glob('../../public/locales/*/translation.json', {
	eager: true,
}) as Record<string, { default: Record<string, unknown> }>;

export type TranslationCatalog = Record<string, unknown>;

export const allCatalogs: Record<string, TranslationCatalog> = Object.fromEntries(
	Object.entries(localeModules).map(([filePath, mod]) => {
		const match = filePath.match(/locales\/([^/]+)\/translation\.json$/);
		const locale = match?.[1] ?? 'en';
		return [locale, mod.default];
	}),
);

export function getCatalog(locale: string): TranslationCatalog {
	return allCatalogs[locale] ?? allCatalogs.en;
}
