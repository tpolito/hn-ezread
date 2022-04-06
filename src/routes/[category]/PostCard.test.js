/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { getByLabelText, render } from '@testing-library/svelte';
import PostCard from './PostCard.svelte';
const mockPost = {
	id: 30932095,
	title: 'Dall-E 2',
	points: 122,
	user: 'yigitdemirag',
	time: 1649254144,
	time_ago: 'an hour ago',
	comments_count: 23,
	type: 'link',
	url: 'https://openai.com/dall-e-2/',
	domain: 'openai.com'
};

describe('Category page tests', () => {
	test('Shows proper post info when rendered', () => {
		const { getByText } = render(PostCard, {
			post: mockPost
		});

		expect(getByText('Dall-E 2')).toBeInTheDocument();
		expect(getByText(/122 points/i)).toBeInTheDocument();
		expect(getByText('yigitdemirag')).toBeInTheDocument();
		expect(getByText('23 comments')).toBeInTheDocument();
	});

	test('Link has proper aria-label', () => {
		const { getByLabelText } = render(PostCard, {
			post: mockPost
		});

		expect(getByLabelText('Open link in new tab')).toHaveAttribute(
			'aria-label',
			'Open link in new tab'
		);
	});
});
