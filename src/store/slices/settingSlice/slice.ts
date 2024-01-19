import { createSlice } from '@reduxjs/toolkit';
import { SettingSliceActions } from './types';

const storedData = localStorage.getItem('setting');

const data: SettingSliceActions = storedData ? JSON.parse(storedData) : '';

const initialState: SettingSliceActions = {
	whiteTheme: data.whiteTheme,
	language: data.language,
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
