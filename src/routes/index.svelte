<script context="module">
	export function load({ url }) {
		return {
			redirect: '/top/1',
			status: url.hostname === 'localhost' ? 302 : 301
		};
	}
</script>
