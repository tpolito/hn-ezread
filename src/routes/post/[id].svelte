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
	<a href={item.url}>{item.domain}</a> |
	<a href={`https://news.ycombinator.com/item?id=${item.id}`}>View on ycombinator</a>
</p>
<hr />
{#each comments as comment}
	<Comment {comment} />
{/each}

<style>
	h1 {
		margin-top: 0.5rem;
	}
	.links {
		margin-top: 0.5rem;
	}
</style>
