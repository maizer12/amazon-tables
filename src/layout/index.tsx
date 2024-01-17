import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import style from './Layout.module.scss';
import Header from './Header';

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={style.wrapper}>
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
