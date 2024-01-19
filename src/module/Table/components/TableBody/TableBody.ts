export interface TableComponentProps {
	columns: { name: string; key: string }[];
	status: 'loading' | 'error';
	data: any[];
	view: 'profile' | 'campaign' | false;
	page: number;
}
