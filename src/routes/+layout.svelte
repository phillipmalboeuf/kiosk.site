<script lang="ts">
	import './styles.scss'

	import type { LayoutData } from './$types'
  import { content } from '$lib/stores'

  export let data: LayoutData

	content.set(data.content)
</script>

<svelte:head>
	<title>{data.content.title}</title>
	<meta name="description" content={data.content.description} />
</svelte:head>

<slot />

