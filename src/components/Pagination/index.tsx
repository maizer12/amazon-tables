import { FC } from 'react';
import { PaginationProps } from './Pagination.props';
import style from './Pagination.module.scss';
import { Button } from '../../common';

const Pagination: FC<PaginationProps> = ({ count, active, setPage }) => {
	const arr = [...new Array(count)];

	return (
		<ul className={style.pagination + ' anim-transform'}>
			<li>
				<Button variable='outline' arrow='left' disabled={!(active - 1)} onClick={() => setPage(active - 1)} />
			</li>
			{arr.map((e, i) => (
				<li key={i} onClick={() => setPage(i + 1)}>
					<Button variable={active === i + 1 ? 'primary' : 'outline'}>{i + 1}</Button>
				</li>
			))}
			<li>
				<Button variable='outline' arrow='right' disabled={active === count} onClick={() => setPage(active + 1)} />
			</li>
		</ul>
	);
};

export default Pagination;
