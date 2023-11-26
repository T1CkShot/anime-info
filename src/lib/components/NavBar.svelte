<script>
	import '../../global.css';
	import Button from './Button.svelte';

	let scrollLength = 0;
</script>

<svelte:window bind:scrollY={scrollLength} />

<nav class:nav-scroll={scrollLength > 60}>
	<div class="main">
		<div class="logo">
			<img alt="Logo" src="https://placehold.co/500x500/black/red?text=A" />
			<h3 class="title">Awkward Anime Website</h3>
		</div>
		<div class="search">
			<input type="text" name="searchbar" placeholder="Search..." />
			<Button value="Search" />
		</div>
	</div>
</nav>

<style>
	.main {
		display: flex;
		justify-content: space-between;
	}
	.search {
		width: 100%;
		max-width: 25em;
		margin: 15px 8px;
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.logo {
		display: flex;
		gap: 30px;
	}
	img {
		width: auto;
		height: 50px;
	}
	input {
		border-radius: 8px;
		background: var(--text);
		color: var(--background); /* colors are flipped for the search bar */
		border: none;
		padding: 9px;
		width: 100%;
		min-width: 4em;
		color: var(--text);
	}
	@media (max-width: 355px) {
		.main {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	nav {
		display: sticky;
		position: fixed;
		width: 100%;
		top: 0px;
		z-index: 3;
		padding: 14px;
		box-sizing: border-box;
		background-color: hsla(var(--background), 0);
		transition: background-color 300ms;
	}
	.nav-scroll {
		background-color: var(--background);
	}
</style>
