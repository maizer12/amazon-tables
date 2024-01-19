import { IDropdownItem } from '../../../@types/IDropdownItem';
import { IAccount } from '../types/IAccount';
import { IProfile } from '../types/IProfile';
import { ModelType } from '../types/ModelType';

export type ItemsType = ICampaigns[] | IAccount[] | IProfile[] | [];

export interface TableSliceStates {
	items: ItemsType;
	status: '' | 'loading' | 'error';
	page: number;
	model: ModelType;
	sort: IDropdownItem;
	search: string;
}
