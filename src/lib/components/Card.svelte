<script>
	import '../../global.css';
	export let title;
	export let cover;
	export let rating;
</script>

<div class="card">
	<img src={cover} alt={`${title} cover`} />
	<div class="info">
		<p>{title}</p>
		<p class="rating">{Math.round((rating / 20) * 10) / 10}</p>
	</div>
</div>

<style>
	.card {
		height: auto;
		width: 200px;
		overflow-y: visible;
	}
	.rating {
		color: var(--primary);
		font-weight: bold;
		font-size: 1em;
	}
	img {
		width: 100%;
		height: auto;
		border-radius: 12px;
		transition: transform 200ms;
	}
	p {
		font-family: 'Roboto';
		font-weight: 400;
		font-size: 1.2em;
		margin: 5px;
	}
	.card:hover img {
		transform: translateY(-10px);
	}
</style>
