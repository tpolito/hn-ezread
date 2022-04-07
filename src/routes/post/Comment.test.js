/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/svelte';
import Commnet from './Comment.svelte';

const mockComment = {
	id: 30929509,
	user: 'aqsalose',
	time: 1649231021,
	time_ago: '10 hours ago',
	type: 'comment',
	content:
		'<p>I linked to part III in a series. There is also part I <a href="https:&#x2F;&#x2F;wyclif.substack.com&#x2F;p&#x2F;victorian-values-a-practical-guide?s=r" rel="nofollow">https:&#x2F;&#x2F;wyclif.substack.com&#x2F;p&#x2F;victorian-values-a-practical-g...</a> and part II <a href="https:&#x2F;&#x2F;wyclif.substack.com&#x2F;p&#x2F;a-practical-guide-to-victorian-values?s=r" rel="nofollow">https:&#x2F;&#x2F;wyclif.substack.com&#x2F;p&#x2F;a-practical-guide-to-victorian...</a> .<p>For ontext, I was quite disappointed by this other recently posted article about Vicotrian values: <a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=30894353" rel="nofollow">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=30894353</a> . It was short, not very analytical, and more than a bit moralizing in tone, with many unstated assumptions never made clear. (It rejects the claims of prude Victorian life as a fiction invented by the post-WW2 generations who have not truly got past prudery themselves. But there was a distinctively Victorian spirit for betterment of morals. Why again the Victorian moral project and supposed &quot;prudery&quot; was in the wrong, in the first place?)',
	comments: [
		{
			id: 30935085,
			user: 'zasdffaa',
			time: 1649266127,
			time_ago: '11 minutes ago',
			type: 'comment',
			content:
				'<p>&gt; Why again the Victorian moral project and supposed &quot;prudery&quot; was in the wrong, in the first place?<p>Not sure I understand. From wiktionary, for &#x27;prude&#x27;: &quot;A person who is or tries to be excessively proper, especially one who is easily offended by matters of a sexual nature&quot;<p>That doesn&#x27;t sound like a good thing. Is its?',
			comments: [],
			comments_count: 0,
			level: 1,
			url: 'item?id=30935085'
		}
	],
	comments_count: 1,
	level: 0,
	url: 'item?id=30929509'
};

describe('Comment tests', () => {
	test('Comment component renders correctly', () => {
		const { getByText } = render(Commnet, {
			comment: mockComment
		});

		expect(getByText(/I linked to part III in a series/i)).toBeInTheDocument();
		expect(getByText(/10 hours ago/i)).toBeInTheDocument();
		expect(getByText(/aqsalose/i)).toBeInTheDocument();
	});

	test('All buttons should have aria-labels', () => {
		const { getByText, getAllByRole } = render(Commnet, {
			comment: mockComment
		});
		const buttons = getAllByRole('button');

		buttons.forEach((btn) => {
			expect(btn).toHaveAttribute('aria-label');
		});
	});

	test('Should collapse comment when button is clicked', async () => {
		const { getByText, getAllByRole } = render(Commnet, {
			comment: mockComment
		});

		fireEvent.click(getAllByRole('button')[0]);

		await waitFor(() => {
			expect(getByText(/replies/i)).toBeInTheDocument();
		});
	});
});
