import { FC } from 'react';
import Table from '../../module/Table/components';
import style from './Home.module.scss';

export const Home: FC = () => {
	return (
		<main className={style.main}>
			<div className='container'>
				<Table model='accounts' />
			</div>
		</main>
	);
};
