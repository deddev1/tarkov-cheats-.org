/** Homepage feature cards — Tarkov-specific lists (one license, PMC raids). */

export type HomeFeatureColumn = {
	titleKey: string;
	tagKey: string;
	items: string[];
	/** Third column uses a two-column list on desktop. */
	twoColumn?: boolean;
};

export const homeFeatureColumns: HomeFeatureColumn[] = [
	{
		titleKey: 'homeFeatures.combatTitle',
		tagKey: 'homeFeatures.combatTag',
		items: [
			'homeFeatures.combat.0',
			'homeFeatures.combat.1',
			'homeFeatures.combat.2',
			'homeFeatures.combat.3',
			'homeFeatures.combat.4',
			'homeFeatures.combat.5',
			'homeFeatures.combat.6',
			'homeFeatures.combat.7',
			'homeFeatures.combat.8',
			'homeFeatures.combat.9',
		],
	},
	{
		titleKey: 'homeFeatures.espTitle',
		tagKey: 'homeFeatures.espTag',
		items: [
			'homeFeatures.esp.0',
			'homeFeatures.esp.1',
			'homeFeatures.esp.2',
			'homeFeatures.esp.3',
			'homeFeatures.esp.4',
			'homeFeatures.esp.5',
			'homeFeatures.esp.6',
			'homeFeatures.esp.7',
			'homeFeatures.esp.8',
			'homeFeatures.esp.9',
		],
	},
	{
		titleKey: 'homeFeatures.radarTitle',
		tagKey: 'homeFeatures.radarTag',
		twoColumn: true,
		items: [
			'homeFeatures.radar.0',
			'homeFeatures.radar.1',
			'homeFeatures.radar.2',
			'homeFeatures.radar.3',
			'homeFeatures.radar.4',
			'homeFeatures.radar.5',
			'homeFeatures.radar.6',
			'homeFeatures.radar.7',
			'homeFeatures.radar.8',
			'homeFeatures.radar.9',
			'homeFeatures.radar.10',
			'homeFeatures.radar.11',
		],
	},
];
