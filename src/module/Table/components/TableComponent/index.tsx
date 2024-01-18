import { FC } from 'react';
import { Button, HTag } from '../../../../common';
import { TableComponentProps } from './TableComponent.props.ts';
import style from './TableComponent.module.scss';

const TableComponent: FC<TableComponentProps> = ({ columns, data, view, page, status }) => {
	const showItems = { min: page * 10 - 10, max: page * 10 };

	return (
		<div className={style.table}>
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
				<tbody>
					{data.map((item, i) => {
						return (
							i + 1 <= showItems.max &&
							i + 1 > showItems.min && (
								<tr key={item.id}>
									<td>
										<div className={style.content}>{i + 1}</div>
									</td>
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
							)
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default TableComponent;
