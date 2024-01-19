import { FC } from 'react';
import { Button, HTag, Spinner } from '../../../../common';
import { TableComponentProps } from './TableBody.ts';
import style from './TableBody.module.scss';

const TableBody: FC<TableComponentProps> = ({ columns, data, view, page, status }) => {
	const showItems = { min: page * 10 - 10, max: page * 10 };

	if (status === 'loading')
		return (
			<tr>
				<td colSpan={columns.length + 2}>
					<div className={style.spinner}>
						<Spinner size='md' />
					</div>
				</td>
			</tr>
		);

	return (
		<>
			{!data.length ? (
				<tr>
					<td>
						<HTag tag='h3'>Table is Empty</HTag>
					</td>
				</tr>
			) : (
				data.map((item, i) => {
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
				})
			)}
		</>
	);
};
export default TableBody;
