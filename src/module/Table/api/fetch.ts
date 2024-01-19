import axios, { AxiosResponse } from 'axios';
import { API_KEY, API_KEY_PROFILES } from '../../../_config';
import { Arguments } from './types';

const ACCOUNTS_URL = API_KEY + 'accounts';
const CAMPAIGNS_URL = API_KEY + 'campaigns';

const getParams = ({ page, id, sortBy }: Arguments) => {
	const useSort = sortBy ? { sortBy } : {};
	const getId = typeof id === 'object' ? id : {};
	return { page, ...useSort, ...getId };
};

export const fetchAccounts = async ({ page, sortBy }: Arguments): Promise<any[]> => {
	const params = getParams({ page, sortBy });
	const response: AxiosResponse<any[]> = await axios.get(ACCOUNTS_URL, { params });
	return response.data;
};

export const fetchCompany = async ({ page, id, sortBy }: Arguments): Promise<any[]> => {
	const params = getParams({ page, sortBy, id: { profileId: 'profile' + id + 'Id' } });
	const response: AxiosResponse<any[]> = await axios.get(CAMPAIGNS_URL, { params });
	return response.data;
};

export const fetchProfile = async ({ page, id, sortBy }: Arguments): Promise<any[]> => {
	const params = getParams({ page, sortBy, id: { accountId: 'account' + id + 'Id' } });
	const response: AxiosResponse<any[]> = await axios.get(API_KEY_PROFILES, { params });
	return response.data;
};

export const fetchData = async (model: string, { page, id, sortBy }: Arguments): Promise<any> => {
	switch (model) {
		case 'accounts':
			return await fetchAccounts({ page, sortBy });
		case 'profile':
			return await fetchProfile({ page, id: String(id), sortBy });
		case 'campaign':
			return await fetchCompany({ page, id: String(id), sortBy });
	}
};
