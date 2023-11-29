<script>
	import '../../global.css';
	export let title = 'Attack on Titan';
	export let cover =
		'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg';
	export let rating = 84;
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
		max-width: 200px;
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
	}
	p {
		font-family: 'Roboto';
		font-weight: 400;
		font-size: 1.2em;
		margin: 5px;
	}
</style>
