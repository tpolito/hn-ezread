<script lang="ts">
	import Navbar from '../lib/Navbar.svelte';
	import ColorModeToggle from '../lib/ColorModeToggle.svelte';
	import Footer from '../lib/Footer.svelte';
	import '../app.css';
</script>

<Navbar />
<ColorModeToggle />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		max-width: 56rem;
		position: relative;
		margin: 0 auto;
	}
</style>
