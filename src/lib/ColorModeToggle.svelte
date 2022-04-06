<script lang="ts">
	import { onMount } from 'svelte';

	import Icon from './Icon.svelte';

	let theme = 'dark';

	onMount(() => {
		theme = localStorage.theme || 'dark';
		if (theme) {
			const { classList } = document.querySelector('html');
			classList.add(theme);
		}
	});

	const updateColorMode = () => {
		const { classList } = document.querySelector('html');

		classList.remove(theme);
		theme = theme === 'dark' ? 'light' : 'dark';
		classList.add(theme);
		try {
			localStorage.setItem('theme', theme);
		} catch (e) {}
	};
</script>

<button aria-label="Toggle color mode" on:click={updateColorMode}>
	<Icon icon={theme === 'dark' ? 'sun' : 'moon'} size="lg" />
</button>

<style>
	button {
		position: absolute;
		border: none;
		background: none;
		color: var(--primary);
		cursor: pointer;
		top: 1rem;
		left: 1rem;
	}
</style>
