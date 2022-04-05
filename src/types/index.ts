export type tPostSummary = {
	id: number;
	title: string;
	points: number;
	user: string;
	time: number;
	time_ago: string;
	comments_count: number;
	content: string | null;
	type: string;
	url: string;
	domain: string;
};

export type tPost = {
	id: number;
	title: string;
	points: number;
	user: string;
	time: number;
	type: string;
	content: string;
	comments: tComment[];
	comments_count: number;
	url: string;
	domain: string;
};

export type tComment = {
	id: number;
	user: string;
	time: number;
	time_ago: string;
	type: string;
	content: string;
	deleted?: boolean;
	comments?: tComment[];
};

export type tUser = {
	created_time: number;
	created: string;
	id: string;
	karma: number;
	about?: string;
};
