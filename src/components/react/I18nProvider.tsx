import { useEffect, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n.js';
import { getCatalog } from '../../i18n/catalog';

type Props = {
	locale: string;
	children: ReactNode;
};

/** URL locale is the source of truth — never the browser cookie. */
export default function I18nProvider({ locale, children }: Props) {
	const catalog = getCatalog(locale);
	i18n.addResourceBundle(locale, 'translation', catalog, true, true);

	if (i18n.language !== locale) {
		void i18n.changeLanguage(locale);
	}

	useEffect(() => {
		i18n.addResourceBundle(locale, 'translation', catalog, true, true);
		if (i18n.language !== locale) {
			void i18n.changeLanguage(locale);
		}
		document.documentElement.lang = locale;
		document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
	}, [catalog, locale]);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
