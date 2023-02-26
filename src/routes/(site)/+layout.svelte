<script lang="ts">
	// import './styles.scss'

	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
	import type { LayoutData } from './$types'
  import { content } from '$lib/stores'
</script>

<Header />

<main>
	<slot />
</main>

<Footer />