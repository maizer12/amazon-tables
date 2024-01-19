import { IDropdownItem } from '../../../@types/IDropdownItem';
import { ModelType } from '../types/ModelType';

export interface TableSliceStates {
	model: ModelType;
	sort: IDropdownItem;
	search: string;
}
