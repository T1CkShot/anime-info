<script>
	import '../../global.css';
	export let type = 'button';
	export let aherf = '#';
	export let value = 'Button';
	export let secondary = false;
	// sizes: "small", "medium", "big"
	export let size = 'medium';
</script>

<div>
	<a href={aherf}><input class={size} class:secondary {type} {value} /></a>
</div>

<style>
	div {
		display: flex;
	}

	input {
		background: var(--primary);
		color: var(--text);
		border: none;
		border-radius: 8px;
	}
	.secondary {
		background: var(--text);
		color: var(--background);
	}
	.small {
		padding: 8px 18px;
	}
	.medium {
		padding: 10px 22px;
	}
	.big {
		padding: 12px 27px;
		font-size: 0.7em;
		font-weight: 700;
	}
</style>
