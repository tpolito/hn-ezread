<script lang="ts">
	import Icon from '../../lib/Icon.svelte';
	import type { tComment } from 'src/types';
	export let comment: tComment;

	let hidden = false;
</script>

{#if !comment.deleted}
	<article class="comment" class:hidden>
		<p>
			<a href={`/user/${comment.user}`}>{comment.user}</a> - {comment.time_ago}
			<button aria-label="Collapse or expand comment" on:click={() => (hidden = !hidden)}>
				<Icon icon={hidden ? 'expand' : 'collapse'} />
			</button>

			{#if hidden}
				<span>{comment.comments.length} replies</span>
			{/if}
		</p>

		<div class="content">{@html comment.content}</div>

		{#if comment.comments.length > 0}
			<ul class="children">
				{#each comment.comments as child}
					<li>
						<svelte:self comment={child} />
					</li>
				{/each}
			</ul>
		{/if}
	</article>
{/if}

<style>
	p {
		display: flex;
		flex-direction: row;
		justify-content: space;
		align-items: center;
	}
	a {
		color: var(--primary);
	}
	li {
		list-style: none;
	}
	button {
		border: none;
		background: none;
		color: var(--primary);
		cursor: pointer;
	}
	span {
		font-size: 0.8rem;
		color: var(--primary);
	}
	.comment {
		border-top: 1px solid var(--fg);
	}
	.comment .children {
		padding: 0 0 0 1.8rem;
	}
	.hidden .content,
	.hidden .children {
		display: none;
	}
</style>
