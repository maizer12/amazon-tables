import { FC } from 'react';
import { Button, HTag } from '../../../../common';
import { TableComponentProps } from './TableComponent.props.ts';
import style from './TableComponent.module.scss';

const TableComponent: FC<TableComponentProps> = ({ columns, data, view }) => {
	return (
		<div className={style.table}>
			<table>
				<thead>
					<tr>
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
				<tbody>
					{data.map(item => (
						<tr key={item.id}>
							{columns.map(col => (
								<td key={col.key}>
									<div className={style.content}>{item[col.key]}</div>
								</td>
							))}
							{view && (
								<td>
									<div className={style.content}>
										<Button variable='primary' path={'/' + view + '/' + item.id}>
											view
										</Button>
									</div>
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default TableComponent;
