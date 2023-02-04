<script lang="ts" context="module">
	import { writable } from 'svelte/store'
	import type { LayoutData } from './$types'

	export const content = writable<LayoutData["content"]>(undefined)
</script>

<script lang="ts">
	import './styles.scss'

	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'

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
