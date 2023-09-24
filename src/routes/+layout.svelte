<script>
	import '../global.css';
	import NavBar from '../lib/components/NavBar.svelte';
	let navH;
</script>

<NavBar bind:clientHeight={navH} />
<div style="top:91px">
	<slot />
</div>

<style>
	div {
		position: relative;
	}
</style>
