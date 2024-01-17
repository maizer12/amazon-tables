import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';
import style from './Header.module.scss';

const Header: FC = () => {
	return (
		<header className={style.header}>
			<div className={cn('container', style.inner)}>
				<Link to='/' className={style.logo}>
					Logo
				</Link>
				<nav className={style.menu}>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/profiles'>Profiles</NavLink>
					<NavLink to='/campaigns'>Campaigns</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
