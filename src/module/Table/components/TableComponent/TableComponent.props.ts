import { AccountsTypes } from '../../../../@types/AccountsTypes';

export interface TableComponentProps {
	items: AccountsTypes[];
	model: 'accounts' | 'profile' | 'campaign';
}
