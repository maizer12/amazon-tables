import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import style from './Header.module.scss';
import { HTag, Switcher } from '../../common';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setLanguage, setTheme } from '../../store/slices/settingSlice/slice';
import { languagesConstants, switchTitle } from './constants';

const Header: FC = () => {
	const { whiteTheme, language } = useAppSelector(state => state.settingSlice);
	const dispatch = useAppDispatch();
	const getSwitchTitle = switchTitle[language];

	useEffect(() => {
		const localStorageData = { language, whiteTheme };

		localStorage.setItem('setting', JSON.stringify(localStorageData));
	}, [whiteTheme, language]);

	return (
		<header className={style.header}>
			<div className={cn('container', style.inner)}>
				<Link to='/' className={style.logo}>
					Logo
				</Link>
				<div className={style.right}>
					<HTag tag='h4'>{getSwitchTitle(whiteTheme)}</HTag>
					<Switcher checked={whiteTheme} onChange={() => dispatch(setTheme(!whiteTheme))} />
					<ul className={style.language}>
						{languagesConstants.map(e => (
							<li key={e.value} onClick={() => dispatch(setLanguage(e.value))} className={language == e.value ? style.active : ''}>
								<HTag tag='h4'>{e.name}</HTag>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
