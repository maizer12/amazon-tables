interface ILanguages {
	name: string;
	value: 'ue' | 'ua';
}

export const languagesConstants: ILanguages[] = [
	{ name: 'UE', value: 'ue' },
	{ name: 'UA', value: 'ua' },
];

type GetText = (active: boolean) => string;

type ISwitchTitle = {
	[key in 'ue' | 'ua']: GetText;
};

export const switchTitle: ISwitchTitle = {
	ue: (active: boolean) => {
		return `Switch to ${active ? 'dark' : 'light'} theme:`;
	},
	ua: (active: boolean) => {
		return `Перейти на ${active ? 'темную' : 'светлую'} тему:`;
	},
};
