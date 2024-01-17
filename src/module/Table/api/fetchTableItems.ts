// fetch.js
import { FetchResponse } from './types';
import { api } from './api.ts';

export const fetchTableItems = async <T>({ path, id, page }: { path: string; id?: string; page: number }) => {
	const params = { limit: 10, page };

	const { data } = await api.get<FetchResponse<T>>(`/${path}${id ? '/' + id : ''}`, { params });

	return data;
};
