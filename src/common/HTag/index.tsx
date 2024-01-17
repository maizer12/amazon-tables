import { FC } from 'react';
import { HTagProps } from './HTag.props';
import style from './HTag.module.scss';

export const HTag: FC<HTagProps> = ({ tag, children }) => {
	switch (tag) {
		case 'h1':
			return <h1 className={style.h1}>{children}</h1>;
		case 'h2':
			return <h2 className={style.h2}>{children}</h2>;
		case 'h3':
			return <h3 className={style.h3}>{children}</h3>;
		case 'h4':
			return <h3 className={style.h4}>{children}</h3>;
		default:
			return <></>;
	}
};
