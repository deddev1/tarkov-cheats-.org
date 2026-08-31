import { useTranslation } from 'react-i18next';
import { homeFeatureColumns } from '../../data/home-features';
import { localizeInternalHref } from '../../data/i18n/routing';
import type { LocaleCode } from '../../data/i18n/locales';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

function HomeFeatureCardsInner({ locale }: Props) {
	const { t } = useTranslation();
	const code = locale as LocaleCode;
	const featuresHref = localizeInternalHref('/features/', code);

	return (
		<section className="home-features" aria-labelledby="home-features-title">
			<header className="home-features__head shell">
				<span className="home-features__accent" aria-hidden="true" />
				<p className="home-features__eyebrow">{t('homeFeatures.eyebrow')}</p>
				<h2 id="home-features-title">{t('homeFeatures.title')}</h2>
				<p className="home-features__lede">{t('homeFeatures.lede')}</p>
				<ul className="home-features__badges">
					<li>{t('homeFeatures.badgeWindows')}</li>
					<li>{t('homeFeatures.badgeCpu')}</li>
					<li>{t('homeFeatures.badgeBattleye')}</li>
				</ul>
			</header>

			<div className="home-features__grid shell">
				{homeFeatureColumns.map((column) => (
					<article key={column.titleKey} className="home-features__card" tabIndex={0}>
						{column.tagKey ? <p className="home-features__tag">{t(column.tagKey)}</p> : null}
						<h3>{t(column.titleKey)}</h3>
						<ul
							className={`home-features__list${column.twoColumn ? ' home-features__list--two' : ''}`}
						>
								{column.items.map((item) => (
									<li key={item}>{t(item, { defaultValue: item })}</li>
								))}
						</ul>
					</article>
				))}
			</div>

			<div className="shell home-features__cta-wrap">
				<a className="home-features__cta" href={featuresHref}>
					{t('homeFeatures.cta')}
					<span className="home-features__cta-arrow" aria-hidden="true" />
				</a>
			</div>
		</section>
	);
}

export default function HomeFeatureCardsApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeFeatureCardsInner {...props} />
		</I18nProvider>
	);
}
