export interface DropdownItemType {
	name: string;
	value: string | number;
}
export interface DropdownProps {
	items: DropdownItemType[];
	activeItem: string | number;
	changeDropdown: (a: DropdownItemType) => void;
	title: string;
	notChange: string;
}
