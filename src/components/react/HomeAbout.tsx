import { useTranslation } from 'react-i18next';
import { localizeInternalHref } from '../../data/i18n/routing';
import type { LocaleCode } from '../../data/i18n/locales';
import I18nProvider from './I18nProvider';

const DEFAULT_VIDEO = '/videos/tarkov-clip.mp4';

type Props = {
	locale: string;
	videoSrc?: string;
};

function HomeAboutInner({ locale, videoSrc = DEFAULT_VIDEO }: Props) {
	const { t } = useTranslation();
	const code = locale as LocaleCode;
	const lh = (href: string) => localizeInternalHref(href, code);

	return (
		<section className="home-about" aria-labelledby="home-about-title">
			<div className="shell">
				<div className="home-about__grid">
					<div className="home-about__copy">
						<div className="home-about__accent" aria-hidden="true" />
						<div className="home-about__text">
							<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
							<p>{t('home.aboutP1')}</p>
							<p className="home-about__links">
								{t('home.aboutP2Before')}{' '}
								<a href={lh('/tarkov-cheats/')}>{t('home.aboutPillar')}</a>
								{t('home.aboutP2Mid')}
								<a href={lh('/tarkov-esp/')}>{t('home.aboutEsp')}</a>
								{t('home.aboutP2Mid')}
								<a href={lh('/tarkov-aimbot/')}>{t('home.aboutAimbot')}</a>
								{t('home.aboutP2Or')}
								<a href={lh('/updates/')}>{t('home.aboutUndetected')}</a>
								{t('home.aboutP2After')}
							</p>
						</div>
					</div>

					<figure className="home-about__media">
						<div className="home-about__frame">
							<video
								className="home-about__video"
								src={videoSrc}
								controls
								playsInline
								preload="metadata"
							/>
						</div>
						<figcaption className="home-about__caption">{t('home.videoCaption')}</figcaption>
					</figure>
				</div>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner {...props} />
		</I18nProvider>
	);
}
