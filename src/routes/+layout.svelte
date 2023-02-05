<script lang="ts">
	import './styles.scss'

	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
	import type { LayoutData } from './$types'
  import { content } from '$lib/stores'

  export let data: LayoutData

	content.set(data.content)
</script>

<svelte:head>
	<title>{data.content.title}</title>
	<meta name="description" content={data.content.description} />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
	}
</style>
