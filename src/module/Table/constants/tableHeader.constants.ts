type Item = {
	name: string;
	key: string;
};

interface HeaderTypes {
	accounts: Item[];
	profile: Item[];
	campaign: Item[];
}

export const tableHeaderConstants: HeaderTypes = {
	accounts: [
		{ name: 'Email:', key: 'email' },
		{ name: 'Auth Token:', key: 'authToken' },
		{ name: 'Creation Date:', key: 'creationDate' },
	],
	profile: [
		{ name: 'Country:', key: 'country' },
		{ name: 'Marketplace:', key: 'marketplace' },
	],
	campaign: [
		{ name: 'Clicks:', key: 'clicks' },
		{ name: 'Cost:', key: 'cost' },
		{ name: 'Date:', key: 'date' },
	],
};
