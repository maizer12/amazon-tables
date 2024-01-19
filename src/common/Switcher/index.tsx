import { FC } from 'react';
import { SwitcherProps } from './Switcher.props';
import style from './Switcher.module.scss';

export const Switcher: FC<SwitcherProps> = ({ ...props }) => {
	return (
		<label className={style.switcher}>
			<input type='checkbox' {...props} />
			<span className={style.slider}></span>
		</label>
	);
};
