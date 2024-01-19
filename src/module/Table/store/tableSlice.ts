import { createSlice } from '@reduxjs/toolkit';
import { ModelType } from '../types/ModelType';
import { ItemsType, TableSliceStates } from './types';
import { DropdownItemType } from '../../../components/Dropdown/Dropdown.props';

const initialState: TableSliceStates = {
	items: [],
	status: '',
	page: 1,
	model: 'accounts',
	sort: { name: '', value: '' },
	search: '',
};

const tableSlice = createSlice({
	name: 'tableSlice',
	initialState,
	reducers: {
		setItems(state, action: { payload: ItemsType }) {
			state.items = action.payload;
		},
		setPage(state, action: { payload: number }) {
			state.page = action.payload;
		},
		setModel(state, action: { payload: ModelType }) {
			state.model = action.payload;
		},
		setSort(state, action: { payload: DropdownItemType }) {
			state.sort = action.payload;
		},
		setSearch(state, action: { payload: string }) {
			state.search = action.payload;
		},
		setStatus(state, action: { payload: '' | 'loading' | 'error' }) {
			state.status = action.payload;
		},
	},
});

export const { setItems, setPage, setModel, setSort, setSearch, setStatus } = tableSlice.actions;

export default tableSlice.reducer;
