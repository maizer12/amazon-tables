import { FC } from 'react';
import { HTag } from '../../../../common';
import { TableComponentProps } from './TableComponent.props.ts';
import style from './TableComponent.module.scss';
import TableBody from '../TableBody/index.tsx';
import { useAppSelector } from '../../../../hooks/index.ts';

const TableComponent: FC<TableComponentProps> = ({ columns, data }) => {
	const { page, status, model } = useAppSelector(state => state.tableSlice);

	const checkView = model === 'accounts' ? 'profile' : 'campaign';
	const view = model !== 'campaign' && checkView;

	return (
		<div className={style.table + ' table'}>
			<table>
				<thead>
					<tr>
						<th>
							<HTag tag='h4'>ID:</HTag>
						</th>
						{columns.map(col => (
							<th key={col.key}>
								<HTag tag='h4'>{col.name}</HTag>
							</th>
						))}
						{view && (
							<th>
								<HTag tag='h4'>Views:</HTag>
							</th>
						)}
					</tr>
				</thead>
				<tbody className='anim-opacity'>
					<TableBody view={view} data={data} status={status} page={page} columns={columns} />
				</tbody>
			</table>
		</div>
	);
};
export default TableComponent;
