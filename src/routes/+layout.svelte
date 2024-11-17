<script>
	import { base } from '$app/paths';
	const imagePath = `${base}/images/ohneuri_background.webp`;
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="app">
	<!-- set background image -->
	<div class="background" style="background-image: url({imagePath})"></div>
	<main class="main my-8">
		{@render children()}
	</main>
</div>

<style>
	.app {
		display: flex;
		justify-content: center;
		align-items: start;
		height: 100vh;
		padding: 2rem;
	}

	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-size: cover;
		background-position: center;
	}

	.main {
		background: #ffffff55;
		width: 90%;
		max-width: 40rem;
		border: 0.1rem solid #00000022;
		border-radius: 2rem;
	}

	@media(max-width: 768px) {
		.app {
			padding: 0;
		}
		.main {
			width: 100%;
			border-radius: 0;
		}
	}
</style>
