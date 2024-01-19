import { configureStore } from '@reduxjs/toolkit';
import tableSlice from '../module/Table/store/tableSlice';
import settingSlice from './slices/settingSlice/slice';

export const store = configureStore({
	reducer: {
		tableSlice,
		settingSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
