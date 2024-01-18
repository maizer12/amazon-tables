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

const Table: FC<TableProps> = ({ model }) => {
	const { id } = useParams();
	const [items, setItems] = useState<any[]>([]);
	const [status, setStatus] = useState<'pending' | '' | 'reject'>('');
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(0);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetchData(model, { page, id });
				setItems(res);
			} catch (err) {
				return err;
			}
		};

		getData();
	}, [page]);

	if (status === 'reject') return <>Error</>;
	if (status === 'pending') return <>Loading...</>;
	const checkView = model === 'accounts' ? 'profile' : 'campaign';
	const view = model !== 'campaign' && checkView;

	return (
		<div className={style.wrapper}>
			<TableHeader />
			<Search />
			<TableComponent columns={constants[model]} data={items} view={view} />
			<Pagination count={totalPage} active={page} setPage={setPage} />
		</div>
	);
};

export default Table;
