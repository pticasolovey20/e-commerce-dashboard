export interface ISliceState {
	news: INewsData[];
	loading: boolean;
	error: string;
}

export interface INewsData {
	body: string;
	categories: string;
	downvotes: string;
	guid: string;
	id: string;
	imageurl: string;
	lang: string;
	published_on: number;
	source: string;
	source_info: {
		name: string;
		img: string;
		lang: string;
	};
	tags: string;
	title: string;
	upvotes: string;
	url: string;
}
