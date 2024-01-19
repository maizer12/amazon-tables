import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import Pagination from '../../../../components/Pagination';
import { setPage } from '../../store/tableSlice';

export const TablePagination: FC = () => {
	const { items, page } = useAppSelector(state => state.tableSlice);
	const dispatch = useAppDispatch();

	const changePage = (num: number) => {
		dispatch(setPage(num));
	};

	return <Pagination count={Math.ceil(items.length / 10)} active={page} setPage={changePage} />;
};
