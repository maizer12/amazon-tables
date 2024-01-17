import { FC } from 'react';
import { Button, HTag } from '../../../../common';
import { TableComponentProps } from './TableComponent.props.ts';
import { tableHeaderConstants as constants } from '../../constants';
import { AccountsTypes } from '../../../../@types/AccountsTypes.ts';
import style from './TableComponent.module.scss';

const TableComponent: FC<TableComponentProps> = ({ items, model }) => {
	return (
		<table className={style.table}>
			<thead>
				<tr>
					{constants[model].map(e => (
						<th key={e.key}>
							<HTag tag='h4'>{e.name}</HTag>
						</th>
					))}
					<th>view</th>
				</tr>
			</thead>
			<tbody>
				{items.map(e => {
					return (
						<tr key={e.id}>
							{constants[model]map(el => (
								<td className='td' key={el.key}>
									<div className={style.content}>
										<HTag tag='h4'>{e[el.key as keyof AccountsTypes]}</HTag>
									</div>
								</td>
							))}
							<td className='td'>
								<div className={style.content}>
									<Button path={'/profile/' + e.id} variable='primary'>
										view
									</Button>
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default TableComponent;
