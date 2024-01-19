import { ILanguage } from '../../../@types/ILanguage';

interface TableTitle {
	accounts: string;
	profile: string;
	campaign: string;
}

type TableTitleConstant = {
	[key in ILanguage]: TableTitle;
};

export const tableTitleConstant: TableTitleConstant = {
	ue: {
		accounts: 'Accounts:',
		profile: 'Profiles:',
		campaign: 'Companies:',
	},
	ua: {
		accounts: 'Облікові записи:',
		profile: 'Профілі:',
		campaign: 'Компанії:',
	},
};
