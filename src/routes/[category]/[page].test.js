/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { getByLabelText, render } from '@testing-library/svelte';
import Page from './[page].svelte';
const mockNews = [
	{
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
	},
	{
		id: 30932011,
		title: "UN's starkest message yet: extreme steps needed to avert climate disaster",
		points: 79,
		user: 'stichers',
		time: 1649253551,
		time_ago: 'an hour ago',
		comments_count: 50,
		type: 'link',
		url: 'https://www.nature.com/articles/d41586-022-00951-5',
		domain: 'nature.com'
	},
	{
		id: 30931803,
		title: 'German parliament passes law to ramp up renewable energies, goal is 80% in 2035',
		points: 102,
		user: 'martin_a',
		time: 1649252282,
		time_ago: 'an hour ago',
		comments_count: 69,
		type: 'link',
		url: 'https://www.zeit.de/zustimmung?url=https%3A%2F%2Fwww.zeit.de%2Fpolitik%2Fdeutschland%2F2022-04%2Ffdp-oekostrom-paket-gesetz-kabinet',
		domain: 'zeit.de'
	}
];

describe('Category page tests', () => {
	test('Renders page details correctly', () => {
		const { getByText } = render(Page, {
			posts: mockNews,
			page: 2
		});

		expect(getByText('Next')).toBeInTheDocument();
		expect(getByText('Prev').classList.contains('disabled')).toBe(false);
	});

	test('Disables prev link if on page 1', () => {
		const { getByText } = render(Page, {
			posts: mockNews,
			page: 1
		});

		expect(getByText('Next')).toBeInTheDocument();
		expect(getByText('Prev').classList.contains('disabled')).toBe(true);
	});
});
