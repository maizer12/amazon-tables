export interface TableComponentProps {
	columns: { name: string; key: string }[];
	status: 'loading' | 'error' | 'empty' | '';
	data: any[];
	view: 'profile' | 'campaign' | false;
	page: number;
}
