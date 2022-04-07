/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Post from './[id].svelte';

const mockPost = {
	id: 111,
	title: 'Mock post',
	points: 200,
	user: 'test user',
	time: 100000000,
	type: 'link',
	content: '',
	comments: [],
	comments_count: 10,
	url: 'https://tpolito.com',
	domain: 'tpolito.com'
};

describe('Post tests', () => {
	test('Should render correctly', () => {
		const { getByText } = render(Post, {
			item: mockPost
		});

		expect(getByText('Mock post')).toBeInTheDocument();
		expect(getByText('View on ycombinator')).toBeInTheDocument();
		expect(getByText(/tpolito.com/i)).toBeInTheDocument();
	});
});
