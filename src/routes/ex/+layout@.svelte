<script lang="ts">
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
</script>

<Header menu />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
	}
</style>
