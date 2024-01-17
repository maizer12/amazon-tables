import { FC } from 'react';
import { TableHeaderProps } from './TableHeader.props';
import { HTag } from '../../../../common';
import { Dropdown } from '../../../../components';
import style from './TableHeader.module.scss';

const TableHeader: FC<TableHeaderProps> = () => {
	return (
		<div className={style.header}>
			<HTag tag='h1'>Accounts:</HTag>
			<Dropdown />
		</div>
	);
};

export default TableHeader;
