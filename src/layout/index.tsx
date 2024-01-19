import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import style from './Layout.module.scss';
import Header from './Header';
import { useAppSelector } from '../hooks';
import cn from 'classnames';

const Layout: FC<LayoutProps> = ({ children }) => {
	const { whiteTheme } = useAppSelector(state => state.settingSlice);
	const classNames = cn(style.wrapper, { ['dark-team']: !whiteTheme });

	return (
		<div className={classNames}>
			<Header />
			{children}
		</div>
	);
};

const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
	return function (props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
export default withLayout;
