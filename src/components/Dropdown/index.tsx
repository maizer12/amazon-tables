import { FC, useState, useEffect, useRef } from 'react';
import { DropdownProps } from './Dropdown.props';
import cn from 'classnames';
import { Button } from '../../common';
import style from './Dropdown.module.scss';

export const Dropdown: FC<DropdownProps> = () => {
	const [open, setOpen] = useState<boolean>(false);
	const windowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideClick = (e: Event) => {
			if (!windowRef?.current?.contains(e.target as Node)) {
				setOpen(false);
			}
		};

		if (windowRef) {
			document.body.addEventListener('click', handleOutsideClick);
		}

		return () => {
			if (windowRef) {
				document.body.removeEventListener('click', handleOutsideClick);
			}
		};
	}, [windowRef, setOpen]);

	return (
		<div className={style.dropdown} ref={windowRef}>
			<Button onClick={() => setOpen(!open)} variable='primary' arrow='bottom'>
				Sort by: None
			</Button>
			{open && (
				<ul className={style.list}>
					<li>Email</li>
					<li>Creation Date</li>
				</ul>
			)}
		</div>
	);
};
