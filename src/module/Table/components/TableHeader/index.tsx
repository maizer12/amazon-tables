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
	const { language } = useAppSelector(state => state.settingSlice);
	const sortItems = sortConstants[language][model];

	const changeSort = (e: IDropdownItem) => {
		dispatch(setSort(e));
	};

	const sortValue = sort && 'value' in sort ? sort.value : '';
	const sortTitle = language === 'ua' ? 'Сортувати за:' : 'Sort by:';
	const sortEmpty = language === 'ua' ? 'пусто' : 'none';

	return (
		<div className={style.header + ' anim-opacity'}>
			<HTag tag='h1'>{tableTitleConstant[language][model]}</HTag>
			{sortItems && <Dropdown title={sortTitle} notChange={sortEmpty} changeDropdown={changeSort} activeItem={sortValue} items={sortItems} />}
		</div>
	);
};

export default TableHeader;
