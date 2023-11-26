<script>
	import '../../global.css';
	import Button from './Button.svelte';
</script>

<nav>
	<div class="main">
		<img src="../../../static/favicon.svg" alt="Logo" />
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
	@media (max-width: 680px) {
		.search {
			width: 40%;
			justify-content: flex-end;
		}
	}
	.search {
		margin: 15px 8px;
		display: flex;
		align-items: center;
		gap: 12px;
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
		min-width: 18em;
		color: var(--text);
	}

	nav {
		position: fixed;
		width: 100%;
		top: 0px;
		z-index: 3;
		padding: 14px;
		box-sizing: border-box;
		background-color: var(--background);
	}
</style>
