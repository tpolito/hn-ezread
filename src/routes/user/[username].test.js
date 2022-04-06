/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Username from './[username].svelte';

const mockData = {
	created_time: 1542293109,
	created: '3 years ago',
	id: 'poetril',
	karma: 7
};

describe('Username tests', () => {
	test('Shows proper user info when rendered', () => {
		const { getByText } = render(Username, {
			user: mockData
		});

		expect(getByText('poetril')).toBeInTheDocument();
		expect(getByText('3 years ago')).toBeInTheDocument();
	});
});
