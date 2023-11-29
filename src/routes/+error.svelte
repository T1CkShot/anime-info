<script>
	import '../global.css';
	import { page } from '$app/stores';
</script>

<div class="main">
	<h1>{$page.status}</h1>
	<p>{$page.error.message}</p>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
	h1 {
		color: var(--primary);
		font-size: 4em;
		font-weight: 700;
		margin: 10px;
		padding: 0px;
	}
	p {
		font-size: 1.7em;
		font-weight: 400;
		margin: 0px;
		padding: 0px;
	}
</style>
