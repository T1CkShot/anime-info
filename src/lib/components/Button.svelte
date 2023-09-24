<script>
	import '../../global.css';
	export let type = 'button';
	export let aherf = '#';
	export let value = 'Button';
</script>

<div>
	<a href={aherf}><input {type} {value} /></a>
</div>

<style>
	div {
		display: flex;
	}

	input {
		background: var(--primary);
		border: none;
		border-radius: 8px;
		padding: 8px 18px;
	}
</style>
