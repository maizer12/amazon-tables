export interface TableComponentProps {
	columns: { name: string; key: string }[];
	data: any[];
	view: 'profile' | 'campaign' | false;
}
