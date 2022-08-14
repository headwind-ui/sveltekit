<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply flex flex-col justify-center items-center w-screen h-screen;
	}
</style>
