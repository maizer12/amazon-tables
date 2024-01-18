import { FC, useEffect, useState } from 'react';
import Pagination from '../../../components/Pagination';
import TableHeader from './TableHeader';
import Search from '../../../components/Search';
import TableComponent from './TableComponent';
import style from './Table.module.scss';
import { TableProps } from './Table.props';
import { tableHeaderConstants as constants } from '../constants';
import { fetchData } from '../api/fetch';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setModel } from '../store/tableSlice';

const Table: FC<TableProps> = ({ model }) => {
	const dispatch = useAppDispatch();
	const { id } = useParams();
	const [items, setItems] = useState<any[]>([]);
	const [status, setStatus] = useState<'loading' | 'error' | 'empty' | ''>('');
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		const getData = async () => {
			setStatus('loading');
			try {
				const res = await fetchData(model, { page, id });
				setItems(res);
				setStatus('');
			} catch (err) {
				return err;
			}
		};

		getData();
	}, [page]);

	useEffect(() => {
		dispatch(setModel(model));
	}, []);

	const checkView = model === 'accounts' ? 'profile' : 'campaign';
	const view = model !== 'campaign' && checkView;

	return (
		<div className={style.wrapper}>
			<TableHeader />
			<Search />
			<TableComponent columns={constants[model]} data={items} view={view} page={page} status={status} />
			{items.length >= 10 && <Pagination count={Math.ceil(items.length / 10)} active={page} setPage={setPage} />}
		</div>
	);
};

export default Table;
