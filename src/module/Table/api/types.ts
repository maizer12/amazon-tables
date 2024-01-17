// types.js
export interface Meta {
	current_page: number;
	per_page: number;
	remaining_count: number;
	total_items: number;
	total_pages: number;
}

export interface FetchResponse<T> {
	meta: Meta;
	items: T[];
}

export interface Accounts {
	id: string;
	email: string;
	authToken: string;
	creationDate: string;
}
