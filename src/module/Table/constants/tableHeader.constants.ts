import { ILanguage } from '../../../@types/ILanguage';

type Item = {
	name: string;
	key: string;
};

interface HeaderTypes {
	accounts: Item[];
	profile: Item[];
	campaign: Item[];
}

type TableHeaderTypes = {
	[key in ILanguage]: HeaderTypes;
};

export const tableHeaderConstants: TableHeaderTypes = {
	ue: {
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
	},
	ua: {
		accounts: [
			{ name: 'Email:', key: 'email' },
			{ name: 'Токен авторизації:', key: 'authToken' },
			{ name: 'Дата створення:', key: 'creationDate' },
		],
		profile: [
			{ name: 'Країна:', key: 'country' },
			{ name: 'Маркетплейс:', key: 'marketplace' },
		],
		campaign: [
			{ name: 'Кліки:', key: 'clicks' },
			{ name: 'Вартість:', key: 'cost' },
			{ name: 'Дата:', key: 'date' },
		],
	},
};
