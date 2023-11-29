<script>
	import '../global.css';
	import Button from '../lib/components/Button.svelte';
	import Card from '../lib/components/Card.svelte';
	import More from '../lib/components/More.svelte';

	export let data;
	const { animeData } = data;
</script>

<div class="main">
	<div class="hero-section">
		<div class="container">
			<div style="max-width: 650px;">
				<h1 style="font-size: 2em;">
					Yet another redundant <br /> Source of otaku wisdom.
				</h1>
				<p style="line-height: 1.5em; font-size: 0.9em;">
					Check out my humble attempt at an anime search website, made using SvelteKit. Let's be
					honest the world doesn't need yet another anime search site. But hey, curiosity got the
					best of me, and I decided to give it a go. No frills, just a basic exploration of
					<a href="https://kit.svelte.dev/">SvelteKit</a>. Sometimes, simplicity is the best
					teacher!
				</p>
				<Button aherf="https://github.com/T1CkShot/anime-info" value="GitHub" size="big" />
			</div>
		</div>
	</div>
	<div class="container">
		<h1 style="margin: 70px 0px 30px 0px">Popular</h1>
		<div class="horizontal">
			<div class="car">
				{#each animeData.media as anime (anime.id)}
					<Card
						title={anime.title.english}
						rating={anime.averageScore}
						cover={anime.coverImage.large}
					/>
				{/each}
				<More href="/popular" />
			</div>
		</div>
	</div>
</div>

<style>
	.main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.hero-section {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100%;
		font-size: 1.4em;
		text-shadow: var(--background) 4px 4px 40px;
		background-image: linear-gradient(125deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
			url('https://images2.alphacoders.com/743/743487.jpg');
		background-position: center;
	}
	.hero-section a {
		border-bottom: 3px solid var(--primary);
		text-decoration: none;
		color: var(--text);
		font-weight: 700;
		transition: color 300ms;
	}
	.hero-section a:hover {
		color: var(--primary);
	}
	.car {
		width: fit-content;
		display: flex;
		gap: 30px;
	}
	.horizontal {
		width: 100%;
		overflow-x: scroll;
	}
</style>
