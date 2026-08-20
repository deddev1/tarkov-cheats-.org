import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="shell home__intro" aria-labelledby="home-about-title">
			<div className="home__intro-block">
				<h1 id="home-about-title">{t('home.aboutTitle')}</h1>
				<p>
					{t('home.aboutP1Before')}
					<a href="/pricing/">{t('home.aboutStore')}</a>
					{t('home.aboutP1Mid')}
					<a href="/updates/">{t('home.aboutStatus')}</a>
					{t('home.aboutP1After')}
				</p>
				<p>
					{t('home.aboutP2Before')}{' '}
					<a href="/tarkov-cheats/">{t('home.aboutPillar')}</a>
					{t('home.aboutP2Mid')}
					<a href="/tarkov-esp/">{t('home.aboutEsp')}</a>
					{t('home.aboutP2Mid')}
					<a href="/tarkov-aimbot/">{t('home.aboutAimbot')}</a>
					{t('home.aboutP2Or')}
					<a href="/updates/">{t('home.aboutUndetected')}</a>
					{t('home.aboutP2After')}
				</p>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
