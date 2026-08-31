type LocaleMeta = {
	code: string;
	name: string;
	nativeName: string;
	region: string;
};

type Props = {
	currentLocale: string;
	locales: LocaleMeta[];
	pageSlugs: Record<string, string>;
	defaultLocale?: string;
};

/**
 * Language follows the URL / language switcher only.
 * Auto-redirect was mixing cookies with the page the user picked.
 */
export default function LocaleSuggest(_props: Props) {
	return null;
}
