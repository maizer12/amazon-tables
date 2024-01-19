import { ILanguage } from '../../../@types/ILanguage';

interface Item {
	name: string;
	value: string | number;
}

interface SortConstants {
	accounts: Item[] | null;
	profile: Item[] | null;
	campaign: Item[] | null;
}
type SortConstantsTypes = {
	[key in ILanguage]: SortConstants;
};

export const sortConstants: SortConstantsTypes = {
	ue: {
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
	},
	ua: {
		accounts: [
			{
				name: 'Електронна пошта',
				value: 'email',
			},
			{
				name: 'Дата створення',
				value: 'creationDate',
			},
		],
		profile: null,
		campaign: [
			{ name: 'Кліки', value: 'clicks' },
			{ name: 'Вартість', value: 'cost' },
			{ name: 'Дата', value: 'date' },
		],
	},
};
