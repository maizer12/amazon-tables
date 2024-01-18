import { configureStore } from '@reduxjs/toolkit';
import tableSlice from '../module/Table/store/tableSlice';

export const store = configureStore({
	reducer: {
		tableSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
