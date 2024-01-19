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
	const { sort, search } = useAppSelector(state => state.tableSlice);
	const { language } = useAppSelector(state => state.settingSlice);
	const dispatch = useAppDispatch();
	const { id } = useParams();
	const [items, setItems] = useState<any[]>([]);
	const [status, setStatus] = useState<'loading' | 'error' | ''>('');
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		const getData = async () => {
			setStatus('loading');
			try {
				const params = { page, id, sortBy: String(sort.value), search };
				const res = await fetchData(model, params);
				setItems(res);
				setStatus('');
			} catch (err) {
				return err;
			}
		};

		getData();
	}, [page, sort, search]);

	useEffect(() => {
		dispatch(setModel(model));
	}, []);

	const checkView = model === 'accounts' ? 'profile' : 'campaign';
	const view = model !== 'campaign' && checkView;

	return (
		<div className={style.wrapper}>
			<TableHeader />
			<Search />
			<TableComponent columns={constants[language][model]} data={items} view={view} page={page} status={status} />
			{items.length >= 10 && <Pagination count={Math.ceil(items.length / 10)} active={page} setPage={setPage} />}
		</div>
	);
};

export default Table;
