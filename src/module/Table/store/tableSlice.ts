import { createSlice } from '@reduxjs/toolkit';
import { ModelType } from '../@types/ModelType';
import { TableSliceStates } from './types';
import { DropdownItemType } from '../../../components/Dropdown/Dropdown.props';

const initialState: TableSliceStates = {
	model: 'accounts',
	sort: {},
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
	},
});

export const { setModel, setSort } = tableSlice.actions;

export default tableSlice.reducer;
