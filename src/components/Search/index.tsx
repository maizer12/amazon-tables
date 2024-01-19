import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import debounce from 'lodash.debounce';
import { Button } from '../../common';
import { useAppDispatch } from '../../hooks';
import { setSearch } from '../../module/Table/store/tableSlice';
import { SearchProps } from './Search.props';
import style from './Search.module.scss';

const Search: FC<SearchProps> = ({}) => {
	const [value, setValue] = useState<string>('');
	const dispatch = useAppDispatch();

	const clearInput = () => {
		setValue('');
		dispatch(setSearch(''));
	};

	const startSearch = useCallback(
		debounce((searchValue: string) => {
			console.log(searchValue);
			dispatch(setSearch(searchValue));
		}, 350),
		[dispatch]
	);

	const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setValue(inputValue);
		startSearch(inputValue);
	};

	return (
		<label className={style.search}>
			<div className={style.input}>
				<input type='text' onChange={changeValue} value={value} placeholder='Search for...' />
				{!!value.length && (
					<button className='anim-opacity' onClick={clearInput}>
						<svg width='64px' height='64px' viewBox='-0.5 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
							<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								<path d='M3 21.32L21 3.32001' stroke='#000000' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path> <path d='M3 3.32001L21 21.32' stroke='#000000' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
							</g>
						</svg>
					</button>
				)}
			</div>
			<Button variable='primary' onClick={clearInput}>
				<svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M14.7719 13.6626L11.0742 9.94962C12.0249 8.85844 12.5459 7.48552 12.5459 6.05624C12.5459 2.71688 9.73177 0 6.27293 0C2.81409 0 0 2.71688 0 6.05624C0 9.3956 2.81409 12.1125 6.27293 12.1125C7.57143 12.1125 8.80883 11.7344 9.86677 11.0166L13.5926 14.7578C13.7484 14.9139 13.9578 15 14.1823 15C14.3947 15 14.5963 14.9218 14.7493 14.7796C15.0744 14.4776 15.0848 13.9768 14.7719 13.6626ZM6.27293 1.57989C8.82956 1.57989 10.9094 3.58793 10.9094 6.05624C10.9094 8.52456 8.82956 10.5326 6.27293 10.5326C3.7163 10.5326 1.63642 8.52456 1.63642 6.05624C1.63642 3.58793 3.7163 1.57989 6.27293 1.57989Z' fill='white' />
				</svg>
			</Button>
		</label>
	);
};

export default Search;
