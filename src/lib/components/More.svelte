<script>
	import '../../global.css';
	export let href;
	export let text = 'More...';
</script>

<a {href}>
	<div>{text}</div>
</a>

<style>
	a {
		width: 200px;
		height: 278px;
	}
	div {
		width: 100%;
		height: 100%;
		background-color: var(--text);
		color: var(--background);
		border-radius: 12px;
		justify-content: center;
		align-items: center;
		display: flex;
	}
</style>
