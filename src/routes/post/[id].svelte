<script context="module">
	export async function load({ params, fetch }) {
		const res = await fetch(`https://api.hnpwa.com/v0/item/${params.id}.json`);
		const item = await res.json();
		return { props: { item } };
	}
</script>

<script lang="ts">
	import type { tPost } from 'src/types';
	import Comment from './Comment.svelte';
	export let item: tPost;

	let { comments } = item;
</script>

<svelte:head>
	<title>{item.title}</title>
</svelte:head>

<h1>{item.title}</h1>
<p class="links">
	{#if item.domain}
		<a href={item.url}>{item.domain}</a> |
	{/if}
	<a href={`https://news.ycombinator.com/item?id=${item.id}`}>View on ycombinator</a> | {item.comments_count}
	comments
</p>

{#if item.content !== ''}
	<hr />
	{@html item.content}
{/if}

<hr class="post-seperator" />
<div class="comment-container">
	{#each comments as comment}
		<Comment {comment} />
	{/each}
</div>

<style>
	h1 {
		margin-top: 0.5rem;
	}
	hr {
		border-top: 1px solid var(--fg);
		border-bottom: none;
	}
	.links {
		margin-top: 0.5rem;
	}
	.comment-container > :global(.comment):first-child {
		border-top: none;
	}
	.post-seperator {
		border-top: 2px solid var(--primary);
		border-bottom: none;
	}
</style>
