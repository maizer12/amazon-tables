import { createSlice } from '@reduxjs/toolkit';
import { ModelType } from '../@types/ModelType';
import { TableSliceStates } from './types';
import { DropdownItemType } from '../../../components/Dropdown/Dropdown.props';

const initialState: TableSliceStates = {
	model: 'accounts',
	sort: { name: '', value: '' },
	search: '',
};

const tableSlice = createSlice({
	name: 'tableSlice',
	initialState,
	reducers: {
		setModel(state, action: { payload: ModelType }) {
			state.model = action.payload;
		},
		setSort(state, action: { payload: DropdownItemType }) {
			state.sort = action.payload;
		},
		setSearch(state, action: { payload: string }) {
			state.search = action.payload;
		},
	},
});

export const { setModel, setSort, setSearch } = tableSlice.actions;

export default tableSlice.reducer;
