import { FC, useState, useEffect, useRef } from 'react';
import { DropdownItemType, DropdownProps } from './Dropdown.props';
import { Button } from '../../common';
import style from './Dropdown.module.scss';

export const Dropdown: FC<DropdownProps> = ({ items, changeDropdown, activeItem }) => {
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

	const selectItem = (e: DropdownItemType) => {
		if (e.value === activeItem) {
			changeDropdown({ name: '', value: '' });
		} else {
			changeDropdown(e);
		}

		setOpen(false);
	};

	const fullItem = items.find(e => e.value === activeItem);

	return (
		<div className={style.dropdown} ref={windowRef}>
			<Button onClick={() => setOpen(!open)} variable='primary' arrow='bottom'>
				Sort by: {fullItem ? fullItem.name : 'none'}
			</Button>
			{open && (
				<ul className={style.list}>
					{items.map(e => (
						<li key={e.value} onClick={() => selectItem(e)} className={activeItem === e.value ? style.active : ''}>
							{e.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
