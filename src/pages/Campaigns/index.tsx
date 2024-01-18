import { FC } from 'react';
import Table from '../../module/Table/components';
import style from './Campaigns.module.scss';

export const Campaigns: FC = () => {
	return (
		<main className={style.main}>
			<div className='container'>
				<Table model='campaign' />
			</div>
		</main>
	);
};
