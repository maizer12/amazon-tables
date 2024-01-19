import { createSlice } from '@reduxjs/toolkit';
import { SettingSliceActions } from './types';

const initialState: SettingSliceActions = {
	whiteTheme: true,
	language: 'ue',
};

const settingSlice = createSlice({
	name: 'settingSlice',
	initialState,
	reducers: {
		setTheme(state, action: { payload: boolean }) {
			state.whiteTheme = action.payload;
		},
		setLanguage(state, action: { payload: 'ue' | 'ua' }) {
			state.language = action.payload;
		},
	},
});

export const { setTheme, setLanguage } = settingSlice.actions;

export default settingSlice.reducer;
