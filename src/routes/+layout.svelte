<script>
	import '../global.css';
	import NavBar from '../lib/components/NavBar.svelte';
</script>

<NavBar />
<div>
	<slot />
</div>

<style>
	div {
		position: relative;
	}
</style>
