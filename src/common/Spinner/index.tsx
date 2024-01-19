import { FC } from 'react';
import cn from 'classnames';
import style from './Spinner.module.scss';
import { SpinnerProps } from './Spinner.props';

export const Spinner: FC<SpinnerProps> = ({ size }) => {
	return <div className={cn(style.spinner, style[size])}></div>;
};
