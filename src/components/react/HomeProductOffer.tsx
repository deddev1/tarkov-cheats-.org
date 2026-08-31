import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

export type OfferShot = {
	src: string;
	alt: string;
};

type Plan = {
	id: string;
	label: string;
	price: number;
};

type Props = {
	locale: string;
	productName: string;
	checkoutUrl: string;
	monthly: Plan;
	lifetime: Plan;
	shots: OfferShot[];
};

function HomeProductOfferInner({
	productName,
	checkoutUrl,
	monthly,
	lifetime,
	shots,
}: Props) {
	const { t } = useTranslation();
	const [active, setActive] = useState(0);
	const current = shots[active] ?? shots[0];

	const perks = [
		{ key: 'delivery', label: t('trust.delivery') },
		{ key: 'easy', label: t('homeOffer.easy') },
		{ key: 'undetected', label: t('homeOffer.undetectedShort') },
		{ key: 'support', label: t('trustStrip.support247') },
	];

	return (
		<section className="home-offer" aria-labelledby="home-offer-title">
			<div className="shell home-offer__shell">
				<div className="home-offer__panel">
					<div className="home-offer__gallery">
						<figure className="home-offer__stage">
							<img src={current.src} alt={current.alt} width={960} height={540} />
						</figure>
						<div className="home-offer__thumbs" role="list">
							{shots.map((shot, index) => (
								<button
									key={`${shot.src}-${index}`}
									type="button"
									className={`home-offer__thumb${index === active ? ' is-active' : ''}`}
									aria-pressed={index === active}
									aria-label={shot.alt}
									onClick={() => setActive(index)}
								>
									<img src={shot.src} alt="" width={160} height={90} />
								</button>
							))}
						</div>
					</div>

					<div className="home-offer__copy">
						<header className="home-offer__head">
							<h2 id="home-offer-title">{productName}</h2>
							<span className="home-offer__badge">
								<span className="home-offer__pulse" aria-hidden="true" />
								{t('homeOffer.undetected')}
							</span>
						</header>

						<div className="home-offer__plans">
							<a className="home-offer__plan has-btn-shine" href={checkoutUrl} rel="noopener noreferrer">
								<span>{t('product.monthly')}</span>
								<strong>${monthly.price}</strong>
							</a>
							<a className="home-offer__plan is-popular has-btn-shine" href={checkoutUrl} rel="noopener noreferrer">
								<p className="home-offer__popular">{t('homeOffer.mostPopular')}</p>
								<span>{t('product.lifetime')}</span>
								<strong>${lifetime.price}</strong>
								<small>{t('homeOffer.oneTime')}</small>
							</a>
						</div>

						<a className="home-offer__cta has-btn-shine" href={checkoutUrl} rel="noopener noreferrer">
							<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d="M4.5 6.5h2.1l1.2 9.2h9.4l1.8-6.6H8.1M9.2 19.2a.9.9 0 100-1.8.9.9 0 000 1.8zm7.4 0a.9.9 0 100-1.8.9.9 0 000 1.8z"
									stroke="currentColor"
									strokeWidth="1.7"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							{t('cta.buy')}
						</a>

						<ul className="home-offer__perks">
							{perks.map((perk) => (
								<li key={perk.key}>
									<span className="home-offer__perk-icon" aria-hidden="true" />
									{perk.label}
								</li>
							))}
						</ul>

						<p className="home-offer__note">{t('homeOffer.backed')}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function HomeProductOfferApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeProductOfferInner {...props} />
		</I18nProvider>
	);
}
