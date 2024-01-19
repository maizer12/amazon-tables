import axios, { AxiosResponse } from 'axios';
import { API_KEY, API_KEY_PROFILES } from '../../../_config';
import { Arguments } from './types';
import { IAccount } from '../types/IAccount';
import { IProfile } from '../types/IProfile';

const ACCOUNTS_URL = API_KEY + 'accounts';
const CAMPAIGNS_URL = API_KEY + 'campaigns';

const getParams = ({ id, sortBy, search }: Arguments) => {
	const useSort = sortBy ? { sortBy } : {};
	const getId = typeof id === 'object' ? id : {};
	return { search, ...useSort, ...getId };
};

export const fetchAccounts = async ({ sortBy, search }: Arguments): Promise<IAccount[]> => {
	const params = getParams({ sortBy, search });
	const response: AxiosResponse<IAccount[]> = await axios.get(ACCOUNTS_URL, { params });
	return response.data;
};

export const fetchCompany = async ({ id, sortBy, search }: Arguments): Promise<ICampaigns[]> => {
	const params = getParams({ sortBy, id: { profileId: 'profile' + id + 'Id' }, search });
	const response: AxiosResponse<ICampaigns[]> = await axios.get(CAMPAIGNS_URL, { params });
	return response.data;
};

export const fetchProfile = async ({ id, sortBy, search }: Arguments): Promise<IProfile[]> => {
	const params = getParams({ sortBy, id: { accountId: 'account' + id + 'Id' }, search });
	const response: AxiosResponse<IProfile[]> = await axios.get(API_KEY_PROFILES, { params });
	return response.data;
};

export const fetchData = async (model: string, { id, sortBy, search }: Arguments): Promise<IProfile[] | ICampaigns[] | IAccount[]> => {
	switch (model) {
		case 'accounts':
			return await fetchAccounts({ sortBy, search });
		case 'profile':
			return await fetchProfile({ id: String(id), sortBy, search });
		case 'campaign':
			return await fetchCompany({ id: String(id), sortBy, search });
		default:
			throw new Error(`Invalid model: ${model}`);
	}
};
