import { FC, useEffect, useState } from 'react';
import Pagination from '../../../components/Pagination';
import TableHeader from './TableHeader';
import Search from '../../../components/Search';
import { fetchTableItems } from '../api/fetchTableItems';
import { AccountsTypes } from '../../../@types/AccountsTypes';
import TableComponent from './TableComponent';
import style from './Table.module.scss';
import { TableProps } from './Table.props';

const Table: FC<TableProps> = ({ model, id }) => {
	const [items, setItems] = useState<AccountsTypes[]>([]);
	const [status, setStatus] = useState<'pending' | '' | 'reject'>('');
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(0);

	useEffect(() => {
		const fetchData = async () => {
			setStatus('pending');
			try {
				const data = await fetchTableItems({ page, path: model });
				// setItems(data.items);
				// setTotalPage(data.meta.total_pages);
				// setPage(data.meta.current_page);
				// setStatus('');
			} catch (error) {
				setStatus('reject');
			}
		};

		fetchData();
	}, [page]);

	if (status === 'reject') return <>Error</>;
	if (status === 'pending') return <>Loading...</>;

	return (
		<div className={style.wrapper}>
			<TableHeader />
			<Search />
			{/* <TableComponent items={items} model={model} /> */}
			<Pagination count={totalPage} active={page} setPage={setPage} />
		</div>
	);
};

export default Table;
