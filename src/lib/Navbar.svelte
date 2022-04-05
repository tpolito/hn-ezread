<script lang="ts">
</script>

<nav>
	<ul>
		<li><a href="/top/1">top</a></li>
		<li><a href="/newest/1">new</a></li>
		<li><a href="/show/1">show</a></li>
		<li><a href="/ask/1">ask</a></li>
		<li><a href="/jobs/1">jobs</a></li>
	</ul>
</nav>

<style>
	nav {
		border-bottom: 1px solid var(--fg);
	}

	ul {
		display: flex;
		flex-direction: row;
		padding-left: 4rem;
	}

	li {
		list-style: none;
		margin: 0 0.6rem;
	}

	a {
		text-decoration: none;
		transition: 200ms;
		color: var(--fg);
	}

	a:hover {
		color: var(--primary);
		text-decoration: underline;
	}
</style>
