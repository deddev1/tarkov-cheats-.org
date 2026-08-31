import { useTranslation } from 'react-i18next';
import { localizeInternalHref } from '../../data/i18n/routing';
import type { LocaleCode } from '../../data/i18n/locales';
import I18nProvider from './I18nProvider';

type FaqItem = { slug: string; question: string; answer: string; href: string };

type Props = {
	locale: string;
	faqs: FaqItem[];
	faqOnly?: boolean;
};

function HomeSeoInner({ locale, faqs, faqOnly = false }: Props) {
	const { t, i18n } = useTranslation();
	const code = locale as LocaleCode;
	const lh = (href: string) => localizeInternalHref(href, code);

	const faqCopy = (slug: string, field: 'question' | 'answer', fallback: string) => {
		const bundle = i18n.getResource(code, 'translation', 'homeFaq') as
			| Record<string, { question?: string; answer?: string }>
			| undefined;
		const value = bundle?.[slug]?.[field];
		return typeof value === 'string' && value.trim() ? value : fallback;
	};

	const categories = [
		{
			titleKey: 'homeSeo.catFeatures',
			hintKey: 'homeSeo.catFeaturesHint',
			links: [
				{ href: lh('/features/'), labelKey: 'homeSeo.linkAllFeatures' },
				{ href: lh('/tarkov-esp/'), labelKey: 'homeSeo.linkEsp' },
				{ href: lh('/tarkov-aimbot/'), labelKey: 'homeSeo.linkAimbot' },
				{ href: lh('/tarkov-radar-hack/'), labelKey: 'homeSeo.linkRadar' },
			],
		},
		{
			titleKey: 'homeSeo.catStatus',
			hintKey: 'homeSeo.catStatusHint',
			links: [
				{ href: lh('/updates/'), labelKey: 'homeSeo.linkLiveStatus' },
				{ href: lh('/updates/'), labelKey: 'homeSeo.linkUndetected' },
				{ href: lh('/setup/'), labelKey: 'homeSeo.linkSetup' },
				{ href: lh('/faq/'), labelKey: 'homeSeo.linkFaq' },
			],
		},
		{
			titleKey: 'homeSeo.catStore',
			hintKey: 'homeSeo.catStoreHint',
			links: [
				{ href: lh('/pricing/'), labelKey: 'homeSeo.linkPlans' },
				{ href: '/reviews/', labelKey: 'homeSeo.linkReviews' },
				{ href: lh('/tarkov-cheats/'), labelKey: 'homeSeo.linkTarkovCheats' },
				{ href: lh('/features/'), labelKey: 'homeSeo.linkAllFeatures' },
			],
		},
		{
			titleKey: 'homeSeo.catHelp',
			hintKey: 'homeSeo.catHelpHint',
			links: [
				{ href: lh('/support/'), labelKey: 'homeSeo.linkSupport' },
				{ href: lh('/setup/'), labelKey: 'homeSeo.linkSetupGuide' },
				{ href: '/blog/', labelKey: 'homeSeo.linkBlog' },
			],
		},
	];

	return (
		<section
			className={`home-seo shell${faqOnly ? ' home-seo--faq-only' : ''}`}
			aria-labelledby={faqOnly ? 'home-faq-title' : 'home-seo-title'}
		>
			{!faqOnly ? (
				<>
					<header className="home-seo__head">
						<div>
							<p className="home-seo__eyebrow">{t('homeSeo.eyebrow')}</p>
							<h2 id="home-seo-title">{t('homeSeo.title')}</h2>
							<p className="home-seo__lede">{t('homeSeo.lede')}</p>
						</div>
					</header>

					<div className="home-seo__cats">
						{categories.map((cat) => (
							<nav key={cat.titleKey} className="home-seo__cat" aria-label={t(cat.titleKey)}>
								<header className="home-seo__cat-head">
									<h3>{t(cat.titleKey)}</h3>
									<p>{t(cat.hintKey)}</p>
								</header>
								<ul>
									{cat.links.map((link) => (
										<li key={link.href + link.labelKey}>
											<a href={link.href}>
												<span>{t(link.labelKey)}</span>
												<span className="home-seo__cat-arrow" aria-hidden="true" />
											</a>
										</li>
									))}
								</ul>
							</nav>
						))}
					</div>
				</>
			) : null}

			<section
				className={`home-seo__faq${faqOnly ? ' home-seo__faq--solo' : ''}`}
				aria-labelledby="home-faq-title"
			>
				<header className="home-seo__faq-head">
					<div>
						<p className="home-seo__eyebrow">{t('homeSeo.faqEyebrow')}</p>
						<h3 id="home-faq-title">{t('homeSeo.faqTitle')}</h3>
						<p className="home-seo__faq-lede">{t('homeSeo.faqLede')}</p>
					</div>
					<a className="home-seo__faq-link" href={lh('/faq/')}>
						{t('homeSeo.allAnswers')}
					</a>
				</header>
				<div className="home-seo__faq-list">
					{faqs.map((item) => (
						<details className="home-seo__item" id={item.slug} key={item.slug}>
							<summary>
								<span>{faqCopy(item.slug, 'question', item.question)}</span>
								<span className="home-seo__chev" aria-hidden="true" />
							</summary>
							<div className="home-seo__item-body">
								<p>{faqCopy(item.slug, 'answer', item.answer)}</p>
								<a className="home-seo__item-link" href={item.href}>
									{t('homeSeo.openFullPage')}
								</a>
							</div>
						</details>
					))}
				</div>
			</section>
		</section>
	);
}

export default function HomeSeoApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeSeoInner {...props} />
		</I18nProvider>
	);
}
