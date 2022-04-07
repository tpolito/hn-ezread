/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Footer from './Footer.svelte';

describe('Footer tests', () => {
	test('Should show current year', () => {
		const { getByText } = render(Footer);
		expect(getByText(/2022/i)).toBeInTheDocument();
	});
});
