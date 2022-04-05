<script lang="ts">
	import Icon from './Icon.svelte';

	let theme = 'dark';

	try {
		theme = localStorage.getItem('theme') || 'dark';
	} catch (e) {}

	const updateColorMode = () => {
		const { classList } = document.querySelector('html');

		classList.remove(theme);
		theme = theme === 'dark' ? 'light' : 'dark';
		classList.add(theme);
	};

	try {
		localStorage.setItem('theme', theme);
	} catch (e) {}
</script>

<button on:click={updateColorMode}>
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
