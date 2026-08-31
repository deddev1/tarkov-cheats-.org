import { useTranslation } from 'react-i18next';
import { StarRow } from '../../lib/review-stars';
import I18nProvider from './I18nProvider';

type Review = {
	slug: string;
	handle: string;
	text: string;
	short?: string;
	date: string;
	rating: number;
	href: string;
};

type Props = {
	locale: string;
	reviews: Review[];
	averageRating: number;
	totalCount: number;
	reviewsBasePath: string;
};

function formatDate(iso: string, locale: string) {
	return new Date(`${iso}T12:00:00`).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
		month: 'short',
		year: 'numeric',
	});
}

function initial(handle: string) {
	return handle.replace(/^@/, '').charAt(0).toUpperCase();
}

function displayHandle(handle: string) {
	return handle.startsWith('@') ? handle : `@${handle}`;
}

function HomeReviewsInner({
	locale,
	reviews,
	averageRating,
	totalCount,
	reviewsBasePath,
}: Props) {
	const { t } = useTranslation();
	const ratingLabel = averageRating.toFixed(1);

	return (
		<section className="reviews" aria-labelledby="reviews-title">
			<div className="shell">
				<header className="reviews__head">
					<div className="reviews__head-copy">
						<p className="reviews__eyebrow">{t('reviews.eyebrow')}</p>
						<h2 id="reviews-title">{t('reviews.homeTitle')}</h2>
					</div>
					<div
						className="reviews__score"
						aria-label={t('reviews.averageAria', { rating: ratingLabel, count: totalCount })}
					>
						<strong>{ratingLabel}</strong>
						<div>
							<StarRow rating={averageRating} />
							<p>{t('reviews.buyerReviews', { count: totalCount })}</p>
						</div>
					</div>
				</header>
			</div>

			<div className="reviews__marquee" data-marquee>
				<div className="reviews__track">
					{[0, 1].map((copy) => (
						<ul className="reviews__row" aria-hidden={copy === 1 ? true : undefined} key={copy}>
							{reviews.map((review) => (
								<li key={`${copy}-${review.slug}`}>
									<article className="review-card">
										<p className="review-card__text">{review.short ?? review.text}</p>
										<footer className="review-card__foot">
											<span className="review-card__avatar" aria-hidden="true">
												{initial(review.handle)}
											</span>
											<div>
												{copy === 1 ? (
													<span className="review-card__name">{displayHandle(review.handle)}</span>
												) : (
													<a className="review-card__name" href={review.href}>
														{displayHandle(review.handle)}
													</a>
												)}
												<time dateTime={review.date}>{formatDate(review.date, locale)}</time>
											</div>
											<div className="review-card__rating-wrap">
												<StarRow rating={review.rating} className="review-card__stars" />
												<span
													className="review-card__rating"
													aria-label={t('reviews.outOfFiveAria', { rating: review.rating })}
												>
													{review.rating}/5
												</span>
											</div>
										</footer>
									</article>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>

			<div className="shell">
				<p className="reviews__more">
					<a href={reviewsBasePath}>{t('reviews.readAll')}</a>
				</p>
			</div>
		</section>
	);
}

export default function HomeReviewsApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeReviewsInner {...props} />
		</I18nProvider>
	);
}
