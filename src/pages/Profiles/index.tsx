import { FC } from 'react';
import Table from '../../module/Table/components';
import style from './Profiles.module.scss';

export const Profiles: FC = () => {
	return (
		<main className={style.main}>
			<div className='container'>
				<Table model='profile' />
			</div>
		</main>
	);
};
