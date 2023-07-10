import { useTranslation } from 'react-i18next';
import { VscCode } from 'react-icons/vsc';
import Links from './links/Links';
import ZoomOut from '../../animations/ZoomOut';
import PageContainer from '../../components/page-container/PageContainer';
import classes from './home.module.scss';

export default function Home() {
	const { t } = useTranslation();

	return (
		<ZoomOut mobileDisabled={true}>
			<PageContainer>
				<div className={classes.home}>
					<VscCode className={classes.home__logo} />
					<Links />
					<div className={classes.home__text}>
						<p dangerouslySetInnerHTML={{ __html: t('pages.home.welcome.p1') }}></p>
						<p dangerouslySetInnerHTML={{ __html: t('pages.home.welcome.p2') }}></p>
						<p dangerouslySetInnerHTML={{ __html: t('pages.home.welcome.p3') }}></p>
						<p dangerouslySetInnerHTML={{ __html: t('pages.home.welcome.p4') }}></p>
					</div>
				</div>
			</PageContainer>
		</ZoomOut>
	);
}
