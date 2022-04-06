<script context="module" lang="ts">
	const categories = new Set(['news', 'newest', 'ask', 'show', 'jobs']);

	export async function load({ params, fetch }) {
		const category =
			params.category === 'top' ? 'news' : params.category === 'new' ? 'newest' : params.category;

		if (!categories.has(category)) {
			return {
				status: 404,
				error: 'Invaild category'
			};
		}

		const page = parseInt(params.page);
		const res = await fetch(`https://api.hnpwa.com/v0/${category}/${page}.json`);
		const posts = await res.json();

		return {
			props: {
				page,
				category,
				posts
			}
		};
	}
</script>

<script lang="ts">
	import type { tPostSummary } from 'src/types';
	import PostCard from './PostCard.svelte';
	export let posts: tPostSummary[];
	export let page: number;
	export let category: string;

	$: next = `/${category}/${page + 1}`;
	$: prev = `/${category}/${page - 1}`;
</script>

<svelte:head>
	<title>Hacker News</title>
	<meta name="description" content="The {category} Hacker News stories" />
</svelte:head>

{#each posts as post}
	<PostCard {post} />
{/each}

<div class="page-nav">
	{#if page === 1}
		<span class="link disabled">Prev</span>
	{:else}
		<a href={prev} class="link">Prev</a>
	{/if}
	<a class="link" href={next}>Next</a>
</div>

<style>
	.page-nav {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.page-nav .link {
		text-align: center;
		display: inline-block;
		padding: 0.5rem;
		margin: 0.2rem 1rem;
		border: 1px solid var(--fg);
		text-decoration: none;
		color: var(--fg);
		transition: 200ms all;
	}

	.page-nav .disabled {
		color: var(--fg-light);
		border: 1px solid var(--fg-light);
		cursor: not-allowed;
	}
</style>
