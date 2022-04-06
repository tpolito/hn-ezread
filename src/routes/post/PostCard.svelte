<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import type { tPostSummary } from 'src/types';

	export let post: tPostSummary;
</script>

<article>
	<h2 class="post-title"><a href={post.url}>{post.title}</a></h2>
	<p>
		{post.points} points by <a href={`/user/${post.user}`}>{post.user}</a>
		{post.time_ago} | <a href={`/post/${post.id}`}>{post.comments_count} comments</a>
	</p>
	<a
		aria-label="Open link in new tab"
		href={post.url}
		class="icon"
		rel="external noreferrer"
		target="_blank"
	>
		<Icon icon="external-link" />
	</a>
</article>

<style>
	article {
		position: relative;
		padding: 1rem;
		border: 1px solid var(--fg);
		margin: 1rem;
	}
	p {
		color: var(--fg-light);
	}
	a {
		color: var(--primary);
	}
	.post-title a {
		text-decoration: none;
		color: var(--fg);
		transition: 200ms all;
	}
	.post-title a:hover {
		text-decoration: underline;
		color: var(--primary);
	}
	.icon {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>
