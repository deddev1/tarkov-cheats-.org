/** Trusted third-party Escape from Tarkov resources — outbound authority links (SSR, crawlable). */

export type ExternalResourceLink = {
	href: string;
	titleKey: string;
	descKey: string;
};

export const externalResourceLinks: ExternalResourceLink[] = [
	{
		href: 'https://www.escapefromtarkov.com/',
		titleKey: 'homeResources.officialTitle',
		descKey: 'homeResources.officialDesc',
	},
	{
		href: 'https://www.escapefromtarkov.com/news',
		titleKey: 'homeResources.patchTitle',
		descKey: 'homeResources.patchDesc',
	},
	{
		href: 'https://escapefromtarkov.fandom.com/wiki/Escape_from_Tarkov_Wiki',
		titleKey: 'homeResources.wikiTitle',
		descKey: 'homeResources.wikiDesc',
	},
	{
		href: 'https://www.reddit.com/r/EscapefromTarkov/',
		titleKey: 'homeResources.communityTitle',
		descKey: 'homeResources.communityDesc',
	},
];
