import { FC, useEffect } from 'react';
import TableHeader from './TableHeader';
import Search from '../../../components/Search';
import TableComponent from './TableComponent';
import style from './Table.module.scss';
import { TableProps } from './Table.props';
import { tableHeaderConstants as constants } from '../constants';
import { fetchData } from '../api/fetch';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setItems, setModel, setStatus } from '../store/tableSlice';
import { TablePagination } from './TablePagination';

const Table: FC<TableProps> = ({ model }) => {
	const { sort, search, items } = useAppSelector(state => state.tableSlice);
	const { language } = useAppSelector(state => state.settingSlice);
	const dispatch = useAppDispatch();
	const { id } = useParams();

	useEffect(() => {
		const getData = async () => {
			dispatch(setStatus('loading'));
			try {
				const params = { id, sortBy: String(sort.value), search };
				const res = await fetchData(model, params);
				dispatch(setItems(res));
				dispatch(setStatus(''));
			} catch (err) {
				dispatch(setStatus('error'));
			}
		};

		getData();
	}, [sort, search]);

	useEffect(() => {
		dispatch(setModel(model));
	}, []);

	return (
		<div className={style.wrapper}>
			<TableHeader />
			<Search />
			<TableComponent columns={constants[language][model]} data={items} />
			{items.length >= 10 && <TablePagination />}
		</div>
	);
};

export default Table;
