import axios, { AxiosResponse } from 'axios';
import { API_KEY, API_KEY_PROFILES } from '../../../_config';

interface Account {
	// определите тип для объекта аккаунта
}

interface Arguments {
	page: number;
	id?: string;
}

const ACCOUNTS_URL = API_KEY + 'accounts';
const CAMPAIGNS_URL = API_KEY + 'campaigns';

export const fetchAccounts = async ({ page }: Arguments): Promise<Account[]> => {
	const params = {
		limit: 10,
		page,
	};

	const response: AxiosResponse<any[]> = await axios.get(ACCOUNTS_URL, { params });
	return response.data;
};

export const fetchCompany = async ({ page, id }: Arguments): Promise<any[]> => {
	const params = {
		profileId: id,
		limit: 10,
		page,
	};

	const response: AxiosResponse<any[]> = await axios.get(CAMPAIGNS_URL, { params });
	return response.data;
};

export const fetchProfile = async ({ page, id }: Arguments): Promise<any[]> => {
	const params = {
		accountId: 'account' + id,
		limit: 10,
		page,
	};

	const response: AxiosResponse<any[]> = await axios.get(API_KEY_PROFILES, { params });
	return response.data;
};

export const fetchData = async (model: string, { page, id }: Arguments): Promise<any> => {
	switch (model) {
		case 'accounts':
			return await fetchAccounts({ page });
		case 'profile':
			return await fetchProfile({ page, id: String(id) });
		case 'campaign':
			return await fetchCompany({ page, id: String(id) });
	}
};
