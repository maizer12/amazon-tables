interface Item {
	name: string;
	value: string | number;
}

interface SortConstants {
	accounts: Item[] | null;
	profile: Item[] | null;
	campaign: Item[] | null;
}

export const sortConstants: SortConstants = {
	accounts: [
		{
			name: 'Email',
			value: 'email',
		},
		{
			name: 'Creation Date',
			value: 'creationDate',
		},
	],
	profile: null,
	campaign: [
		{ name: 'Clicks', value: 'clicks' },
		{ name: 'Cost', value: 'cost' },
		{ name: 'Date', value: 'date' },
	],
};
