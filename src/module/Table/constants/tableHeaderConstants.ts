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
		{ name: 'ID:', key: 'id' },
		{ name: 'Email:', key: 'email' },
		{ name: 'Auth Token:', key: 'authToken' },
		{ name: 'Creation Date:', key: 'creationDate' },
	],
	profile: [
		{ name: 'ID:', key: 'id' },
		{ name: 'Email:', key: 'email' },
		{ name: 'Auth Token:', key: 'authToken' },
		{ name: 'Creation Date:', key: 'creationDate' },
	],
	campaign: [
		{ name: 'ID:', key: 'id' },
		{ name: 'Email:', key: 'email' },
		{ name: 'Auth Token:', key: 'authToken' },
		{ name: 'Creation Date:', key: 'creationDate' },
	],
};
