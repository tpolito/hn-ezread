<script lang="ts">
	import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte';
	import FaAngleDoubleDown from 'svelte-icons/fa/FaAngleDoubleDown.svelte';
	import FaAngleDoubleUp from 'svelte-icons/fa/FaAngleDoubleUp.svelte';
	import FaUndoAlt from 'svelte-icons/fa/FaUndoAlt.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';
	import FaSun from 'svelte-icons/fa/FaSun.svelte';
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';

	export let icon: string;
	export let size: string = 'med';

	const iconMap = {
		'external-link': FaExternalLinkAlt,
		collapse: FaAngleDoubleUp,
		expand: FaAngleDoubleDown,
		reload: FaUndoAlt,
		github: FaGithub,
		back: FaArrowLeft,
		sun: FaSun,
		moon: FaMoon
	};
</script>

<div class={size}>
	<svelte:component this={iconMap[icon]} />
</div>

<style>
	.med {
		height: 1rem;
		width: 1rem;
	}

	.lg {
		height: 1.5rem;
		width: 1.5rem;
	}

	.xl {
		height: 2rem;
		width: 2rem;
	}
</style>
