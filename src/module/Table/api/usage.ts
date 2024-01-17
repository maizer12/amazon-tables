// usage
import { Accounts } from './types';
import { fetchTableItems } from './fetchTableItems';

const { items } = await fetchTableItems<Accounts>({
	path: 'accounts',
	page: 1,
});
