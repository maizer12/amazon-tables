import { FC } from 'react';
import { TableHeaderProps } from './TableHeader.props';
import { HTag } from '../../../../common';
import { Dropdown } from '../../../../components';
import { sortConstants, tableTitleConstant } from '../../constants';
import { useAppSelector } from '../../../../hooks';
import { IDropdownItem } from '../../../../@types/IDropdownItem';
import { useDispatch } from 'react-redux';
import style from './TableHeader.module.scss';
import { setSort } from '../../store/tableSlice';

const TableHeader: FC<TableHeaderProps> = () => {
	const dispatch = useDispatch();
	const { model, sort } = useAppSelector(state => state.tableSlice);
	const sortItems = sortConstants[model];

	const changeSort = (e: IDropdownItem) => {
		dispatch(setSort(e));
	};

	const sortValue = sort && 'value' in sort ? sort.value : '';

	return (
		<div className={style.header}>
			<HTag tag='h1'>{tableTitleConstant[model]}</HTag>
			{sortItems && <Dropdown changeDropdown={changeSort} activeItem={sortValue} items={sortItems} />}
		</div>
	);
};

export default TableHeader;
